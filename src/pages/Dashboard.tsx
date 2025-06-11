
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Video, 
  DollarSign, 
  Users, 
  Play, 
  Pause, 
  Settings,
  BarChart3,
  Zap,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Videos Generated Today",
      value: "47",
      change: "+12%",
      icon: <Video className="h-4 w-4" />,
      trend: "up"
    },
    {
      title: "Total Revenue",
      value: "$12,847",
      change: "+23%",
      icon: <DollarSign className="h-4 w-4" />,
      trend: "up"
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2",
      icon: <Zap className="h-4 w-4" />,
      trend: "up"
    },
    {
      title: "Avg. Engagement",
      value: "8.3%",
      change: "+1.2%",
      icon: <Users className="h-4 w-4" />,
      trend: "up"
    }
  ];

  const campaigns = [
    {
      name: "Tech Reviews Automation",
      status: "active",
      videosGenerated: 156,
      revenue: "$4,230",
      progress: 78,
      niche: "Technology"
    },
    {
      name: "Fitness Motivation Content",
      status: "active", 
      videosGenerated: 203,
      revenue: "$3,890",
      progress: 92,
      niche: "Fitness"
    },
    {
      name: "Cooking Tips & Tricks",
      status: "paused",
      videosGenerated: 89,
      revenue: "$1,560",
      progress: 45,
      niche: "Food"
    },
    {
      name: "Travel Shorts",
      status: "active",
      videosGenerated: 134,
      revenue: "$2,890",
      progress: 67,
      niche: "Travel"
    }
  ];

  const recentVideos = [
    {
      title: "iPhone 15 Pro Max Review - Is It Worth It?",
      platform: "YouTube",
      views: "12.3K",
      revenue: "$45.60",
      status: "published",
      timestamp: "2 hours ago"
    },
    {
      title: "10 Minute Morning Workout Routine",
      platform: "TikTok",
      views: "8.7K", 
      revenue: "$23.40",
      status: "published",
      timestamp: "3 hours ago"
    },
    {
      title: "Quick Pasta Recipe for Busy Days",
      platform: "Instagram",
      views: "5.2K",
      revenue: "$18.20",
      status: "processing",
      timestamp: "4 hours ago"
    },
    {
      title: "Hidden Gems in Paris",
      platform: "YouTube",
      views: "15.6K",
      revenue: "$67.80",
      status: "published", 
      timestamp: "5 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Monitor your AI video automation empire</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/generator">
                <Button>
                  <Video className="mr-2 h-4 w-4" />
                  Create Video
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={`${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  {" "}from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="videos">Recent Videos</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
          </TabsList>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid gap-6">
              {campaigns.map((campaign, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {campaign.name}
                          <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>Niche: {campaign.niche}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          {campaign.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold">{campaign.videosGenerated}</div>
                        <div className="text-sm text-muted-foreground">Videos Generated</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{campaign.revenue}</div>
                        <div className="text-sm text-muted-foreground">Revenue Generated</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{campaign.progress}%</div>
                        <div className="text-sm text-muted-foreground">Monthly Goal</div>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recent Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Video Generations</CardTitle>
                <CardDescription>Latest videos created by your AI automation system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVideos.map((video, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{video.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{video.platform}</span>
                          <span>{video.views} views</span>
                          <span>{video.timestamp}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium text-green-600">{video.revenue}</div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                        <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                          {video.status === 'published' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                          {video.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Revenue Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">$47,230</div>
                  <p className="text-sm text-muted-foreground mb-4">Total revenue this month</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>YouTube Ad Revenue</span>
                      <span>$28,450</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sponsored Content</span>
                      <span>$12,330</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Affiliate Marketing</span>
                      <span>$6,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Average CTR</span>
                        <span>8.3%</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement Rate</span>
                        <span>12.7%</span>
                      </div>
                      <Progress value={127} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Video Completion</span>
                        <span>76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Automation Tab */}
          <TabsContent value="automation" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Active Automations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Manus AI Content Generation</span>
                      <Badge variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Veo 3 Video Production</span>
                      <Badge variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Multi-Platform Distribution</span>
                      <Badge variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Performance Analytics</span>
                      <Badge variant="secondary">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Warning
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>API Response Time</span>
                        <span>245ms</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Success Rate</span>
                        <span>98.7%</span>
                      </div>
                      <Progress value={98.7} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Queue Status</span>
                        <span>12 pending</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
