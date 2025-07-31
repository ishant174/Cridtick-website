"use client"

import { useState, useEffect, useRef } from "react"
import {
  Code2,
  Smartphone,
  Server,
  Globe,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Star,
  Target,
  Shield,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Zap,
  Loader2,
  ChevronDown,
  ChevronUp,
  Database,
  Layers,
  Cpu,
  Award,
  Sparkles,
  Rocket,
  Heart,
  Play,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingContactButton, type FloatingContactButtonRef } from "@/components/floating-contact-button"
import { Notification } from "@/components/notification"
import { sendContactEmail, sendAuditRequest } from "./actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

// Animated Background Component with Moving Code
function AnimatedBackground() {
  const [particles, setParticles] = useState<any[]>([])
  const [codeLines, setCodeLines] = useState<any[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }
    setParticles(newParticles)

    // Generate moving code lines with SEO-focused snippets
    const codeSnippets = [
      "// Shopify Liquid Code",
      "{% for product in collections.all.products %}",
      "{{ product.title | escape }}",
      "{% if product.available %}",
      "// WordPress PHP Code",
      "<?php get_header(); ?>",
      "add_action('wp_head', 'custom_seo');",
      "// Custom PHP Development",
      "class ShopifyAPI {",
      "public function getProducts() {",
      "// React Component",
      "const ShopifyTheme = () => {",
      "useEffect(() => {",
      "// Laravel PHP Framework",
      "$products = Product::all();",
      "Route::get('/api/products');",
      "// WordPress Hooks",
      "add_filter('the_content');",
      "wp_enqueue_script('custom');",
      "// Shopify Theme Development",
      "{% assign cart_total = cart.total_price %}",
      "{{ 'theme.css' | asset_url | stylesheet_tag }}",
      "// PHP MySQL Database",
      "SELECT * FROM products WHERE active = 1",
      "mysqli_query($connection, $sql);",
      "// WordPress Custom Post Types",
      "register_post_type('portfolio');",
      "// Shopify App Development",
      "const shopify = new Shopify({",
      "// Custom Web Development",
      "fetch('/api/shopify/products')",
      ".then(response => response.json())",
      "// E-commerce Solutions",
      "if (user.isAuthenticated) {",
      "addToCart(productId, quantity);",
      "// SEO Optimization",
      "<meta name='description' content=''>",
      "// Performance Optimization",
      "const lazyLoad = new IntersectionObserver();",
    ]

    const newCodeLines = []
    for (let i = 0; i < 15; i++) {
      newCodeLines.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 20 + 10,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 0.5 + 0.7,
      })
    }
    setCodeLines(newCodeLines)
  }, [])

  return (
    <div id="animated-background" className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Matrix-style falling code */}
      <div id="matrix-rain-container" className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="matrix-rain">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`matrix-column-${i}`}
              className="matrix-column"
              style={{
                left: `${i * 4}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              <div className="matrix-char text-green-500 font-mono text-sm">{Math.random() > 0.5 ? "1" : "0"}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Moving Code Lines */}
      <div id="moving-code-lines" className="absolute inset-0">
        {codeLines.map((line) => (
          <div
            key={`code-line-${line.id}`}
            className="absolute font-mono text-blue-500/20 dark:text-blue-400/30 whitespace-nowrap moving-code"
            style={{
              left: `${line.x}%`,
              top: `${line.y}%`,
              fontSize: `${line.size}rem`,
              opacity: line.opacity,
              animationDuration: `${line.speed}s`,
              animationDirection: line.direction > 0 ? "normal" : "reverse",
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div id="floating-code-snippets" className="absolute inset-0">
        <div className="floating-code absolute top-10 left-10 text-purple-500/30 dark:text-purple-400/40 font-mono text-lg animate-float">
          {"{% Shopify Liquid %}"}
        </div>
        <div className="floating-code absolute top-20 right-20 text-cyan-500/30 dark:text-cyan-400/40 font-mono text-base animate-float-delayed">
          {"<?php WordPress ?>"}
        </div>
        <div className="floating-code absolute top-40 left-1/4 text-green-500/30 dark:text-green-400/40 font-mono text-sm animate-float-slow">
          {"// Custom PHP Code"}
        </div>
        <div className="floating-code absolute top-60 right-1/3 text-pink-500/30 dark:text-pink-400/40 font-mono text-lg animate-float">
          {"<React Component />"}
        </div>
        <div className="floating-code absolute bottom-40 left-20 text-yellow-500/30 dark:text-yellow-400/40 font-mono text-base animate-float-delayed">
          {"Laravel Framework"}
        </div>
        <div className="floating-code absolute bottom-60 right-40 text-red-500/30 dark:text-red-400/40 font-mono text-sm animate-float-slow">
          {"E-commerce Solutions"}
        </div>
        <div className="floating-code absolute top-80 left-1/2 text-indigo-500/30 dark:text-indigo-400/40 font-mono text-base animate-float">
          {"Shopify Expert"}
        </div>
        <div className="floating-code absolute bottom-20 left-1/3 text-orange-500/30 dark:text-orange-400/40 font-mono text-lg animate-float-delayed">
          {"Web Development"}
        </div>
      </div>

      {/* Scrolling Code Blocks */}
      <div id="scrolling-code-blocks" className="absolute inset-0">
        <div className="scrolling-code-horizontal top-1/4">
          <div className="code-line text-emerald-500/20 dark:text-emerald-400/30">
            {"// Professional Shopify theme customization and development services"}
          </div>
        </div>
        <div className="scrolling-code-horizontal top-1/2" style={{ animationDelay: "3s" }}>
          <div className="code-line text-violet-500/20 dark:text-violet-400/30">
            {"// Expert WordPress development and custom PHP applications"}
          </div>
        </div>
        <div className="scrolling-code-horizontal top-3/4" style={{ animationDelay: "6s" }}>
          <div className="code-line text-rose-500/20 dark:text-rose-400/30">
            {"// E-commerce solutions and web development services worldwide"}
          </div>
        </div>
      </div>

      {/* Vertical Scrolling Code */}
      <div id="vertical-scrolling-code" className="absolute inset-0">
        <div className="scrolling-code-vertical left-1/4">
          <div className="code-line-vertical text-teal-500/20 dark:text-teal-400/30">
            {"if (user.isAuthenticated) {"}
          </div>
        </div>
        <div className="scrolling-code-vertical right-1/4" style={{ animationDelay: "4s" }}>
          <div className="code-line-vertical text-amber-500/20 dark:text-amber-400/30">{"return response.data;"}</div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div id="grid-pattern" className="absolute inset-0 opacity-5 dark:opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Binary Rain */}
      <div id="binary-rain" className="absolute inset-0 opacity-5 dark:opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-gray-500 dark:text-gray-400 animate-pulse binary-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "01010101" : "11001100"}
          </div>
        ))}
      </div>

      {/* Geometric Code Shapes */}
      <div id="geometric-shapes" className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Animated Particles */}
      <div id="animated-particles" className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="absolute w-1 h-1 bg-blue-500/20 dark:bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed}s`,
            }}
          />
        ))}
      </div>

      {/* Large Code Symbols */}
      <div id="large-code-symbols" className="absolute inset-0">
        <div className="absolute top-32 left-16 text-6xl font-mono text-blue-500/10 dark:text-blue-400/20 animate-pulse symbol-rotate">
          {"</>"}
        </div>
        <div
          className="absolute top-48 right-24 text-5xl font-mono text-purple-500/10 dark:text-purple-400/20 animate-pulse symbol-rotate"
          style={{ animationDelay: "1s" }}
        >
          {"{}"}
        </div>
        <div
          className="absolute bottom-48 left-32 text-4xl font-mono text-green-500/10 dark:text-green-400/20 animate-pulse symbol-rotate"
          style={{ animationDelay: "2s" }}
        >
          {"()"}
        </div>
        <div
          className="absolute bottom-32 right-48 text-5xl font-mono text-cyan-500/10 dark:text-cyan-400/20 animate-pulse symbol-rotate"
          style={{ animationDelay: "0.5s" }}
        >
          {"[]"}
        </div>
        <div
          className="absolute top-64 left-1/2 text-4xl font-mono text-pink-500/10 dark:text-pink-400/20 animate-pulse symbol-rotate"
          style={{ animationDelay: "1.5s" }}
        >
          {"=>"}
        </div>
        <div
          className="absolute bottom-64 right-1/2 text-3xl font-mono text-yellow-500/10 dark:text-yellow-400/20 animate-pulse symbol-rotate"
          style={{ animationDelay: "0.8s" }}
        >
          {"&&"}
        </div>
      </div>
    </div>
  )
}

