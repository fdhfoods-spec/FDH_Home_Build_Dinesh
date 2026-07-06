"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  AppWindow,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Heart,
  MapPin,
  PackageCheck,
  PlayCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Truck,
  UserRound,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  "Home",
  "Shop",
  "Categories",
  "Home Chef",
  "Subscription",
  "Become Vendor",
  "About",
  "Contact",
];

const benefits = [
  "Fresh Daily",
  "Local Vendors",
  "Hygienic Packaging",
  "Scheduled Delivery",
  "Quality Guaranteed",
];

const searchSuggestions = [
  "Chicken",
  "Mutton",
  "Fish",
  "Vegetables",
  "Fruits",
  "Milk",
  "Eggs",
  "Snacks",
];

const categoryCards = [
  { emoji: "🐔", title: "Chicken", blurb: "Fresh-cut & hormone-safe" },
  { emoji: "🐐", title: "Mutton", blurb: "Tender premium cuts" },
  { emoji: "🐟", title: "Seafood", blurb: "Morning catch specials" },
  { emoji: "🥬", title: "Vegetables", blurb: "Farm-picked same day" },
  { emoji: "🍎", title: "Fruits", blurb: "Seasonal handpicked fruits" },
  { emoji: "🥛", title: "Dairy", blurb: "Pure milk and essentials" },
  { emoji: "🥚", title: "Eggs", blurb: "Free-range & protein rich" },
  { emoji: "🍱", title: "Ready to Cook", blurb: "Prep kits in minutes" },
  { emoji: "🍛", title: "Home Chef Meals", blurb: "Authentic local recipes" },
  { emoji: "🏪", title: "Grocery", blurb: "Daily home essentials" },
];

const featuredProducts = [
  {
    name: "Farm Fresh Chicken Curry Cut",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80",
    weights: ["500g", "1kg", "1.5kg"],
    freshness: "Processed Today",
    price: "₹299",
    oldPrice: "₹349",
    rating: "4.8",
    vendor: "Green Valley Meats",
    delivery: "Today 7:00 PM",
  },
  {
    name: "Wild Catch Seer Fish Steaks",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80",
    weights: ["250g", "500g", "1kg"],
    freshness: "Cold Chain Assured",
    price: "₹549",
    oldPrice: "₹620",
    rating: "4.9",
    vendor: "Harbor Fresh Seafood",
    delivery: "Tomorrow 9:00 AM",
  },
  {
    name: "Organic Vegetable Essentials Box",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
    weights: ["3kg Box", "5kg Box"],
    freshness: "Harvested This Morning",
    price: "₹399",
    oldPrice: "₹459",
    rating: "4.7",
    vendor: "Namma Local Farms",
    delivery: "Today 6:30 PM",
  },
  {
    name: "A2 Desi Cow Milk",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80",
    weights: ["500ml", "1L", "2L"],
    freshness: "Morning Milking",
    price: "₹96",
    oldPrice: "₹110",
    rating: "4.9",
    vendor: "Misty Hill Dairy",
    delivery: "Tomorrow 6:00 AM",
  },
];

const fdhDifferentiators = [
  {
    title: "Verified Local Vendor Marketplace",
    description:
      "FDH connects you with independent neighborhood vendors with transparent profiles, ratings, and sourcing details.",
  },
  {
    title: "Trusted Home Chef Ecosystem",
    description:
      "Discover authentic homemade meals from verified local home chefs with clear menus, hygiene ratings, and delivery slots.",
  },
  {
    title: "Scheduled Freshness Delivery",
    description:
      "Instead of rush delivery compromises, FDH follows smart scheduled slots to preserve product quality and reduce waste.",
  },
  {
    title: "Quality-First Packaging Protocol",
    description:
      "Temperature-aware, hygienic packaging and strict quality checks ensure your order arrives as fresh as intended.",
  },
];

const chooseFDH = [
  {
    title: "Fresh Every Day",
    description: "Delivered directly from verified vendors with live freshness checks.",
    icon: Sparkles,
  },
  {
    title: "Verified Vendors",
    description: "Every vendor undergoes quality and compliance verification.",
    icon: ShieldCheck,
  },
  {
    title: "Scheduled Delivery",
    description: "Pick your preferred slot and receive groceries when you need them.",
    icon: CalendarClock,
  },
  {
    title: "Premium Packaging",
    description: "Safe, hygienic and temperature-controlled packaging by category.",
    icon: PackageCheck,
  },
];

