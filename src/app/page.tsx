'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
    {
        company: 'GNAPSE',
        role: 'Frontend Developer',
        period: '2024.10 - Present',
        description:
            'Next.js와 React 기반 웹 서비스를 개발하고 있으며, 서비스 화면 개발, API 연동, 공통 UI 컴포넌트 개선, 사용자 경험 최적화 작업을 담당하고 있습니다.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
];

const projects = [
    {
        title: 'Company Product Dashboard',
        description:
            'Next.js 기반 대시보드 UI를 개발하고, 반복되는 화면 패턴을 컴포넌트화하여 생산성과 유지보수성을 개선했습니다.',
        tech: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS'],
        href: '#',
    },
    {
        title: 'Portfolio Website',
        description:
            '개인 브랜딩과 프로젝트 소개를 위한 반응형 포트폴리오 사이트입니다. SEO, 접근성, 부드러운 인터랙션을 고려했습니다.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        href: '#',
    },
    {
        title: 'UI Component System',
        description:
            '자주 사용하는 UI를 컴포넌트 단위로 정리하여 일관된 사용자 경험과 빠른 개발 흐름을 만들었습니다.',
        tech: ['React', 'Storybook', 'CSS Modules'],
        href: '#',
    },
];

const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Framer Motion',
    'React Query',
    'Git',
    'Figma',
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#080812] text-zinc-100 selection:bg-violet-500/40">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
                <div className="absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
            </div>

            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="fixed inset-x-4 top-5 z-50 mx-auto max-w-6xl rounded-full border border-white/10 bg-white/8 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
                <nav className="flex items-center justify-between">
                    <a href="#" className="text-sm font-bold tracking-tight md:text-base">
                        Ahn<span className="text-violet-300">.dev</span>
                    </a>

                    <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
                        <a href="#about" className="transition hover:text-white">
                            About
                        </a>
                        <a href="#experience" className="transition hover:text-white">
                            Experience
                        </a>
                        <a href="#projects" className="transition hover:text-white">
                            Projects
                        </a>
                        <a href="#contact" className="transition hover:text-white">
                            Contact
                        </a>
                    </div>

                    <a
                        href="mailto:your-email@example.com"
                        className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:scale-105 hover:bg-violet-100"
                    >
                        Hire me
                    </a>
                </nav>
            </motion.header>

            <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-20 pt-36">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.13 }}
                        className="max-w-3xl"
                    >
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200"
                        >
                            <Sparkles size={16} />
                            Frontend Developer · Since 2024.10
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="whitespace-pre-line text-5xl font-black leading-[1.05] tracking-tight md:text-7xl"
                        >
                            사용자 경험을{`
`}
                            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                                인터랙션과 코드
                            </span>
                            로 설계합니다.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300"
                        >
                            2024년 10월부터 현재까지 프론트엔드 개발자로 일하며 Next.js와 React 기반 웹 서비스를 개발하고 있습니다. 보기 좋은 UI뿐 아니라 유지보수하기 좋은 구조와 자연스러운 사용자 흐름을 함께 고민합니다.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 shadow-xl shadow-violet-950/30 transition hover:scale-105 hover:bg-violet-100"
                            >
                                프로젝트 보기
                                <ArrowUpRight
                                    size={17}
                                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>

                            <a
                                href="https://github.com/cookiepawn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:scale-105 hover:border-white/30 hover:bg-white/10"
                            >
                                <FaGithub size={17} />
                                GitHub
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-violet-950/50 backdrop-blur-xl"
                        >
                            <div className="rounded-[2rem] bg-zinc-950/80 p-5">
                                <div className="mb-5 flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                </div>

                                <div className="space-y-4 font-mono text-sm">
                                    <p className="text-zinc-500">const developer = &#123;</p>
                                    <p className="pl-5 text-violet-300">role: 'Frontend Developer',</p>
                                    <p className="pl-5 text-cyan-300">stack: ['React Native', 'Next.js', 'React'],</p>
                                    <p className="pl-5 text-fuchsia-300">focus: 'User Experience',</p>
                                    <p className="text-zinc-500">&#125;</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                id="about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.12 }}
                className="border-t border-white/10 px-6 py-28"
            >
                <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
                    <motion.h2 variants={fadeUp} className="text-3xl font-black md:text-4xl">
                        About
                    </motion.h2>

                    <motion.div
                        variants={fadeUp}
                        className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-zinc-300 shadow-xl shadow-black/20 backdrop-blur"
                    >
                        <p className="leading-8">
                            저는 비즈니스 요구사항을 사용자 관점의 화면과 기능으로 풀어내는 데 관심이 많습니다. 컴포넌트 재사용성, 성능 최적화, 명확한 상태 관리, 반응형 UI를 중요하게 생각합니다.
                        </p>
                        <p className="mt-5 leading-8">
                            현재 회사에서는 Next.js를 중심으로 서비스 화면 개발, API 연동, 공통 UI 컴포넌트 개선, 사용자 흐름 개선 작업을 담당하고 있습니다.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <section id="experience" className="border-t border-white/10 px-6 py-28">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black md:text-4xl">Experience</h2>
                        <p className="mt-3 text-zinc-400">지금까지의 커리어와 경험입니다.</p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-400/70 via-cyan-400/40 to-transparent" />

                        <div className="space-y-10">
                            {experiences.map((item, index) => (
                                <motion.div
                                    key={item.company}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                                    className="relative pl-14"
                                >
                                    <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />

                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/20 backdrop-blur-xl"
                                    >
                                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold">{item.company}</h3>
                                                <p className="mt-1 text-violet-200">{item.role}</p>
                                            </div>

                                            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                                                {item.period}
                                            </span>
                                        </div>

                                        <p className="mt-5 leading-7 text-zinc-300">{item.description}</p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {item.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ staggerChildren: 0.06 }}
                className="border-t border-white/10 px-6 py-28"
            >
                <div className="mx-auto max-w-6xl">
                    <motion.h2 variants={fadeUp} className="text-3xl font-black md:text-4xl">
                        Skills
                    </motion.h2>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <motion.span
                                key={skill}
                                variants={fadeUp}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-200 shadow-lg shadow-black/10 backdrop-blur"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.section>

            <section id="projects" className="border-t border-white/10 px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-black md:text-4xl">Projects</h2>
                        <p className="mt-3 text-zinc-400">실제 업무와 개인 프로젝트를 중심으로 정리했습니다.</p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.a
                                key={project.title}
                                href={project.href}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                                whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur transition"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/20 blur-2xl transition group-hover:bg-cyan-500/20" />

                                <div className="relative">
                                    <div className="mb-10 flex items-center justify-between">
                                        <span className="text-sm text-zinc-500">0{index + 1}</span>
                                        <ArrowUpRight className="text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold group-hover:text-violet-200">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 min-h-32 text-sm leading-6 text-zinc-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tech.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-white/8 px-3 py-1 text-xs text-zinc-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section
                id="contact"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="px-6 py-28"
            >
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-white/[0.06] to-cyan-500/20 p-8 shadow-2xl shadow-violet-950/30 backdrop-blur md:p-12">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-200">Contact</p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">
                        함께 좋은 웹 경험을 만들고 싶습니다.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-8 text-zinc-300">
                        프로젝트 제안, 채용, 협업 문의는 아래 이메일로 연락 주세요.
                    </p>

                    <a
                        href="mailto:dev.jcahn@gmail.com"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:scale-105 hover:bg-violet-100"
                    >
                        <Mail size={17} />
                        dev.jcahn@gmail.com
                    </a>
                </div>
            </motion.section>
        </main>
    );
}
