
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Video, 
  Wand2, 
  Settings, 
  Play, 
  Download,
  Brain,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [videoConfig, setVideoConfig] = useState({
    niche: "",
    style: "cinematic",
    duration: "30",
    quality: "1080p",
    platforms: ["youtube"]
  });
  const { toast } = useToast();

  const niches = [
    "Technology Reviews",
    "Fitness & Health", 
    "Cooking & Recipes",
    "Travel & Adventure",
    "Comedy & Entertainment",
    "Education & Tutorials",
    "Gaming",
    "Lifestyle & Fashion"
  ];

  const videoStyles = [
    { value: "cinematic", label: "Cinematic", description: "High-quality, professional look" },
    { value: "casual", label: "Casual", description: "Natural, everyday style" },
    { value: "energetic", label: "Energetic", description: "Fast-paced, dynamic content" },
    { value: "minimalist", label: "Minimalist", description: "Clean, simple aesthetic" }
  ];

  const platforms = [
    { id: "youtube", label: "YouTube", description: "Long-form content optimization" },
    { id: "tiktok", label: "TikTok", description: "Short-form vertical videos" },
    { id: "instagram", label: "Instagram Reels", description: "Square and vertical formats" },
    { id: "facebook", label: "Facebook", description: "Auto-posting to Facebook" }
  ];

  const handleGenerate = async () => {
    if (!videoConfig.niche) {
      toast({
        title: "Missing Information",
        description: "Please select a niche for your video content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate generation process
    const steps = [
      { progress: 20, message: "Manus AI generating content ideas..." },
      { progress: 40, message: "Creating video script and storyboard..." },
      { progress: 60, message: "Veo 3 generating video content..." },
      { progress: 80, message: "Processing and optimizing for platforms..." },
      { progress: 100, message: "Video generation complete!" }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGenerationProgress(step.progress);
      
      toast({
        title: "Generation Progress",
        description: step.message,
      });
    }

    setIsGenerating(false);
    
    toast({
      title: "Success!",
      description: "Your AI video has been generated and is ready for review.",
    });
  };

  const generationSteps = [
    {
      title: "Content Ideation",
      description: "Manus AI analyzes trends and generates video concepts",
      icon: <Brain className="h-5 w-5" />,
      status: isGenerating && generationProgress >= 20 ? "complete" : isGenerating ? "active" : "pending"
    },
    {
      title: "Script Creation", 
      description: "AI writes engaging scripts optimized for your niche",
      icon: <Wand2 className="h-5 w-5" />,
      status: isGenerating && generationProgress >= 40 ? "complete" : isGenerating && generationProgress >= 20 ? "active" : "pending"
    },
    {
      title: "Video Generation",
      description: "Google Veo 3 creates professional video content",
      icon: <Video className="h-5 w-5" />,
      status: isGenerating && generationProgress >= 60 ? "complete" : isGenerating && generationProgress >= 40 ? "active" : "pending"
    },
    {
      title: "Platform Optimization",
      description: "Content optimized for each selected platform",
      icon: <Zap className="h-5 w-5" />,
      status: generationProgress >= 100 ? "complete" : isGenerating && generationProgress >= 80 ? "active" : "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">AI Video Generator</h1>
              <p className="text-muted-foreground">Create professional videos with Manus AI + Veo 3</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Zap className="mr-2 h-4 w-4" />
              Powered by AI
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Video Configuration
                </CardTitle>
                <CardDescription>
                  Configure your AI video generation settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="distribution">Distribution</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-4">
                    <div>
                      <Label htmlFor="niche">Content Niche</Label>
                      <Select value={videoConfig.niche} onValueChange={(value) => 
                        setVideoConfig(prev => ({ ...prev, niche: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your content niche" />
                        </SelectTrigger>
                        <SelectContent>
                          {niches.map((niche) => (
                            <SelectItem key={niche} value={niche.toLowerCase().replace(/\s+/g, '_')}>
                              {niche}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="topic">Specific Topic (Optional)</Label>
                      <Input 
                        id="topic"
                        placeholder="e.g., iPhone 15 Pro Max Review, 10-minute workout routine"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="keywords">Target Keywords</Label>
                      <Textarea 
                        id="keywords"
                        placeholder="Enter keywords separated by commas"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <div>
                      <Label>Video Style</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {videoStyles.map((style) => (
                          <Card 
                            key={style.value}
                            className={`cursor-pointer border-2 transition-colors ${
                              videoConfig.style === style.value 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setVideoConfig(prev => ({ ...prev, style: style.value }))}
                          >
                            <CardContent className="p-4">
                              <h4 className="font-medium">{style.label}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{style.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Select value={videoConfig.duration} onValueChange={(value) => 
                          setVideoConfig(prev => ({ ...prev, duration: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 seconds</SelectItem>
                            <SelectItem value="30">30 seconds</SelectItem>
                            <SelectItem value="60">1 minute</SelectItem>
                            <SelectItem value="120">2 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="quality">Quality</Label>
                        <Select value={videoConfig.quality} onValueChange={(value) => 
                          setVideoConfig(prev => ({ ...prev, quality: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="720p">720p HD</SelectItem>
                            <SelectItem value="1080p">1080p Full HD</SelectItem>
                            <SelectItem value="4k">4K Ultra HD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="distribution" className="space-y-4">
                    <div>
                      <Label>Target Platforms</Label>
                      <div className="space-y-3 mt-2">
                        {platforms.map((platform) => (
                          <div key={platform.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={platform.id}
                              checked={videoConfig.platforms.includes(platform.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setVideoConfig(prev => ({
                                    ...prev,
                                    platforms: [...prev.platforms, platform.id]
                                  }));
                                } else {
                                  setVideoConfig(prev => ({
                                    ...prev,
                                    platforms: prev.platforms.filter(p => p !== platform.id)
                                  }));
                                }
                              }}
                            />
                            <div className="flex-1">
                              <Label htmlFor={platform.id} className="font-medium">{platform.label}</Label>
                              <p className="text-sm text-muted-foreground">{platform.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="pt-6 border-t">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Generating Video...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Generate AI Video
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Generation Progress & Preview */}
          <div className="space-y-6">
            {/* Generation Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Generation Progress
                </CardTitle>
                <CardDescription>
                  Real-time progress of your AI video creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isGenerating && (
                  <div className="mb-6">
                    <Progress value={generationProgress} className="h-3" />
                    <p className="text-sm text-muted-foreground mt-2">
                      {generationProgress}% Complete
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  {generationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${
                        step.status === 'complete' ? 'bg-green-100 text-green-600' :
                        step.status === 'active' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {step.status === 'complete' ? <CheckCircle className="h-4 w-4" /> :
                         step.status === 'active' ? <Clock className="h-4 w-4 animate-spin" /> :
                         step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          step.status === 'complete' ? 'text-green-600' :
                          step.status === 'active' ? 'text-blue-600' :
                          'text-gray-500'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cost Estimate */}
            <Card>
              <CardHeader>
                <CardTitle>Cost Estimate</CardTitle>
                <CardDescription>Estimated costs for this video generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Veo 3 Generation</span>
                    <span className="text-sm font-medium">$3.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Manus AI Processing</span>
                    <span className="text-sm font-medium">$0.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Platform Optimization</span>
                    <span className="text-sm font-medium">$0.25</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total Cost</span>
                      <span className="text-green-600">$4.50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Video Preview */}
            {generationProgress === 100 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Generated Video
                  </CardTitle>
                  <CardDescription>Your AI-generated video is ready</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Video Preview</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
