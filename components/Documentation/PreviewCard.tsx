'use client';
import type { GlobalPageProps } from '@/utils/globalPageProps';
import { buildUrl } from '@/utils/globalPageProps';

import type { DocumentationPageRecord } from '@/graphql/types/graphql';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  featuredSection: DocumentationPageRecord;
  globalPageProps: GlobalPageProps;
};

const mainImage = {
  initial: { height: '75%' },
  hover: {
    height: '100%',
  },
};

const mainTextContainer = {
  initial: {
    y: 0,
    x: 0,
  },
  hover: {
    y: -16,
    x: 8,
  },
};

const mainText = {
  initial: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  hover: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
};

const subText = {
  initial: {
    fontSize: '.75rem',
    lineHeight: '1rem',
  },
  hover: {
    fontSize: '.85rem',
    lineHeight: '1.25rem',
  },
};

const PreviewCard = ({ featuredSection, globalPageProps }: Props) => {
  return (
    <Link href={buildUrl(globalPageProps, `/docs/${featuredSection.slug}`)}>
      <motion.div
        initial="initial"
        whileHover="hover"
        animate="initial"
        className="hover:bg-primary-200/20 dark:hover:bg-primary-500/10 hover:dark:ring-primary-500/30 relative h-60 w-full cursor-pointer overflow-hidden rounded-xl p-2 transition-all hover:ring hover:ring-primary/40"
      >
        <motion.div
          variants={mainImage}
          className="relative h-1/2 w-full overflow-hidden rounded-xl border border-slate-300 bg-primary/10 dark:border-slate-700 dark:bg-slate-800/50"
        >
          <div className="flex h-full w-full flex-col flex-wrap justify-center p-6">
            <p className="whitespace-nowrap text-2xl font-black text-slate-700 dark:text-slate-500">
              {featuredSection.title}
            </p>
            <p className=" text-md font-bold text-slate-400 dark:text-slate-500">
              {featuredSection.subtitle}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PreviewCard;
