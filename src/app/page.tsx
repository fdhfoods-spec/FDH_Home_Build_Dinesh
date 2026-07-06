"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  Bike,
  CalendarClock,
  ChefHat,
  Clock3,
  CreditCard,
  Fish,
  Heart,
  Leaf,
  LocateIcon,
  MapPin,
  Milk,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Truck,
  User,
} from "lucide-react";
import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const benefits = [
  "Fresh Daily",
  "Local Vendors",
  "Hygienic Packaging",
  "Scheduled Delivery",
  "Quality Guaranteed",
];

const categories = [
  { icon: "🐔", title: "Chicken" },
  { icon: "🐐", title: "Mutton" },
  { icon: "🐟", title: "Seafood" },
  { icon: "🥬", title: "Vegetables" },
  { icon: "🍎", title: "Fruits" },
  { icon: "🥛", title: "Dairy" },
  { icon: "🥚", title: "Eggs" },
  { icon: "🍱", title: "Ready to Cook" },
  { icon: "🍛", title: "Home Chef Meals" },
  { icon: "🏪", title: "Grocery" },
];

const featuredProducts = [
  {
    name: "Farm Fresh Chicken Breast",
    weight: "500g",
    price: "₹289",
    oldPrice: "₹329",
    rating: "4.8",
    vendor: "Green Valley Meats",
    eta: "Today 6:30 PM",
    freshness: "Packed 2 hours ago",
    emoji: "🍗",
  },
  {
    name: "Coastal Premium Sea Bass",
    weight: "1kg",
    price: "₹649",
    oldPrice: "₹749",
    rating: "4.9",
    vendor: "Blue Tide Seafood",
    eta: "Today 7:00 PM",
    freshness: "Morning Catch",
    emoji: "🐟",
  },
  {
    name: "Residue-Free Veggie Box",
    weight: "2kg",
    price: "₹399",
    oldPrice: "₹459",
    rating: "4.7",
    vendor: "Organic Roots Farm",
    eta: "Tomorrow 8:00 AM",
    freshness: "Harvested Today",
    emoji: "🥬",
  },
  {
    name: "A2 Full Cream Cow Milk",
    weight: "1L",
    price: "₹89",
    oldPrice: "₹99",
    rating: "4.8",
    vendor: "Happy Hills Dairy",
    eta: "Tomorrow 6:00 AM",
    freshness: "Same Day Chilling",
    emoji: "🥛",
  },
];

const whyFDH = [
  {
    title: "Fresh Every Day",
    description: "Delivered directly from verified vendors with no warehouse lag.",
    icon: Leaf,
  },
  {
    title: "Verified Vendors",
    description: "Every seller is quality checked and source transparent.",
    icon: Store,
  },
  {
    title: "Scheduled Delivery",
    description: "Pick your ideal slot for maximum freshness and convenience.",
    icon: CalendarClock,
  },
  {
    title: "Premium Packaging",
    description: "Hygienic, temperature-controlled and quality sealed packaging.",
    icon: ShieldCheck,
  },
];

const chefs = [
  {
    name: "Chef Aarthi",
    cuisine: "South Indian",
    menu: "Millet Idli, Coconut Chutney, Sambar",
    rating: "4.9",
    slots: "6 PM - 9 PM",
  },
  {
    name: "Chef Bilal",
    cuisine: "Mughlai",
    menu: "Chicken Nihari, Sheermal, Kebab Platter",
    rating: "4.8",
    slots: "7 PM - 10 PM",
  },
  {
    name: "Chef Meera",
    cuisine: "Healthy Bowls",
    menu: "Quinoa Bowl, Stir Fry Veggies, Citrus Salad",
    rating: "4.9",
    slots: "12 PM - 3 PM",
  },
];

const plans = [
  {
    title: "Weekly Plan",
    price: "₹499",
    subtitle: "Best for fresh weekly restocks",
    perks: ["Priority delivery", "5% member discounts", "Freshness guarantee"],
  },
  {
    title: "Monthly Plan",
    price: "₹1499",
    subtitle: "Most popular family choice",
    perks: ["Free delivery", "10% exclusive discounts", "Seasonal bundles"],
    highlighted: true,
  },
  {
    title: "Family Plan",
    price: "₹2499",
    subtitle: "Built for larger households",
    perks: [
      "Priority support",
      "Personalized offers",
      "Chef recommendations",
    ],
  },
];

