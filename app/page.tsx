'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import DecalsSection from '@/components/home/DecalsSection';
import AutoScrollHelper from '@/components/home/AutoScrollHelper';

// Dynamically import heavy sections for better performance
const PromoVideoSection = dynamic(() => import('@/components/home/PromoVideoSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const ReviewsSection = dynamic(() => import('@/components/home/ReviewsSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '300px' }} />,
});

const TutorialSection = dynamic(() => import('@/components/home/TutorialSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const ContactSection = dynamic(() => import('@/components/home/ContactSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '500px' }} />,
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false,
});

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

