import { createContext, useContext, useState, ReactNode } from "react";

interface CookieConsentContextType {
  isVisible: boolean;
  openCookieSettings: () => void;
  closeCookieSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openCookieSettings = () => setIsVisible(true);
  const closeCookieSettings = () => setIsVisible(false);

  return (
    <CookieConsentContext.Provider value={{ isVisible, openCookieSettings, closeCookieSettings }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
