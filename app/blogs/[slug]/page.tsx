"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle, Eye, Code2, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

// Blog data (same as in blogs page)
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Shopify Theme Customization in 2024",
    slug: "shopify-theme-customization-guide-2024",
    excerpt:
      "Learn how to customize Shopify themes like a pro with Liquid templating, custom CSS, and advanced techniques. This comprehensive guide covers everything from basic modifications to complex customizations.",
    content: `
<h1>Complete Guide to Shopify Theme Customization in 2024</h1>

<p>Shopify theme customization is essential for creating a unique online store that stands out from the competition. In this comprehensive guide, we'll explore everything you need to know about customizing Shopify themes in 2024.</p>

<h2>What is Shopify Theme Customization?</h2>

<p>Shopify theme customization involves modifying the appearance, functionality, and user experience of your Shopify store. This can range from simple color changes to complex feature additions using Liquid templating language.</p>

<h2>Getting Started with Liquid</h2>

<p>Liquid is Shopify's templating language that allows you to create dynamic content. Here are the basics:</p>

<h3>Variables</h3>
<pre><code class="language-liquid">{{ product.title }}
{{ product.price | money }}
{{ collection.products.size }}</code></pre>

<h3>Filters</h3>
<pre><code class="language-liquid">{{ product.title | upcase }}
{{ product.created_at | date: "%B %d, %Y" }}
{{ product.description | truncate: 100 }}</code></pre>

<h3>Control Flow</h3>
<pre><code class="language-liquid">{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <button disabled>Sold Out</button>
{% endif %}</code></pre>

<h2>Advanced Customization Techniques</h2>

<h3>1. Custom Product Templates</h3>

<p>Create unique product pages for different product types:</p>

<pre><code class="language-liquid">&lt;!-- templates/product.custom.liquid --&gt;
&lt;div class="custom-product-layout"&gt;
  &lt;div class="product-gallery"&gt;
    {% for image in product.images %}
      &lt;img src="{{ image | img_url: '800x800' }}" alt="{{ image.alt }}"&gt;
    {% endfor %}
  &lt;/div&gt;
  
  &lt;div class="product-info"&gt;
    &lt;h1&gt;{{ product.title }}&lt;/h1&gt;
    &lt;p class="price"&gt;{{ product.price | money }}&lt;/p&gt;
    
    {% form 'product', product %}
      &lt;select name="id"&gt;
        {% for variant in product.variants %}
          &lt;option value="{{ variant.id }}"&gt;{{ variant.title }}&lt;/option&gt;
        {% endfor %}
      &lt;/select&gt;
      &lt;button type="submit"&gt;Add to Cart&lt;/button&gt;
    {% endform %}
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h2>Performance Optimization</h2>

<h3>1. Image Optimization</h3>
<p>Always use Shopify's image filters for optimal performance:</p>

<pre><code class="language-liquid">&lt;!-- Responsive images --&gt;
&lt;img src="{{ product.featured_image | img_url: '400x400' }}" 
     srcset="{{ product.featured_image | img_url: '400x400' }} 400w,
             {{ product.featured_image | img_url: '800x800' }} 800w"
     sizes="(max-width: 768px) 400px, 800px"
     alt="{{ product.featured_image.alt }}"&gt;</code></pre>

<h2>Best Practices</h2>

<ol>
<li><strong>Always backup your theme</strong> before making changes</li>
<li><strong>Use version control</strong> to track your modifications</li>
<li><strong>Test on multiple devices</strong> and browsers</li>
<li><strong>Optimize for mobile</strong> first</li>
<li><strong>Follow Shopify's coding standards</strong></li>
<li><strong>Use semantic HTML</strong> for better SEO</li>
<li><strong>Minimize HTTP requests</strong></li>
<li><strong>Compress images</strong> and assets</li>
</ol>

<h2>Conclusion</h2>

<p>Shopify theme customization opens up endless possibilities for creating unique, high-converting online stores. By mastering Liquid templating, following best practices, and staying updated with Shopify's latest features, you can create exceptional shopping experiences that drive sales and customer satisfaction.</p>

<p>Remember to always test your customizations thoroughly and consider hiring a Shopify expert for complex modifications to ensure your store performs optimally.</p>
    `,
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
    content: `
<h1>WordPress vs Shopify: Which Platform is Right for Your Business?</h1>

<p>Choosing the right platform for your online business is crucial for long-term success. In this comprehensive comparison, we'll explore WordPress and Shopify to help you make an informed decision.</p>

<h2>Overview</h2>

<h3>WordPress</h3>
<p>WordPress powers over 40% of all websites on the internet. With WooCommerce, it becomes a powerful e-commerce platform offering unlimited customization possibilities.</p>

<h3>Shopify</h3>
<p>Shopify is a dedicated e-commerce platform designed specifically for online stores. It's known for its ease of use and comprehensive built-in features.</p>

<h2>Ease of Use</h2>

<h3>WordPress + WooCommerce</h3>
<ul>
<li><strong>Learning Curve</strong>: Moderate to steep</li>
<li><strong>Setup Time</strong>: 2-4 hours for basic setup</li>
<li><strong>Technical Knowledge</strong>: Some required</li>
<li><strong>Customization</strong>: Unlimited but requires technical skills</li>
</ul>

<h3>Shopify</h3>
<ul>
<li><strong>Learning Curve</strong>: Gentle</li>
<li><strong>Setup Time</strong>: 30 minutes to 1 hour</li>
<li><strong>Technical Knowledge</strong>: Minimal required</li>
<li><strong>Customization</strong>: Limited but user-friendly</li>
</ul>

<h2>Cost Comparison</h2>

<h3>WordPress + WooCommerce</h3>
<ul>
<li><strong>Platform</strong>: Free (open source)</li>
<li><strong>Hosting</strong>: $5-50/month</li>
<li><strong>Domain</strong>: $10-15/year</li>
<li><strong>Themes</strong>: $0-100+ (one-time)</li>
<li><strong>Plugins</strong>: $0-300+/year</li>
<li><strong>Total</strong>: $60-500+/year</li>
</ul>

<h3>Shopify</h3>
<ul>
<li><strong>Basic Plan</strong>: $29/month</li>
<li><strong>Shopify Plan</strong>: $79/month</li>
<li><strong>Advanced Plan</strong>: $299/month</li>
<li><strong>Transaction Fees</strong>: 2.9% + 30¢ (Basic)</li>
<li><strong>Apps</strong>: $0-500+/month</li>
<li><strong>Total</strong>: $348-4000+/year</li>
</ul>

<h2>When to Choose WordPress + WooCommerce</h2>

<p>Choose WordPress + WooCommerce if you:</p>
<ul>
<li>Want complete control over your website</li>
<li>Have technical knowledge or budget for developers</li>
<li>Need extensive customization</li>
<li>Want to integrate with existing WordPress site</li>
<li>Prefer lower ongoing costs</li>
<li>Need advanced SEO capabilities</li>
<li>Want to own your data completely</li>
</ul>

<h2>When to Choose Shopify</h2>

<p>Choose Shopify if you:</p>
<ul>
<li>Want to start selling quickly</li>
<li>Prefer all-in-one solution</li>
<li>Don't want to handle technical aspects</li>
<li>Need reliable hosting and security</li>
<li>Want built-in e-commerce features</li>
<li>Plan to scale rapidly</li>
<li>Prefer predictable monthly costs</li>
</ul>

<h2>Conclusion</h2>

<p>Both WordPress + WooCommerce and Shopify are excellent platforms, but they serve different needs:</p>

<ul>
<li><strong>Choose WordPress + WooCommerce</strong> for maximum flexibility, customization, and long-term cost savings if you have technical resources.</li>
<li><strong>Choose Shopify</strong> for ease of use, reliability, and quick setup if you want to focus on business rather than technical details.</li>
</ul>

<p>The best choice depends on your specific business needs, technical capabilities, and long-term goals. Consider starting with Shopify if you're unsure, as it's easier to begin with and you can always migrate later as your needs evolve.</p>
    `,
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
    content: `
<h1>PHP Laravel Best Practices for Modern Web Development</h1>

<p>Laravel has become one of the most popular PHP frameworks, and following best practices is crucial for building maintainable, secure, and performant applications. This guide covers essential practices every Laravel developer should follow.</p>

<h2>Project Structure and Organization</h2>

<h3>1. Follow PSR Standards</h3>
<p>Always follow PSR-4 autoloading and PSR-12 coding standards:</p>

<pre><code class="language-php">&lt;?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::all();
        
        return response()-&gt;json($users);
    }
}</code></pre>

<h3>2. Use Service Classes</h3>
<p>Keep controllers thin by using service classes:</p>

<pre><code class="language-php">// app/Services/UserService.php
&lt;?php

namespace App\\Services;

use App\\Models\\User;
use App\\Mail\\WelcomeEmail;
use Illuminate\\Support\\Facades\\Mail;

class UserService
{
    public function createUser(array $data): User
    {
        $user = User::create($data);
        
        Mail::to($user-&gt;email)-&gt;send(new WelcomeEmail($user));
        
        return $user;
    }
}</code></pre>

<h2>Database Best Practices</h2>

<h3>1. Use Migrations Properly</h3>
<p>Always use migrations for database changes:</p>

<pre><code class="language-php">&lt;?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table-&gt;id();
            $table-&gt;string('name');
            $table-&gt;string('email')-&gt;unique();
            $table-&gt;timestamp('email_verified_at')-&gt;nullable();
            $table-&gt;string('password');
            $table-&gt;rememberToken();
            $table-&gt;timestamps();
            
            $table-&gt;index(['email', 'created_at']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}</code></pre>

<h2>Security Best Practices</h2>

<h3>1. Input Validation</h3>
<p>Always validate and sanitize input:</p>

<pre><code class="language-php">// Form Request Validation
&lt;?php

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' =&gt; 'required|string|max:255',
            'email' =&gt; 'required|email|unique:users,email',
            'password' =&gt; 'required|string|min:8|confirmed',
            'age' =&gt; 'required|integer|min:18|max:120',
        ];
    }
}</code></pre>

<h2>Performance Optimization</h2>

<h3>1. Use Caching Effectively</h3>
<p>Implement caching strategies:</p>

<pre><code class="language-php">use Illuminate\\Support\\Facades\\Cache;

public function getPopularPosts()
{
    return Cache::remember('popular_posts', 3600, function () {
        return Post::with('user')
            -&gt;where('views', '&gt;', 1000)
            -&gt;orderBy('views', 'desc')
            -&gt;take(10)
            -&gt;get();
    });
}</code></pre>

<h2>Conclusion</h2>

<p>Following these Laravel best practices will help you build robust, maintainable, and secure applications. Remember to:</p>

<ol>
<li>Keep your code organized and follow PSR standards</li>
<li>Optimize database queries and use caching effectively</li>
<li>Implement proper security measures</li>
<li>Write comprehensive tests</li>
<li>Handle errors gracefully</li>
<li>Use Laravel's built-in features effectively</li>
</ol>

<p>Regular code reviews, staying updated with Laravel releases, and continuous learning are essential for maintaining high-quality Laravel applications.</p>
    `,
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

