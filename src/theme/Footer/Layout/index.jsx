import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description mb-8">
          EASIFEM is a Modern Fortran framework (suite of scientific libraries) that facilitates the Expandable And Scalable Infrastructure for Finite Element Methods. EASIFEM “eases” the efforts to develop scientific programs in FORTRAN for solving partial differential equations (PDEs) using finite element methods and other grid-based methods. It is meant for researchers, scientists, and engineers.
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>Getting started with EASIFEM</p>
              <Link href="https://www.easifem.com/guides/getting-started">Getting started</Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
