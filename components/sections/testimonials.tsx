"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with this developer was a game-changer for our business. They delivered a website that exceeded our expectations in both design and functionality.",
      name: "Sarah Johnson",
      position: "CEO",
      company: "Innovate Tech",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "Their attention to detail and problem-solving skills are outstanding. They transformed our complex requirements into an intuitive, beautiful interface.",
      name: "Michael Chen",
      position: "Product Manager",
      company: "DataViz Solutions",
      avatar: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "I was impressed by their technical expertise and commitment to quality. They delivered our project on time and were a pleasure to work with throughout the process.",
      name: "Emma Wilson",
      position: "Marketing Director",
      company: "Growth Brands",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto rotate testimonials
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it — hear what my clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 left-0 text-blue-500 opacity-10">
            <Quote className="w-24 h-24" />
          </div>

          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${testimonials.length * 100}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4 flex-shrink-0"
                >
                  <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm border">
                    <p className="text-lg md:text-xl italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-blue-500 w-8" 
                    : "bg-blue-200 dark:bg-blue-800"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}