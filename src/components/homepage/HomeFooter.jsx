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
    name: 'Commerce',
    href: 'https://dyte.io/voice-sdk',
  },
  {
    name: 'Content',
    href: 'https://dyte.io/live-streaming-sdk',
  },
  {
    name: 'Communication',
    href: 'https://dyte.io/chat-sdk',
  },
  {
    name: 'Pricing',
    href: 'https://dyte.io/pricing',
  },
  {
    name: 'Features',
    isAccordion: true,
    content: [
      {
        name: 'Plugins',
        href: 'https://dyte.io/features/plugin',
      },
      {
        name: 'Breakout Rooms',
        href: 'https://dyte.io/features/breakout-rooms',
      },
      {
        name: 'Recording',
        href: 'https://dyte.io/features/recording',
      },
      {
        name: 'UI Kit',
        href: 'https://dyte.io/features/ui-kit',
      },
      {
        name: 'DevEx',
        href: 'https://dyte.io/features/devex',
      },
      {
        name: 'Security',
        href: 'https://dyte.io/features/security',
      },
      {
        name: 'AI',
        href: 'https://dyte.io/features/dyte-ai',
      },
      {
        name: 'Streaming',
        href: 'https://dyte.io/features/streaming',
      },
      {
        name: 'UX',
        href: 'https://dyte.io/features/ux',
      },
      {
        name: 'Interatcive',
        href: 'https://dyte.io/features/interactive',
      },
    ],
  },
];

const developers = [
  {
    name: 'Developer Portal',
    href: 'https://accounts.dyte.io/auth/login',
  },
  {
    name: 'Documentation',
    href: 'https://productdb.dev',
  },
  {
    name: 'Showcase',
    href: 'https://dyte.io/showcase',
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
        href: 'https://dyte.io/flutter-video-sdk',
      },
      {
        name: 'Android',
        href: 'https://dyte.io/android-video-sdk',
      },
      {
        name: 'iOS',
        href: 'https://dyte.io/ios-video-sdk',
      },
      {
        name: 'React',
        href: 'https://dyte.io/react-video-sdk',
      },
      {
        name: 'React Native',
        href: 'https://dyte.io/react-native-video-sdk',
      },
    ],
  },
  {
    name: 'Migrate from Twilio',
    href: 'https://dyte.io/blog/migrate-twilio-video-dyte-shim/',
  },
];

const usecases = [
  { name: 'Ed-Tech', href: 'https://dyte.io/use-cases/ed-tech' },
  { name: 'Telehealth', href: 'https://dyte.io/use-cases/telehealth' },
  { name: 'HR Tech', href: 'https://dyte.io/use-cases/hr-tech' },
  { name: 'Fitness', href: 'https://dyte.io/use-cases/fitness' },
  { name: 'Social', href: 'https://dyte.io/use-cases/social' },
  { name: 'Gaming', href: 'https://dyte.io/use-cases/gaming' },
  { name: 'Events', href: 'https://dyte.io/use-cases/events' },
  { name: 'Dating', href: 'https://dyte.io/use-cases/dating' },
];

const company = [
  { name: 'About Us', href: 'https://productdb.io/about' },
  { name: 'Customers', href: 'https://productdb.io/customers' },
  { name: 'Blog', href: 'https://productdb.io/blog' },
  { name: 'Careers', href: 'https://productdb.io/careers' },
  { name: 'Community', href: 'https://dyte.io/community' },
  { name: 'Startup Program', href: 'https://dyte.io/startups' },
  { name: 'Contact Us', href: 'https://dyte.io/contact' },
  { name: 'FAQ', href: '/faq' },
];

const comparisons = [
  { name: 'ProductDB vs Raw WebRTC', href: 'https://dyte.io/webrtc-alternative' },
  { name: 'ProductDB vs Agora', href: 'https://dyte.io/agora-competitor' },
  { name: 'ProductDB vs Zoom', href: 'https://dyte.io/zoom-sdk-competitor' },
  { name: 'ProductDB vs Twilio', href: 'https://dyte.io/twilio-video-competitor' },
  { name: 'ProductDB vs Vonage', href: 'https://dyte.io/vonage-video-alternative' },
  {
    name: 'View 14 more',
    isAccordion: true,
    content: [
      {
        name: 'Zoom vs Agora',
        href: 'https://dyte.io/zoom-vs-agora',
      },
      {
        name: 'Agora vs Twilio',
        href: 'https://dyte.io/agora-vs-twilio',
      },
      {
        name: 'Zoom vs Twilio',
        href: 'https://dyte.io/zoom-vs-twilio',
      },
      {
        name: 'Agora vs Mux',
        href: 'https://dyte.io/agora-vs-mux',
      },
      {
        name: 'Zoom vs Whereby',
        href: 'https://dyte.io/zoom-vs-whereby',
      },
      {
        name: 'Tokbox vs Twilio',
        href: 'https://dyte.io/tokbox-vs-twilio',
      },
      {
        name: 'Tokbox vs Agora',
        href: 'https://dyte.io/tokbox-vs-agora',
      },
      {
        name: 'AWS Chime vs Twilio',
        href: 'https://dyte.io/aws-chime-vs-twilio',
      },
      {
        name: 'Tokbox vs Jitsi',
        href: 'https://dyte.io/tokbox-vs-jitsi',
      },
      {
        name: 'Zoom vs Jitsi',
        href: 'https://dyte.io/zoom-vs-jitsi',
      },
      {
        name: 'Agora vs Jitsi',
        href: 'https://dyte.io/agora-vs-jitsi',
      },
      {
        name: 'Whereby vs Jitsi',
        href: 'https://dyte.io/whereby-vs-jitsi',
      },
      {
        name: 'Livekit vs Jitsi',
        href: 'https://dyte.io/livekit-vs-jitsi',
      },
      {
        name: '100ms vs Agora',
        href: 'https://dyte.io/100ms-vs-agora',
      },
      {
        name: 'Twilio Video Alternatives',
        href: 'https://dyte.io/blog/twilio-video-alternatives/',
      },
    ],
  },
];

function Safety({ className }) {
  return (
<Link
      href="https://productdb.io/safety"
      target="_blank"
    >
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
</Link>
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
      var sp = new StatusPage.page({ page: 'hsx6f1r97yvq' });
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
      href="https://productdb.statuspage.io/"
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
              light: '/logo/dyte.svg',
              dark: '/logo/dyte_dark_logo.svg',
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
              href="https://productdb.io/legal/"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Legal
            </Link>
            &bull;
            <span className="text-inherit dark:text-[#999]">
              &copy; {new Date().getFullYear()} ProductDB.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/productdb"
              aria-label="ProductDB's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/productdb"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://x.com/ProductDB_io" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://www.youtube.com/@productdb"
              aria-label="ProductDB's YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
