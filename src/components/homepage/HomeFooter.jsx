import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ThemedImage from '@theme/ThemedImage';

const products = [
  {
    name: 'Classification',
    href: 'https://productdb.io/product/classification',
  },
  {
    name: 'Marketing',
    href: 'https://productdb.io/voice-sdk',
  },
  {
    name: 'Live Streaming',
    href: 'https://productdb.io/live-streaming-sdk',
  },
  {
    name: 'Chat SDK',
    href: 'https://productdb.io/chat-sdk',
  },
  {
    name: 'Pricing',
    href: 'https://productdb.io/pricing',
  },
  {
    name: 'Features',
    isAccordion: true,
    content: [
      {
        name: 'Plugins',
        href: 'https://productdb.io/features/plugin',
      },
      {
        name: 'Breakout Rooms',
        href: 'https://productdb.io/features/breakout-rooms',
      },
      {
        name: 'Recording',
        href: 'https://productdb.io/features/recording',
      },
      {
        name: 'UI Kit',
        href: 'https://productdb.io/features/ui-kit',
      },
      {
        name: 'DevEx',
        href: 'https://productdb.io/features/devex',
      },
      {
        name: 'Security',
        href: 'https://productdb.io/features/security',
      },
      {
        name: 'AI',
        href: 'https://productdb.io/features/ProductDB-ai',
      },
      {
        name: 'Streaming',
        href: 'https://productdb.io/features/streaming',
      },
      {
        name: 'UX',
        href: 'https://productdb.io/features/ux',
      },
      {
        name: 'Interatcive',
        href: 'https://productdb.io/features/interactive',
      },
    ],
  },
];

const developers = [
  {
    name: 'Developer Portal',
    href: 'https://accounts.productdb.io/auth/login',
  },
  {
    name: 'Documentation',
    href: 'https://productdb.dev',
  },
  {
    name: 'Showcase',
    href: 'https://productdb.io/showcase',
  },
  {
    name: 'API Reference',
    href: '/api',
  },
  {
    name: 'Guides',
    href: '/guides',
  },
  {
    name: 'Platform',
    isAccordion: true,
    content: [
      {
        name: 'Flutter',
        href: 'https://productdb.io/flutter-video-sdk',
      },
      {
        name: 'Android',
        href: 'https://productdb.io/android-video-sdk',
      },
      {
        name: 'iOS',
        href: 'https://productdb.io/ios-video-sdk',
      },
      {
        name: 'React',
        href: 'https://productdb.io/react-video-sdk',
      },
      {
        name: 'React Native',
        href: 'https://productdb.io/react-native-video-sdk',
      },
    ],
  },
  {
    name: 'Migrate from Twilio',
    href: 'https://productdb.io/blog/migrate-twilio-video-ProductDB-shim/',
  },
];

const usecases = [
  { name: 'Ed-Tech', href: 'https://productdb.io/use-cases/ed-tech' },
  { name: 'Telehealth', href: 'https://productdb.io/use-cases/telehealth' },
  { name: 'HR Tech', href: 'https://productdb.io/use-cases/hr-tech' },
  { name: 'Fitness', href: 'https://productdb.io/use-cases/fitness' },
  { name: 'Social', href: 'https://productdb.io/use-cases/social' },
  { name: 'Gaming', href: 'https://productdb.io/use-cases/gaming' },
  { name: 'Events', href: 'https://productdb.io/use-cases/events' },
  { name: 'Dating', href: 'https://productdb.io/use-cases/dating' },
];

const company = [
  { name: 'About Us', href: 'https://productdb.io/about' },
  { name: 'Customers', href: 'https://productdb.io/customers' },
  { name: 'Blog', href: 'https://productdb.io/blog' },
  { name: 'Careers', href: 'https://jobs.lever.co/ProductDB-io' },
  { name: 'Community', href: 'https://productdb.io/community' },
  { name: 'Startup Program', href: 'https://productdb.io/startups' },
  { name: 'Contact Us', href: 'https://productdb.io/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Guide on Video SDK', href: 'https://productdb.io/blog/video-sdk/' },
];

