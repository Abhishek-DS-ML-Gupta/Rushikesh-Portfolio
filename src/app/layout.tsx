import type { Metadata, Viewport } from 'next';
import { Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const BASE_URL = 'https://www.imdb.com/name/nm14741319/';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Rushikesh Dhuri | Film Editor',
    template: '%s | Rushikesh Dhuri',
  },

  description:
    'Rushikesh Dhuri — Film Editor with hands-on experience across feature films, OTT series, short films, advertisements, and music videos. Disney+ Hotstar originals, award-nominated narratives, and high-volume commercial delivery.',

  keywords: [
    // Brand / name
    'Rushikesh Dhuri',
    'Rushikesh',
    'Dhuri',
    'Film Editor',
    'Video Editor',
    'Post Production',
    'Editing',
    // Role
    'Film Editor',
    'Video Editor',
    'Assistant Editor',
    'Associate Editor',
    'Editor',
    'Post Production Supervisor',
    'Content Editor',
    'Story Editor',
    'Narrative Editor',
    // Platforms & genres
    'Disney+ Hotstar',
    'OTT platform editing',
    'streaming series editor',
    'feature film editor',
    'short film editor',
    'advertising editor',
    'music video editor',
    'web series editor',
    // Hire intent
    'hire film editor',
    'hire video editor',
    'freelance film editor',
    'freelance video editor',
    'film editor for hire',
    'video editor for hire',
    'Mumbai film editor',
    'available for editing projects',
    'remote video editor',
    // Technical
    'Adobe Premiere Pro',
    'DaVinci Resolve',
    'Avid Media Composer',
    'multi-cam editing',
    'proxy workflow',
    'post-production pipeline',
    'color grading',
    'sound design collaboration',
    'offline to online conforming',
    // Portfolio / reach
    'Film Editor portfolio',
    'Video Editor portfolio',
    'Mumbai video editor',
    'Indian film editor',
    'Whistling Woods International',
    'Indian editor',
    'editing reels',
    'cinematic editing',
    'visual narrative',
  ],

  authors: [{ name: 'Rushikesh Dhuri', url: BASE_URL }],
  creator: 'Rushikesh Dhuri',
  publisher: 'Rushikesh Dhuri',

  icons: {
    icon: [{ url: '/logo/cybersage_icon.png', type: 'image/png' }],
    apple: '/logo/cybersage_icon.png',
    shortcut: '/logo/cybersage_icon.png',
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Rushikesh Dhuri — Film Editor',
    title: 'Rushikesh Dhuri | Film Editor',
    description:
      'Film Editor with experience across feature films, OTT series, short films, advertisements, and music videos. Adobe Premiere Pro, DaVinci Resolve, Avid Media Composer.',
    locale: 'en_US',
    images: [
      {
        url: `${BASE_URL}/cybersage_og.png`,
        width: 1200,
        height: 630,
        alt: 'Rushikesh Dhuri — Film Editor',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rushikesh Dhuri | Film Editor',
    description:
      'Film Editor — feature films, OTT series, short films, and commercials. Adobe Premiere Pro, DaVinci Resolve, Avid Media Composer.',
    images: [`${BASE_URL}/cybersage_og.png`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'en-GB': BASE_URL,
    },
  },

  category: 'film & video',

  appleWebApp: {
    capable: true,
    title: 'Rushikesh Dhuri',
    statusBarStyle: 'black-translucent',
  },

  other: {
    'theme-color': '#0A0A0A',
    'msapplication-TileColor': '#0A0A0A',
    'application-name': 'Rushikesh Dhuri',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Rushikesh Dhuri',
  alternateName: ['Rushikesh Dhuri', 'Rushikesh', 'Dhuri'],
  url: BASE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/cybersage_og.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: 'Film Editor',
  description:
    'Film Editor with hands-on experience across feature films, OTT series, short films, advertisements, and music videos. From Disney+ Hotstar originals to award-nominated independent films.',
  email: 'rushikeshdhuri88@gmail.com',
  nationality: { '@type': 'Country', name: 'India' },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Film Editor',
    description:
      'Edits feature films, OTT series, short films, advertisements, and music videos. Specializes in narrative precision, visual rhythm, and post-production pipeline management.',
    occupationLocation: { '@type': 'Country', name: 'India' },
    skills:
      'Adobe Premiere Pro, DaVinci Resolve, Avid Media Composer, Multi-cam Editing, Proxy Workflow, Color Grading, Sound Design Collaboration, Offline to Online Conforming',
  },
  knowsAbout: [
    'Film Editing', 'Video Editing', 'Post Production',
    'Narrative Structure', 'Visual Rhythm', 'Pacing',
    'Adobe Premiere Pro', 'DaVinci Resolve', 'Avid Media Composer',
    'Multi-cam Editing', 'Proxy Workflow', 'Color Grading',
    'Sound Design', 'Offline to Online Conforming',
    'OTT Platform Delivery', 'Feature Film Editing',
    'Short Film Editing', 'Advertising',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Film & Video Editing',
        description:
          'Professional editing for feature films, short films, OTT series, and commercial projects. Narrative precision and visual rhythm.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Post-Production Pipeline Management',
        description:
          'Full post-production workflow management including proxy workflows, conforming, color grading supervision, and sound design collaboration.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Commercial & Ad Editing',
        description:
          'Fast-turnaround editing, versioning, and client feedback cycles for advertising campaigns and corporate films.',
      },
    },
  ],
  sameAs: [
    'https://instagram.com/_theatre_boy_',
    'https://www.imdb.com/name/nm14741319',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'rushikeshdhuri88@gmail.com',
    contactType: 'professional inquiry',
    availableLanguage: 'English',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Rushikesh Dhuri — Film Editor',
  description:
    'Portfolio and professional profile of Rushikesh Dhuri — Film Editor.',
  author: { '@id': `${BASE_URL}/#person` },
  publisher: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: 'Rushikesh Dhuri — Film Editor Portfolio',
  description:
    'Professional portfolio of Rushikesh Dhuri, a Film Editor with experience across feature films, OTT series, short films, and commercials.',
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntity: { '@id': `${BASE_URL}/#person` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}