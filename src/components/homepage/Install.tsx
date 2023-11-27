import React from 'react';
import Link from '@docusaurus/Link';

function SDK({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function Install() {
  return (
    <section className="mx-auto mt-10 mb-4 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        Installation
      </span>

      <h3 className="mb-12 text-4xl">Install easifem ☀️ </h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">Linux</h4>

        <p className="mb-6 text-text-400">
          Select your <span className="font-semibold">Linux</span> distro and
          follow the easy installation instructions.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="Ubuntu"
            to="/guides/getting-started/ubuntu"
            icon="/static/landing-page/sdk-icons/ubuntu.svg"
          />
          <SDK
            name="Archlinux"
            to="/guides/getting-started/archlinux"
            icon="/static/landing-page/sdk-icons/arch-linux.svg"
          />
          <SDK
            name="Fedora"
            to="/guides/getting-started/fedora"
            icon="/static/landing-page/sdk-icons/fedora.svg"
          />
          <SDK
            name="Debian"
            to="/guides/getting-started/debian"
            icon="/static/landing-page/sdk-icons/debian.svg"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">MacOS</h4>

        <p className="mb-6 text-text-400">
          Select the <span className="font-semibold">architecture</span> of your
          MacOS and follow the instructions.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="M1/M2 chip(ARM64)"
            to="/guides/getting-started/macosx"
            icon="/static/landing-page/sdk-icons/mac.svg"
          />
          <SDK
            name="Intel chip(AMD64, x86)"
            to="/guides/getting-started/macosx"
            icon="/static/landing-page/sdk-icons/mac.svg"
          />
        </div>
      </div>
    </section>
  );
}
