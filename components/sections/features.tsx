import { 
  Code, 
  Layers, 
  LineChart, 
  Smartphone, 
  Zap,
  PenTool
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-card border border-transparent hover:border-border hover:shadow-md">
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Building responsive, accessible websites with modern frameworks and clean code."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with responsive designs."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Optimizing for speed, efficiency, and the best possible user experience."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces with attention to detail and user needs."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Full-Stack Solutions",
      description: "Developing end-to-end applications with robust backend architectures."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Analytics & SEO",
      description: "Implementing data-driven strategies to improve visibility and performance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}