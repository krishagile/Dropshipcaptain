import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { ChevronRight, Zap, ArrowRight, ExternalLink, ChevronDown, Trophy, BarChart3, Sparkles, Rocket, ChevronLeft, Plus, Minus, Facebook, Youtube, Linkedin, Instagram, Play, Check, Star, Globe, Package, TrendingUp, Shield, Clock, Users, DollarSign, Search, Layers, RefreshCw } from 'lucide-react';
import './LandingPage.css';
import logo from './assets/dc-final.png';
import cardGraphic2 from './assets/Card-Large-Graphic-Slot-1.webp';
import cardGraphic3 from './assets/Card-Large-Graphic-Slot-2.webp';
import cardGraphic1 from './assets/Card-Large-Graphic-Slot.webp';
import mapImg from "./assets/map.svg";
import { X } from 'lucide-react';
import ScrollRotate from './Components/ScrollRotate.jsx';

// Import company logos
import bloombergLogo from './assets/walmart.png';
import businessInsiderLogo from './assets/woo.png';
import cnbcLogo from './assets/square.png';
import digitalJournalLogo from './assets/spoify.png';
import entrepreneurLogo from './assets/ebay.png';
import marketwatchLogo from './assets/amazon-logo.jpg';
import usaLogo from './assets/big.png';
import yahooLogo from './assets/tiktok.jpg';
import temuLogo from './assets/temu.jpg';
import mercadoLogo from './assets/mercado.jpg';

//product images
import productImage1 from './assets/consumer-0.jpg';
import productImage2 from './assets/consumer-1.jpg';
import productImage3 from './assets/consumer-2.jpeg';
import productImage4 from './assets/consumer-3.jpeg';
import productImage5 from './assets/consumer-3.jpeg';
import productImage6 from './assets/consumer-4.jpeg';
import productImage7 from './assets/consumer-5.jpeg';
import productImage8 from './assets/consumer-6.jpeg';
import productImage9 from './assets/consumer-7.jpg';
import productImage10 from './assets/consumer-8.jpeg';
import productImage12 from './assets/consumer-10.jpeg';
import productImage13 from './assets/consumer-11.jpg';
import productImage14 from './assets/consumer-12.jpg';
import productImage15 from './assets/consumer-13.jpg';
import productImage16 from './assets/consumer-14.jpeg';
import productImage17 from './assets/consumer-15.jpeg';
import productImage18 from './assets/consumer-16.jpeg';
import productImage19 from './assets/consumer-17.png';
import productImage20 from './assets/consumer-18.jpeg';
import productImage21 from './assets/consumer-1.jpg';
import productImage22 from './assets/consumer-20.jpeg';
import productImage23 from './assets/consumer-21.jpeg';
import productImage24 from './assets/consumer-22.jpeg';
import productImage25 from './assets/consumer-23.jpeg';

// Intersection Observer Hook for scroll animations
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endValue = parseFloat(end.replace(/[^0-9.]/g, ''));

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(endValue * easeOut));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Promo Banner Component
function PromoBanner() {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <span className="promo-badge">
          <Zap style={{ color: '#fff !important' }} />
          75% Off
        </span>
        <span className="promo-text">
           New Year Exclusive: Start your dropshipping empire for less than a coffee per day
        </span>
        <button className="promo-button">
          Get Offer
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

// Dropdown Menu Component
function DropdownMenu({ title, items }) {
  return (
    <li className="dropdown">
      <span className="navbar-link">
        {title}
        <ChevronDown />
      </span>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <a key={index} href="#" className="dropdown-item">
            {item}
          </a>
        ))}
      </div>
    </li>
  );
}

// Navigation Bar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    Solutions: ['Product Sourcing', 'Custom Branding', 'Fast Shipping', 'Analytics'],
    'Why Dropship': ['About Us', 'Success Stories', 'Compare', 'Reviews'],
    Dropship: ['Start Dropshipping', 'Find Products', 'Winning Products', 'Suppliers'],
    Resources: ['Blog', 'Help Center', 'Academy', 'Community']
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#" className="navbar-logo">
        <img src={logo} alt="Zendrop" className="logo-image" />
      </a>

      <ul className="navbar-menu">
        {Object.entries(menuItems).map(([title, items]) => (
          <DropdownMenu key={title} title={title} items={items} />
        ))}
        <li>
          <a href="#" className="navbar-link">Pricing</a>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="navbar-login">Log in</button>
        <button className="navbar-cta">
          Start Free Trial
          <ArrowRight size={16} className="cta-arrow" />
        </button>
      </div>
    </nav>
  );
}

