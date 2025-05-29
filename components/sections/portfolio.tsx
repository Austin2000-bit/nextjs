"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform built with Next.js and a headless CMS, featuring a sleek UI and optimized checkout flow.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "Mobile App",
      description: "A comprehensive fitness application with workout tracking, nutrition planning, and progress visualization.",
      image: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "Web Application",
      description: "An interactive financial dashboard with real-time data visualization, expense tracking, and predictive analytics.",
      image: "https://images.pexels.com/photos/7319286/pexels-photo-7319286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing my expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className={`transition-all duration-300 ${
                  hoveredProject === project.id ? "opacity-0" : "opacity-100"
                }`}>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}