import React from 'react';
import Footer from '@theme-original/Footer';
import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function FooterWrapper(props) {
  const { pathname } = useLocation();

  return (
    <>
      <Footer {...props} />
    </>
  );
}