// Trust Badge Component
function TrustBadge({ imageSrc, alt }) {
  return (
    <div className="trust-badge">
      <img src={imageSrc} alt={alt} className="trust-badge-image" />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const avatars = [
    'https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg',
    'https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg',
    'https://images.pexels.com/photos/6572210/pexels-photo-6572210.jpeg',
    'https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg',
    'https://images.pexels.com/photos/4687575/pexels-photo-4687575.jpeg'
  ];

  return (
    <section className="hero-section">
      <div className="trust-badges">
        {/* <TrustBadge imageSrc={trustpilotBadge} alt="Trustpilot Rating" /> */}
        {/* <TrustBadge imageSrc={appStoreBadge} alt="App Store Rating" /> */}
      </div>

      <div className="hero-badge-container fade-in-up">
        <span className="hero-badge">
          <Sparkles size={14} />
          Trusted by 500,000+ entrepreneurs worldwide
        </span>
      </div>

      <h1 className="hero-heading fade-in-up delay-1">
        Launch Your <span className="gradient-text">Profitable</span> Dropshipping Business in Minutes
      </h1>

      <p className="hero-description fade-in-up delay-2">
        The all-in-one platform that finds winning products, automates fulfillment, and scales your revenue — so you can focus on growth, not logistics.
      </p>
    <div>
      <ScrollRotate />
    </div>
      <div className="hero-cta-group fade-in-up delay-3">
        <button className="hero-cta">
          Start Free Trial
          <ArrowRight size={18} className="cta-arrow" />
        </button>
      </div>

      <div className="social-proof fade-in-up delay-4">
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`User ${index + 1}`}
              className="avatar"
            />
          ))}
        </div>
        <div className="social-proof-content">
          <div className="social-proof-stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#ffa500" color="#ffa500" />)}
          </div>
          <span className="social-proof-text">
            <strong>4.9/5</strong> from 3,000,000+ sellers
          </span>
        </div>
      </div>
    </section>
  );
}

