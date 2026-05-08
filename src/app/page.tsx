'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CalendarDays } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const careers = [
  {
    period: '2024 - Present',
    title: 'Frontend / Mobile Developer',
    description:
      'React, React Native, Next.js를 기반으로 앱과 웹 서비스를 개발하고 있습니다.',
  },
  {
    period: 'Project Based',
    title: 'Service Development',
    description:
      '모바일 앱, 관리자 페이지, 플랫폼 서비스 등 실제 사용 가능한 제품 개발을 경험했습니다.',
  },
  {
    period: 'Focus',
    title: 'Product & UX',
    description:
      '단순 구현보다 서비스 흐름, 사용자 경험, 유지보수 가능한 구조를 함께 고민합니다.',
  },
];

const stacks = [
  'React',
  'Next.js',
  'React Native CLI',
  'React Native Expo',
  'TypeScript',
  'TailwindCSS',
  'Firebase',
  'Framer Motion',
  'REST API',
  'AdMob',
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <StackSection />
      <ProjectCtaSection />
      <ContactSection />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          JUNDEV
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-neutral-500 md:flex">
          <a href="#about" className="transition hover:text-neutral-950">
            About
          </a>
          <a href="#career" className="transition hover:text-neutral-950">
            Career
          </a>
          <a href="#stack" className="transition hover:text-neutral-950">
            Stack
          </a>
          <Link href="/projects" className="transition hover:text-neutral-950">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="max-w-5xl"
      >
        <p className="mb-6 text-sm font-medium text-neutral-500">
          Frontend & Mobile Developer
        </p>

        <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          아이디어를
          <br />
          실제 서비스로 만드는
          <br />
          개발자 안준철입니다.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          React, React Native, Next.js를 기반으로 앱과 웹 서비스를 개발합니다.
          사용자가 실제로 쓰는 서비스의 흐름과 경험을 함께 고민합니다.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            프로젝트 보기
            <ArrowRight size={17} />
          </Link>

          <a
            href="https://github.com/cookiepawn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <FiGithub size={17} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle title="서비스의 흐름을 이해하고, 사용자가 쓰기 좋은 화면을 만듭니다." />

        <div className="space-y-6 text-lg leading-9 text-neutral-600">
          <p>
            저는 단순히 화면을 구현하는 것보다, 사용자가 어떤 흐름으로 서비스를
            사용하는지 고민하며 개발합니다.
          </p>

          <p>
            모바일 앱은 React Native로, 웹 플랫폼과 관리자 페이지는 Next.js로
            구현하며, 기획부터 화면 구조, 개발, 개선까지 제품의 전체 흐름에
            관심이 많습니다.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CareerSection() {
  return (
    <Section id="career" label="Career Flow">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle title="기술을 나열하기보다, 실제 서비스를 만드는 경험을 쌓아가고 있습니다." />

        <div className="relative border-l border-neutral-200 pl-8">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[39px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 ring-8 ring-white" />

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                <CalendarDays size={14} />
                {career.period}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                {career.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                {career.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StackSection() {
  return (
    <Section id="stack" label="Stack">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle title="앱과 웹 서비스를 만들기 위한 기술을 사용합니다." />

        <div className="flex flex-wrap gap-3 self-start">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCtaSection() {
  return (
    <Section label="Projects">
      <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12">
        <p className="mb-5 text-sm font-medium text-neutral-500">
          Selected Works
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          제가 만든 앱과 웹 서비스는 프로젝트 페이지에서 자세히 볼 수 있습니다.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          프로젝트별로 어떤 문제를 해결했는지, 어떤 역할을 했는지, 어떤 기술을
          사용했는지 정리했습니다.
        </p>

        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          프로젝트 전체 보기
          <ArrowRight size={17} />
        </Link>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" label="Contact">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          함께 만들고 싶은 서비스가 있다면 연락주세요.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          웹, 앱, 관리자 페이지, MVP 개발에 관심이 있습니다. 좋은 아이디어를
          실제 서비스로 구현하는 일을 좋아합니다.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:dev.jcahn@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Mail size={17} />
            이메일 보내기
          </a>

          <a
            href="https://github.com/cookiepawn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <FiGithub size={17} />
            GitHub 보기
          </a>
        </div>
      </div>
    </Section>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl border-t border-neutral-200 px-5 py-28 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
          {label}
        </p>

        {children}
      </motion.div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
  );
}