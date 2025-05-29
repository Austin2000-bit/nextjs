"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(20px)";
      setTimeout(() => {
        heading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
      }, 100);
    }

    if (subheading) {
      subheading.style.opacity = "0";
      subheading.style.transform = "translateY(20px)";
      setTimeout(() => {
        subheading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        subheading.style.opacity = "1";
        subheading.style.transform = "translateY(0)";
      }, 300);
    }

    if (cta) {
      cta.style.opacity = "0";
      cta.style.transform = "translateY(20px)";
      setTimeout(() => {
        cta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
      }, 500);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-background to-background/90">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Crafting <span className="text-blue-500">Digital</span> Experiences
          </h1>
          
          <p 
            ref={subheadingRef}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I build elegant, high-performance websites and applications 
            that deliver exceptional user experiences and drive business growth.
          </p>
          
          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-scrolldown"></div>
        </div>
      </div>
    </section>
  );
}