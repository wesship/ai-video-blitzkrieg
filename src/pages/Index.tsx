
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, BarChart3, Users, DollarSign, Brain, Video, Settings, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Manus AI Agents",
      description: "Autonomous AI agents handle content ideation, script writing, and workflow management automatically.",
      badge: "AI-Powered"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Google Veo 3 Generation",
      description: "Create professional HD videos using Google's latest AI video generation technology.",
      badge: "Latest Tech"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automated Workflows",
      description: "Complete automation from idea generation to multi-platform posting with N8N integration.",
      badge: "Fully Automated"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Real-time tracking of video performance, engagement rates, and revenue metrics.",
      badge: "Data-Driven"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Platform Distribution",
      description: "Automatically post to YouTube, TikTok, Instagram Reels, and Facebook simultaneously.",
      badge: "Cross-Platform"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Revenue Optimization",
      description: "Automated monetization strategies with ad revenue, sponsorships, and affiliate marketing.",
      badge: "Profitable"
    }
  ];

  const stats = [
    { label: "Videos Generated", value: "1000+", subtext: "in 30 days" },
    { label: "Revenue Generated", value: "$47k+", subtext: "first month" },
    { label: "Cost Per Video", value: "$3.50", subtext: "average" },
    { label: "ROI", value: "800%+", subtext: "within 6 months" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">AI Video Empire</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/generator">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Automated YouTube Empire
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Manus AI + Veo 3 = Automated Content Empire
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create 1000+ professional videos in 30 days using advanced AI agents and Google's Veo 3 technology. 
            Fully automated from ideation to posting across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/generator">
              <Button size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Start Creating Videos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-muted/30">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Complete Automation Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and scale your automated YouTube empire with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 py-20 bg-muted/20 rounded-3xl my-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powered by Leading AI Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Built on the most advanced AI platforms for maximum performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Manus AI", desc: "Autonomous Agents", icon: "🤖" },
            { name: "Google Veo 3", desc: "Video Generation", icon: "🎬" },
            { name: "N8N", desc: "Workflow Automation", icon: "⚡" },
            { name: "Fal.ai", desc: "API Management", icon: "🔗" }
          ].map((tech, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-background/60">
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI Video Empire?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the content creators already generating thousands of videos and substantial revenue with our automated system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/generator">
              <Button size="lg" className="text-lg px-8">
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Empire Now
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline" size="lg" className="text-lg px-8">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Performance Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AI Video Empire</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Automated YouTube content creation using advanced AI technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/dashboard" className="block hover:text-primary">Dashboard</Link>
                <Link to="/generator" className="block hover:text-primary">Video Generator</Link>
                <Link to="/analytics" className="block hover:text-primary">Analytics</Link>
                <Link to="/settings" className="block hover:text-primary">Settings</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary">Documentation</a>
                <a href="#" className="block hover:text-primary">API Reference</a>
                <a href="#" className="block hover:text-primary">Tutorials</a>
                <a href="#" className="block hover:text-primary">Support</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary">About</a>
                <a href="#" className="block hover:text-primary">Blog</a>
                <a href="#" className="block hover:text-primary">Careers</a>
                <a href="#" className="block hover:text-primary">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AI Video Empire. All rights reserved. Built with advanced AI automation technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
