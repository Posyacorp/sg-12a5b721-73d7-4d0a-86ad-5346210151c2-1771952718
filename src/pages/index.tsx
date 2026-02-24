import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Download, Code, Database, Rocket, Shield, Zap, Users, Sparkles, Terminal, Box } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <>
      <SEO 
        title="Softgen Clone - Technical Specification & Documentation"
        description="Complete technical specification for building an AI-powered full-stack development platform like Softgen.ai"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Icons */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[
            { Icon: Code, top: "15%", left: "10%", duration: 15, delay: 0 },
            { Icon: Terminal, top: "25%", right: "15%", duration: 18, delay: 2 },
            { Icon: Box, top: "60%", left: "8%", duration: 20, delay: 4 },
            { Icon: Sparkles, top: "70%", right: "12%", duration: 16, delay: 1 },
          ].map(({ Icon, top, left, right, duration, delay }, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20 dark:opacity-10"
              style={{ top, left, right }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay
              }}
            >
              <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
          ))}
        </div>

        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="container mx-auto px-4 py-20 text-center relative">
          <motion.div 
            className="max-w-4xl mx-auto"
            style={{ y, opacity, scale }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Complete Platform Blueprint
                </span>
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Build Your Own Softgen.ai
            </motion.h1>

            <motion.p 
              className="text-2xl text-slate-600 dark:text-slate-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Complete technical specification & implementation guide for creating an AI-powered development platform
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="relative text-lg h-14 px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  asChild
                >
                  <Link href="/download-spec">
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-md border-2 border-white/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Download className="w-5 h-5" />
                      </motion.div>
                      Download Full Specification
                    </span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="relative text-lg h-14 px-8 backdrop-blur-sm border-2 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 group overflow-hidden"
                  asChild
                >
                  <a href="#features">
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Explore Features
                      <motion.div
                        className="inline-block"
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              {[
                { value: "1,476", label: "Lines of Specs" },
                { value: "14", label: "Major Sections" },
                { value: "12", label: "Month Roadmap" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* What's Included Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What's Inside the Specification
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { Icon: Code, title: "Complete Architecture", description: "Full system design with frontend, backend, AI integration, and sandbox environments", color: "text-blue-600" },
                { Icon: Database, title: "Database Schema", description: "Production-ready PostgreSQL schemas, relationships, and migration strategies", color: "text-indigo-600" },
                { Icon: Rocket, title: "Deployment Guide", description: "Step-by-step deployment strategies for Vercel, Supabase, and cloud infrastructure", color: "text-purple-600" },
                { Icon: Shield, title: "Security Framework", description: "Comprehensive security measures, compliance guidelines, and best practices", color: "text-green-600" },
                { Icon: Zap, title: "AI Integration", description: "Claude 3.7 integration patterns, prompt engineering, and token optimization", color: "text-yellow-600" },
                { Icon: Users, title: "Business Model", description: "Pricing strategies, monetization models, and growth roadmap for success", color: "text-red-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                      >
                        <item.Icon className={`w-12 h-12 ${item.color} mb-2`} />
                      </motion.div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Platform Features Covered
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Core Development Features",
                  items: [
                    "Real-time AI chat interface with streaming responses",
                    "Integrated Monaco code editor with IntelliSense",
                    "Live preview panel with hot reload capabilities",
                    "Automated error detection and debugging tools",
                    "Version control with visual timeline and revert",
                    "Multi-file operations in single AI iterations"
                  ]
                },
                {
                  title: "Infrastructure & Integration",
                  items: [
                    "Isolated sandbox environments for each project",
                    "One-click Supabase database integration",
                    "GitHub repository management and syncing",
                    "Vercel deployment with environment sync",
                    "Usage-based billing with Stripe integration",
                    "Real-time monitoring and analytics dashboard"
                  ]
                }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        {section.items.map((item, j) => (
                          <motion.li 
                            key={j}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: j * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technology Stack Included
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Next.js 15.2", color: "bg-black dark:bg-white" },
                { name: "React 18.3", color: "bg-blue-500" },
                { name: "TypeScript 5.7", color: "bg-blue-700" },
                { name: "Tailwind CSS 3.4", color: "bg-cyan-500" },
                { name: "Claude 3.7 AI", color: "bg-purple-600" },
                { name: "Supabase", color: "bg-green-600" },
                { name: "Vercel", color: "bg-black dark:bg-white" },
                { name: "Daytona.io", color: "bg-indigo-600" },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <motion.div 
                        className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-3`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                      <p className="font-semibold">{tech.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Implementation Roadmap
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: MVP",
                  duration: "Months 1-3",
                  items: ["User authentication", "Chat interface", "Basic code editor", "Live preview", "GitHub integration"]
                },
                {
                  phase: "Phase 2: Beta",
                  duration: "Months 4-6",
                  items: ["Advanced editor features", "Version control", "Error detection", "Supabase integration", "Payment system"]
                },
                {
                  phase: "Phase 3: Launch",
                  duration: "Months 7-9",
                  items: ["Performance optimization", "Documentation", "Tutorial system", "Custom domains", "API rate limiting"]
                },
                {
                  phase: "Phase 4: Growth",
                  duration: "Months 10-12",
                  items: ["Multi-language support", "Real-time collaboration", "Marketplace", "Enterprise features", "Mobile app"]
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{phase.phase}</CardTitle>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{phase.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.items.map((item, j) => (
                          <motion.li 
                            key={j}
                            className="flex items-center gap-2 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: j * 0.05 }}
                          >
                            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto text-center shadow-2xl border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-12 pb-12">
                <motion.h2 
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Ready to Build?
                </motion.h2>
                <motion.p 
                  className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Download the complete technical specification and start building your own AI-powered development platform today.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg h-14 px-8" asChild>
                      <Link href="/download-spec">
                        <Download className="mr-2 w-5 h-5" />
                        Get the Specification
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                      <a href="https://softgen.ai" target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="mr-2 w-5 h-5" />
                        Visit Softgen.ai
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-sm text-slate-500 dark:text-slate-400 mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Estimated development time: 9-12 months • Team size: 4-6 developers • Budget: $250k-$500k
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-400 border-t">
          <p>© 2026 Softgen Clone Specification. For educational and reference purposes.</p>
        </footer>
      </div>
    </>
  );
}