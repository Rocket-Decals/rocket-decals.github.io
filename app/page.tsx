'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import DecalsSection from '@/components/home/DecalsSection';
import PromoVideoSection from '@/components/home/PromoVideoSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TutorialSection from '@/components/home/TutorialSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';
import AutoScrollHelper from '@/components/home/AutoScrollHelper';

// Dynamically import modals to avoid SSR issues
const DecalModal = dynamic(() => import('@/components/modals/DecalModal'), {
  ssr: false,
});
const CollectionModal = dynamic(() => import('@/components/modals/CollectionModal'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <AutoScrollHelper />
      
      <main>
        <HeroSection />
        
        <div className="section-separator" />
        
        <DecalsSection />
        
        <div className="section-separator" />
        
        <PromoVideoSection />
        
        <div className="section-separator" />
        
        <ReviewsSection />
        
        <div className="section-separator" />
        
        <TutorialSection />
        
        <div className="section-separator" />
        
        <ContactSection />
        
        <div className="section-separator" />
        
        <Footer />
      </main>
      
      {/* Modals */}
      <DecalModal />
      <CollectionModal />
    </>
  );
}

