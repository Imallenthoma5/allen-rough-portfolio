import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogsSection = () => {
  const categories = [
    { name: "All", active: true },
    { name: "SEO", active: false },
    { name: "Ads", active: false },
    { name: "Content", active: false },
    { name: "Photography", active: false },
    { name: "Videography", active: false }
  ];

  const blogPosts = [
    {
      title: "10 Essential SEO Strategies for Small Businesses in 2024",
      description: "Discover the most effective SEO techniques that can help your small business rank higher in search results and attract more customers.",
      category: "SEO",
      date: "January 15, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Google Ads vs Facebook Ads: Which is Better for Your Business?",
      description: "A comprehensive comparison of Google Ads and Facebook Ads to help you choose the right platform for your advertising budget. Discover the most effective SEO techniques that can help your small business rank higher in search results and attract more customers. Discover the most effective SEO techniques that can help your small business rank higher in search results and attract more customers",
      category: "Ads",
      date: "January 10, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Content Marketing That Converts: A Step-by-Step Guide",
      description: "Learn how to create compelling content that not only engages your audience but also drives them to take action.",
      category: "Content",
      date: "January 5, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Product Photography Tips for E-commerce Success",
      description: "Professional techniques to capture stunning product photos that increase conversions and boost sales.",
      category: "Photography",
      date: "December 28, 2023",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Creating Engaging Video Content for Social Media",
      description: "Master the art of creating videos that capture attention and drive engagement across all social platforms.",
      category: "Videography",
      date: "December 20, 2023",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Local SEO: How to Dominate Your Local Market",
      description: "Essential local SEO strategies to help your business appear in local search results and attract nearby customers.",
      category: "SEO",
      date: "December 15, 2023",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and strategies to grow your business online.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.title} 
              className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                post.featured ? 'border-primary shadow-medium' : ''
              }`}
            >
              {post.featured && (
                <Badge className="absolute -top-2 right-4 bg-success text-success-foreground">
                  Featured
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