// Feature Cards Component
function FeatureCards() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Fulfillment',
      description: 'Deliver orders 2x faster with our vetted global supplier network. Say goodbye to 30-day shipping — your customers receive products in 5-12 days, slashing refunds and boosting reviews.',
      image: cardGraphic1,
      learnMore: true,
      stats: '5-12 Days'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Store Launch',
      description: 'Get selling in under 10 minutes. Our AI builds you a conversion-optimized store, pre-loaded with trending products and proven copy. Plus, weekly live coaching to accelerate your first sale.',
      image: cardGraphic2,
      learnMore: true,
      stats: '< 10 Min'
    },
    {
      icon: Rocket,
      title: 'Scale Without Limits',
      description: 'Already hitting sales? Unlock exclusive pricing, priority support, and US-based 3PL warehousing. We grow with you — from $1K to $1M+ per month.',
      image: cardGraphic3,
      learnMore: true,
      stats: 'Unlimited'
    }
  ];

  return (
    <section className="feature-cards-section">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        const [ref, isVisible] = useIntersectionObserver();
        return (
          <div
            key={index}
            ref={ref}
            className={`feature-card ${index % 2 === 1 ? 'feature-card-reverse' : ''} ${isVisible ? 'slide-in-visible' : 'slide-in-hidden'}`}
          >
            <div className="feature-content">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <IconComponent size={24} color="#ffa500" />
                </div>
                <span className="feature-stat-badge">{feature.stats}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.learnMore && (
                <a href="#" className="feature-learn-more">
                  Learn more
                  <ArrowRight size={16} className="learn-more-arrow" />
                </a>
              )}
            </div>
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
              <div className="feature-image-glow"></div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Logo Carousel Component
function LogoCarousel() {
  const logoRefs = useRef([]);
  const visibleLogosRef = useRef([]);

  const logos = [
    bloombergLogo,
    cnbcLogo,
    entrepreneurLogo,
    marketwatchLogo,
    digitalJournalLogo,
    businessInsiderLogo,
    usaLogo,
    yahooLogo,
    temuLogo,
    mercadoLogo
  ];

  useEffect(() => {
    const imgElements = logoRefs.current.filter(Boolean);

    if (imgElements.length === 0 || logos.length === 0) return;

    visibleLogosRef.current = imgElements.map(() =>
      Math.floor(Math.random() * logos.length)
    );

    imgElements.forEach((img, i) => {
      if (img && logos[visibleLogosRef.current[i]]) {
        img.src = logos[visibleLogosRef.current[i]];
        img.style.opacity = '1';
        img.dataset.lastUpdated = '0';
      }
    });

    const changeRandomLogo = () => {
      if (imgElements.length === 0 || logos.length === 0) return;

      const now = Date.now();
      const cooldownPeriod = 3000;

      const availableImgElements = imgElements.filter(img => {
        const lastUpdated = parseInt(img?.dataset.lastUpdated || 0);
        return (now - lastUpdated) > cooldownPeriod;
      });

      if (availableImgElements.length === 0) return;

      const randomImgElm = availableImgElements[
        Math.floor(Math.random() * availableImgElements.length)
      ];
      const originalIndex = imgElements.indexOf(randomImgElm);

      const currentLogoIndex = visibleLogosRef.current[originalIndex];
      const otherIndices = [...Array(logos.length).keys()].filter(
        i => i !== currentLogoIndex
      );

      if (otherIndices.length === 0) return;

      const newLogoIndex = otherIndices[
        Math.floor(Math.random() * otherIndices.length)
      ];

      visibleLogosRef.current[originalIndex] = newLogoIndex;
      randomImgElm.dataset.lastUpdated = now.toString();

      randomImgElm.style.opacity = '0';

      setTimeout(() => {
        randomImgElm.src = logos[newLogoIndex];
        randomImgElm.style.opacity = '1';
      }, 300);
    };

    const intervalId = setInterval(changeRandomLogo, 2000);

    return () => clearInterval(intervalId);
  }, [logos]);

  return (
    <section className="logo-carousel-section">
      <p className="logo-carousel-label">Seamlessly integrates with platforms you love</p>
      <div className="logo-carousel">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="logo-item">
            <img
              ref={el => logoRefs.current[index] = el}
              src={logos[0]}
              alt="Company Logo"
              className="company-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Stats Cards Component
function StatsCards() {
  const [ref, isVisible] = useIntersectionObserver();

  const stats = [
    { number: '3M+', label: 'Active Sellers', icon: Users, suffix: '+' },
    { number: '$100M+', label: 'Revenue Generated Annually', icon: DollarSign, suffix: 'M+' },
    { number: '1M+', label: 'Products Ready to Ship', icon: Package, suffix: '+' }
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`stat-card ${isVisible ? 'stat-visible' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="stat-icon-wrapper">
                <IconComponent size={28} color="#ffa500" />
              </div>
              <h3 className="stat-number">
                {stat.number.startsWith('$') && '$'}
                <AnimatedCounter end={stat.number} suffix={stat.number.includes('+') ? '' : ''} />
                {stat.number.includes('M') && !stat.number.startsWith('$') ? 'M+' : stat.number.startsWith('$') ? '' : '+'}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

//sales points data
const points = [
  // Sold points (5 total) - These will have special styling
  { top: "42%", left: "48%", value: "$420 Sold", isSold: true },
  { top: "45%", left: "70%", value: "$845 Sold", isSold: true },
  { top: "52%", left: "18%", value: "$632 Sold", isSold: true },
  { top: "28%", left: "82%", value: "$928 Sold", isSold: true },
  { top: "65%", left: "55%", value: "$1,250 Sold", isSold: true },

  // Sale points (25 total)
  { top: "38%", left: "60%", value: "$156 Sale" },
  { top: "32%", left: "55%", value: "$226 Sale" },
  { top: "30%", left: "15%", value: "$314 Sale" },
  { top: "28%", left: "20%", value: "$180 Sale" },
  { top: "60%", left: "30%", value: "$584 Sale" },
  { top: "75%", left: "90%", value: "$428 Sale" },
  { top: "25%", left: "45%", value: "$212 Sale" },
  { top: "48%", left: "80%", value: "$322 Sale" },
  { top: "70%", left: "25%", value: "$530 Sale" },
];

function SalesMap() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="map-section" ref={ref}>
      <div className="map-badge">
        <Globe size={16} />
        GLOBAL REACH
      </div>
      <h2 className={isVisible ? 'fade-in-up' : ''}>Join a $400B industry that never sleeps</h2>
      <p className="map-subtitle">Real-time sales happening across 100+ countries</p>

      <div className="map-wrapper">
        <img src={mapImg} alt="World Map" className="map-image" />

        {points.map((p, i) => (
          <div
            key={i}
            className={`map-point ${p.isSold ? 'is-sold' : ''}`}
            style={{ top: p.top, left: p.left, animationDelay: `${i * 0.2}s` }}
          >
            <div className="pulse">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="sale-label">{p.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



// Benefits Intro Component
function BenefitsIntro() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="benefits-intro" ref={ref}>
      <div className={`benefits-badge ${isVisible ? 'fade-in-up' : ''}`}>
        <Zap size={16} />
        POWERFUL FEATURES
      </div>
      <h2 className={`benefits-heading ${isVisible ? 'fade-in-up delay-1' : ''}`}>
        Everything you need to dominate dropshipping
      </h2>
      <p className={`benefits-description ${isVisible ? 'fade-in-up delay-2' : ''}`}>
        From AI-powered product research to automated fulfillment — we handle the complexity so you can focus on what matters: growing your revenue.
      </p>
    </section>
  );
}
const imagesRow1 = [
  productImage3,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcf3cbb0db81816402f5_Image%203-(Compressify.io).webp",
  productImage1,
  productImage5,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcf375027db8f1d7b9a1_Image%202-(Compressify.io).webp",
  productImage2,
  productImage4,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcd5c75bce08e2002e0a_Image%201-(Compressify.io).webp",
];

const imagesRow2 = [
  productImage16,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcc7640106a207c633c8_Image%203-(Compressify.io).webp",
  productImage19,
  productImage14,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcc7d975b6c3a7d028cb_Image%202-(Compressify.io).webp",
  productImage12,
  productImage18,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcc7af27ecd381730d29_Image%201-(Compressify.io).webp",
  productImage15,
  productImage20,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcc742bfa5911be904ac_Image%204-(Compressify.io).webp",
  productImage13,
  productImage17,
];

const imagesRow3 = [
  productImage23,
  productImage6,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcf35e024b0dced58d48_Image%204-(Compressify.io).webp",
  productImage10,
  productImage21,
  productImage8,
  productImage25,
  productImage7,
  "https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6942dcf3fc7481d8bbe8a2f1_Image%205-(Compressify.io).webp",
  productImage22,
  productImage9,
  productImage24,
];



function Features() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="features" ref={ref}>
      <div className={`features-left ${isVisible ? 'slide-in-left' : ''}`}>
        <div className="features-badge">
          <Search size={14} />
          AI-POWERED
        </div>
        <h2>Discover million-dollar products before they go viral</h2>
        <p>
          Our AI analyzes millions of ads, social signals, and sales data to surface products with the highest profit potential. Stop guessing — start winning.
        </p>
        <div className="features-benefits">
          <div className="feature-benefit-item">
            <Check size={18} color="#22c55e" />
            <span>Updated daily with fresh opportunities</span>
          </div>
          <div className="feature-benefit-item">
            <Check size={18} color="#22c55e" />
            <span>Competitor analysis included</span>
          </div>
          <div className="feature-benefit-item">
            <Check size={18} color="#22c55e" />
            <span>Profit margin calculator built-in</span>
          </div>
        </div>
        <a href="#" className="cta-btn">
          Explore Product Database
          <ArrowRight size={16} />
        </a>
      </div>

      <div className={`features-right ${isVisible ? 'slide-in-right' : ''}`}>
        <Marquee images={imagesRow1} />
        <Marquee images={imagesRow2} reverse />
        <Marquee images={imagesRow3} />
      </div>
    </section>
  );
}

function Marquee({ images, reverse }) {
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`}>
      <div className="marquee-track">
        {[...images, ...images].map((img, i) => (
          <div className="marquee-item" key={i}>
            <img src={img} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
}



function GrowthEngineSection() {
  const cards = [
    {
      id: 1,
      title: 'AI Winning Product Finder',
      description: 'Discover trending products instantly',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
      icon: <Search size={24} />,
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'One-Click Product Import',
      description: 'Add to store in seconds',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
      icon: <Layers size={24} />,
      badge: null
    },
    {
      id: 3,
      title: 'Custom Branding & Packaging',
      description: 'Build your unique brand',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
      icon: <Sparkles size={24} />,
      badge: 'Pro'
    },
    {
      id: 4,
      title: 'US/EU Express Shipping',
      description: '5-12 day delivery worldwide',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
      icon: <Globe size={24} />,
      badge: null
    }
  ];

  return (
    <section className="growth-engine-section">
      <div className="growth-section-header">
        <span className="growth-badge">
          <TrendingUp size={14} />
          GROWTH TOOLS
        </span>
        <h2 className="growth-engine-title">
          Transform your store into a revenue machine
        </h2>
        <p className="growth-engine-subtitle">
          Every tool you need to find, sell, and scale — all in one platform
        </p>
      </div>

      <div className="growth-engine-grid">
        {cards.map((card, index) => {
          const [ref, isVisible] = useIntersectionObserver();
          return (
            <div
              key={card.id}
              ref={ref}
              className={`growth-engine-card ${isVisible ? 'card-visible' : ''}`}
              style={{
                backgroundImage: `url('${card.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="growth-engine-overlay"></div>
              {card.badge && <span className="growth-card-badge">{card.badge}</span>}
              <div className="growth-engine-card-content">
                <div className="growth-engine-icon">
                  {card.icon}
                </div>
                <h3 className="growth-engine-card-title">{card.title}</h3>
                <p className="growth-engine-card-desc">{card.description}</p>
                <a href="#" className="growth-engine-learn-more">
                  Learn more
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Simple Path Section Component
function SimplePathSection() {
  const steps = [
    {
      id: 1,
      icon: <Users size={32} color="#ffa500" />,
      title: 'Create Free Account',
      description: 'Sign up in 30 seconds. No credit card required. Get instant access to our full product catalog and AI tools.',
      number: '01'
    },
    {
      id: 2,
      icon: <RefreshCw size={32} color="#ffa500" />,
      title: 'Connect Your Store',
      description: 'One-click integration with Shopify, WooCommerce, and 10+ platforms. Auto-sync inventory and orders.',
      number: '02'
    },
    {
      id: 3,
      icon: <Search size={32} color="#ffa500" />,
      title: 'Find Winning Products',
      description: 'Use AI to discover high-margin products with proven demand. Import to your store with one click.',
      number: '03'
    },
    {
      id: 4,
      icon: <DollarSign size={32} color="#ffa500" />,
      title: 'Watch Revenue Grow',
      description: 'We handle fulfillment automatically. You focus on marketing while we ship to your customers worldwide.',
      number: '04'
    }
  ];

  return (
    <section className="simple-path-section">
      <div className="simple-path-badge">
        <Rocket size={14} />
        4 SIMPLE STEPS
      </div>

      <h2 className="simple-path-title">
        From zero to profitable in under a week
      </h2>

      <p className="simple-path-description">
        No experience needed. Our proven system has helped 500,000+ entrepreneurs launch successful stores.
      </p>

      <div className="simple-path-grid">
        {steps.map((step, index) => {
          const [ref, isVisible] = useIntersectionObserver();
          return (
            <div
              key={step.id}
              ref={ref}
              className={`simple-path-card ${isVisible ? 'path-card-visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="step-number">{step.number}</span>
              <div className="simple-path-icon">{step.icon}</div>
              <h3 className="simple-path-card-title">{step.title}</h3>
              <p className="simple-path-card-description">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="simple-path-cta">
        <button className="simple-path-button">
          Start Now
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: 'Went from $0 to $47K/month in 90 days',
      quote: '"I was skeptical at first, but the AI product finder literally changed everything. Found a winning product on day 3, and within 3 months I was doing almost $50K/month. The support team is incredible — they actually care about your success."',
      author: 'Sarah Chen',
      role: 'Shopify Store Owner',
      location: 'Los Angeles, USA',
      revenue: '$47K/mo',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    {
      id: 2,
      title: 'Scaled from side hustle to 6-figure business',
      quote: '"The shipping speed is what sets them apart. My customers used to complain about waiting 30+ days. Now they get orders in under 2 weeks. My reviews went from 3.2 to 4.8 stars. This platform literally saved my business."',
      author: 'Marcus Johnson',
      role: 'E-commerce Entrepreneur',
      location: 'London, UK',
      revenue: '$120K/mo',
      avatar: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg'
    },
    {
      id: 3,
      title: 'The coaching alone is worth 10x the price',
      quote: '"As a complete beginner, I was lost. The weekly coaching calls and the community support made all the difference. Within 6 months, I quit my 9-5 job. Now I work from anywhere and make more than my old salary."',
      author: 'Emma Rodriguez',
      role: 'Full-time Dropshipper',
      location: 'Toronto, Canada',
      revenue: '$85K/mo',
      avatar: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-badge">
          <Star size={14} fill="#ffa500" color="#ffa500" />
          SUCCESS STORIES
        </span>
      </div>

      <h2 className="testimonials-title">
        Real entrepreneurs. Real results.
      </h2>
      <p className="testimonials-subtitle">
        Join thousands who've transformed their lives with our platform
      </p>

      <div className="testimonials-carousel">
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'testimonial-active' : ''}`}
            >
              <div className="testimonial-revenue-badge">
                <TrendingUp size={14} />
                {testimonial.revenue}
              </div>
              <h3 className="testimonial-card-title">{testimonial.title}</h3>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author-info">
                <img src={testimonial.avatar} alt={testimonial.author} className="testimonial-avatar" />
                <div className="testimonial-author-details">
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-role">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button carousel-button-prev"
          aria-label="Previous testimonial"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'dot-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          className="carousel-button carousel-button-next"
          aria-label="Next testimonial"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What exactly is dropshipping and is it still profitable in 2026?',
      answer: 'Dropshipping is a retail model where you sell products without holding inventory. When a customer orders, we ship directly to them. In 2026, the dropshipping market is worth $400B+ and growing. With our AI tools and fast shipping network, our sellers average 40-60% profit margins — significantly higher than traditional e-commerce.'
    },
    {
      id: 2,
      question: 'How is your platform different from AliExpress dropshipping?',
      answer: 'Unlike AliExpress (30-60 day shipping, unreliable suppliers), we offer 5-12 day delivery through our vetted supplier network with US/EU warehouses. Plus, you get AI product research, automated fulfillment, custom branding, and dedicated support. Our sellers see 3x fewer returns and 2x higher customer satisfaction.'
    },
    {
      id: 3,
      question: 'I\'m a complete beginner. Can I really make this work?',
      answer: 'Absolutely. 70% of our successful sellers had zero e-commerce experience when they started. Our platform includes: AI that picks products for you, pre-built store templates, weekly live coaching calls, and a community of 500,000+ sellers. Most beginners make their first sale within 7 days of launching.'
    },
    {
      id: 4,
      question: 'What does the free trial include?',
      answer: 'Our free trial gives you full access to: AI product finder (1M+ products), store builder, supplier directory, and basic fulfillment. No credit card required. Upgrade anytime to unlock priority shipping, custom branding, advanced analytics, and premium support.'
    },
    {
      id: 5,
      question: 'What if I\'m not satisfied? Is there a guarantee?',
      answer: 'Yes! We offer a 14-day money-back guarantee on all paid plans. If you\'re not completely satisfied for any reason, just contact our support team and we\'ll refund you in full — no questions asked. We\'re confident you\'ll love the platform, but there\'s zero risk to try.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-badge">
          <Shield size={14} />
          GOT QUESTIONS?
        </span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know to get started</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.id} className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <p>Still have questions?</p>
        <a href="#" className="faq-contact-link">
          Chat with our team
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

// Support Section Component (before footer)
function SupportSection() {
  const supportCards = [
    {
      id: 1,
      title: 'Help Center',
      description: 'Browse 500+ tutorials, guides, and video walkthroughs to master every feature.',
      linkText: 'Explore Resources',
      href: '#',
      icon: <Search size={24} />,
      buttonText: 'Visit Help Center'
    },
    {
      id: 2,
      title: 'Live Chat Support',
      description: 'Get answers in minutes. Our support team is available 24/7 to help you succeed.',
      linkText: 'Start a Conversation',
      href: '#',
      icon: <Users size={24} />,
      buttonText: 'Chat Now'
    },
    {
      id: 3,
      title: 'Hire an Expert',
      description: 'Need hands-on help? Get matched with certified partners for store setup and marketing.',
      linkText: 'Browse Experts',
      href: '#',
      icon: <Star size={24} />,
      buttonText: 'Find an Expert'
    }
  ];

  return (
    <section className="support-section">
      <span className="support-badge">
        <Shield size={14} />
        WE'VE GOT YOUR BACK
      </span>
      <h2 className="support-heading">World-class support, whenever you need it</h2>
      <p className="support-subtitle">Our success team has helped 3M+ sellers grow their businesses</p>

      <div className="support-grid">
        {supportCards.map((card, index) => {
          const [ref, isVisible] = useIntersectionObserver();
          return (
            <div
              key={card.id}
              ref={ref}
              className={`support-card ${isVisible ? 'support-card-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="support-card-icon">
                {card.icon}
              </div>

              <h3 className="support-card-title">{card.title}</h3>
              <p className="support-card-description">{card.description}</p>

              <a href={card.href} className="support-card-link">
                {card.linkText}
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Product Demo Section Component
function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  const tabs = [
    {
      id: 0,
      label: 'Product Research',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'AI-Powered Product Discovery',
      desc: 'Find winning products with our AI that analyzes millions of data points'
    },
    {
      id: 1,
      label: 'Store Builder',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'One-Click Store Creation',
      desc: 'Launch a professional store in minutes with AI-generated designs'
    },
    {
      id: 2,
      label: 'Fulfillment',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      title: 'Automated Order Processing',
      desc: 'Orders are automatically sent to suppliers and shipped worldwide'
    },
    {
      id: 3,
      label: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'Real-Time Performance Insights',
      desc: 'Track revenue, margins, and growth with beautiful dashboards'
    }
  ];

  const features = [
    { icon: <Search size={18} />, text: 'Find winning products instantly' },
    { icon: <Layers size={18} />, text: 'One-click import to your store' },
    { icon: <RefreshCw size={18} />, text: 'Auto fulfillment & tracking' },
    { icon: <BarChart3 size={18} />, text: 'Real-time profit analytics' }
  ];

  return (
    <section className="product-demo-section" ref={ref}>
      <div className={`demo-content-left ${isVisible ? 'slide-in-left' : ''}`}>
        <span className="demo-badge">
          <Play size={14} />
          PRODUCT DEMO
        </span>

        <h2 className="demo-heading">See How the Platform Works</h2>

        <p className="demo-description">
          Watch how thousands of entrepreneurs use our platform to find products, build stores, and automate their entire business.
        </p>

        <ul className="demo-features-list">
          {features.map((feature, index) => (
            <li key={index} className="demo-feature-item">
              <span className="demo-feature-icon">{feature.icon}</span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        <div className="demo-cta-group">
          <button className="demo-cta-primary">
            <Play size={16} />
            Watch 60-Second Demo
          </button>
          <button className="demo-cta-secondary">
            Start Free Trial
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className={`demo-content-right ${isVisible ? 'slide-in-right' : ''}`}>
        <div className="demo-preview-card">
          <div className="demo-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`demo-tab ${activeTab === tab.id ? 'demo-tab-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="demo-preview-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`demo-preview-slide ${activeTab === tab.id ? 'demo-slide-active' : ''}`}
              >
                <img src={tab.image} alt={tab.label} className="demo-preview-image" />
                <div className="demo-preview-overlay">
                  <h4 className="demo-preview-title">{tab.title}</h4>
                  <p className="demo-preview-desc">{tab.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="demo-card-glow"></div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Above Footer Component
function CTAAboveFooter() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="cta-above-footer">
      {/* Gradient blur background */}
      <div className="gradient">
        <div className="gradient-blur"></div>
      </div>

      {/* Decorative elements */}
      <div className="cta-glow-orb cta-orb-1"></div>
      <div className="cta-glow-orb cta-orb-2"></div>

      {/* Content */}
      <div className="cta-above-footer-content">
        <span className="cta-badge">
          <Rocket size={14} />
          START TODAY
        </span>

        <h2 className="cta-above-footer-heading">
          Ready to build your dropshipping empire?
        </h2>

        <p className="cta-above-footer-description">
          Join 3,000,000+ entrepreneurs who chose the smarter path to e-commerce success.
        </p>

        <div className="cta-button-group">
          <button
            className="cta-above-footer-button"
            onClick={handleGetStarted}
          >
            Start Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// Coming Soon Features
function ComingSoonSection() {
  const features = [
    { name: 'AI Store Builder 2.0', icon: <Sparkles size={20} /> },
    { name: 'AI Ad Copy Generator', icon: <Zap size={20} /> },
    { name: 'Mobile App', icon: <Rocket size={20} /> },
    { name: 'Advanced Analytics', icon: <BarChart3 size={20} /> },
  ];

  return (
    <section className="coming-soon-section">
      <h3 className="coming-soon-title">Coming Soon</h3>
      <div className="coming-soon-grid">
        {features.map((feature, index) => (
          <div key={index} className="coming-soon-item">
            <div className="coming-soon-icon">{feature.icon}</div>
            <span>{feature.name}</span>
            <span className="coming-soon-badge">Soon</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    SOLUTIONS: [
      'Dropshipping +',
      'Product Discovery',
      'AI-Built Stores',
      'Coaching & Education',
      'Sourcing & Quoting',
      'US 3PL Warehousing & Fulfillment',
      'China 3PL Warehousing & Fulfillment',
      'Print-on-Demand'
    ],
    RESOURCES: [
      'Blog',
      'Dropshipping Survival Guide',
      'Partner Tools',
      'Glossary'
    ],
    'USE CASES': [
      'For Beginners',
      'For Existing Sellers',
      'Private Agent'
    ],
    'WHY DROPSHIP': [
      'Our Story',
      'Culture & Careers'
    ],
    PARTNERS: [
      'Become a Dropship Affiliate',
      'Apply to Be a US Supplier'
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo-section">
          <img src={logo} alt="Dropship" className="footer-logo" />
          <p className="footer-tagline">The smartest way to build your e-commerce empire.</p>
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h3 className="footer-column-title">{category}</h3>
              <ul className="footer-links-list">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="footer-social">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="footer-social-link"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">© 2026 Dropship. All rights reserved.</p>
          </div>

          <div className="footer-bottom-center">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-legal-link">Cookie Policy</a>
          </div>

          <div className="footer-bottom-right">
            {/* <img src={trustpilotBadge} alt="Trustpilot Rating" className="footer-badge" /> */}
            {/* <img src={appStoreBadge} alt="App Store Rating" className="footer-badge" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Mobile Sticky CTA
function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-sticky-cta ${isVisible ? 'visible' : ''}`}>
      <button className="mobile-cta-button">
        Start Free Trial
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="landing-page">
      <PromoBanner />
      <Navbar />
      <HeroSection />
      {/* <Assistant /> */}
      <LogoCarousel />
      <StatsCards />
      <Features />
      <SalesMap />
      <BenefitsIntro />
      <GrowthEngineSection />
      <SimplePathSection />
      <TestimonialsSection />
      <FAQSection />
      <ProductDemoSection />
      <SupportSection />
      <ComingSoonSection />
      <CTAAboveFooter />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}