const homeChefs = [
  {
    name: "Chef Ananya Rao",
    cuisine: "South Indian",
    menu: "Ragi dosa, stew, podi idli",
    rating: "4.9",
    slots: "12:00 PM · 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Chef Sana Malik",
    cuisine: "North Indian",
    menu: "Butter chicken, dal makhani, roti",
    rating: "4.8",
    slots: "1:00 PM · 9:00 PM",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Chef Priya Menon",
    cuisine: "Coastal",
    menu: "Fish curry, neer dosa, coconut rice",
    rating: "4.9",
    slots: "12:30 PM · 7:30 PM",
    image:
      "https://images.unsplash.com/photo-1583394293214-28a5b39f8d5f?auto=format&fit=crop&w=700&q=80",
  },
];

const subscriptionPlans = [
  {
    title: "Weekly Plan",
    price: "₹999",
    detail: "Perfect for singles and couples",
    perks: ["Priority delivery", "5% exclusive discounts", "Curated fresh picks"],
  },
  {
    title: "Monthly Plan",
    price: "₹2,999",
    detail: "Ideal for regular households",
    perks: ["Free delivery", "8% member discounts", "Personalized offers"],
    featured: true,
  },
  {
    title: "Family Plan",
    price: "₹5,499",
    detail: "Built for family-sized baskets",
    perks: ["Priority support", "10% savings", "Chef + grocery bundles"],
  },
];

const seasonalOffers = [
  {
    title: "Fresh Mango Season",
    subtitle: "Alphonso, Banganapalli & local favorites",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weekend Meat Festival",
    subtitle: "Premium cuts, smarter prices, cleaner prep",
    image:
      "https://images.unsplash.com/photo-1602470521008-f4a4f7109a18?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fresh Seafood Friday",
    subtitle: "Morning catch delivered by evening slots",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Farm Fresh Vegetables",
    subtitle: "Straight from local farms to your home",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80",
  },
];

const howItWorks = [
  { title: "Choose Products", description: "Select from fresh categories and curated bundles." },
  { title: "Schedule Delivery", description: "Pick a convenient time slot for your day." },
  { title: "Fresh Packing", description: "Quality checks and hygienic packing before dispatch." },
  { title: "Delivered to Your Door", description: "Reliable delivery from trusted local partners." },
];

const testimonials = [
  {
    name: "Ritika S.",
    location: "Bangalore",
    review:
      "FDH feels premium — the fish quality and delivery timing are always perfect. It finally feels like food shopping done right.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Aman T.",
    location: "Hyderabad",
    review:
      "The scheduled model is a game changer. No rushed packing, no compromises — just fresh and clean groceries every time.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Madhavi N.",
    location: "Chennai",
    review:
      "I love discovering verified home chefs nearby. The meals taste homemade and authentic, unlike regular delivery apps.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Vikram P.",
    location: "Mumbai",
    review:
      "The produce quality and packaging standards are genuinely better than instant-delivery apps. Worth every rupee.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
];

const trustBadges = [
  { icon: CheckCircle2, label: "Fresh Guarantee" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: BadgeCheck, label: "Verified Vendors" },
  { icon: ShieldCheck, label: "FSSAI Compliant" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: PackageCheck, label: "100% Quality Check" },
];

const faqs = [
  {
    q: "How fresh is the meat?",
    a: "FDH partners with verified vendors who follow strict same-day processing and cold-chain logistics. Every batch carries freshness metadata.",
  },
  {
    q: "Can I schedule delivery?",
    a: "Yes. You can choose preferred time slots during checkout to match your daily routine and receive optimized freshness.",
  },
  {
    q: "Do you support subscriptions?",
    a: "Absolutely. Weekly, monthly, and family plans include savings, priority delivery, and personalized offers.",
  },
  {
    q: "How do refunds work?",
    a: "If any order does not meet quality standards, raise a request in-app within 24 hours and our support team resolves it quickly.",
  },
  {
    q: "Can I become a home chef?",
    a: "Yes. FDH welcomes verified local home chefs. Apply through the Home Chef onboarding form and complete quality verification.",
  },
];

const footerLinks = {
  Company: ["About", "Careers", "Blog", "Contact"],
  Customer: ["Orders", "Track Order", "Refund", "Support"],
  Business: ["Vendor", "Home Chef", "Corporate", "Affiliate"],
  Legal: ["Privacy", "Terms", "Refund Policy"],
};

function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={cn("space-y-3", center && "text-center")}>
      <Badge className={cn("w-fit", center && "mx-auto")} variant="default">
        {eyebrow}
      </Badge>
      <h2 className="font-[var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base text-[var(--fdh-muted)] sm:text-lg">{description}</p>
    </div>
  );
}

