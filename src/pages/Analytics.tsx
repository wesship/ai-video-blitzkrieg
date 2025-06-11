
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Eye, 
  ThumbsUp, 
  Share2,
  BarChart3,
  PieChart,
  Calendar,
  Target
} from "lucide-react";

const Analytics = () => {
  const overviewStats = [
    {
      title: "Total Revenue",
      value: "$47,230",
      change: "+23.5%",
      trend: "up",
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: "Total Views",
      value: "2.4M",
      change: "+18.2%", 
      trend: "up",
      icon: <Eye className="h-4 w-4" />
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up", 
      icon: <ThumbsUp className="h-4 w-4" />
    },
    {
      title: "Videos Generated",
      value: "1,247",
      change: "+156",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4" />
    }
  ];

  const platformStats = [
    {
      platform: "YouTube",
      revenue: "$28,450",
      views: "1.2M",
      engagement: "9.2%",
      videos: 456,
      growth: "+25%"
    },
    {
      platform: "TikTok", 
      revenue: "$12,330",
      views: "890K",
      engagement: "12.1%",
      videos: 523,
      growth: "+34%"
    },
    {
      platform: "Instagram",
      revenue: "$4,890",
      views: "245K", 
      engagement: "7.8%",
      videos: 189,
      growth: "+15%"
    },
    {
      platform: "Facebook",
      revenue: "$1,560",
      views: "89K",
      engagement: "5.4%",
      videos: 79,
      growth: "+8%"
    }
  ];

  const topVideos = [
    {
      title: "iPhone 15 Pro Max - Brutal Honest Review",
      platform: "YouTube",
      views: "234K",
      revenue: "$1,240",
      engagement: "12.3%",
      posted: "3 days ago"
    },
    {
      title: "10 Minute Morning Workout That Changed My Life",
      platform: "TikTok", 
      views: "189K",
      revenue: "$890",
      engagement: "15.7%",
      posted: "1 week ago"
    },
    {
      title: "Quick Pasta Recipe for Busy People",
      platform: "Instagram",
      views: "156K",
      revenue: "$567",
      engagement: "9.8%",
      posted: "2 days ago"
    },
    {
      title: "Hidden Gems in Paris You Must Visit",
      platform: "YouTube",
      views: "298K",
      revenue: "$1,560",
      engagement: "11.2%",
      posted: "5 days ago"
    }
  ];

  const revenueBreakdown = [
    { source: "YouTube Ad Revenue", amount: 28450, percentage: 60.2 },
    { source: "Sponsored Content", amount: 12330, percentage: 26.1 },
    { source: "Affiliate Marketing", amount: 4890, percentage: 10.3 },
    { source: "Course Sales", amount: 1560, percentage: 3.4 }
  ];

  const monthlyGrowth = [
    { month: "Jan", revenue: 15200, videos: 234 },
    { month: "Feb", revenue: 18700, videos: 298 },
    { month: "Mar", revenue: 22100, videos: 367 },
    { month: "Apr", revenue: 28900, videos: 445 },
    { month: "May", revenue: 35600, videos: 523 },
    { month: "Jun", revenue: 47230, videos: 634 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Comprehensive performance insights for your AI video empire</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.change}
                  </span>
                  {" "}from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="videos">Top Videos</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Overview
                  </CardTitle>
                  <CardDescription>Key metrics for the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Revenue Growth</span>
                        <span className="font-medium">+23.5%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>View Growth</span>
                        <span className="font-medium">+18.2%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement Rate</span>
                        <span className="font-medium">8.7%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Video Production</span>
                        <span className="font-medium">634 videos</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Monthly Goals
                  </CardTitle>
                  <CardDescription>Progress towards monthly targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Revenue Target</span>
                        <span className="text-sm text-muted-foreground">$47,230 / $50,000</span>
                      </div>
                      <Progress value={94.5} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">94.5% complete</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Video Production</span>
                        <span className="text-sm text-muted-foreground">634 / 700</span>
                      </div>
                      <Progress value={90.6} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">90.6% complete</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Engagement Rate</span>
                        <span className="text-sm text-muted-foreground">8.7% / 10%</span>
                      </div>
                      <Progress value={87} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">87% complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Platforms Tab */}
          <TabsContent value="platforms" className="space-y-6">
            <div className="grid gap-6">
              {platformStats.map((platform, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {platform.platform}
                          <Badge variant="secondary">{platform.growth}</Badge>
                        </CardTitle>
                        <CardDescription>Platform performance metrics</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{platform.revenue}</div>
                        <div className="text-sm text-muted-foreground">Revenue</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-lg font-semibold">{platform.views}</div>
                        <div className="text-sm text-muted-foreground">Total Views</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{platform.engagement}</div>
                        <div className="text-sm text-muted-foreground">Engagement</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{platform.videos}</div>
                        <div className="text-sm text-muted-foreground">Videos</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Top Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Videos</CardTitle>
                <CardDescription>Your highest-performing AI-generated content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topVideos.map((video, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{video.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="font-medium">{video.platform}</span>
                          <span>{video.views} views</span>
                          <span>{video.engagement} engagement</span>
                          <span>{video.posted}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{video.revenue}</div>
                        <div className="text-sm text-muted-foreground">Revenue</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Revenue Breakdown
                  </CardTitle>
                  <CardDescription>Revenue sources for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueBreakdown.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.source}</span>
                          <span className="font-medium">${item.amount.toLocaleString()}</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Revenue and video production trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyGrowth.slice(-3).map((month, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded">
                        <div>
                          <div className="font-medium">{month.month}</div>
                          <div className="text-sm text-muted-foreground">{month.videos} videos</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">
                            ${month.revenue.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Trends</CardTitle>
                  <CardDescription>6-month performance trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Revenue Growth</h4>
                      <div className="space-y-2">
                        {monthlyGrowth.map((month, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{month.month}</span>
                            <span className="font-medium">${month.revenue.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Production Trends</CardTitle>
                  <CardDescription>Video generation over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Videos Generated</h4>
                      <div className="space-y-2">
                        {monthlyGrowth.map((month, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{month.month}</span>
                            <span className="font-medium">{month.videos} videos</span>
                          </div>
                        ))}
                      </div>
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

export default Analytics;