const comparisons = [
  { name: 'ProductDB vs Raw WebRTC', href: 'https://productdb.io/webrtc-alternative' },
  { name: 'ProductDB vs Agora', href: 'https://productdb.io/agora-competitor' },
  { name: 'ProductDB vs Zoom', href: 'https://productdb.io/zoom-sdk-competitor' },
  { name: 'ProductDB vs Twilio', href: 'https://productdb.io/twilio-video-competitor' },
  { name: 'ProductDB vs Vonage', href: 'https://productdb.io/vonage-video-alternative' },
  {
    name: 'View 14 more',
    isAccordion: true,
    content: [
      {
        name: 'Zoom vs Agora',
        href: 'https://productdb.io/zoom-vs-agora',
      },
      {
        name: 'Agora vs Twilio',
        href: 'https://productdb.io/agora-vs-twilio',
      },
      {
        name: 'Zoom vs Twilio',
        href: 'https://productdb.io/zoom-vs-twilio',
      },
      {
        name: 'Agora vs Mux',
        href: 'https://productdb.io/agora-vs-mux',
      },
      {
        name: 'Zoom vs Whereby',
        href: 'https://productdb.io/zoom-vs-whereby',
      },
      {
        name: 'Tokbox vs Twilio',
        href: 'https://productdb.io/tokbox-vs-twilio',
      },
      {
        name: 'Tokbox vs Agora',
        href: 'https://productdb.io/tokbox-vs-agora',
      },
      {
        name: 'AWS Chime vs Twilio',
        href: 'https://productdb.io/aws-chime-vs-twilio',
      },
      {
        name: 'Tokbox vs Jitsi',
        href: 'https://productdb.io/tokbox-vs-jitsi',
      },
      {
        name: 'Zoom vs Jitsi',
        href: 'https://productdb.io/zoom-vs-jitsi',
      },
      {
        name: 'Agora vs Jitsi',
        href: 'https://productdb.io/agora-vs-jitsi',
      },
      {
        name: 'Whereby vs Jitsi',
        href: 'https://productdb.io/whereby-vs-jitsi',
      },
      {
        name: 'Livekit vs Jitsi',
        href: 'https://productdb.io/livekit-vs-jitsi',
      },
      {
        name: '100ms vs Agora',
        href: 'https://productdb.io/100ms-vs-agora',
      },
      {
        name: 'Twilio Video Alternatives',
        href: 'https://productdb.io/blog/twilio-video-alternatives/',
      },
    ],
  },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        'flex max-w-[418px] flex-row overflow-clip rounded-2xl bg-white dark:bg-[#474747] sm:flex-col sm:pr-0 sm:pb-8 lg:flex-row lg:pr-16 lg:pb-0',
        className
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500 dark:bg-[#474747] dark:text-[#fff]">
        Your Security,
        <br />
        Our Priority.
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/soc-compliant-1.png" alt="SOC Compliant" />
        <img src="/img/vector.png" alt="HIPAA Compliant" />
        <img
          style={{ width: '62px' }}
          src="/img/gdpr_docs.png"
          alt="GDPR compliant"
        />
      </div>
    </div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'All Systems Operational',
  });

  useEffect(() => {
    if (typeof StatusPage !== 'undefined') {
      // eslint-disable-next-line no-undef
      var sp = new StatusPage.page({ page: 'wjlxrzb5h09l' });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://status.productdb.io"
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline dark:hover:bg-[#474747]',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-[#2DB002]',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>{status.description}</div>
    </Link>
  );
}

function Links({ name, links, isAccordion }) {
  //To control accordion in footer
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (href) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === href ? null : href
    );
  };

  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400 dark:text-[#fff]">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href, isAccordion, content }) => (
          <Link
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
            onClick={() => (isAccordion ? toggleAccordion(href) : null)}
          >
            {name}
            {isAccordion && activeAccordion === href && (
              <ul style={{ paddingLeft: '1rem', listStyle: 'unset' }}>
                {content.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF] dark:bg-[#191919]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ThemedImage
            alt="ProductDB"
            className="h-9 w-fit lg:h-12"
            sources={{
              light: '/logo/ProductDB.svg',
              dark: '/logo/ProductDB_dark_logo.svg',
            }}
          />

          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div>

        <hr className="my-12 !bg-gray-300 dark:!bg-[#999]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>
          <Safety className="flex w-full max-w-full lg:hidden" />

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://productdb.io/legal/privacy-policy"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://productdb.io/legal/terms-of-service"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Terms of Service
            </Link>
            &bull;
            <span className="text-inherit dark:text-[#999]">
              &copy; {new Date().getFullYear()} ProductDB.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Productdb"
              aria-label="ProductDB's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/Productdb"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/ProductDB_io" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/company/productDB"
              aria-label="Productdb's YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
