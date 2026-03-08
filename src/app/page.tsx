"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
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
          brandName="Book Your Skatebording & Surfskate Experience Today"
          navItems={[
            { name: "About", id: "about" },
            { name: "What You'll Learn", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Book Now",            href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText=""
          description="Learn skateboarding or surf skate with confidence. Build strong balance, control, and smooth turns through clear, focused coaching in Tameslouht or Marrakech."
          buttons={[
            {
              text: "Book Your Experience",              href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
            },
            { text: "Learn More" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVSnAj9MzGOThMDqSI4t30YgeB/uploaded-1773007372231-tufcrmsc.jpg"
          imageAlt="Female skateboarder performing at skateboard park"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          tag="Meet Your Coach"
          title="Houda Ait Lahcen - Skateboarding Instructor & Girls Supporter"
          description="Learn from Morocco's best skater girl with years of experience coaching beginners and intermediate riders."
          buttons={[
            {
              text: "Reserve Your Spot",              href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
            },
          ]}
          bulletPoints={[
            {
              title: "Expert Coach",              description: "Years of professional skateboarding experience with a passion for teaching"
            },
            {
              title: "Safety First",              description: "All equipment provided, professional protective gear included"
            },
            {
              title: "Personal Attention",              description: "Step by step coaching  tailored to your skill level and learning pace"
            },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVSnAj9MzGOThMDqSI4t30YgeB/uploaded-1772847116738-v7uf3uyb.jpg"
          imageAlt="Houda skateboarding instructor"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
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
              title: "Warm-Up & Balance",              description: "We begin with a dynamic warm-up to activate balance, body control, and confidence before stepping on the board.",              imageSrc: "http://img.b2bpic.net/free-photo/young-couple-enjoys-playing-sports-morning-open-air-warm-up-before-exercise_146671-14939.jpg?id=9277056"
            },
            {
              id: 2,
              title: "Safety & Gear Check",              description: "Learn proper stance, safe stopping techniques, and riding basics with safety equipment and guidance.",              imageSrc: "http://img.b2bpic.net/free-photo/guys-skate-pool_1321-1334.jpg?id=3202066"
            },
            {
              id: 3,
              title: "Personal Coaching",              description: "Steaby step coaching with Morocco's best skater girl, including hands-on skating practice and personalized learning.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-skateboarders-feet-skating_171337-9160.jpg"
            },
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Skateboarding Experience"
          description="All sessions include professional coaching, safety equipment, and community support. 8% of proceeds benefit CJF Morocco."
          tag="Competitive Pricing"
          plans={[
            {
              id: "session",              title: "Single Session",              price: "$32",              period: "per guest",              imageSrc: "http://img.b2bpic.net/free-photo/woman-having-fun-with-skateboarding_329181-12953.jpg?id=12929860",              features: [
                "1.3 hour coaching session",                "Professional equipment included",                "Beginner-friendly instruction",                "Tea & relaxing area and discussion   "
              ],
              button: {
                text: "Book Now",                href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
              },
            },
            {
              id: "package",              title: "3-Session Package",              price: "$85",              period: "per guest",              imageSrc: "http://img.b2bpic.net/premium-photo/two-skateboarders-performing-tricks-simultaneously_274719-11841.jpg?id=92853095",              features: [
                "3 coaching sessions (best value)",                "Skill progression tracking",                "Professional equipment",                "Complimentary refreshments"
              ],
              button: {
                text: "Book Package",                href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
              },
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
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
              id: "1",              title: "What age can participate?",              content: "Guests ages 15 and up can attend. We welcome beginners and intermediates alike."
            },
            {
              id: "2",              title: "What should I bring?",              content: "Bring water to keep hydrated. All skateboarding equipment and protective gear is provided."
            },
            {
              id: "3",              title: "How difficult is this activity?",              content: "The activity level is moderate and the skill level is beginner. We start with the fundamentals and progress at your pace."
            },
            {
              id: "4",              title: "What's your cancellation policy?",              content: "Cancel at least 1 day before the start time for a full refund. Free cancellation is available."
            },
            {
              id: "5",              title: "Do you accommodate people with mobility issues?",              content: "We have a step-free bathroom available and a quiet retreat space. Contact us to discuss specific accessibility needs."
            },
            {
              id: "6",              title: "Where exactly do we meet?",              content: "Sessions are held in Tamelslohte, Marrakech. You'll enjoy spectacular Atlas Mountain views and access to Fiere et Fort skateboard park."
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Learn?"
          description="Let's learn together and try a new experience where you learn not just skating but confidence. Join our skateboarding community in Marrakech. Book your experience today and become part of a movement supporting youth skateboarding across Morocco."
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVSnAj9MzGOThMDqSI4t30YgeB/uploaded-1772848005706-orzy7qlk.jpg"
          imageAlt="Atlas Mountains and Tamelslohte landscape in Marrakech"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Join Our Community"
          termsText="By booking, you support CJF Morocco programs serving local youth. 8% of proceeds go directly to community development."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Ready to book your new experience "
          columns={[
            {
              title: "Experience",              items: [
                {
                  label: "Book On Airbnb",                  href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
                },
                { label: "What You'll Learn", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              title: "About",              items: [
                { label: "Meet Houda", href: "#about" },
                { label: "Location: Tameslouht, Marrakech, Morocco", href: "https://share.google/mFIsJmMkYH3jZ7wkk" },
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
                  label: "Message on Airbnb",                  href: "https://www.airbnb.com/experiences/6774219?viralityEntryPoint=2&s=76"
                },
              ],
            },
          ]}
          copyrightText="Let's Learn Together and Try a New Experience Where You Learn Not Just Skating But Confidence — © 2025 Houda's Skateboarding Experience in Tameslouht, Marrakech, Morocco. 8% of proceeds support CJF Morocco community programs."
        />
      </div>
    </ThemeProvider>
  );
}
