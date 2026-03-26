import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Droplets,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  TreePine,
  Wind,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitQuoteRequest } from "./hooks/useQueries";

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <TreePine className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif font-bold text-xl text-primary">
            ArborHydrate
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-secondary text-white hover:bg-secondary/90"
            data-ocid="nav.primary_button"
          >
            <a href="#contact">Order Now</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
          type="button"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="bg-secondary text-white hover:bg-secondary/90 w-full"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setMobileOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Order Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: `url('/assets/generated/hero-tree-irrigation.dim_1600x900.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-4">
            TAK Tree Watering Products
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Smart Drip Irrigation for Healthy Trees
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            The TAK Tree Watering Ring slowly releases water directly to your
            tree&apos;s roots — just fill, install, and let it drip.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-semibold text-base"
              data-ocid="hero.primary_button"
            >
              <a href="#pricing">Shop Drip Bags</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold text-base"
              data-ocid="hero.secondary_button"
            >
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Benefits ───────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Droplets,
    title: "Slow Drip Release",
    desc: "The PVC ring bag wraps around the trunk and slowly drips water directly to the root zone over several hours — no runoff, no waste.",
  },
  {
    icon: Leaf,
    title: "Water Efficiency",
    desc: "Uses up to 50% less water than traditional watering methods by delivering moisture precisely where the roots need it most.",
  },
  {
    icon: TreePine,
    title: "Tree Longevity",
    desc: "Consistently hydrated trees develop stronger root systems and live significantly longer, protecting your landscape investment.",
  },
];

function Benefits() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why Choose TAK
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Key Benefits
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "tak-10",
    name: "TAK 10-Gallon",
    gallons: 10,
    price: 20,
    popular: false,
    features: [
      "10-gallon PVC drip bag",
      "Slow-release drip mechanism",
      "Easy ring installation around trunk",
      "Ideal for young/small trees",
    ],
  },
  {
    id: "tak-15",
    name: "TAK 15-Gallon",
    gallons: 15,
    price: 25,
    popular: true,
    features: [
      "15-gallon PVC drip bag",
      "Slow-release drip mechanism",
      "Easy ring installation around trunk",
      "Ideal for medium-sized trees",
      "Durable UV-resistant material",
    ],
  },
  {
    id: "tak-20",
    name: "TAK 20-Gallon",
    gallons: 20,
    price: 30,
    popular: false,
    features: [
      "20-gallon PVC drip bag",
      "Slow-release drip mechanism",
      "Easy ring installation around trunk",
      "Ideal for large/mature trees",
      "Durable UV-resistant material",
      "Extended drip duration",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            TAK Tree Watering Ring Bags
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Pricing Plans
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Each bag wraps around the tree trunk and slowly releases water
            directly to the roots over several hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden shadow-card flex flex-col ${
                plan.popular ? "ring-2 ring-primary scale-105 z-10" : ""
              }`}
            >
              {/* Card header */}
              <div
                className={`px-8 py-6 ${
                  plan.popular
                    ? "bg-primary text-white"
                    : "bg-primary/80 text-white"
                }`}
              >
                {plan.popular && (
                  <Badge className="mb-3 bg-yellow-400 text-yellow-900 border-none text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </Badge>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="opacity-70 text-sm mb-2">/bag</span>
                </div>
                <p className="text-sm opacity-80 mt-1">
                  {plan.gallons}-gallon bag capacity
                </p>
              </div>

              {/* Features */}
              <div className="bg-white flex-1 px-8 py-6">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-8 font-semibold ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary text-white hover:bg-secondary/90"
                  }`}
                  data-ocid={`pricing.item.${i + 1}`}
                >
                  <a href="#contact">Order Now</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────
const steps = [
  {
    icon: Package,
    title: "Choose Your Bag",
    desc: "Pick the right gallon size for your tree — 10 gal for young trees, 15 gal for medium, and 20 gal for large or mature trees.",
  },
  {
    icon: Wind,
    title: "Install Around Trunk",
    desc: "Wrap the TAK ring bag around the base of the tree trunk. The flexible PVC ring fits snugly and stays in place without tools.",
  },
  {
    icon: Droplets,
    title: "Fill & Let Drip",
    desc: "Fill the bag with water and it slowly releases moisture directly to the roots over several hours — no monitoring needed.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Simple to Use
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            How It Works
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-beige rounded-2xl p-8"
          >
            <blockquote className="text-foreground font-serif text-lg italic leading-relaxed mb-6">
              &ldquo;The TAK drip bags are incredibly easy to use. I just wrap
              them around my young oaks, fill them up, and walk away. By morning
              the roots have had a deep, slow drink — my trees have never looked
              healthier.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="/assets/generated/testimonial-avatar.dim_80x80.jpg"
                  alt="James Hartley"
                />
                <AvatarFallback>JH</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  James Hartley
                </p>
                <p className="text-muted-foreground text-xs">
                  Estate Manager, Hartley Park
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Quote Form ────────────────────────────────────────────────────
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mutation = useSubmitQuoteRequest();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email))
      e.email = "Invalid email address";
    if (!plan) e.plan = "Please select a bag size";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    mutation.mutate(
      { name, email, selectedPlan: plan, message },
      {
        onSuccess: () => {
          toast.success("Order request submitted! We'll be in touch shortly.");
          setName("");
          setEmail("");
          setPlan("");
          setMessage("");
          setErrors({});
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section id="contact" className="py-20 bg-beige">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Place Your Order
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Order TAK Drip Bags
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill in your details and we&apos;ll reach out to confirm your order
            and arrange delivery.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-card p-8 md:p-10 space-y-6"
          data-ocid="contact.modal"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Full Name</Label>
              <Input
                id="quote-name"
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "border-destructive" : ""}
                data-ocid="contact.input"
              />
              {errors.name && (
                <p
                  className="text-destructive text-xs"
                  data-ocid="contact.error_state"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-email">Email Address</Label>
              <Input
                id="quote-email"
                type="email"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-destructive" : ""}
                data-ocid="contact.input"
              />
              {errors.email && (
                <p
                  className="text-destructive text-xs"
                  data-ocid="contact.error_state"
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-plan">Select Bag Size</Label>
            <Select value={plan} onValueChange={setPlan}>
              <SelectTrigger
                id="quote-plan"
                className={errors.plan ? "border-destructive" : ""}
                data-ocid="contact.select"
              >
                <SelectValue placeholder="Choose a bag size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tak-10">
                  TAK 10-Gallon — 10-gal PVC drip bag ($20/bag)
                </SelectItem>
                <SelectItem value="tak-15">
                  TAK 15-Gallon — 15-gal PVC drip bag ($25/bag)
                </SelectItem>
                <SelectItem value="tak-20">
                  TAK 20-Gallon — 20-gal PVC drip bag ($30/bag)
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.plan && (
              <p
                className="text-destructive text-xs"
                data-ocid="contact.error_state"
              >
                {errors.plan}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-message">Message (optional)</Label>
            <Textarea
              id="quote-message"
              placeholder="Tell us about your trees or how many bags you need…"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              data-ocid="contact.textarea"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
            disabled={mutation.isPending}
            data-ocid="contact.submit_button"
          >
            {mutation.isPending ? "Submitting…" : "Submit Order Request"}
          </Button>

          {mutation.isSuccess && (
            <p
              className="text-center text-sm text-primary font-medium"
              data-ocid="contact.success_state"
            >
              ✓ Your order request has been received!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const socialLinks = [
    { Icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: SiX, href: "https://x.com", label: "X (Twitter)" },
    { Icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const serviceLinks = [
    { label: "TAK 10-Gallon Bag", href: "#pricing" },
    { label: "TAK 15-Gallon Bag", href: "#pricing" },
    { label: "TAK 20-Gallon Bag", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#hero" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-beige border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <TreePine className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif font-bold text-lg text-primary">
                ArborHydrate
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              TAK Tree Watering Ring Bags — PVC drip irrigation bags that slowly
              hydrate your trees&apos; roots with zero effort.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-primary transition-colors"
                    data-ocid="footer.link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-primary transition-colors"
                    data-ocid="footer.link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@arborhydrate.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  1420 Greenway Blvd,
                  <br />
                  Portland, OR 97201
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {year} ArborHydrate. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="underline hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
