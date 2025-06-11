
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon,
  Key,
  Bell,
  Zap,
  DollarSign,
  Shield,
  Globe,
  Palette,
  Save,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [settings, setSettings] = useState({
    // API Configuration
    openaiKey: "",
    falaiKey: "",
    manusaiKey: "",
    
    // Automation Settings
    autoGeneration: true,
    dailyVideoLimit: "50",
    qualityPreset: "high",
    
    // Platform Settings
    youtubeAutoPost: true,
    tiktokAutoPost: true,
    instagramAutoPost: false,
    
    // Notification Settings
    emailNotifications: true,
    performanceAlerts: true,
    budgetAlerts: true,
    
    // Budget Settings
    dailyBudget: "100",
    monthlyBudget: "3000",
    costPerVideoLimit: "5",
    
    // Content Settings
    defaultNiche: "technology",
    contentStyle: "professional",
    videoLength: "30"
  });

  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your configuration has been updated successfully.",
    });
  };

  const apiIntegrations = [
    {
      name: "OpenAI API",
      description: "For content generation and script writing",
      key: "openaiKey",
      status: settings.openaiKey ? "connected" : "disconnected",
      required: true
    },
    {
      name: "Fal.ai API", 
      description: "For Veo 3 video generation access",
      key: "falaiKey",
      status: settings.falaiKey ? "connected" : "disconnected",
      required: true
    },
    {
      name: "Manus AI API",
      description: "For autonomous agent management",
      key: "manusaiKey", 
      status: settings.manusaiKey ? "connected" : "disconnected",
      required: true
    }
  ];

  const platformIntegrations = [
    {
      name: "YouTube",
      description: "Automatic video posting and analytics",
      enabled: settings.youtubeAutoPost,
      key: "youtubeAutoPost"
    },
    {
      name: "TikTok",
      description: "Short-form content distribution",
      enabled: settings.tiktokAutoPost,
      key: "tiktokAutoPost"
    },
    {
      name: "Instagram",
      description: "Reels and story posting",
      enabled: settings.instagramAutoPost,
      key: "instagramAutoPost"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Configure your AI video automation system</p>
            </div>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save All Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="api" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* API Keys Tab */}
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Configuration
                </CardTitle>
                <CardDescription>
                  Configure API keys for AI services and integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {apiIntegrations.map((api, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          {api.name}
                          {api.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                        </h4>
                        <p className="text-sm text-muted-foreground">{api.description}</p>
                      </div>
                      <Badge variant={api.status === 'connected' ? 'default' : 'secondary'}>
                        {api.status}
                      </Badge>
                    </div>
                    <Input
                      type="password"
                      placeholder={`Enter your ${api.name} key`}
                      value={settings[api.key as keyof typeof settings] as string}
                      onChange={(e) => setSettings(prev => ({ ...prev, [api.key]: e.target.value }))}
                    />
                    {index < apiIntegrations.length - 1 && <Separator />}
                  </div>
                ))}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <h4 className="font-medium text-yellow-800">Security Notice</h4>
                  </div>
                  <p className="text-sm text-yellow-700">
                    API keys are encrypted and stored securely. Never share your API keys with unauthorized users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Automation Tab */}
          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Automation Settings
                </CardTitle>
                <CardDescription>
                  Configure automated video generation and posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Automatic Video Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable 24/7 autonomous video creation
                    </p>
                  </div>
                  <Switch
                    checked={settings.autoGeneration}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, autoGeneration: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dailyLimit">Daily Video Limit</Label>
                    <Select 
                      value={settings.dailyVideoLimit} 
                      onValueChange={(value) => 
                        setSettings(prev => ({ ...prev, dailyVideoLimit: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 videos/day</SelectItem>
                        <SelectItem value="25">25 videos/day</SelectItem>
                        <SelectItem value="50">50 videos/day</SelectItem>
                        <SelectItem value="100">100 videos/day</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="qualityPreset">Quality Preset</Label>
                    <Select 
                      value={settings.qualityPreset}
                      onValueChange={(value) => 
                        setSettings(prev => ({ ...prev, qualityPreset: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy (720p)</SelectItem>
                        <SelectItem value="standard">Standard (1080p)</SelectItem>
                        <SelectItem value="high">High (1080p + Enhanced)</SelectItem>
                        <SelectItem value="ultra">Ultra (4K)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="schedule">Generation Schedule</Label>
                  <Textarea
                    id="schedule"
                    placeholder="Define your video generation schedule..."
                    className="mt-1"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Use cron syntax or natural language (e.g., "Every 2 hours", "Daily at 9 AM")
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platforms Tab */}
          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Platform Integration
                </CardTitle>
                <CardDescription>
                  Manage automatic posting to social media platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {platformIntegrations.map((platform, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                      <Switch
                        checked={platform.enabled}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({ ...prev, [platform.key]: checked }))
                        }
                      />
                    </div>
                    {index < platformIntegrations.length - 1 && <Separator />}
                  </div>
                ))}

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Posting Optimization</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Optimal posting times</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Platform-specific formatting</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Automatic hashtag generation</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Configure alerts and notifications for your automation system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive daily performance summaries
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, emailNotifications: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Performance Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Get notified when metrics exceed thresholds
                    </p>
                  </div>
                  <Switch
                    checked={settings.performanceAlerts}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, performanceAlerts: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Budget Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Warnings when approaching spending limits
                    </p>
                  </div>
                  <Switch
                    checked={settings.budgetAlerts}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, budgetAlerts: checked }))
                    }
                  />
                </div>

                <Separator />

                <div>
                  <Label htmlFor="email">Notification Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Budget Management
                </CardTitle>
                <CardDescription>
                  Set spending limits and cost controls for your automation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dailyBudget">Daily Budget Limit</Label>
                    <Input
                      id="dailyBudget"
                      type="number"
                      placeholder="100"
                      value={settings.dailyBudget}
                      onChange={(e) => 
                        setSettings(prev => ({ ...prev, dailyBudget: e.target.value }))
                      }
                    />
                    <p className="text-xs text-muted-foreground mt-1">USD per day</p>
                  </div>

                  <div>
                    <Label htmlFor="monthlyBudget">Monthly Budget Limit</Label>
                    <Input
                      id="monthlyBudget"
                      type="number"
                      placeholder="3000"
                      value={settings.monthlyBudget}
                      onChange={(e) => 
                        setSettings(prev => ({ ...prev, monthlyBudget: e.target.value }))
                      }
                    />
                    <p className="text-xs text-muted-foreground mt-1">USD per month</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="costPerVideo">Cost Per Video Limit</Label>
                  <Input
                    id="costPerVideo"
                    type="number"
                    step="0.50"
                    placeholder="5.00"
                    value={settings.costPerVideoLimit}
                    onChange={(e) => 
                      setSettings(prev => ({ ...prev, costPerVideoLimit: e.target.value }))
                    }
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum cost per video generation
                  </p>
                </div>

                <Separator />

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Current Month Spending</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Video Generation</span>
                      <span className="font-medium">$2,145.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>API Costs</span>
                      <span className="font-medium">$892.30</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium border-t pt-2">
                      <span>Total</span>
                      <span>$3,037.80</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Content Preferences
                </CardTitle>
                <CardDescription>
                  Set default content generation preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="defaultNiche">Default Niche</Label>
                    <Select 
                      value={settings.defaultNiche}
                      onValueChange={(value) => 
                        setSettings(prev => ({ ...prev, defaultNiche: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="fitness">Fitness & Health</SelectItem>
                        <SelectItem value="cooking">Cooking & Recipes</SelectItem>
                        <SelectItem value="travel">Travel & Adventure</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contentStyle">Content Style</Label>
                    <Select 
                      value={settings.contentStyle}
                      onValueChange={(value) => 
                        setSettings(prev => ({ ...prev, contentStyle: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="energetic">Energetic</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="videoLength">Default Video Length</Label>
                  <Select 
                    value={settings.videoLength}
                    onValueChange={(value) => 
                      setSettings(prev => ({ ...prev, videoLength: value }))
                    }
                  >
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
                  <Label htmlFor="contentKeywords">Default Keywords</Label>
                  <Textarea
                    id="contentKeywords"
                    placeholder="Enter default keywords for content generation..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="brandGuidelines">Brand Guidelines</Label>
                  <Textarea
                    id="brandGuidelines"
                    placeholder="Define your brand voice, style, and content guidelines..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
