import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, TrendingUp, Users, Award } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Vitesse d'Analyse",
      description: "Analyse complète en moins de 30 secondes contre plusieurs heures traditionnellement",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Précision Exceptionnelle",
      description: "95% de précision grâce à nos algorithmes entrainés sur plus de 100,000 images médicales",
      color: "text-primary" 
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Conforme RGPD et certifications médicales. Données chiffrées et sécurisées",
      color: "text-trust"
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Service accessible en permanence pour vos urgences et analyses critiques",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Support Médical",
      description: "Aide à la décision pour les radiologues et amélioration du workflow médical",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Validé Cliniquement",
      description: "Testé et validé dans plusieurs centres hospitaliers avec des résultats probants",
      color: "text-trust"
    }
  ];

  return (  
    <section id="avantages" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pourquoi Choisir{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DiagMind.AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution IA qui transforme la pratique radiologique avec des avantages concrets pour les professionnels de santé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="group bg-card-gradient border-border hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-6 w-6 ${advantage.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80 text-sm">Précision diagnostique</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">30s</div>
              <div className="text-primary-foreground/80 text-sm">Temps d'analyse</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">100k+</div>
              <div className="text-primary-foreground/80 text-sm">Images analysées</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80 text-sm">Disponibilité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;