const seasonalOffers = [
  "Fresh Mango Season",
  "Weekend Meat Festival",
  "Fresh Seafood Friday",
  "Farm Fresh Vegetables",
];

const steps = [
  { title: "Choose Products", icon: ShoppingBag },
  { title: "Schedule Delivery", icon: Clock3 },
  { title: "Fresh Packing", icon: ShieldCheck },
  { title: "Delivered to Your Door", icon: Truck },
];

const reviews = [
  {
    name: "Nandini R",
    location: "Bengaluru",
    review:
      "FDH is the only app where my fish actually arrives fresh as promised. The vendor info builds complete trust.",
  },
  {
    name: "Arjun K",
    location: "Chennai",
    review:
      "Scheduled delivery changed everything for us. No rushed delivery, just quality groceries that last longer.",
  },
  {
    name: "Saira M",
    location: "Hyderabad",
    review:
      "The Home Chef section is amazing. We discovered authentic local meals and support home entrepreneurs too.",
  },
  {
    name: "Vikram P",
    location: "Coimbatore",
    review:
      "Feels premium, reliable and thoughtful. Packaging is excellent and meat quality is top notch every time.",
  },
];

const trustBadges = [
  "Fresh Guarantee",
  "Secure Payments",
  "Verified Vendors",
  "FSSAI Compliant",
  "Fast Delivery",
  "100% Quality Check",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-fdh-border/90 bg-white/80 backdrop-blur-md dark:bg-[#030712]/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-fdh-green text-white">
              <Leaf className="size-5" />
            </div>
            <span className="text-lg font-semibold">FDH</span>
          </div>

          <ul className="hidden items-center gap-5 text-sm font-medium lg:flex">
            {[
              "Home",
              "Shop",
              "Categories",
              "Home Chef",
              "Subscription",
              "Become Vendor",
              "About",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-[#374151] transition hover:text-fdh-green dark:text-slate-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="secondary" size="sm" className="hidden sm:flex">
              <MapPin className="size-4" />
              Chennai
            </Button>
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingBag />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <User />
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-b from-[#f7fff7] via-white to-[#f8f9fa] px-4 py-20 dark:from-[#03130a] dark:via-[#030712] dark:to-[#0b1220] sm:px-6 lg:px-8"
        >
          <motion.div
            style={{ y: heroParallax }}
            className="pointer-events-none absolute -left-10 top-20 size-28 rounded-full bg-fdh-accent blur-2xl"
          />
          <motion.div
            style={{ y: heroParallax }}
            className="pointer-events-none absolute right-10 top-12 size-32 rounded-full bg-[#FFF4E5] blur-2xl dark:bg-fdh-orange/20"
          />

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-5">
                <Sparkles className="mr-1 size-3.5" />
                Fresh. Trusted. Delivered.
              </Badge>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#111827] dark:text-white sm:text-5xl lg:text-6xl">
                Farm Fresh Delivered to Your Doorstep
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#4B5563] dark:text-slate-300 sm:text-lg">
                Fresh meat, seafood, vegetables, fruits and daily essentials from
                trusted local vendors.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="secondary" size="lg">
                  Become a Home Chef
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {benefits.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 rounded-full border border-fdh-border bg-white px-3 py-1.5 text-sm text-[#374151] shadow-sm dark:bg-[#0f172a] dark:text-slate-100"
                  >
                    <BadgeCheck className="size-4 text-fdh-green" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[28px] border border-fdh-border bg-white/70 p-6 shadow-[0_20px_50px_rgb(15_23_42/0.1)] backdrop-blur dark:bg-[#0f172a]/80"
            >
              <div className="grid h-[420px] place-items-center rounded-[22px] bg-gradient-to-br from-[#E8F5E9] via-[#fff] to-[#FFF4E5] p-6 text-6xl dark:from-[#123722] dark:via-[#111827] dark:to-[#3b2206]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {["🥬", "🍗", "🐟", "🍎", "🥛", "🛍️"].map((icon, idx) => (
                    <motion.span
                      key={icon}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: idx * 0.2,
                      }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0">
                {[
                  "Today's Fresh Picks",
                  "4.9 Rating",
                  "100% Fresh Guarantee",
                  "Scheduled Delivery",
                ].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.12 }}
                    className={`absolute rounded-2xl border border-fdh-border bg-white/90 px-3 py-2 text-xs font-semibold shadow-md dark:bg-[#111827]/95 ${
                      i === 0
                        ? "left-3 top-3"
                        : i === 1
                          ? "right-3 top-16"
                          : i === 2
                            ? "left-5 bottom-24"
                            : "right-5 bottom-10"
                    }`}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[24px] border border-fdh-border bg-fdh-section p-5 shadow-[0_12px_34px_rgb(15_23_42/0.07)] dark:bg-[#0b1220]">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Input placeholder="What are you looking for today?" className="h-14 pl-12" />
                  <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#6B7280]" />
                </div>
                <Button size="lg">Search</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Chicken",
                  "Mutton",
                  "Fish",
                  "Vegetables",
                  "Fruits",
                  "Milk",
                  "Eggs",
                  "Snacks",
                ].map((item) => (
                  <Badge key={item} variant="outline" className="rounded-full py-1.5">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Premium Categories"
              subtitle="Discover essentials curated from trusted neighborhood vendors."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <Card className="group h-full p-6">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#6B7280] dark:text-slate-300">
                      Freshly sourced from verified local suppliers.
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Featured Products"
              subtitle="Quality-first picks with transparent vendor details and freshness tracking."
            />

            <div className="mt-6 flex items-center gap-3">
              <p className="text-sm font-medium text-[#4B5563] dark:text-slate-200">
                Personalizing your recommendations...
              </p>
              <div className="h-3 w-24 animate-pulse rounded-full bg-fdh-accent" />
              <div className="h-3 w-14 animate-pulse rounded-full bg-fdh-accent" />
              <div className="h-3 w-18 animate-pulse rounded-full bg-fdh-accent" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative grid h-44 place-items-center bg-gradient-to-br from-fdh-accent via-white to-[#FFF4E5] text-6xl dark:from-[#123722] dark:via-[#111827] dark:to-[#3c2508]">
                      {item.emoji}
                      <Badge className="absolute left-4 top-4">{item.freshness}</Badge>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute right-4 top-4 size-9 rounded-full"
                        aria-label={`Favorite ${item.name}`}
                      >
                        <Heart className="size-4" />
                      </Button>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{item.name}</CardTitle>
                      <CardDescription>Weight: {item.weight}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-[#111827] dark:text-white">
                          {item.price}
                        </span>
                        <span className="text-sm text-[#6B7280] line-through">{item.oldPrice}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#4B5563] dark:text-slate-200">
                        <Star className="size-4 fill-[#F57C00] text-[#F57C00]" />
                        {item.rating} • {item.vendor}
                      </div>
                      <div className="text-sm text-[#4B5563] dark:text-slate-200">
                        Delivery: {item.eta}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Why Choose FDH"
              subtitle="Built as a premium local food marketplace, not a rushed quick-commerce app."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {whyFDH.map((item) => (
                <Card key={item.title} className="h-full p-6">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-fdh-accent text-fdh-green dark:bg-fdh-green/20">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#4B5563] dark:text-slate-300">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="home-chef" className="bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Support Local Home Chefs"
              subtitle="Order authentic homemade food prepared by verified home chefs in your neighbourhood."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {chefs.map((chef) => (
                <Card key={chef.name} className="overflow-hidden">
                  <div className="flex items-center justify-between border-b border-fdh-border bg-gradient-to-r from-[#E8F5E9] to-[#FFF4E5] p-5 dark:from-[#123722] dark:to-[#3a250a]">
                    <div>
                      <p className="text-base font-semibold">{chef.name}</p>
                      <p className="text-sm text-[#4B5563] dark:text-slate-200">{chef.cuisine}</p>
                    </div>
                    <div className="grid size-12 place-items-center rounded-full bg-white text-2xl shadow-sm dark:bg-[#0f172a]">
                      👩‍🍳
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-sm text-[#4B5563] dark:text-slate-200">
                      <span className="font-semibold text-[#1F2937] dark:text-white">
                        Today&apos;s menu:
                      </span>{" "}
                      {chef.menu}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-[#4B5563] dark:text-slate-200">
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-4 fill-[#F57C00] text-[#F57C00]" />
                        {chef.rating}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="size-4 text-fdh-green" />
                        {chef.slots}
                      </span>
                    </div>
                    <Button className="mt-6 w-full">Order</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="secondary" size="lg">
                <ChefHat className="size-4" />
                Apply as Chef
              </Button>
            </div>
          </div>
        </section>

        <section id="subscription" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Subscription Plans"
              subtitle="Designed for families who want predictable freshness, savings and convenience."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.title}
                  className={`h-full p-6 ${plan.highlighted ? "border-fdh-green shadow-[0_18px_40px_rgb(46_125_50/0.2)]" : ""}`}
                >
                  <p className="text-sm font-semibold text-fdh-green">{plan.title}</p>
                  <p className="mt-3 text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-2 text-sm text-[#4B5563] dark:text-slate-300">{plan.subtitle}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-[#4B5563] dark:text-slate-200">
                        <BadgeCheck className="mt-0.5 size-4 text-fdh-green" />
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

        <section className="overflow-hidden bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Seasonal Offers"
              subtitle="Curated campaigns based on produce cycles, local festivals and meal moments."
            />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mt-8 flex w-max gap-4"
            >
              {[...seasonalOffers, ...seasonalOffers].map((offer, idx) => (
                <Card key={`${offer}-${idx}`} className="w-[300px] shrink-0 p-6">
                  <Badge variant="secondary">{idx % 2 === 0 ? "Limited Time" : "Trending"}</Badge>
                  <h3 className="mt-4 text-xl font-semibold">{offer}</h3>
                  <p className="mt-2 text-sm text-[#4B5563] dark:text-slate-300">
                    Explore premium selections with freshness-first fulfillment.
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="How It Works"
              subtitle="A simple, quality-focused flow that prioritizes freshness over rush delivery."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {steps.map((step, idx) => (
                <div key={step.title} className="relative">
                  <Card className="h-full p-6">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-fdh-accent text-fdh-green dark:bg-fdh-green/20">
                      <step.icon className="size-5" />
                    </div>
                    <p className="mt-4 text-base font-semibold">{step.title}</p>
                    <p className="mt-2 text-sm text-[#4B5563] dark:text-slate-300">
                      Step {idx + 1}
                    </p>
                  </Card>
                  {idx !== steps.length - 1 ? (
                    <div className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-fdh-green md:block">
                      <ArrowRight className="size-5" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Customer Reviews"
              subtitle="Trusted by families who value freshness, transparency and local sourcing."
            />
            <motion.div
              className="mt-8 flex w-max gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <Card key={`${review.name}-${index}`} className="w-[320px] shrink-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-fdh-accent text-fdh-green">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-xs text-[#6B7280] dark:text-slate-300">{review.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="size-4 fill-[#F57C00] text-[#F57C00]" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4B5563] dark:text-slate-200">
                    {review.review}
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-fdh-border bg-gradient-to-r from-[#E8F5E9] via-[#F8F9FA] to-[#FFF4E5] p-8 dark:from-[#123722] dark:via-[#0b1220] dark:to-[#3b2206] lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge className="mb-3">Mobile App</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">Shop Anytime Anywhere</h2>
              <p className="mt-4 max-w-xl text-[#4B5563] dark:text-slate-200">
                Discover vendor stories, seasonal recommendations and repeat your
                weekly essentials in one tap.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="secondary">
                  <Apple className="size-4" />
                  App Store
                </Button>
                <Button variant="secondary">
                  <Bike className="size-4" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="grid place-items-center">
              <div className="w-full max-w-[280px] rounded-[26px] border border-white/70 bg-white/70 p-4 shadow-lg backdrop-blur dark:border-white/15 dark:bg-[#111827]/80">
                <div className="rounded-[20px] bg-white p-4 shadow-inner dark:bg-[#0f172a]">
                  <div className="mb-3 h-4 w-24 rounded-full bg-fdh-accent" />
                  <div className="space-y-2">
                    {["🍗", "🐟", "🥬"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-fdh-border bg-white px-3 py-2 dark:bg-[#111827]"
                      >
                        <span className="text-xl">{item}</span>
                        <span className="h-2 w-16 rounded-full bg-fdh-accent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="become-vendor" className="bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-fdh-border bg-white p-8 dark:bg-[#0f172a]">
            <SectionHeading
              title="Become an FDH Vendor"
              subtitle="Grow with a trusted platform built for quality-first local commerce."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Reach thousands of customers",
                "Simple onboarding",
                "Easy inventory management",
                "Fast payouts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-fdh-border bg-fdh-section p-4 text-sm font-medium dark:bg-[#111827]"
                >
                  {item}
                </div>
              ))}
            </div>
            <Button className="mt-6">Register as Vendor</Button>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Trust & Compliance"
              subtitle="Every order is protected with strict sourcing, safety and payment standards."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustBadges.map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-5 text-fdh-green" />
                    <p className="font-semibold">{item}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-4 rounded-[24px] border border-fdh-border bg-fdh-section p-6 dark:bg-[#0b1220] md:grid-cols-4">
              {[
                { label: "Verified Vendors", value: "1,200+" },
                { label: "Average Rating", value: "4.9" },
                { label: "Cities Served", value: "18" },
                { label: "On-time Scheduled Deliveries", value: "98%" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-semibold text-fdh-green">{item.value}</p>
                  <p className="mt-1 text-sm text-[#4B5563] dark:text-slate-200">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-fdh-section px-4 py-16 dark:bg-[#0b1220] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="FAQ" subtitle="Everything you need to know before your first order." />
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              <AccordionItem value="freshness">
                <AccordionTrigger>How fresh is the meat?</AccordionTrigger>
                <AccordionContent>
                  FDH uses scheduled procurement and cold-chain packaging so meat is
                  typically packed within hours of dispatch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="schedule">
                <AccordionTrigger>Can I schedule delivery?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can choose exact slots during checkout to match your routine.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="subscription">
                <AccordionTrigger>Do you support subscriptions?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Weekly, monthly and family plans offer recurring deliveries
                  with member-only savings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refund">
                <AccordionTrigger>How do refunds work?</AccordionTrigger>
                <AccordionContent>
                  Any quality concern can be raised from your order page. Verified issues
                  receive fast replacement or refund processing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chef">
                <AccordionTrigger>Can I become a home chef?</AccordionTrigger>
                <AccordionContent>
                  Yes. Apply through the Home Chef onboarding flow. FDH verifies food
                  safety standards before listing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-fdh-border bg-gradient-to-r from-[#E8F5E9] to-[#FFF4E5] p-8 dark:from-[#123722] dark:to-[#3b2206]">
            <h2 className="text-3xl font-semibold tracking-tight">Stay Fresh with FDH</h2>
            <p className="mt-3 text-[#4B5563] dark:text-slate-200">
              Get seasonal launches, vendor stories and curated meal inspiration.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input placeholder="Enter your email address" className="h-12 bg-white/90 dark:bg-[#111827]" />
              <Button className="h-12">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="about" className="border-t border-fdh-border bg-[#0d1b0f] px-4 py-14 text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="grid size-9 place-items-center rounded-xl bg-fdh-green">
                <Leaf className="size-5" />
              </div>
              <p className="text-lg font-semibold">FDH</p>
            </div>
            <p className="text-sm text-slate-300">
              Premium farm-to-home marketplace for fresh essentials and authentic
              homemade food.
            </p>
          </div>

          <FooterLinks
            title="Company"
            links={["About", "Careers", "Blog", "Contact"]}
          />
          <FooterLinks
            title="Customer"
            links={["Orders", "Track Order", "Refund", "Support"]}
          />
          <FooterLinks
            title="Business"
            links={["Vendor", "Home Chef", "Corporate", "Affiliate"]}
          />
          <FooterLinks
            title="Legal"
            links={["Privacy", "Terms", "Refund Policy"]}
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-slate-300">
          <p>© {new Date().getFullYear()} Fresh Direct Home. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <LocateIcon className="size-4" />
            <CreditCard className="size-4" />
            <Store className="size-4" />
            <Fish className="size-4" />
            <Milk className="size-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-[#4B5563] dark:text-slate-300">{subtitle}</p>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-3 font-semibold text-white">{title}</p>
      <ul className="space-y-2 text-sm text-slate-300">
        {links.map((item) => (
          <li key={item}>
            <a href="#" className="transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
