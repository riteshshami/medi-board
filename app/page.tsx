"use client";

import CTASection from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Hero  from "@/components/home/Hero";
import KeyFeatures from "@/components/home/Key-Features";

export default function Home() {

  return (
    <div>
        <Hero/>
        <CTASection/>
        <KeyFeatures/>
        <FAQ/>
    </div>
  );
}
