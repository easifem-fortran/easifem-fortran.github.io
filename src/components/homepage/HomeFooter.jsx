import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import { Linkedin, Twitter, GitHub } from 'react-feather';
import { DiscordIcon, SlackIcon} from '@site/src/icons';

export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <ThemedImage
            sources={{ light: '/logo/light.svg', dark: '/logo/dark.svg' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://join.slack.com/t/easifem/shared_invite/zt-27juumyaa-Cg0uty_UJDNp81Gq5HdFRA" aria-label="Slack community">
            <SlackIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://github.com/vickysharma0812/" aria-label="GitHub">
            <GitHub className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/easifem" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link
            href="https://linkedin.com/company/easifem"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://community.easifem.io" aria-label="Discord community">
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Vikas Sharma since 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
