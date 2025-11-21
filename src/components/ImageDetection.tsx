import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Brain, AlertCircle, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DetectionResult {
  confidence: number;
  type: string;
  location: string;
  severity: "low" | "medium" | "high";
  recommendations: string[];
}

interface ImageDetectionProps {
  onClose: () => void;
}

export const ImageDetection = ({ onClose }: ImageDetectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner une image valide",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulation d'analyse (remplacer par une vraie API)
    await new Promise(resolve => setTimeout(resolve, 2500));

    const mockResult: DetectionResult = {
      confidence: Math.random() * 30 + 70,
      type: "Glioblastome potentiel",
      location: "Lobe frontal droit",
      severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high",
      recommendations: [
        "Confirmer par IRM avec injection de produit de contraste",
        "Consulter un neurochirurgien dans les 48h",
        "Biopsie recommandée pour analyse histologique",
        "Suivi rapproché avec imagerie mensuelle"
      ]
    };

    setResult(mockResult);
    setIsAnalyzing(false);

    toast({
      title: "Analyse terminée",
      description: "Les résultats sont affichés ci-dessous",
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-amber-500";
      case "low": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case "high": return "bg-destructive/10";
      case "medium": return "bg-amber-500/10";
      case "low": return "bg-accent/10";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="fixed inset-4 z-50 overflow-auto border-primary/20 shadow-medical">
      <CardHeader className="border-b bg-gradient-card">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Détection IA - Analyse d'Imagerie
            </CardTitle>
            <CardDescription>
              Uploadez une IRM ou Scanner pour une analyse assistée par IA
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Zone d'upload */}
        <div className="space-y-4">
          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 border-primary/30 hover:border-primary/50 transition-colors"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Image médicale"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-12 h-12 mb-4 text-primary" />
                <p className="mb-2 text-sm text-foreground">
                  <span className="font-semibold">Cliquez pour uploader</span> ou glissez-déposez
                </p>
                <p className="text-xs text-muted-foreground">
                  IRM, Scanner cérébral (PNG, JPG, DICOM)
                </p>
              </div>
            )}
            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>

          {selectedImage && (
            <div className="flex gap-3">
              <Button
                onClick={analyzeImage}
                disabled={isAnalyzing}
                className="flex-1"
                variant="medical"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Analyser l'image
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedImage(null);
                  setResult(null);
                }}
              >
                Réinitialiser
              </Button>
            </div>
          )}
        </div>

        {/* Résultats */}
        {result && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Résultats de l'analyse
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Confiance */}
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Niveau de confiance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">
                      {result.confidence.toFixed(1)}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Sévérité */}
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Niveau de sévérité</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getSeverityBg(result.severity)}`}>
                      <AlertCircle className={`h-4 w-4 ${getSeverityColor(result.severity)}`} />
                      <span className={`font-semibold capitalize ${getSeverityColor(result.severity)}`}>
                        {result.severity === "high" ? "Élevée" : result.severity === "medium" ? "Moyenne" : "Faible"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Détails */}
              <div className="mt-4 space-y-3">
                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Type détecté</p>
                  <p className="font-semibold text-foreground">{result.type}</p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                  <p className="font-semibold text-foreground">{result.location}</p>
                </div>

                {/* Recommandations */}
                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    Recommandations cliniques
                  </p>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-accent">Important :</strong> Ces résultats sont générés par une IA et servent uniquement 
                  d'aide à la décision. Un diagnostic définitif doit toujours être établi par un professionnel de santé qualifié 
                  après examen clinique complet et analyses complémentaires.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
