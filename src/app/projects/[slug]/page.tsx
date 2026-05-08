'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { useParams } from 'next/navigation';

const projects = [
    {
        slug: 'mangdeng',
        title: '망댕이',
        subtitle: '감정 기록 기반 캐릭터 SNS 앱',
        period: '2026.01 - 진행중',
        role: '기획 / UI 설계 / 앱 개발',
        color: 'from-orange-100 to-pink-100',
        type: 'mobile',
        description:
            '하루의 감정을 캐릭터와 짧은 문장으로 기록하고 친구들과 가볍게 공유할 수 있는 모바일 서비스입니다.',
        overview:
            '망댕이는 사용자가 하루의 감정을 부담 없이 기록하고, 친구들과 가볍게 공유할 수 있도록 설계한 감정 기반 SNS 서비스입니다.',
        problem:
            '기존 SNS는 보여주기식 콘텐츠가 많아 피로감이 크고, 감정을 편하게 표현하기 어렵다는 문제가 있다고 생각했습니다.',
        solution:
            '감정을 캐릭터와 짧은 문장으로 표현하게 하여 기록 부담을 낮추고, 주간 리포트를 통해 사용자가 자신의 감정 흐름을 돌아볼 수 있도록 구성했습니다.',
        features: [
            '감정 캐릭터 선택 및 기록',
            '친구 스토리 확인',
            '주간 감정 리포트',
            '광고 보상형 흐름',
        ],
        stack: ['React Native', 'TypeScript', 'Firebase', 'AdMob', 'Lottie'],
        learned: [
            '모바일 앱의 화면 흐름 설계',
            '감정 기반 UX 구성',
            '광고 노출 흐름 설계',
            '서비스 브랜딩과 캐릭터 시스템의 중요성',
        ],
    },
    {
        slug: 'school-worker-platform',
        title: '학교-근로자 매칭 플랫폼',
        subtitle: '관리자 WEB / 학교 WEB·APP / 근로자 APP',
        period: '2025.08 - 2025.12',
        role: '서비스 구조 설계 / 웹·앱 개발',
        color: 'from-blue-100 to-indigo-100',
        type: 'web',
        description:
            '학교 공고 등록, 근로자 신청, 관리자 배정까지 연결하는 통합 플랫폼입니다.',
        overview:
            '학교, 근로자, 관리자가 각각 다른 권한과 화면을 사용하는 통합 매칭 플랫폼입니다.',
        problem:
            '공고 등록, 신청, 배정, 관리가 분리되어 있으면 운영 효율이 떨어지고, 사용자별 역할 관리가 복잡해집니다.',
        solution:
            '관리자, 학교, 근로자의 권한을 분리하고 각 사용자의 목적에 맞는 화면 흐름을 설계했습니다.',
        features: [
            '학교 공고 등록',
            '근로자 신청 플로우',
            '관리자 배정 관리',
            '권한별 화면 분리',
        ],
        stack: ['Next.js', 'React Native', 'TypeScript', 'REST API'],
        learned: [
            '권한 기반 서비스 구조 설계',
            '웹과 앱의 역할 분리',
            '관리자 페이지 UX 구성',
            '복잡한 플로우를 단순화하는 방법',
        ],
    },
    {
        slug: 'location-management',
        title: '실시간 위치 기반 관리 서비스',
        subtitle: '작업자 위치 추적 및 상태 관리',
        period: '2025.03 - 2025.06',
        role: '앱 개발 / 위치 기반 구조 설계',
        color: 'from-emerald-100 to-teal-100',
        type: 'hybrid',
        description:
            '실시간 위치와 작업 상태를 기반으로 관리자가 진행 상황을 확인할 수 있는 서비스입니다.',
        overview:
            '작업자 또는 배달기사의 위치와 상태를 실시간으로 확인할 수 있는 관리형 서비스입니다.',
        problem:
            '현장 작업이나 배달 상황에서는 현재 위치와 진행 상태를 빠르게 파악하기 어렵습니다.',
        solution:
            '지도 기반 UI와 상태 관리 구조를 설계하여 관리자가 작업 흐름을 직관적으로 확인할 수 있도록 구성했습니다.',
        features: [
            '실시간 위치 표시',
            '작업 상태 관리',
            '지도 기반 모니터링',
            '관리자 확인 화면',
        ],
        stack: ['React Native', 'Map SDK', 'Firebase', 'GPS'],
        learned: [
            '위치 기반 서비스 구조',
            '지도 UI 설계',
            '실시간 상태 업데이트 흐름',
            '모바일 환경에서의 위치 데이터 처리',
        ],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-5 text-neutral-950">
                <div>
                    <h1 className="text-3xl font-semibold">프로젝트를 찾을 수 없습니다.</h1>
                    <Link
                        href="/projects"
                        className="mt-6 inline-flex text-sm text-neutral-500 hover:text-neutral-950"
                    >
                        프로젝트 목록으로 돌아가기
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white text-neutral-950">
            <Header />

            <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-6 lg:px-8">
                <Link
                    href="/projects"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-950"
                >
                    <ArrowLeft size={16} />
                    프로젝트 목록으로
                </Link>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.65 }}
                    className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr]"
                >
                    <div>
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
                            Project Detail
                        </p>

                        <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            {project.title}
                        </h1>

                        <p className="mt-6 text-2xl text-neutral-500">
                            {project.subtitle}
                        </p>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                            {project.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ProjectHeroVisual
                        type={project.type}
                        title={project.title}
                        color={project.color}
                    />
                </motion.div>
            </section>

            <ProjectInfoSection project={project} />

            <ContentSection title="Overview" content={project.overview} />
            <ContentSection title="Problem" content={project.problem} />
            <ContentSection title="Solution" content={project.solution} />

            <ListSection title="Main Features" items={project.features} />
            <ScreenSection project={project} />
            <ListSection title="What I Learned" items={project.learned} />

            <section className="mx-auto max-w-6xl border-t border-neutral-200 px-5 py-24 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        다른 프로젝트도 확인해보세요.
                    </h2>

                    <Link
                        href="/projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                    >
                        프로젝트 목록 보기
                        <ExternalLink size={16} />
                    </Link>
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
                    <Link href="/projects" className="transition hover:text-neutral-950">
                        Projects
                    </Link>
                    <a
                        href="https://github.com/cookiepawn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 transition hover:text-neutral-950"
                    >
                        <FiGithub size={15} />
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
}