export default function BlogPost() {
  const { slug } = useParams()
  const [blogPost, setBlogPost] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setIsClient(true)

    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        setDarkMode(savedTheme === "dark")
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

  useEffect(() => {
    const post = blogPosts.find((post) => post.slug === slug)
    setBlogPost(post)
  }, [slug])

  const handleShare = async () => {
    if (navigator.share && blogPost) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-semibold">Loading Article...</p>
        </div>
      </div>
    )
  }

  if (!blogPost) {
    return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/blogs">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
          </div>
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
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cridtick
                </span>
              </Link>

              <div className="flex items-center space-x-4">
                <Link href="/blogs">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blogs
                  </Button>
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
            </div>
          </nav>
        </header>

        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {blogPost.category}
                </Badge>
                {blogPost.featured && (
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Featured</Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{blogPost.title}</h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>

              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {blogPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{blogPost.author}</p>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {blogPost.views.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={liked ? "default" : "outline"}
                  onClick={() => setLiked(!liked)}
                  className={liked ? "bg-red-500 hover:bg-red-600 text-white" : ""}
                >
                  <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
                  {blogPost.likes + (liked ? 1 : 0)}
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {blogPost.comments} Comments
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className="article-content" />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {blogPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{blogPost.author}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Full-stack web developer specializing in modern web technologies. Passionate about creating
                      efficient, scalable solutions and sharing knowledge with the developer community.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <User className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        More Articles
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Related Articles</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Continue reading with these related posts</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => post.id !== blogPost.id)
                .slice(0, 3)
                .map((post) => (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <Link href={`/blogs/${post.slug}`}>
                          <Button size="sm" variant="outline">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Cridtick</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Expert web development insights, tutorials, and best practices for modern developers.
              </p>
              <div className="border-t border-gray-800 pt-8">
                <p>&copy; {new Date().getFullYear()} Cridtick. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .article-content h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
          color: #1f2937;
        }
        .dark .article-content h1 {
          color: #f9fafb;
        }
        .article-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
          color: #374151;
        }
        .dark .article-content h2 {
          color: #e5e7eb;
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem 0;
          color: #4b5563;
        }
        .dark .article-content h3 {
          color: #d1d5db;
        }
        .article-content p {
          margin: 1rem 0;
          line-height: 1.7;
          color: #6b7280;
        }
        .dark .article-content p {
          color: #9ca3af;
        }
        .article-content ul, .article-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .article-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
          color: #6b7280;
        }
        .dark .article-content li {
          color: #9ca3af;
        }
        .article-content pre {
          background: #f3f4f6;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1.5rem 0;
          overflow-x: auto;
          border: 1px solid #e5e7eb;
        }
        .dark .article-content pre {
          background: #1f2937;
          border-color: #374151;
        }
        .article-content code {
          background: #f3f4f6;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #dc2626;
        }
        .dark .article-content code {
          background: #374151;
          color: #fca5a5;
        }
        .article-content pre code {
          background: transparent;
          padding: 0;
          color: #374151;
        }
        .dark .article-content pre code {
          color: #d1d5db;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
