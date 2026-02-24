import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function DownloadSpecPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Softgen-Clone-Technical-Specification.md";
    link.download = "Softgen-Clone-Technical-Specification.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO 
        title="Download Technical Specification - Softgen Clone"
        description="Download the complete technical specification document for building a Softgen.ai clone platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technical Specification
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Complete guide to building a Softgen.ai clone platform
            </p>
          </div>

          <Card className="shadow-2xl border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl">Softgen Clone Technical Specification</CardTitle>
              </div>
              <CardDescription className="text-base">
                A comprehensive 500+ page document covering all aspects of building an AI-powered development platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What's Included</h3>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Complete architecture design</li>
                    <li>• Full technology stack details</li>
                    <li>• Database schema & relationships</li>
                    <li>• API endpoint specifications</li>
                    <li>• UI/UX component breakdown</li>
                    <li>• Security & compliance guidelines</li>
                  </ul>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Implementation Guide</h3>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• 12-month development roadmap</li>
                    <li>• Phase-by-phase milestones</li>
                    <li>• Integration tutorials</li>
                    <li>• Code examples & patterns</li>
                    <li>• Deployment strategies</li>
                    <li>• Monetization models</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Document Sections</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">1. Executive Summary</p>
                    <p className="text-slate-600 dark:text-slate-400">2. Product Overview</p>
                    <p className="text-slate-600 dark:text-slate-400">3. Core Features & Functionality</p>
                    <p className="text-slate-600 dark:text-slate-400">4. Technical Architecture</p>
                    <p className="text-slate-600 dark:text-slate-400">5. Technology Stack</p>
                    <p className="text-slate-600 dark:text-slate-400">6. User Interface Components</p>
                    <p className="text-slate-600 dark:text-slate-400">7. Backend Infrastructure</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">8. AI Integration</p>
                    <p className="text-slate-600 dark:text-slate-400">9. Development Workflow</p>
                    <p className="text-slate-600 dark:text-slate-400">10. Security & Compliance</p>
                    <p className="text-slate-600 dark:text-slate-400">11. Deployment Strategy</p>
                    <p className="text-slate-600 dark:text-slate-400">12. Monetization Model</p>
                    <p className="text-slate-600 dark:text-slate-400">13. Implementation Roadmap</p>
                    <p className="text-slate-600 dark:text-slate-400">14. Appendix & Resources</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Technical Specifications</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Next.js 15.2 with Page Router</li>
                      <li>• React 18.3 & TypeScript 5.7</li>
                      <li>• Anthropic Claude 3.7 Sonnet AI</li>
                      <li>• Supabase (PostgreSQL) + Redis</li>
                      <li>• Daytona.io sandbox environments</li>
                      <li>• Vercel deployment integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1 text-lg h-14"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Specification (.md)
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 text-lg h-14"
                  asChild
                >
                  <Link href="/">
                    <ExternalLink className="mr-2 w-5 h-5" />
                    View Live Demo
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-center text-slate-500 dark:text-slate-400 pt-4">
                This document is for educational and reference purposes. Building a production platform requires significant development resources and ongoing maintenance.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Questions about implementation?{" "}
              <a href="mailto:support@softgen.ai" className="text-blue-600 hover:underline">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}