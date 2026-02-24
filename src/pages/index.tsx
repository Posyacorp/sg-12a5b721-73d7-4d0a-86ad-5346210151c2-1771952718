import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Download, Code, Database, Rocket, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEO 
        title="Softgen Clone - Technical Specification & Documentation"
        description="Complete technical specification for building an AI-powered full-stack development platform like Softgen.ai"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build Your Own Softgen.ai
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Complete technical specification & implementation guide for creating an AI-powered development platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <Link href="/download-spec">
                  <Download className="mr-2 w-5 h-5" />
                  Download Full Specification
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                <a href="#features">
                  <FileText className="mr-2 w-5 h-5" />
                  Explore Features
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What's Inside the Specification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Code className="w-12 h-12 text-blue-600 mb-2" />
                  <CardTitle>Complete Architecture</CardTitle>
                  <CardDescription>
                    Full system design with frontend, backend, AI integration, and sandbox environments
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Database className="w-12 h-12 text-indigo-600 mb-2" />
                  <CardTitle>Database Schema</CardTitle>
                  <CardDescription>
                    Production-ready PostgreSQL schemas, relationships, and migration strategies
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Rocket className="w-12 h-12 text-purple-600 mb-2" />
                  <CardTitle>Deployment Guide</CardTitle>
                  <CardDescription>
                    Step-by-step deployment strategies for Vercel, Supabase, and cloud infrastructure
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Shield className="w-12 h-12 text-green-600 mb-2" />
                  <CardTitle>Security Framework</CardTitle>
                  <CardDescription>
                    Comprehensive security measures, compliance guidelines, and best practices
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Zap className="w-12 h-12 text-yellow-600 mb-2" />
                  <CardTitle>AI Integration</CardTitle>
                  <CardDescription>
                    Claude 3.7 integration patterns, prompt engineering, and token optimization
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-red-600 mb-2" />
                  <CardTitle>Business Model</CardTitle>
                  <CardDescription>
                    Pricing strategies, monetization models, and growth roadmap for success
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Platform Features Covered</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Core Development Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Real-time AI chat interface with streaming responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated Monaco code editor with IntelliSense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Live preview panel with hot reload capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Automated error detection and debugging tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Version control with visual timeline and revert</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Multi-file operations in single AI iterations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Infrastructure & Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Isolated sandbox environments for each project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>One-click Supabase database integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>GitHub repository management and syncing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Vercel deployment with environment sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Usage-based billing with Stripe integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Real-time monitoring and analytics dashboard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technology Stack Included</h2>
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
              ].map((tech) => (
                <Card key={tech.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-3`} />
                    <p className="font-semibold">{tech.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Implementation Roadmap</h2>
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
              ].map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{phase.phase}</CardTitle>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{phase.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="max-w-4xl mx-auto text-center shadow-2xl border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Build?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Download the complete technical specification and start building your own AI-powered development platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg h-14 px-8" asChild>
                  <Link href="/download-spec">
                    <Download className="mr-2 w-5 h-5" />
                    Get the Specification
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                  <a href="https://softgen.ai" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="mr-2 w-5 h-5" />
                    Visit Softgen.ai
                  </a>
                </Button>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
                Estimated development time: 9-12 months • Team size: 4-6 developers • Budget: $250k-$500k
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-400 border-t">
          <p>© 2026 Softgen Clone Specification. For educational and reference purposes.</p>
        </footer>
      </div>
    </>
  );
}