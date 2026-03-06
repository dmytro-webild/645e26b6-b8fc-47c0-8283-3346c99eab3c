"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Houda's Skateboarding"
          navItems={[
            { name: "About", id: "about" },
            { name: "What You'll Learn", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Book Now",            href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Houda's Skateboarding"
          description="Learn skateboarding or surf skate with confidence. Build strong balance, control, and smooth turns through clear, focused coaching in beautiful Tameslouht, Marrakech."
          buttons={[
            {
              text: "Book Your Experience",              href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
            { text: "Learn More" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/cute-girl-roller-skating_1303-8881.jpg"
          imageAlt="Female skateboarder performing at skateboard park"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Meet Your Coach"
          title="Houda Ait Lahcen - Skateboarding Instructor & Girls Supporter"
          buttons={[
            {
              text: "Reserve Your Spot",              href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="What You'll Learn"
          description="Every session is designed to build your skills step by step, from foundational balance to confident riding."
          tag="Beginner to Intermediate"
          features={[
            {
              id: 1,
              title: "Warm-Up & Balance",              description: "We begin with a dynamic warm-up to activate balance, body control, and confidence before stepping on the board.",              imageSrc: "http://img.b2bpic.net/free-photo/skate-parkteens-skate-park_23-2149836894.jpg"},
            {
              id: 2,
              title: "Safety & Gear Check",              description: "Learn proper stance, safe stopping techniques, and riding basics with professional-grade equipment and guidance.",              imageSrc: "http://img.b2bpic.net/free-photo/cropped-shot-legs-longboard-skater-girl-riding-her-skateboard-street-female-teenager-cru_1258-138262.jpg"},
            {
              id: 3,
              title: "Personal Coaching",              description: "One-on-one instruction with Morocco's best skater girl, including hands-on skating practice and personalized learning.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-skateboarders-feet-skating_171337-9160.jpg"},
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Skateboarding Experience"
          description="All sessions include professional coaching, safety equipment, and community support. 5% of proceeds benefit CJF Morocco."
          tag="Competitive Pricing"
          plans={[
            {
              id: "session",              title: "Single Session",              price: "$32",              period: "per guest",              imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-roller-skating_1303-8881.jpg",              features: [
                "1.5-2 hour coaching session",                "Professional equipment included",                "Beginner-friendly instruction",                "Tea & Atlas views included"],
              button: {
                text: "Book Now",                href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
            },
            {
              id: "package",              title: "3-Session Package",              price: "$85",              period: "per guest",              imageSrc: "http://img.b2bpic.net/free-photo/skate-parkteens-skate-park_23-2149836894.jpg",              features: [
                "3 coaching sessions (best value)",                "Skill progression tracking",                "Professional equipment",                "Complimentary refreshments"],
              button: {
                text: "Book Package",                href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Skateboarders Worldwide"
          description="Join hundreds of learners from around the world who have built confidence on the skateboard."
          tag="Community Impact"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Marrakech Skateboard Community",            "CJF Morocco Programs",            "Atlas Mountain Sports",            "Tameslouht Fiere et Fort",            "International Skate Alliance",            "Women Skater Network",            "Moroccan Youth Sports",            "Inclusive Skateboarding Initiative"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about your skateboarding experience in Marrakech."
          textPosition="left"
          useInvertedBackground={true}
          animationType="smooth"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "1",              title: "What age can participate?",              content: "Guests ages 15 and up can attend. We welcome beginners and intermediates alike."},
            {
              id: "2",              title: "What should I bring?",              content: "Bring water to keep hydrated. All skateboarding equipment and protective gear is provided."},
            {
              id: "3",              title: "How difficult is this activity?",              content: "The activity level is moderate and the skill level is beginner. We start with the fundamentals and progress at your pace."},
            {
              id: "4",              title: "What's your cancellation policy?",              content: "Cancel at least 1 day before the start time for a full refund. Free cancellation is available."},
            {
              id: "5",              title: "Do you accommodate people with mobility issues?",              content: "We have a step-free bathroom available and a quiet retreat space. Contact us to discuss specific accessibility needs."},
            {
              id: "6",              title: "Where exactly do we meet?",              content: "Sessions are held in Tameslouht, Marrakech. You'll enjoy spectacular Atlas Mountain views and access to Fiere et Fort skateboard park."},
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Learn?"
          description="Join our skateboarding community in Marrakech. Book your experience today and become part of a movement supporting youth skateboarding across Morocco."
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/ksar-ait-ben-haddou-surrounded-by-greenery-sunlight-blue-sky-morocco_181624-14248.jpg"
          imageAlt="Atlas Mountains and Tameslouht landscape in Marrakech"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Join Our Community"
          termsText="By booking, you support CJF Morocco programs serving local youth. 5% of proceeds go directly to community development."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Houda's Skateboarding"
          columns={[
            {
              title: "Experience",              items: [
                {
                  label: "Book On Airbnb",                  href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
                { label: "What You'll Learn", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              title: "About",              items: [
                { label: "Meet Houda", href: "#about" },
                { label: "Location: Tameslouht", href: "#contact" },
                { label: "CJF Morocco Support", href: "#" },
                { label: "Community Impact", href: "#" },
              ],
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Accessibility", href: "#" },
                { label: "Safety Guidelines", href: "#" },
                { label: "Cancellation Policy", href: "#faq" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                {
                  label: "Message on Airbnb",                  href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"},
              ],
            },
          ]}
          copyrightText="© 2025 Houda's Skateboarding Experience. 5% of proceeds support CJF Morocco community programs."
        />
      </div>
    </ThemeProvider>
  );
}
