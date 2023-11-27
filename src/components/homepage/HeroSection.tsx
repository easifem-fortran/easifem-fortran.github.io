import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
  AppFolderRegular,
  BlurRegular,
  BoardRegular,
  BoxRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'easifemBase',
    link: '/about/easifemBase',
    icon: AppFolderRegular,
    lightImage: '/static/landing-page/hero/easifemBase-light.svg',
    darkImage: '/static/landing-page/hero/easifemBase-dark.svg',
    text: 'Base library for easifem.'
  },
  {
    title: 'easifemClasses',
    link: '/about/easifemClasses',
    icon: BlurRegular,
    lightImage: '/static/landing-page/hero/easifemClasses-light.svg',
    darkImage: '/static/landing-page/hero/easifemClasses-dark.svg',
    text: 'High level classes and objects for numerical methods and algorithms.',
  },
  {
    title: 'easifemMaterials',
    beta: true,
    link: '/about/easifemMaterials',
    icon: BoardRegular,
    lightImage: '/static/landing-page/hero/easifemMaterials-light.svg',
    darkImage: '/static/landing-page/hero/easifemMaterials-dark.svg',
    text: 'A library for constitutive modeling of solids, fluids, and porous media (soils and rocks).',
  },
  {
    title: 'easifemKernels',
    beta: true,
    link: '/about/easifemKernels',
    icon: BoxRegular,
    lightImage: '/static/landing-page/hero/easifemKernels-light.svg',
    darkImage: '/static/landing-page/hero/easifemKernels-dark.svg',
    text: 'A library of useful kernels for solving common partial differential equations.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            EASIFEM
          </h2>
          <p className="max-w-xl text-center text-text-400">
          🚀 EASIFEM is the modern fortran framework for writing scientific codes, 
          especially implementation of finite element methods. 
          It comes with many useful features and can help you in quick
          implementation of a numerical algorithm.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