// Sliding Code Carousel Component - Updated with SEO-focused content
function CodeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const codeExamples = [
    {
      id: 1,
      title: "Shopify Theme Development",
      subtitle: "Custom Shopify Themes & Liquid Code",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      iconBg: "from-green-500 to-emerald-500",
      filename: "sections/product-form.liquid",
      code: [
        { text: "{% comment %} Custom Shopify Theme Development {% endcomment %}", color: "text-gray-400" },
        { text: "{% assign product = products[handle] %}", color: "text-purple-400" },
        { text: "<div class='product-form'>", color: "text-green-400", indent: true },
        { text: "  <h1>{{ product.title | escape }}</h1>", color: "text-cyan-400", indent: true },
        { text: "  <span class='price'>{{ product.price | money }}</span>", color: "text-yellow-400", indent: true },
        { text: "  {% if product.available %}", color: "text-purple-400", indent: true },
        { text: "    <button type='submit'>Add to Cart</button>", color: "text-green-400", indent: true },
        { text: "  {% endif %}", color: "text-purple-400", indent: true },
        { text: "</div>", color: "text-green-400" },
      ],
      stats: [
        { value: "100+", label: "Shopify Stores", color: "text-green-500" },
        { value: "50+", label: "Custom Themes", color: "text-blue-500" },
        { value: "4.9★", label: "Client Rating", color: "text-purple-500" },
      ],
    },
    {
      id: 2,
      title: "WordPress Development",
      subtitle: "Custom WordPress Sites & Plugins",
      icon: <Globe className="w-6 h-6 text-white" />,
      iconBg: "from-blue-500 to-cyan-500",
      filename: "functions.php",
      code: [
        { text: "<?php", color: "text-purple-400" },
        { text: "// Custom WordPress Development", color: "text-gray-400" },
        { text: "function custom_theme_setup() {", color: "text-blue-400", indent: true },
        { text: "  add_theme_support('post-thumbnails');", color: "text-green-400", indent: true },
        { text: "  register_nav_menus(array(", color: "text-cyan-400", indent: true },
        { text: "    'primary' => 'Primary Menu',", color: "text-yellow-400", indent: true },
        { text: "    'footer' => 'Footer Menu'", color: "text-orange-400", indent: true },
        { text: "  ));", color: "text-cyan-400", indent: true },
        { text: "}", color: "text-blue-400" },
        { text: "add_action('after_setup_theme', 'custom_theme_setup');", color: "text-purple-400" },
      ],
      stats: [
        { value: "80+", label: "WP Sites", color: "text-green-500" },
        { value: "25+", label: "Custom Plugins", color: "text-blue-500" },
        { value: "100%", label: "SEO Optimized", color: "text-purple-500" },
      ],
    },
    {
      id: 3,
      title: "PHP Development",
      subtitle: "Custom PHP Applications & Laravel",
      icon: <Server className="w-6 h-6 text-white" />,
      iconBg: "from-purple-500 to-pink-500",
      filename: "app/Http/Controllers/ProductController.php",
      code: [
        { text: "<?php", color: "text-purple-400" },
        { text: "// Laravel PHP Development", color: "text-gray-400" },
        { text: "class ProductController extends Controller {", color: "text-blue-400", indent: true },
        { text: "  public function index() {", color: "text-green-400", indent: true },
        { text: "    $products = Product::with('category')", color: "text-cyan-400", indent: true },
        { text: "                      ->where('active', true)", color: "text-cyan-400", indent: true },
        { text: "                      ->paginate(12);", color: "text-cyan-400", indent: true },
        { text: "    return view('products.index', compact('products'));", color: "text-yellow-400", indent: true },
        { text: "  }", color: "text-green-400", indent: true },
        { text: "}", color: "text-blue-400" },
      ],
      stats: [
        { value: "60+", label: "PHP Projects", color: "text-green-500" },
        { value: "15+", label: "Laravel Apps", color: "text-blue-500" },
        { value: "99%", label: "Uptime", color: "text-purple-500" },
      ],
    },
    {
      id: 4,
      title: "React Development",
      subtitle: "Modern Web Applications",
      icon: <Code2 className="w-6 h-6 text-white" />,
      iconBg: "from-orange-500 to-red-500",
      filename: "components/ShopifyProduct.jsx",
      code: [
        { text: "// React Component for Shopify Integration", color: "text-gray-400" },
        { text: "import React, { useState, useEffect } from 'react';", color: "text-purple-400" },
        { text: "const ShopifyProduct = ({ productId }) => {", color: "text-blue-400", indent: true },
        { text: "  const [product, setProduct] = useState(null);", color: "text-green-400", indent: true },
        { text: "  const [loading, setLoading] = useState(true);", color: "text-cyan-400", indent: true },
        { text: "  useEffect(() => {", color: "text-yellow-400", indent: true },
        { text: "    fetchShopifyProduct(productId)", color: "text-orange-400", indent: true },
        { text: "      .then(setProduct)", color: "text-orange-400", indent: true },
        { text: "      .finally(() => setLoading(false));", color: "text-orange-400", indent: true },
        { text: "  }, [productId]);", color: "text-yellow-400", indent: true },
        {
          text: "  return loading ? <Spinner /> : <ProductCard product={product} />;",
          color: "text-green-400",
          indent: true,
        },
        { text: "};", color: "text-blue-400" },
      ],
      stats: [
        { value: "40+", label: "React Apps", color: "text-green-500" },
        { value: "20+", label: "Next.js Sites", color: "text-blue-500" },
        { value: "Fast", label: "Performance", color: "text-purple-500" },
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % codeExamples.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [codeExamples.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % codeExamples.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + codeExamples.length) % codeExamples.length)
  }

  const currentExample = codeExamples[currentSlide]

  return (
    <div id="code-carousel" className="relative" role="region" aria-label="Web Development Services Showcase">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 overflow-hidden">
        <div className="space-y-6">
          {/* Header with slide animation */}
          <div
            id="carousel-header"
            className="flex items-center space-x-4 transform transition-all duration-500 ease-in-out"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-r ${currentExample.iconBg} rounded-2xl flex items-center justify-center transition-all duration-500`}
            >
              {currentExample.icon}
            </div>
            <div className="transform transition-all duration-500">
              <h3 className="font-bold text-lg">{currentExample.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{currentExample.subtitle}</p>
            </div>
          </div>

          {/* Code Editor with slide animation */}
          <div
            id="carousel-code-editor"
            className="bg-gray-900 rounded-xl p-4 transform transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-400 ml-4">{currentExample.filename}</span>
            </div>
            <div className="space-y-2 text-sm font-mono min-h-[200px]">
              {currentExample.code.map((line, index) => (
                <div
                  key={`code-line-${index}`}
                  className={`${line.color} transform transition-all duration-300 ease-in-out`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    marginLeft: line.indent ? "1rem" : "0",
                  }}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats with slide animation */}
          <div id="carousel-stats" className="grid grid-cols-3 gap-4">
            {currentExample.stats.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="text-center transform transition-all duration-500 ease-in-out"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className={`text-2xl font-bold ${stat.color} transition-colors duration-300`}>{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div id="carousel-nav-prev" className="absolute top-1/2 -translate-y-1/2 left-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="w-8 h-8 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
            aria-label="Previous development service example"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
        <div id="carousel-nav-next" className="absolute top-1/2 -translate-y-1/2 right-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="w-8 h-8 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
            aria-label="Next development service example"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div id="carousel-indicators" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {codeExamples.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-500 w-6" : "bg-gray-400 dark:bg-gray-600"
              }`}
              aria-label={`Go to ${codeExamples[index].title} example`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Testimonials Slider Component
function TestimonialsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: "testimonial-1",
      name: "Patrick McCarty",
      role: "Project Manager",
      company: "CJT Digital",
      content:
        "Ishant did two separate Shopify related projects for me, both of which he executed perfectly. His work was timely, professional and communication was solid. I plan on hiring him again. Thank you!",
      rating: 5,
      avatar: "PM",
      project: "Shopify E-commerce Store",
      technology: "Shopify Theme Customization",
      techColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      result: "100% client satisfaction",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      id: "testimonial-2",
      name: "Mauro Auzinger",
      role: "E-commerce Director",
      company: "Digital Commerce Co.",
      content:
        "I would highly recommend working with Ishant. He's been incredibly fast and efficient with my requests. The quality of work exceeded my expectations and the turnaround time was impressive.",
      rating: 5,
      avatar: "MA",
      project: "Custom Shopify Development",
      technology: "Shopify Liquid & JavaScript",
      techColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      result: "Exceeded expectations",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      id: "testimonial-3",
      name: "Altaf Nadaf",
      role: "Manager",
      company: "RemotiFi",
      content:
        "Working with Ishant on our Shopify store has been an absolute pleasure! He is highly skilled, professional, and delivered exactly what we needed. From designing a user-friendly layout to optimizing the store for conversions, his expertise in Shopify is impressive. Communication was smooth, deadlines were met, and he even provided valuable suggestions to improve our store. Highly recommended for anyone looking for a top-notch Shopify developer!",
      rating: 5,
      avatar: "AN",
      project: "Shopify Store Optimization",
      technology: "Shopify Performance & SEO",
      techColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      result: "Conversion optimization success",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    },
    {
      id: "testimonial-4",
      name: "Muhammad Asim Tahir",
      role: "Founder",
      company: "Haxr IT Solutions",
      content:
        "⭐⭐⭐⭐⭐ Outstanding Shopify Expert – Highly Recommended! Ishant Gupta was an absolute pleasure to work with on my Shopify project. He understood my requirements perfectly and delivered a high-quality, customized Shopify store that exceeded my expectations. Their expertise in theme development, customization, and optimization was evident throughout the project",
      rating: 5,
      avatar: "MT",
      project: "Custom Shopify Theme",
      technology: "Shopify Theme Development",
      techColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      result: "Outstanding Shopify expert",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-10 left-10 w-72 h-72 bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} opacity-10 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r ${currentTestimonialData.gradientTo} ${currentTestimonialData.gradientFrom} opacity-10 rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Testimonial Card */}
      <div className="relative z-10">
        <Card
          className={`bg-gradient-to-br ${currentTestimonialData.bgGradient} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/10"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <CardContent className="p-12 relative z-10">
            {/* Rating Stars */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3">
                {Array.from({ length: currentTestimonialData.rating }).map((_, i) => (
                  <Star
                    key={`star-${i}`}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="text-center mb-8">
              <div
                className={`text-6xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent mb-4 opacity-30`}
              >
                "
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto">
                {currentTestimonialData.content}
              </blockquote>
              <div
                className={`text-6xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent mt-4 opacity-30 rotate-180 inline-block`}
              >
                "
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-300`}
                >
                  {currentTestimonialData.avatar}
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-2xl text-gray-800 dark:text-gray-200">{currentTestimonialData.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{currentTestimonialData.role}</p>
                  <p className="text-gray-500 dark:text-gray-500 font-medium">{currentTestimonialData.company}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="text-center">
                <div className="flex flex-col gap-3 mb-3">
                  <Badge className={`${currentTestimonialData.techColor} text-lg px-4 py-2 font-semibold`}>
                    {currentTestimonialData.technology}
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-lg px-4 py-2 font-semibold">
                    {currentTestimonialData.project}
                  </Badge>
                </div>
                <p
                  className={`text-2xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent`}
                >
                  {currentTestimonialData.result}
                </p>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent mb-2`}
                >
                  5.0★
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Rating</div>
              </div>
              <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent mb-2`}
                >
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
              </div>
              <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} bg-clip-text text-transparent mb-2`}
                >
                  On Time
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Delivery</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-12 space-x-8">
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} text-white border-0 hover:scale-110 transition-all duration-300 shadow-lg`}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} text-white border-0 hover:scale-110 transition-all duration-300 shadow-lg`}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? `bg-gradient-to-r ${currentTestimonialData.gradientFrom} ${currentTestimonialData.gradientTo} w-12`
                  : "bg-gray-300 dark:bg-gray-600 w-3 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* All Testimonials Preview */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              index === currentTestimonial
                ? `bg-gradient-to-br ${testimonial.bgGradient} shadow-xl border-2 border-gradient-to-r ${testimonial.gradientFrom} ${testimonial.gradientTo}`
                : "bg-white/80 dark:bg-gray-800/80 hover:shadow-lg"
            }`}
            onClick={() => setCurrentTestimonial(index)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{testimonial.content}</p>
              <Badge className={`${testimonial.techColor} text-xs mt-3`}>{testimonial.technology}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// FAQ Component
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "What Shopify development services do you offer?",
      answer:
        "We offer comprehensive Shopify services including custom theme development, theme customization, Shopify store setup, app integration, performance optimization, bug fixes, and ongoing maintenance. We specialize in Liquid templating, custom functionality, and e-commerce optimization.",
    },
    {
      id: 2,
      question: "Can you fix my existing Shopify theme issues?",
      answer:
        "Yes! We specialize in fixing Shopify theme issues, bugs, and customization problems. Whether it's layout issues, functionality problems, mobile responsiveness, or performance issues, our Shopify experts can diagnose and resolve any theme-related problems quickly.",
    },
    {
      id: 3,
      question: "Do you develop custom WordPress websites?",
      answer:
        "We create custom WordPress websites, themes, plugins, and provide WordPress maintenance services. We also work with WooCommerce for e-commerce solutions, custom post types, and advanced functionality tailored to your business needs.",
    },
    {
      id: 4,
      question: "What PHP frameworks and technologies do you work with?",
      answer:
        "We work with various PHP frameworks including Laravel, CodeIgniter, and custom PHP development. We build web applications, REST APIs, database-driven solutions, and integrate with third-party services. We're experienced with MySQL, PostgreSQL, and modern PHP practices.",
    },
    {
      id: 5,
      question: "How long does it take to complete a web development project?",
      answer:
        "Project timelines vary based on complexity. Simple Shopify theme customizations take 1-3 days, custom themes take 1-2 weeks, WordPress sites take 1-3 weeks, and complex PHP applications take 2-8 weeks. We provide detailed timelines during consultation.",
    },
    {
      id: 6,
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes! We offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backup services, bug fixes, and technical support. We also provide emergency support for critical issues and regular health checks.",
    },
    {
      id: 7,
      question: "Can you help migrate my website to a new platform?",
      answer:
        "Definitely! We handle website migrations including Shopify to Shopify Plus, WordPress migrations, platform switches, and data transfers. We ensure zero downtime, preserve SEO rankings, and maintain all functionality during the migration process.",
    },
    {
      id: 8,
      question: "What makes your Shopify development services different?",
      answer:
        "We're Shopify experts with 100+ successful projects, 4.9★ rating, and deep knowledge of Liquid templating, Shopify APIs, and e-commerce best practices. We focus on performance, conversion optimization, and creating stores that drive sales and provide excellent user experience.",
    },
    {
      id: 9,
      question: "Do you offer SEO optimization for websites?",
      answer:
        "Yes! We include SEO optimization in all our projects - proper HTML structure, meta tags, site speed optimization, mobile responsiveness, and schema markup. For advanced SEO strategies and ongoing optimization, we offer specialized SEO packages.",
    },
    {
      id: 10,
      question: "How much do your web development services cost?",
      answer:
        "Costs vary based on project complexity and requirements. Shopify customizations start from $200, custom themes from $800, WordPress sites from $500, and PHP applications from $1,000. We provide detailed quotes after understanding your specific needs and requirements.",
    },
    {
      id: 11,
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients worldwide and have experience with international e-commerce requirements, multiple currencies, languages, and time zones. We maintain clear communication and provide support across different time zones.",
    },
    {
      id: 12,
      question: "What if I need changes after the project is completed?",
      answer:
        "We provide 30 days of free minor changes and bug fixes after project completion. For major changes or new features, we offer competitive rates and quick turnaround times. We're always available to help your website evolve with your business needs.",
    },
  ]

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <Card key={faq.id} className="overflow-hidden">
          <CardContent className="p-0">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
              {openFAQ === faq.id ? (
                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openFAQ === faq.id && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function Portfolio() {
  // Initialize dark mode with proper SSR handling
  const [darkMode, setDarkMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true)

    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // First, check localStorage for saved preference
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        setDarkMode(savedTheme === "dark")
        return
      }

      // If no saved preference, check system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true)
      }
    }
  }, [])

  // Save theme preference and apply to document
  useEffect(() => {
    if (!isClient) return

    // Save preference to localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light")

    // Apply theme to document root
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode, isClient])

  // Add system theme change listener
  useEffect(() => {
    if (!isClient) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem("theme")
      if (!savedTheme) {
        setDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [isClient])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState({
    success: false,
    message: "",
    loading: false,
    showNotification: false,
  })
  const contactFormRef = useRef<HTMLElement>(null)
  const floatingContactRef = useRef<FloatingContactButtonRef>(null)

  const handleContactFormOpen = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactButtonClick = () => {
    // Scroll to contact section
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
    // Also show floating contact options
    setTimeout(() => {
      floatingContactRef.current?.openContactOptions()
    }, 500)
  }

  const handleCloseNotification = () => {
    setFormState((prev) => ({ ...prev, showNotification: false }))
  }

  // Navigation items - Updated to include Blogs
  const navigationItems = [
    { name: "Home", href: "#home-section" },
    { name: "Services", href: "#services-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "Free Audit", href: "#website-audit-section" },
    { name: "Platforms", href: "#social-proof-section" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "#faq-section" },
    { name: "Contact", href: "#contact-section" },
  ]

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-semibold">Loading Cridtick...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        id="app-container"
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden"
      >
        {/* Animated Coding Background */}
        <AnimatedBackground />

        {/* Floating Contact Button */}
        <FloatingContactButton ref={floatingContactRef} onContactFormOpen={handleContactFormOpen} />

        {/* Notification */}
        <Notification
          message={formState.message}
          type={formState.success ? "success" : "error"}
          isVisible={formState.showNotification}
          onClose={handleCloseNotification}
        />

        {/* Main Content */}
        <main id="main-content" className="relative z-10">
          {/* Header/Navigation */}
          <header
            id="site-header"
            className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b"
          >
            <nav
              id="main-navigation"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <div id="site-logo" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Cridtick
                  </span>
                </div>

                {/* Desktop Navigation */}
                <div id="desktop-nav" className="hidden md:flex space-x-8">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          className="hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href} className="hover:text-blue-600 transition-colors">
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Header Actions */}
                <div id="header-actions" className="flex items-center space-x-4">
                  <Button
                    id="theme-toggle"
                    variant="ghost"
                    size="icon"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </Button>
                  <Button
                    id="header-cta-button"
                    className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600"
                    onClick={handleContactButtonClick}
                  >
                    Hire Now
                  </Button>
                  <Button
                    id="mobile-menu-toggle"
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden border-t py-4">
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        {item.href.startsWith("#") ? (
                          <a
                            href={item.href}
                            className="block hover:text-blue-600"
                            onClick={(e) => {
                              e.preventDefault()
                              setMobileMenuOpen(false)
                              document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: "smooth" })
                            }}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                    <Button
                      id="mobile-cta-button"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        handleContactButtonClick()
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              )}
            </nav>
          </header>

          {/* Hero Section */}
          <section id="home-section" className="pt-20 min-h-screen flex items-center" role="banner">
            <div id="hero-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Hero Content */}
                <div id="hero-content" className="transform transition-all duration-1000 ease-out">
                  <div id="hero-badge" className="mb-6">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full animate-pulse">
                      🏆 Expert Shopify Developer & Web Development Services
                    </Badge>
                  </div>

                  <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="text-gray-900 dark:text-white animate-fade-in-up">Shopify Expert.</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                      WordPress Pro.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                      PHP Developer!
                    </span>
                  </h1>

                  <p
                    id="hero-description"
                    className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-up animation-delay-600"
                  >
                    🚀 Top-rated Shopify developer with 200+ successful projects. Custom Shopify themes, WordPress
                    websites, PHP applications, and e-commerce solutions. 4.9★ rating on Upwork. Get professional web
                    development services that drive results!
                  </p>

                  <div
                    id="hero-actions"
                    className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-800"
                  >
                    <Button
                      id="hero-primary-cta"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 transform hover:scale-105 transition-all duration-300"
                      onClick={handleContactButtonClick}
                    >
                      Hire me Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      id="hero-secondary-cta"
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 bg-transparent hover:scale-105 transition-all duration-300"
                      onClick={() => window.open("https://calendly.com/itsishantgupta/project-discussioon", "_blank")}
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Schedule Call
                    </Button>
                  </div>

                  {/* Hero Stats */}
                  <div id="hero-stats" className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-1000">
                    <div className="text-center transform hover:scale-110 transition-all duration-300">
                      <div className="text-3xl font-bold text-blue-600 animate-counter">200+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="text-center transform hover:scale-110 transition-all duration-300">
                      <div className="text-3xl font-bold text-purple-600 animate-counter">120+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                    </div>
                    <div className="text-center transform hover:scale-110 transition-all duration-300">
                      <div className="text-3xl font-bold text-green-600 animate-counter">4.9★</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Hero Carousel */}
                <div
                  id="hero-carousel"
                  className="relative transform transition-all duration-1000 ease-out animation-delay-400"
                >
                  <CodeCarousel />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Completely Redesigned */}
          <section id="services-section" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 animate-bounce">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Our Expertise</span>
                  <Rocket className="w-5 h-5" />
                </div>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Expert Shopify & Web
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-text">
                    Development Services
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  From custom Shopify themes to WordPress sites and PHP applications - we deliver professional web
                  development solutions that drive growth and exceed expectations
                </p>
              </div>

              {/* Featured Services Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-20">
                {/* Primary Service - Shopify */}
                <div className="lg:col-span-2 group">
                  <Card className="h-full bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          🏆 Most Popular
                        </Badge>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4">Shopify Development Expert</h3>
                      <p className="text-green-100 text-lg mb-6 leading-relaxed">
                        🚀 Professional Shopify developer with 100+ successful stores. Custom theme development, Shopify
                        theme customization, bug fixes, app integrations, and performance optimization. Top-rated on
                        Upwork with 4.9★ rating!
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">100+</div>
                          <div className="text-green-200 text-sm">Shopify Stores</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">4.9★</div>
                          <div className="text-green-200 text-sm">Upwork Rating</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {[
                          "Shopify Theme Customization",
                          "Liquid Templating",
                          "Shopify Plus",
                          "Custom Apps",
                          "Bug Fixes",
                          "Performance Optimization",
                        ].map((tech) => (
                          <Badge key={tech} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="bg-white text-green-600 hover:bg-green-50 font-semibold group-hover:scale-105 transition-all duration-300"
                        onClick={handleContactButtonClick}
                      >
                        Start Shopify Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Secondary Service - WordPress */}
                <div className="group">
                  <Card className="h-full bg-gradient-to-br from-blue-500 to-cyan-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Globe className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">WordPress Development</h3>
                      <p className="text-blue-100 mb-4 leading-relaxed">
                        Custom WordPress websites, themes, plugins, and WooCommerce e-commerce solutions with SEO
                        optimization.
                      </p>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                        <div className="text-xl font-bold text-white">80+</div>
                        <div className="text-blue-200 text-sm">WordPress Sites</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Custom Themes", "WooCommerce", "SEO Ready"].map((tech) => (
                          <Badge key={tech} className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold group-hover:scale-105 transition-all duration-300"
                        onClick={handleContactButtonClick}
                      >
                        Get WordPress Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    icon: <Server className="w-6 h-6" />,
                    title: "PHP Development",
                    description: "Custom PHP applications, Laravel framework, and database-driven solutions",
                    gradient: "from-purple-500 to-indigo-600",
                    projects: "60+",
                    technologies: ["PHP 8+", "Laravel", "MySQL"],
                  },
                  {
                    icon: <Code2 className="w-6 h-6" />,
                    title: "React Development",
                    description: "Modern React applications with Next.js, TypeScript, and responsive design",
                    gradient: "from-blue-600 to-cyan-600",
                    projects: "40+",
                    technologies: ["React 18", "Next.js", "TypeScript"],
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: "API Development",
                    description: "RESTful APIs, GraphQL endpoints, and third-party integrations",
                    gradient: "from-green-500 to-teal-600",
                    projects: "45+",
                    technologies: ["REST API", "GraphQL", "JWT"],
                  },
                  {
                    icon: <Layers className="w-6 h-6" />,
                    title: "E-commerce Solutions",
                    description: "Complete online stores with payment gateways and inventory management",
                    gradient: "from-orange-500 to-red-600",
                    projects: "120+",
                    technologies: ["Shopify", "WooCommerce", "Payments"],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                    <CardContent className="p-6 relative z-10">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>

                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="font-bold text-blue-600">{service.projects}</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white group-hover:scale-105 transition-all duration-300`}
                          onClick={handleContactButtonClick}
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Technology Stack Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                <Card className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl transform -translate-x-24 translate-y-24"></div>

                  <CardContent className="p-12 relative z-10">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6">
                        <Award className="w-5 h-5" />
                        <span className="font-semibold">Complete Technology Stack</span>
                        <Cpu className="w-5 h-5" />
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Powered by Modern Tech</h3>
                      <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions
                        that grow with your business
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                      {[
                        {
                          icon: <Globe className="w-8 h-8" />,
                          title: "Shopify Expert",
                          description: "Liquid, Theme Development, Apps, Shopify Plus",
                          color: "from-green-400 to-emerald-500",
                        },
                        {
                          icon: <Globe className="w-8 h-8" />,
                          title: "WordPress Pro",
                          description: "Custom Themes, Plugins, WooCommerce, SEO",
                          color: "from-blue-400 to-cyan-500",
                        },
                        {
                          icon: <Server className="w-8 h-8" />,
                          title: "PHP Developer",
                          description: "Laravel, Custom PHP, MySQL, APIs",
                          color: "from-purple-400 to-indigo-500",
                        },
                        {
                          icon: <Code2 className="w-8 h-8" />,
                          title: "Frontend",
                          description: "React, Next.js, TypeScript, Tailwind CSS",
                          color: "from-orange-400 to-red-500",
                        },
                      ].map((category, index) => (
                        <div key={index} className="text-center group">
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                          >
                            <div className="text-white">{category.icon}</div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-3">{category.title}</h4>
                          <p className="text-blue-100 text-sm leading-relaxed">{category.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                      {[
                        { number: "200+", label: "Total Projects", icon: <Rocket className="w-6 h-6" /> },
                        { number: "15+", label: "Technologies", icon: <Layers className="w-6 h-6" /> },
                        { number: "4.9★", label: "Upwork Rating", icon: <Star className="w-6 h-6" /> },
                        { number: "100%", label: "Success Rate", icon: <Heart className="w-6 h-6" /> },
                      ].map((stat, index) => (
                        <div key={index} className="group">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                            <div className="text-white">{stat.icon}</div>
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.number}
                          </div>
                          <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={handleContactButtonClick}
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                    onClick={() => window.open("https://calendly.com/itsishantgupta/project-discussioon", "_blank")}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                  Free consultation • No commitment • Expert advice
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials-section" className="py-20 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
            <div id="testimonials-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div id="testimonials-header" className="text-center mb-16">
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4">
                  ⭐ Client Success Stories
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Shopify & Web Development Results</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  See how we've helped businesses achieve remarkable growth with expert Shopify development, WordPress
                  sites, and custom web solutions.
                </p>
              </div>

              <TestimonialsSlider />
            </div>
          </section>

          {/* Free Website Audit Section */}
          <section id="website-audit-section" className="py-20 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 mb-4">
                  🔧 Free Technical Audit
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Is Your Shopify Store or Website Broken?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get a comprehensive technical analysis of your Shopify store, WordPress site, or any website's issues,
                  bugs, and customization opportunities - absolutely free!
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Audit Form */}
                <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Technical Report</h3>
                    <form
                      id="audit-form"
                      className="space-y-6"
                      action={async (formData) => {
                        setFormState({ success: false, message: "", loading: true, showNotification: false })

                        try {
                          const result = await sendAuditRequest(formData)

                          setFormState({
                            success: result.success,
                            message: result.message,
                            loading: false,
                            showNotification: true,
                          })

                          // Reset form if successful
                          if (result.success) {
                            const form = document.getElementById("audit-form") as HTMLFormElement
                            form?.reset()
                          }
                        } catch (error) {
                          console.error("Audit form submission error:", error)
                          setFormState({
                            success: false,
                            message: "An unexpected error occurred. Please try again.",
                            loading: false,
                            showNotification: true,
                          })
                        }
                      }}
                    >
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Website URL</label>
                        <Input
                          type="url"
                          name="websiteUrl"
                          placeholder="https://yourshopifystore.com"
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <Input type="text" name="auditName" placeholder="John Doe" className="h-12" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Business Email</label>
                        <Input
                          type="email"
                          name="auditEmail"
                          placeholder="john@company.com"
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Main Issue</label>
                        <select
                          name="mainIssue"
                          className="w-full h-12 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                          required
                        >
                          <option value="">What's your main concern?</option>
                          <option value="shopify-theme-broken">Shopify Theme Not Working</option>
                          <option value="website-broken">Website Not Working Properly</option>
                          <option value="slow-loading">Site Loading Too Slow</option>
                          <option value="outdated-design">Outdated Design/Layout</option>
                          <option value="mobile-issues">Mobile Compatibility Issues</option>
                          <option value="need-customization">Need Custom Features</option>
                          <option value="security-concerns">Security Concerns</option>
                          <option value="shopify-optimization">Shopify Store Optimization</option>
                        </select>
                      </div>
                      <Button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 h-12 text-lg font-semibold disabled:opacity-50"
                      >
                        {formState.loading ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending Audit Request...
                          </>
                        ) : (
                          <>
                            Get My Free Technical Audit
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ⚡ Delivered within 24 hours • 🔧 Technical issue analysis • 🔒 100% confidential
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* What You'll Get */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">What You'll Discover:</h3>
                  </div>

                  {[
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Shopify Theme Issues",
                      desc: "Identify broken Shopify theme elements, Liquid code errors, and customization problems",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "Performance Issues",
                      desc: "Find what's making your Shopify store or website slow and how to fix it",
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Security Vulnerabilities",
                      desc: "Discover outdated plugins, themes, and potential security risks",
                      color: "from-red-500 to-pink-500",
                    },
                    {
                      icon: <Smartphone className="w-6 h-6" />,
                      title: "Mobile Compatibility",
                      desc: "See how your site displays on different devices and screen sizes",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: <Code2 className="w-6 h-6" />,
                      title: "Customization Opportunities",
                      desc: "Identify areas where custom features could improve functionality and conversions",
                      color: "from-purple-500 to-indigo-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mt-8">
                    <div className="flex items-center space-x-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span className="font-bold text-blue-800 dark:text-blue-200">Bonus: Fix Priority List</span>
                    </div>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      You'll receive a prioritized list of technical fixes with estimated time and complexity for each
                      issue, plus recommendations for Shopify optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">24-Hour Delivery</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quick technical analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">100% Free</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">No hidden costs</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">Shopify Expert</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">By experienced developers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section id="social-proof-section" className="py-20 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
                  🌍 Trusted Worldwide
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Available on Multiple Platforms</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Find us on Upwork and connect with 200+ satisfied clients across various platforms for Shopify
                  development and web services
                </p>
              </div>

              {/* Upwork Highlight */}
              <div className="max-w-4xl mx-auto mb-16">
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                            <Globe className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">
                              🏆 Top Rated on Upwork
                            </h3>
                            <p className="text-green-600 dark:text-green-400">Shopify Expert Freelancer</p>
                          </div>
                        </div>
                        <p className="text-green-700 dark:text-green-300 mb-6">
                          We maintain a strong presence on Upwork with excellent client reviews and a proven track
                          record of delivering quality Shopify development and web development projects with 100% job
                          success score.
                        </p>
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() =>
                            window.open("https://www.upwork.com/freelancers/~0144664f70febd1d18", "_blank")
                          }
                        >
                          View Upwork Profile
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Job Success Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Shopify Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Average Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">Top</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Rated Badge</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Platform Availability */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-8">Find Us On</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Upwork</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Top Rated Shopify Developer with 100% Job Success Score and 4.9★ rating
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open("https://www.upwork.com/freelancers/~0144664f70febd1d18", "_blank")}
                      >
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Direct Contact</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Get in touch directly for custom Shopify projects and web development
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        Contact Us
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Schedule Call</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Book a free consultation to discuss your Shopify or web development project
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open("https://calendly.com/itsishantgupta/project-discussioon", "_blank")}
                      >
                        Book Call
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-section" className="py-20 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4">
                  ❓ Frequently Asked Questions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Shopify & Web Development Questions Answered</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need to know about our Shopify development, WordPress, PHP, and web development
                  services
                </p>
              </div>

              <FAQSection />
            </div>
          </section>

          {/* Contact Section */}
          <section ref={contactFormRef} id="contact-section" className="py-20 backdrop-blur-sm">
            <div id="contact-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div id="contact-header" className="text-center mb-16">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4">
                  📞 Get In Touch
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Contact our Shopify experts and web development team today. Let's create something amazing together
                  with professional development services.
                </p>
              </div>

              <div id="contact-content" className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div id="contact-info" className="space-y-8">
                  <div id="contact-email" className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-gray-600 dark:text-gray-300">myuworkacc174@gmail.com</p>
                    </div>
                  </div>
                  <div id="contact-phone" className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600 dark:text-gray-300">+91 7018512123 (Available on WhatsApp)</p>
                    </div>
                  </div>
                  <div id="contact-location" className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Serving Clients Worldwide</p>
                    </div>
                  </div>

                  <div id="contact-social" className="pt-8">
                    <p className="font-semibold mb-4">Follow Us</p>
                    <div className="flex space-x-4">
                      <Button
                        id="social-github"
                        variant="outline"
                        size="icon"
                        className="hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                        onClick={() => window.open("https://github.com/ishant174/Cridtick-website", "_blank")}
                        aria-label="Visit our GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        id="social-linkedin"
                        variant="outline"
                        size="icon"
                        className="hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                        onClick={() => window.open("https://www.linkedin.com/in/ishant-gupta-3055a0227/", "_blank")}
                        aria-label="Visit our LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        id="social-twitter"
                        variant="outline"
                        size="icon"
                        className="hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                        onClick={() => window.open("https://x.com/itsishantgupta", "_blank")}
                        aria-label="Visit our Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <Card id="contact-form-card" className="shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form
                      id="contact-form"
                      action={async (formData) => {
                        setFormState({ success: false, message: "", loading: true, showNotification: false })

                        try {
                          const result = await sendContactEmail(formData)

                          setFormState({
                            success: result.success,
                            message: result.message,
                            loading: false,
                            showNotification: true,
                          })

                          // Reset form if successful
                          if (result.success) {
                            const form = document.getElementById("contact-form") as HTMLFormElement
                            form?.reset()
                          }
                        } catch (error) {
                          console.error("Form submission error:", error)
                          setFormState({
                            success: false,
                            message: "An unexpected error occurred. Please try again.",
                            loading: false,
                            showNotification: true,
                          })
                        }
                      }}
                      className="space-y-6"
                    >
                      <div id="name-fields" className="grid md:grid-cols-2 gap-4">
                        <div id="first-name-field">
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name
                          </label>
                          <Input id="firstName" name="firstName" placeholder="John" className="h-12" required />
                        </div>
                        <div id="last-name-field">
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name
                          </label>
                          <Input id="lastName" name="lastName" placeholder="Doe" className="h-12" required />
                        </div>
                      </div>
                      <div id="email-field">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          type="email"
                          className="h-12"
                          required
                        />
                      </div>
                      <div id="company-field">
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input id="company" name="company" placeholder="Your Company" className="h-12" />
                      </div>
                      <div id="project-type-field">
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="w-full h-12 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                          required
                        >
                          <option value="">Select a project type</option>
                          <option value="Shopify Theme Development">Shopify Theme Development</option>
                          <option value="Shopify Theme Customization">Shopify Theme Customization</option>
                          <option value="Shopify Store Setup">Shopify Store Setup</option>
                          <option value="WordPress Development">WordPress Development</option>
                          <option value="PHP Development">PHP Development</option>
                          <option value="E-commerce Development">E-commerce Development</option>
                          <option value="Website Bug Fixes">Website Bug Fixes</option>
                          <option value="Custom Development">Custom Development</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div id="message-field">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Project Details
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your Shopify store, website requirements, or development needs..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        id="form-submit-button"
                        type="submit"
                        disabled={formState.loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-lg font-semibold disabled:opacity-50"
                      >
                        {formState.loading ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="site-footer" className="py-12 bg-gray-900 text-white">
          <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="footer-content" className="grid md:grid-cols-4 gap-8">
              <div id="footer-brand" className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Cridtick</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Cridtick is a professional Shopify developer and web development company specializing in custom
                  Shopify themes, WordPress development, PHP applications, and e-commerce solutions that drive business
                  growth.
                </p>
                <div id="footer-social" className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => window.open("https://github.com/cridtick", "_blank")}
                    aria-label="Visit our GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => window.open("https://linkedin.com/company/cridtick", "_blank")}
                    aria-label="Visit our LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => window.open("https://twitter.com/cridtick", "_blank")}
                    aria-label="Visit our Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div id="footer-services">
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#website-audit-section" className="hover:text-white transition-colors">
                      Free Technical Audit
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-white transition-colors">
                      Shopify Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-white transition-colors">
                      WordPress Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-white transition-colors">
                      PHP Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="hover:text-white transition-colors">
                      E-commerce Solutions
                    </a>
                  </li>
                </ul>
              </div>
              <div id="footer-company">
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#home-section" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials-section" className="hover:text-white transition-colors">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#social-proof-section" className="hover:text-white transition-colors">
                      Platforms
                    </a>
                  </li>
                  <li>
                    <Link href="/blogs" className="hover:text-white transition-colors">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <a href="#faq-section" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="footer-bottom" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Cridtick. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
