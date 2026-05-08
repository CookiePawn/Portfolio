'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        slug: 'mangdeng',
        year: '2026',
        period: '2026.01 - 진행중',
        title: '망댕이',
        subtitle: '감정 기록 기반 캐릭터 SNS 앱',
        description:
            '하루의 감정을 캐릭터와 짧은 문장으로 기록하고 친구들과 공유하는 모바일 서비스입니다.',
        stack: ['React Native', 'TypeScript', 'Firebase', 'AdMob'],
        color: 'from-orange-100 to-pink-100',
        icon: '망',
    },
    {
        slug: 'school-worker-platform',
        year: '2025',
        period: '2025.08 - 2025.12',
        title: '학교-근로자 매칭 플랫폼',
        subtitle: '관리자 WEB / 학교 WEB·APP / 근로자 APP',
        description:
            '학교 공고 등록, 근로자 신청, 관리자 배정까지 연결하는 통합 플랫폼입니다.',
        stack: ['Next.js', 'React Native', 'TypeScript', 'REST API'],
        color: 'from-blue-100 to-indigo-100',
        icon: 'W',
    },
    {
        slug: 'location-management',
        year: '2025',
        period: '2025.03 - 2025.06',
        title: '실시간 위치 기반 관리 서비스',
        subtitle: '작업자 위치 추적 및 상태 관리',
        description:
            '실시간 위치와 작업 상태를 기반으로 관리자가 진행 상황을 확인할 수 있는 서비스입니다.',
        stack: ['React Native', 'Map SDK', 'Firebase', 'GPS'],
        color: 'from-emerald-100 to-teal-100',
        icon: 'L',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-950">
            <Header />

            <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-950"
                    >
                        <ArrowLeft size={16} />
                        메인으로 돌아가기
                    </Link>

                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
                        Projects
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        작업한 프로젝트들을
                        <br />
                        시간순으로 정리했습니다.
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                        각 프로젝트에서 어떤 문제를 해결했는지, 어떤 역할을 했는지,
                        어떤 기술을 사용했는지 상세 페이지에서 확인할 수 있습니다.
                    </p>
                </motion.div>
            </section>

            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-t border-neutral-200 px-5 py-24 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
                <aside className="lg:sticky lg:top-28 lg:h-fit">
                    <p className="mb-6 text-sm font-medium text-neutral-400">
                        Timeline
                    </p>

                    <div className="hidden space-y-5 lg:block">
                        {projects.map((project) => (
                            <a
                                key={project.slug}
                                href={`#${project.slug}`}
                                className="group flex items-center gap-4 text-sm"
                            >
                                <span className="h-2 w-2 rounded-full bg-neutral-300 transition group-hover:bg-neutral-950" />
                                <span className="text-neutral-500 transition group-hover:text-neutral-950">
                                    {project.year}
                                </span>
                                <span className="truncate text-neutral-400 transition group-hover:text-neutral-600">
                                    {project.title}
                                </span>
                            </a>
                        ))}
                    </div>

                    <p className="max-w-xs text-sm leading-7 text-neutral-500">
                        프로젝트를 클릭하면 상세 페이지로 이동합니다.
                    </p>
                </aside>

                <div className="relative">
                    <div className="absolute left-[19px] top-0 hidden h-full w-px bg-neutral-200 sm:block" />

                    <div className="space-y-10">
                        {projects.map((project, index) => (
                            <ProjectTimelineCard
                                key={project.slug}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
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
                    <Link href="/" className="transition hover:text-neutral-950">
                        Home
                    </Link>
                    <Link href="/projects" className="text-neutral-950">
                        Projects
                    </Link>
                </nav>
            </div>
        </header>
    );
}

function ProjectTimelineCard({
    project,
    index,
}: {
    project: {
        slug: string;
        year: string;
        period: string;
        title: string;
        subtitle: string;
        description: string;
        stack: string[];
        color: string;
        icon: string;
    };
    index: number;
}) {
    return (
        <motion.article
            id={project.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="relative grid grid-cols-1 gap-6 sm:grid-cols-[40px_1fr]"
        >
            <div className="relative hidden sm:block">
                <span className="absolute left-0 top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-950" />
                </span>
            </div>

            <Link
                href={`/projects/${project.slug}`}
                className="group rounded-[2rem] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-sm sm:p-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <AppIcon icon={project.icon} color={project.color} />

                            <div>
                                <p className="text-sm font-medium text-neutral-500">
                                    {project.period}
                                </p>
                                <p className="text-sm text-neutral-400">{project.year}</p>
                            </div>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-semibold tracking-tight">
                                    {project.title}
                                </h2>

                                <p className="mt-3 text-lg text-neutral-500">
                                    {project.subtitle}
                                </p>
                            </div>

                            <ArrowUpRight
                                size={22}
                                className="shrink-0 text-neutral-300 transition group-hover:text-neutral-950"
                            />
                        </div>

                        <p className="mt-6 max-w-2xl leading-8 text-neutral-600">
                            {project.description}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.stack.map((stack) => (
                                <span
                                    key={stack}
                                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                                >
                                    {stack}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ProjectPreview color={project.color} title={project.title} />
                </div>
            </Link>
        </motion.article>
    );
}

function AppIcon({ icon, color }: { icon: string; color: string }) {
    return (
        <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-lg font-bold text-neutral-900`}
        >
            {icon}
        </div>
    );
}

function ProjectPreview({
    color,
    title,
}: {
    color: string;
    title: string;
}) {
    return (
        <div className="hidden h-full min-h-[220px] rounded-3xl bg-neutral-50 p-4 lg:block">
            <div className="flex h-full items-center justify-center">
                <div className="h-[190px] w-[96px] rounded-[1.4rem] bg-neutral-950 p-1.5 shadow-sm">
                    <div className="h-full rounded-[1.1rem] bg-white p-2">
                        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-neutral-200" />

                        <div className={`rounded-2xl bg-gradient-to-br ${color} p-3`}>
                            <p className="text-[10px] font-semibold text-neutral-800">
                                {title}
                            </p>
                            <div className="mt-6 h-10 rounded-xl bg-white/60" />
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="h-10 rounded-xl bg-neutral-100" />
                            <div className="h-10 rounded-xl bg-neutral-100" />
                        </div>

                        <div className="mt-3 space-y-1.5">
                            <div className="h-1.5 w-full rounded-full bg-neutral-100" />
                            <div className="h-1.5 w-3/4 rounded-full bg-neutral-100" />
                            <div className="h-1.5 w-1/2 rounded-full bg-neutral-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}