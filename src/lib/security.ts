import { z } from "zod";

// ============================================
// INPUT VALIDATION SCHEMAS
// ============================================

// Email validation with strict pattern
export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "L'email est requis" })
  .email({ message: "Adresse email invalide" })
  .max(255, { message: "L'email ne doit pas dépasser 255 caractères" })
  .refine((email) => !email.includes(".."), { message: "Format d'email invalide" });

// Name validation - letters, spaces, hyphens, apostrophes only
export const nameSchema = z
  .string()
  .trim()
  .min(1, { message: "Ce champ est requis" })
  .max(100, { message: "Ce champ ne doit pas dépasser 100 caractères" })
  .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, {
    message: "Ce champ ne doit contenir que des lettres, espaces, tirets ou apostrophes",
  });

// Phone validation for French numbers
export const phoneSchema = z
  .string()
  .trim()
  .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
    message: "Numéro de téléphone invalide",
  })
  .optional()
  .or(z.literal(""));

// Message/text validation with length limits
export const messageSchema = z
  .string()
  .trim()
  .min(10, { message: "Le message doit contenir au moins 10 caractères" })
  .max(2000, { message: "Le message ne doit pas dépasser 2000 caractères" });

// Password validation with security requirements
export const passwordSchema = z
  .string()
  .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
  .max(128, { message: "Le mot de passe ne doit pas dépasser 128 caractères" })
  .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une majuscule" })
  .regex(/[a-z]/, { message: "Le mot de passe doit contenir au moins une minuscule" })
  .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre" })
  .regex(/[^a-zA-Z0-9]/, {
    message: "Le mot de passe doit contenir au moins un caractère spécial",
  });

// Contact form schema
export const contactFormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  establishment: z.string().trim().max(200, { message: "Ce champ ne doit pas dépasser 200 caractères" }).optional(),
  role: z.string().trim().max(100, { message: "Ce champ ne doit pas dépasser 100 caractères" }).optional(),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================
// SANITIZATION FUNCTIONS
// ============================================

/**
 * Sanitize HTML content to prevent XSS attacks
 * Removes all HTML tags and encodes special characters
 */
export function sanitizeHtml(input: string): string {
  if (!input) return "";
  
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Sanitize input for URL parameters
 * Encodes special characters for safe URL usage
 */
export function sanitizeUrlParam(input: string): string {
  if (!input) return "";
  return encodeURIComponent(input.trim());
}

/**
 * Remove potential SQL injection characters
 * Note: This is a defense-in-depth measure; always use parameterized queries
 */
export function sanitizeForDatabase(input: string): string {
  if (!input) return "";
  
  return input
    .replace(/['";\\]/g, "")
    .replace(/--/g, "")
    .replace(/\/\*/g, "")
    .replace(/\*\//g, "")
    .trim();
}

/**
 * Validate and sanitize file name
 */
export function sanitizeFileName(fileName: string): string {
  if (!fileName) return "";
  
  return fileName
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/\.{2,}/g, ".")
    .substring(0, 255);
}

// ============================================
// RATE LIMITING UTILITIES
// ============================================

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Client-side rate limiting
 * Note: Server-side rate limiting is also required for security
 */
export function checkRateLimit(
  key: string,
  maxRequests: number = 5,
  windowMs: number = 60000
): { allowed: boolean; remainingRequests: number; resetIn: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  
  // Clean up expired entries
  if (entry && now > entry.resetAt) {
    rateLimitStore.delete(key);
  }
  
  const currentEntry = rateLimitStore.get(key);
  
  if (!currentEntry) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remainingRequests: maxRequests - 1, resetIn: windowMs };
  }
  
  if (currentEntry.count >= maxRequests) {
    return {
      allowed: false,
      remainingRequests: 0,
      resetIn: currentEntry.resetAt - now,
    };
  }
  
  currentEntry.count++;
  return {
    allowed: true,
    remainingRequests: maxRequests - currentEntry.count,
    resetIn: currentEntry.resetAt - now,
  };
}

// ============================================
// SECURITY HEADERS CHECK
// ============================================

export const recommendedSecurityHeaders = {
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

// ============================================
// CSRF TOKEN UTILITIES
// ============================================

/**
 * Generate a CSRF token for forms
 * Note: Should be validated server-side
 */
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/**
 * Store CSRF token in sessionStorage
 */
export function storeCsrfToken(token: string): void {
  try {
    sessionStorage.setItem("csrf_token", token);
  } catch {
    console.warn("Unable to store CSRF token");
  }
}

/**
 * Get CSRF token from sessionStorage
 */
export function getCsrfToken(): string | null {
  try {
    return sessionStorage.getItem("csrf_token");
  } catch {
    return null;
  }
}

// ============================================
// INPUT VALIDATION HELPERS
// ============================================

/**
 * Check if input contains potential XSS patterns
 */
export function containsXSSPatterns(input: string): boolean {
  if (!input) return false;
  
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /<form/gi,
  ];
  
  return xssPatterns.some((pattern) => pattern.test(input));
}

/**
 * Validate URL is safe (not javascript:, data:, etc.)
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    // Relative URLs are considered safe
    return !url.toLowerCase().startsWith("javascript:") && 
           !url.toLowerCase().startsWith("data:") &&
           !url.toLowerCase().startsWith("vbscript:");
  }
}