function ProjectInfoSection({ project }: { project: any }) {
    return (
        <section className="mx-auto max-w-6xl border-t border-neutral-200 px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <InfoCard label="Period" value={project.period} />
                <InfoCard label="Role" value={project.role} />
                <InfoCard label="Type" value={project.type.toUpperCase()} />
            </div>
        </section>
    );
}

function InfoCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-3xl border border-neutral-200 p-6">
            <p className="text-sm text-neutral-400">{label}</p>
            <p className="mt-3 text-lg font-medium text-neutral-950">{value}</p>
        </div>
    );
}

function ContentSection({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-t border-neutral-200 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionLabel>{title}</SectionLabel>

            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="text-2xl font-medium leading-relaxed tracking-tight text-neutral-800 sm:text-3xl"
            >
                {content}
            </motion.p>
        </section>
    );
}

function ListSection({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-t border-neutral-200 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionLabel>{title}</SectionLabel>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((item, index) => (
                    <motion.div
                        key={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="rounded-3xl border border-neutral-200 p-6"
                    >
                        <p className="mb-4 text-sm text-neutral-400">
                            {String(index + 1).padStart(2, '0')}
                        </p>
                        <p className="text-lg font-medium leading-7">{item}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function ScreenSection({ project }: { project: any }) {
    return (
        <section className="mx-auto max-w-6xl border-t border-neutral-200 px-5 py-24 sm:px-6 lg:px-8">
            <div className="mb-12">
                <SectionLabel>Screens</SectionLabel>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                    <motion.div
                        key={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeUp}
                        transition={{ duration: 0.5, delay: item * 0.05 }}
                        className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6"
                    >
                        <PhoneMockup title={`${project.title} ${item}`} color={project.color} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function ProjectHeroVisual({
    type,
    title,
    color,
}: {
    type: string;
    title: string;
    color: string;
}) {
    if (type === 'web') {
        return <BrowserMockup title={title} color={color} />;
    }

    return (
        <div className="relative mx-auto h-[520px] w-full max-w-md">
            <div className="absolute left-0 top-20 scale-90 opacity-70">
                <PhoneMockup title="Preview" color={color} />
            </div>
            <div className="absolute right-0 top-0">
                <PhoneMockup title={title} color={color} />
            </div>
        </div>
    );
}

function PhoneMockup({ title, color }: { title: string; color: string }) {
    return (
        <div className="mx-auto h-[460px] w-[230px] rounded-[2.5rem] border border-neutral-200 bg-neutral-950 p-2 shadow-xl shadow-neutral-200/60">
            <div className="h-full rounded-[2rem] bg-white p-4">
                <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-neutral-200" />

                <div className={`rounded-3xl bg-gradient-to-br ${color} p-4`}>
                    <p className="text-sm font-semibold text-neutral-900">{title}</p>
                    <p className="mt-1 text-xs text-neutral-500">Mobile Screen</p>
                    <div className="mt-8 h-28 rounded-3xl bg-white/60" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-2xl bg-neutral-100" />
                    <div className="h-24 rounded-2xl bg-neutral-100" />
                </div>

                <div className="mt-5 space-y-3">
                    <div className="h-3 w-full rounded-full bg-neutral-100" />
                    <div className="h-3 w-3/4 rounded-full bg-neutral-100" />
                    <div className="h-3 w-1/2 rounded-full bg-neutral-100" />
                </div>
            </div>
        </div>
    );
}

function BrowserMockup({ title, color }: { title: string; color: string }) {
    return (
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/70">
            <div className="flex h-12 items-center gap-2 border-b border-neutral-200 px-4">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-300" />
                <div className="ml-3 h-6 flex-1 rounded-full bg-neutral-100" />
            </div>

            <div className="grid h-[420px] grid-cols-[0.35fr_1fr]">
                <aside className="border-r border-neutral-200 bg-neutral-50 p-4">
                    <div className="mb-6 h-8 w-8 rounded-xl bg-neutral-900" />
                    <div className="space-y-3">
                        <div className="h-3 w-full rounded-full bg-neutral-200" />
                        <div className="h-3 w-2/3 rounded-full bg-neutral-200" />
                        <div className="h-3 w-4/5 rounded-full bg-neutral-200" />
                    </div>
                </aside>

                <div className="p-5">
                    <div className={`rounded-3xl bg-gradient-to-br ${color} p-5`}>
                        <p className="text-sm font-semibold text-neutral-800">{title}</p>
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="h-20 rounded-2xl bg-white/70" />
                            <div className="h-20 rounded-2xl bg-white/70" />
                            <div className="h-20 rounded-2xl bg-white/70" />
                        </div>
                    </div>

                    <div className="mt-5 space-y-3">
                        <div className="h-4 w-full rounded-full bg-neutral-100" />
                        <div className="h-4 w-4/5 rounded-full bg-neutral-100" />
                        <div className="h-4 w-2/3 rounded-full bg-neutral-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
            {children}
        </p>
    );
}