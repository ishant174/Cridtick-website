"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  Tag,
  Search,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Code2,
  Sun,
  Moon,
  Menu,
  X,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Shopify Theme Customization in 2024",
    slug: "shopify-theme-customization-guide-2024",
    excerpt:
      "Learn how to customize Shopify themes like a pro with Liquid templating, custom CSS, and advanced techniques. This comprehensive guide covers everything from basic modifications to complex customizations.",
    author: "Ishant Gupta",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Shopify Development",
    tags: ["Shopify", "Liquid", "Theme Customization", "E-commerce"],
    image: "/placeholder.svg?height=400&width=600&text=Shopify+Theme+Customization",
    featured: true,
    views: 2847,
    likes: 156,
    comments: 23,
  },
  {
    id: 2,
    title: "WordPress vs Shopify: Which Platform is Right for Your Business?",
    slug: "wordpress-vs-shopify-comparison-2024",
    excerpt:
      "Comprehensive comparison between WordPress and Shopify for e-commerce. Learn the pros, cons, costs, and which platform suits your business needs best.",
    author: "Ishant Gupta",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Platform Comparison",
    tags: ["WordPress", "Shopify", "E-commerce", "Platform Comparison"],
    image: "/placeholder.svg?height=400&width=600&text=WordPress+vs+Shopify",
    featured: true,
    views: 3421,
    likes: 198,
    comments: 34,
  },
  {
    id: 3,
    title: "PHP Laravel Best Practices for Modern Web Development",
    slug: "php-laravel-best-practices-2024",
    excerpt:
      "Essential Laravel best practices every PHP developer should follow. Learn about security, performance optimization, code organization, and modern development techniques.",
    author: "Ishant Gupta",
    date: "2024-01-08",
    readTime: "18 min read",
    category: "PHP Development",
    tags: ["PHP", "Laravel", "Best Practices", "Web Development"],
    image: "/placeholder.svg?height=400&width=600&text=Laravel+Best+Practices",
    featured: false,
    views: 1923,
    likes: 87,
    comments: 15,
  },
  {
    id: 4,
    title: "React Performance Optimization: Advanced Techniques for 2024",
    slug: "react-performance-optimization-2024",
    excerpt:
      "Master React performance optimization with advanced techniques including memoization, code splitting, virtual scrolling, and modern React patterns.",
    author: "Ishant Gupta",
    date: "2024-01-05",
    readTime: "20 min read",
    category: "React Development",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    image: "/placeholder.svg?height=400&width=600&text=React+Performance",
    featured: false,
    views: 2156,
    likes: 134,
    comments: 28,
  },
  {
    id: 5,
    title: "Building Scalable E-commerce Solutions: Architecture and Best Practices",
    slug: "scalable-ecommerce-architecture-2024",
    excerpt:
      "Learn how to build scalable e-commerce platforms that can handle millions of users. Covers microservices, database design, caching strategies, and performance optimization.",
    author: "Ishant Gupta",
    date: "2024-01-03",
    readTime: "25 min read",
    category: "E-commerce Architecture",
    tags: ["E-commerce", "Scalability", "Microservices", "Architecture"],
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Architecture",
    featured: false,
    views: 1654,
    likes: 89,
    comments: 12,
  },
]

// Progress bar component
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setProgress(progress)
    }

    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function BlogsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true)

    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        setDarkMode(savedTheme === "dark")
        return
      }

      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true)
      }
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    localStorage.setItem("theme", darkMode ? "dark" : "light")

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode, isClient])

  // Get unique categories
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.views - a.views
        case "trending":
          return b.likes - a.likes
        default:
          return 0
      }
    })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-semibold">Loading Blog...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ReadingProgressBar />

        {/* Header */}
        <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-40 border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cridtick
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/blogs" className="text-blue-600 font-semibold">
                  Blogs
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t py-4">
                <div className="space-y-4">
                  <Link href="/" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link
                    href="/blogs"
                    className="block text-blue-600 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 animate-bounce">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">Tech Blog</span>
                <TrendingUp className="w-5 h-5" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Web Development
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Insights & Tutorials
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Expert insights on Shopify development, WordPress, PHP, React, and modern web technologies. Learn from
                real-world projects and industry best practices.
              </p>

              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search articles, technologies, tutorials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-lg"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm font-medium"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm font-medium"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="popular">Most Popular</option>
                      <option value="trending">Most Liked</option>
                    </select>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{blogPosts.length}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {blogPosts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      {blogPosts.reduce((sum, post) => sum + post.likes, 0)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Likes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4">
                  ⭐ Featured Articles
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Must-Read Articles</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our most popular and comprehensive guides on web development
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Featured</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views.toLocaleString()}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          <Heart className="w-3 h-3 mr-1" />
                          {post.likes}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-gray-500">Web Developer</p>
                          </div>
                        </div>

                        <Link href={`/blogs/${post.slug}`}>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-all duration-300">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">All Articles</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                        <span className="mx-1">•</span>
                        <Heart className="w-3 h-3" />
                        {post.likes}
                        <span className="mx-1">•</span>
                        <MessageCircle className="w-3 h-3" />
                        {post.comments}
                      </div>

                      <Link href={`/blogs/${post.slug}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 bg-transparent"
                        >
                          Read
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search terms or filters</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated with Latest Articles</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get notified when we publish new tutorials, guides, and insights on web development
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8 font-semibold">Subscribe</Button>
              </div>

              <p className="text-sm text-blue-200 mt-4">No spam, unsubscribe at any time</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Cridtick</span>
                </Link>
                <p className="text-gray-400 mb-4 max-w-md">
                  Expert web development insights, tutorials, and best practices for modern developers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  {categories.slice(1).map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category)
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="hover:text-white transition-colors">
                      All Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact-section" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Cridtick. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
