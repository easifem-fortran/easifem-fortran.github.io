import Layout from "@theme/Layout";
import React from "react";

import HeroSection from "../components/homepage/HeroSection";
// import APIReferenceSection from '../components/homepage/APIReferenceSection';
import Head from "@docusaurus/Head";
import CommunitySection from "../components/homepage/CommunitySection";
import GuidesAndSamples from "../components/homepage/GuidesAndSamples";
import HelpSection from "../components/homepage/HelpSection";
import HomeFooter from "../components/homepage/HomeFooter";
import Install from "../components/homepage/Install";
import ResourcesSection from "../components/homepage/ResourcesSection";

export default function Homepage() {
  return (
    <Layout
      description="EASIFEM, modern fortran framework for writing scientific codes 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      <HeroSection />

      <Install />

      <GuidesAndSamples />

      <HomeFooter />
    </Layout>
  );
}