function AnimatedCounter({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const duration = 1000;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-[var(--fdh-primary)]">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[var(--fdh-muted)]">{label}</p>
    </div>
  );
}

export function FdhHomepage() {
  const [productsReady, setProductsReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.4], [0, -55]);

  useEffect(() => {
    const timer = window.setTimeout(() => setProductsReady(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const duplicatedOffers = useMemo(
    () => [...seasonalOffers, ...seasonalOffers],
    [],
  );
  const duplicatedReviews = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <div className="bg-[var(--fdh-background)] text-[var(--fdh-text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--fdh-border)]/70 fdh-glass">
        <div className="fdh-section-shell flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-[var(--fdh-primary)] text-lg text-white shadow-lg">
              🍃
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">FDH</p>
              <p className="text-xs text-[var(--fdh-muted)]">Fresh. Trusted. Delivered.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="text-sm font-medium text-[var(--fdh-muted)] transition-colors hover:text-[var(--fdh-primary)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="secondary" className="hidden sm:inline-flex">
              <MapPin className="size-4" />
              Select Location
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <UserRound className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden py-16 sm:py-24">
          <div className="fdh-section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge>Fresh Direct Home</Badge>
              <h1 className="font-[var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Farm Fresh Delivered to Your Doorstep
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--fdh-muted)]">
                Fresh meat, seafood, vegetables, fruits and daily essentials from trusted
                local vendors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="secondary" size="lg">
                  Become a Home Chef
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-3 py-2"
                  >
                    <Check className="size-4 text-[var(--fdh-primary)]" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: heroParallax }} className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[var(--fdh-border)] bg-[var(--fdh-section)] p-4 shadow-[var(--fdh-shadow)]">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                  alt="Fresh vegetables, seafood and essentials in reusable bags"
                  width={1200}
                  height={800}
                  className="h-[420px] w-full rounded-3xl object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -left-4 top-8 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-4 py-3 shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-[var(--fdh-muted)]">Today&apos;s Fresh Picks</p>
                <p className="text-sm font-bold">132 New Arrivals</p>
              </motion.div>
              <motion.div
                className="absolute -right-3 top-16 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-4 py-3 shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="flex items-center gap-1 text-sm font-bold">
                  <Star className="size-4 fill-[var(--fdh-secondary)] text-[var(--fdh-secondary)]" />
                  4.9 Rating
                </p>
              </motion.div>
              <motion.div
                className="absolute -left-8 bottom-8 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-4 py-3 shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-sm font-semibold">100% Fresh Guarantee</p>
              </motion.div>
              <motion.div
                className="absolute right-8 bottom-4 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-4 py-3 shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-sm font-semibold">Scheduled Delivery</p>
              </motion.div>

              <motion.div
                className="absolute -top-3 right-16 text-3xl"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                🍅
              </motion.div>
              <motion.div
                className="absolute bottom-5 left-1/2 text-3xl"
                animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                🥬
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-8" id="shop">
          <div className="fdh-section-shell">
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--fdh-muted)]" />
                  <Input
                    className="h-14 pl-11 text-base"
                    placeholder="What are you looking for today?"
                    aria-label="Search products"
                  />
                </div>
                <Button size="lg">Search</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {searchSuggestions.map((item) => (
                  <button
                    key={item}
                    className="rounded-full border border-[var(--fdh-border)] bg-[var(--fdh-section)] px-3 py-1 text-sm text-[var(--fdh-muted)] transition hover:border-[var(--fdh-primary)]/30 hover:text-[var(--fdh-primary)]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="categories" className="py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Shop by Category"
              title="Curated Categories for Daily Freshness"
              description="Everything from protein picks to ready-to-cook kits, sourced from trusted local partners."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categoryCards.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <Card className="fdh-card-hover h-full p-5">
                    <div className="text-4xl">{category.emoji}</div>
                    <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
                    <p className="mt-2 text-sm text-[var(--fdh-muted)]">{category.blurb}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Featured Products"
                title="Premium Fresh Picks from Verified Sellers"
                description="Large-format product cards with transparent vendor details, freshness labels, and smart scheduling."
              />
              <Button variant="secondary">
                Explore Full Shop
                <ChevronRight className="size-4" />
              </Button>
            </div>

            {productsReady ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product, idx) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <Card className="fdh-card-hover overflow-hidden">
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={640}
                          height={420}
                          className="h-52 w-full object-cover"
                        />
                        <button
                          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-[var(--fdh-muted)] shadow-sm transition hover:text-rose-500"
                          aria-label={`Save ${product.name}`}
                        >
                          <Heart className="size-4" />
                        </button>
                      </div>
                      <CardContent className="space-y-4 p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base font-semibold leading-snug">{product.name}</h3>
                          <Badge variant="secondary" className="shrink-0">
                            {product.freshness}
                          </Badge>
                        </div>
                        <select
                          className="w-full rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-section)] px-3 py-2 text-sm"
                          defaultValue={product.weights[0]}
                          aria-label={`${product.name} weight selector`}
                        >
                          {product.weights.map((weight) => (
                            <option key={weight} value={weight}>
                              {weight}
                            </option>
                          ))}
                        </select>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xl font-bold">{product.price}</p>
                            <p className="text-sm text-[var(--fdh-muted)] line-through">
                              {product.oldPrice}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="flex items-center justify-end gap-1 text-sm font-semibold">
                              <Star className="size-4 fill-[var(--fdh-secondary)] text-[var(--fdh-secondary)]" />
                              {product.rating}
                            </p>
                            <p className="text-xs text-[var(--fdh-muted)]">{product.vendor}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[var(--fdh-muted)]">
                          <span className="flex items-center gap-1">
                            <Clock3 className="size-3.5" />
                            {product.delivery}
                          </span>
                          <span className="text-[var(--fdh-primary)]">Verified Vendor</span>
                        </div>
                        <Button className="w-full">Add to Cart</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Card key={idx} className="overflow-hidden">
                    <div className="fdh-skeleton h-52 w-full" />
                    <div className="space-y-3 p-5">
                      <div className="fdh-skeleton h-5 rounded-lg" />
                      <div className="fdh-skeleton h-5 w-3/4 rounded-lg" />
                      <div className="fdh-skeleton h-10 rounded-xl" />
                      <div className="fdh-skeleton h-10 rounded-xl" />
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="fdh-section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="bg-gradient-to-br from-[var(--fdh-accent)] to-white p-8 dark:to-[var(--fdh-surface)]">
              <Badge variant="secondary">Why FDH Is Different</Badge>
              <h3 className="mt-4 font-[var(--font-playfair)] text-3xl font-bold">
                Built as a quality-first marketplace, not a speed race
              </h3>
              <p className="mt-4 text-[var(--fdh-muted)]">
                FDH is designed as a trusted local food ecosystem with transparent sourcing,
                verified sellers, and smarter scheduled delivery — unlike ultra-fast inventory
                models.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--fdh-text)]">
                {[
                  "Support local businesses and home entrepreneurs",
                  "Transparent vendor and origin information",
                  "AI-based recommendations & seasonal curation ready",
                  "Lower waste via scheduled delivery operations",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--fdh-primary)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {fdhDifferentiators.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Card className="h-full p-6 fdh-card-hover">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--fdh-muted)]">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Why Choose FDH"
              title="Trust, freshness, and transparency at every step"
              description="A premium operational model designed for quality-conscious households."
              center
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {chooseFDH.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="fdh-card-hover h-full p-6">
                    <item.icon className="size-10 rounded-2xl bg-[var(--fdh-accent)] p-2 text-[var(--fdh-primary)]" />
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--fdh-muted)]">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="home-chef" className="py-16">
          <div className="fdh-section-shell space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Home Chef Marketplace"
                title="Support Local Home Chefs"
                description="Order authentic homemade food prepared by verified home chefs in your neighbourhood."
              />
              <Button variant="accent">Apply as Chef</Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {homeChefs.map((chef, idx) => (
                <motion.div
                  key={chef.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="fdh-card-hover overflow-hidden">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      width={600}
                      height={420}
                      className="h-52 w-full object-cover"
                    />
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold">{chef.name}</h3>
                          <p className="text-sm text-[var(--fdh-muted)]">{chef.cuisine}</p>
                        </div>
                        <Badge variant="secondary">
                          <Star className="mr-1 size-3 fill-current" />
                          {chef.rating}
                        </Badge>
                      </div>
                      <p className="text-sm text-[var(--fdh-muted)]">Today&apos;s menu: {chef.menu}</p>
                      <p className="text-sm">
                        <span className="font-medium">Delivery Slots:</span> {chef.slots}
                      </p>
                      <Button className="w-full">Order Home Chef Meal</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="subscription" className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Subscription Plans"
              title="Recurring freshness with smarter savings"
              description="Flexible plans with benefits that scale with your household needs."
              center
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {subscriptionPlans.map((plan) => (
                <Card
                  key={plan.title}
                  className={cn(
                    "fdh-card-hover p-6",
                    plan.featured &&
                      "border-[var(--fdh-primary)] bg-gradient-to-b from-[var(--fdh-accent)] to-[var(--fdh-surface)]",
                  )}
                >
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="mt-2 text-3xl font-bold">{plan.price}</p>
                  <p className="mt-1 text-sm text-[var(--fdh-muted)]">{plan.detail}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[var(--fdh-primary)]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">Subscribe</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Seasonal Offers"
              title="Fresh campaigns that celebrate what&apos;s in season"
              description="Rotating premium promotions for produce, proteins, and curated bundles."
            />
            <div className="overflow-hidden rounded-[24px] border border-[var(--fdh-border)] py-4">
              <motion.div
                className="flex gap-4 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {duplicatedOffers.map((offer, idx) => (
                  <Card key={`${offer.title}-${idx}`} className="min-w-[320px] max-w-[320px] overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      width={640}
                      height={400}
                      className="h-40 w-full object-cover"
                    />
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold">{offer.title}</h3>
                      <p className="mt-1 text-sm text-[var(--fdh-muted)]">{offer.subtitle}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="How It Works"
              title="Simple 4-step freshness journey"
              description="Built for convenience without sacrificing quality."
              center
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, idx) => (
                <Card key={step.title} className="relative p-6">
                  <span className="text-sm font-semibold text-[var(--fdh-primary)]">
                    Step {idx + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--fdh-muted)]">{step.description}</p>
                  {idx < howItWorks.length - 1 && (
                    <ChevronRight className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-[var(--fdh-muted)] lg:block" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Customer Reviews"
              title="Loved by families who care about quality"
              description="Real feedback from households using FDH for everyday freshness."
            />
            <div className="overflow-hidden rounded-[24px] border border-[var(--fdh-border)] py-4">
              <motion.div
                className="flex gap-4 px-4"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                {duplicatedReviews.map((review, idx) => (
                  <Card key={`${review.name}-${idx}`} className="min-w-[320px] max-w-[320px] p-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={52}
                        height={52}
                        className="size-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-[var(--fdh-muted)]">{review.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1 text-[var(--fdh-secondary)]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--fdh-muted)]">
                      {review.review}
                    </p>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Mobile App"
                title="Shop Anytime Anywhere"
                description="Track scheduled deliveries, reorder staples, and discover home chef menus from your phone."
              />
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="min-w-40 justify-center">
                  <PlayCircle className="size-4" />
                  App Store
                </Button>
                <Button variant="secondary" size="lg" className="min-w-40 justify-center">
                  <AppWindow className="size-4" />
                  Google Play
                </Button>
              </div>
            </div>
            <Card className="relative mx-auto w-full max-w-md overflow-hidden p-8">
              <div className="mx-auto w-56 rounded-[34px] border border-[var(--fdh-border)] bg-[var(--fdh-section)] p-3">
                <div className="overflow-hidden rounded-[28px] border border-[var(--fdh-border)] bg-white dark:bg-black/35">
                  <Image
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=700&q=80"
                    alt="FDH mobile app interface mockup"
                    width={500}
                    height={900}
                    className="h-[360px] w-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute right-5 top-6 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-3 py-2 text-xs shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <p className="font-semibold">Live order tracking</p>
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-5 rounded-2xl border border-[var(--fdh-border)] bg-[var(--fdh-surface)] px-3 py-2 text-xs shadow-[var(--fdh-shadow)]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity }}
              >
                <p className="font-semibold">Chef meals nearby</p>
              </motion.div>
            </Card>
          </div>
        </section>

        <section id="become-vendor" className="py-16">
          <div className="fdh-section-shell">
            <Card className="overflow-hidden border-[var(--fdh-primary)]/25 bg-gradient-to-r from-[var(--fdh-accent)] to-[var(--fdh-surface)] p-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <Badge variant="secondary">Vendor Program</Badge>
                  <h3 className="mt-4 font-[var(--font-playfair)] text-3xl font-bold">
                    Become an FDH Vendor
                  </h3>
                  <p className="mt-3 max-w-xl text-[var(--fdh-muted)]">
                    Join a quality-first local marketplace and grow with customers who value
                    trust, freshness, and transparent sourcing.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Reach thousands of customers",
                      "Simple onboarding",
                      "Easy inventory management",
                      "Fast payouts",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <Store className="size-4 text-[var(--fdh-primary)]" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button size="lg" className="min-w-52">
                    Register as Vendor
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-[var(--fdh-section)] py-16">
          <div className="fdh-section-shell space-y-10">
            <SectionHeading
              eyebrow="Trust Markers"
              title="Safety, verification, and compliance built in"
              description="A platform designed for confidence from order to doorstep."
              center
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Card className="flex items-center gap-3 p-5">
                    <badge.icon className="size-5 text-[var(--fdh-primary)]" />
                    <span className="font-medium">{badge.label}</span>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-8 rounded-[24px] border border-[var(--fdh-border)] bg-[var(--fdh-surface)] p-8 sm:grid-cols-3">
              <AnimatedCounter label="Verified Vendors" value={1200} suffix="+" />
              <AnimatedCounter label="Fresh Deliveries" value={98000} suffix="+" />
              <AnimatedCounter label="Average Satisfaction" value={99} suffix="%" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="fdh-section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Questions? We&apos;ve got fresh answers."
                description="Everything you need to know about quality, scheduling, subscriptions, and onboarding."
              />
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`item-${idx}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="pb-16">
          <div className="fdh-section-shell">
            <Card className="bg-gradient-to-r from-[var(--fdh-primary)] to-[var(--fdh-secondary)] p-8 text-white sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <Badge className="bg-white/20 text-white">Newsletter</Badge>
                  <h3 className="mt-4 font-[var(--font-playfair)] text-3xl font-bold">
                    Stay Fresh with FDH
                  </h3>
                  <p className="mt-2 max-w-xl text-white/85">
                    Get seasonal collections, chef specials, and premium member offers in your
                    inbox.
                  </p>
                </div>
                <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="border-white/25 bg-white/15 text-white placeholder:text-white/75"
                  />
                  <Button
                    variant="secondary"
                    className="border-white/40 bg-white text-[var(--fdh-primary)] hover:bg-white/90"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--fdh-border)] bg-[var(--fdh-section)] py-14">
        <div className="fdh-section-shell space-y-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="grid size-9 place-items-center rounded-2xl bg-[var(--fdh-primary)] text-white">
                  🍃
                </div>
                <span className="text-lg font-bold">FDH</span>
              </div>
              <p className="text-sm text-[var(--fdh-muted)]">
                Premium farm-to-home marketplace connecting families with trusted local vendors
                and verified home chefs.
              </p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Sparkles className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                  <Truck className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <PlayCircle className="size-4" />
                </Button>
              </div>
            </div>

            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-3 font-semibold">{heading}</h4>
                <ul className="space-y-2 text-sm text-[var(--fdh-muted)]">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[var(--fdh-primary)]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--fdh-border)] pt-6 text-sm text-[var(--fdh-muted)]">
            © {new Date().getFullYear()} Fresh Direct Home. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
