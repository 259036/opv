"use client";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import CtaImmediateHelp from "@/components/landing/cta-immediate-help";
import Testimonials from "@/components/landing/testimonials";
import RecentWorkGallery from "@/components/landing/recent-work-gallery";
import NewsBlog from "@/components/landing/news-blog";
import VideoDivider from "@/components/landing/video-divider";
import FAQSection from "@/components/landing/faq";
import StatsAndAbout from "@/components/landing/stats-and-about";
import SocialAndContactForm from "@/components/landing/social-and-contact-form";
import ContactsMap from "@/components/landing/contacts-map";
import Footer from "@/components/landing/footer";

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
