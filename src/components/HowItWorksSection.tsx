import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, CheckCircle, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload de l'Imagerie",
      description: "Importez vos images médicales (IRM, Scanner) de manière sécurisée dans notre plateforme.",
      step: "01"
    },
    {
      icon: Brain,
      title: "Analyse IA Avancée",
      description: "Notre algorithme d'intelligence artificielle analyse l'imagerie en quelques secondes avec une précision de 95%.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Détection & Évaluation",
      description: "Le système identifie les anomalies potentielles et évalue le niveau de risque avec des marqueurs visuels.",
      step: "03"
    },
    {
      icon: FileText,
      title: "Rapport Détaillé",
      description: "Recevez un rapport complet avec les zones d'intérêt identifiées pour supporter votre diagnostic médical.",
      step: "04"
    }
  ];

  return (
    <section id="fonctionnement" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Comment Fonctionne{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DiagMind.AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et sécurisé en 4 étapes pour une analyse d'imagerie cérébrale de haute précision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative bg-background border-border hover:shadow-medical transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-light to-accent-light rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Arrows (Desktop Only) */}
        <div className="hidden lg:flex justify-between items-center mt-8 px-12">
          {[1, 2, 3].map((arrow) => (
            <div key={arrow} className="flex-1 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;