import React from 'react';
import Link from '@docusaurus/Link';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  RecordRegular,
  CodeCircleRegular,
  CubeRegular,
  DesktopRegular,
  DeveloperBoardRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';

interface Guide {
  title: string;
  icon: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'Getting started with easifemBase',
    icon: CodeCircleRegular,
    text: 'Quick installation of easifemBase and run some sample programs.',
    link: '/guides/getting-started/easifemBase',
  },
  {
    title: 'Getting started with easifemClasses',
    icon: CubeRegular,
    text: 'Quick installation of easifemClasses and run some sample programs.',
    link: '/guides/getting-started/easifemClasses',
  },
  {
    title: 'A simple 💫 Hello World 🚀 program',
    icon: DesktopRegular,
    text: 'Run a hello world program by using easifem.',
    link: 'guides/learn-by-examples/hello-world',
  },
  {
    title: 'Getting started with strings',
    icon: DeveloperBoardRegular,
    text: 'Strings in easifem',
    link: '/guides/programming-basics/string',
  },
];

interface Sample {
  title: string;
  platform?: string;
  source?: string;
  blog?: string;
  demo?: string;
}

const samples: Sample[] = [
  {
    title: 'Heat Diffusion in Soils and Solids',
    platform: 'React',
    source: 'https://github.com/vickysharma0812/HeatDiffusion',
    blog: 'https://easifem.com/blog/HeatDiffusion',
    demo: 'https://easifem.com/demo/HeatDiffusion',
  },
  {
    title: 'Seepage in Soils',
    platform: 'React',
    blog: 'https://easifem.com/blog/Seepage/',
    source: 'https://github.com/vickysharma0812/Seepage',
    demo: 'https://easifem.com/demo/Seepage',
  },
  {
    title: 'Elastodynamics response of solids and structures',
    platform: 'React',
    blog: 'https://easifem.com/blog/Elastodynamics',
    source: 'https://github.com/vickysharma0812/Elastodynamics',
    demo: 'https://easifem.com/demo/Elastodynamics',
  },
];

function Guide({ title, text, icon: Icon, link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Sample({ title, platform, blog, source, demo }: Sample) {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-text-400">{platform}</div>
      </div>

      <div className="flex items-center gap-2.5">
        {blog && (
          <Link to={blog} className="text-inherit">
            <DocumentRegular className="h-5 w-5" />
          </Link>
        )}

        {demo && (
          <Link to={demo} className="text-inherit">
            <OpenRegular className="h-5 w-5" />
          </Link>
        )}

        {source && (
          <Link
            to={source}
            className="flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white"
          >
            <GitHub className="h-4 w-4" />
            <span className="font-semibold">Clone</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  return (
    <section className="no-underline-links my-4 mt-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">

      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Getting started guides 📚</h3>

          <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block'
        )}
      />

      <div className="w-full md:max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Popular sample apps</h3>

          <Link
            to="https://github.com/vickysharma0812"
            className="font-jakarta text-sm font-semibold"
          >
            All apps <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {samples.map((sample) => (
            <Sample {...sample} key={sample.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
