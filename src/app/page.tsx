"use client";

import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import CtaImmediateHelp from "@/components/sections/cta-immediate-help";
import Testimonials from "@/components/sections/testimonials";
import RecentWorkGallery from "@/components/sections/recent-work-gallery";
import NewsBlog from "@/components/sections/news-blog";
import VideoDivider from "@/components/sections/video-divider";
import FAQSection from "@/components/sections/faq";
import StatsAndAbout from "@/components/sections/stats-and-about";
import SocialAndContactForm from "@/components/sections/social-and-contact-form";
import ContactsMap from "@/components/sections/contacts-map";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CtaImmediateHelp />
      <Testimonials />
      <div id="services">
        <RecentWorkGallery />
        <NewsBlog />
      </div>
      <VideoDivider />
      <FAQSection />
      <StatsAndAbout />
      <SocialAndContactForm />
      <div id="contact">
        <ContactsMap />
      </div>
      <Footer />
    </main>
  );
}
