"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Terminal as TerminalIcon } from "lucide-react";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Button, Card, CardContent } from "@/components/ui";

type Line = {
    id: number;
    type: "input" | "output" | "system";
    text: React.ReactNode;
};

type Project = {
    slug: string;
    title: string;
    description: string;
    stack: string[];
    impact: string;
    links?: {
        github?: string;
        demo?: string;
    };
};

const profile = {
    name: "안준철",
    role: "Frontend / Full-stack Developer",
    location: "Seoul, Korea",
    email: "your-email@example.com",
    github: "https://github.com/your-id",
    linkedin: "https://linkedin.com/in/your-id",
    resume: "/resume.pdf",
    summary:
        "사용자 경험과 제품 임팩트를 함께 고민하는 개발자입니다. Next.js, React, TypeScript 기반의 웹 서비스를 만들고, 문제를 구조화해 해결하는 것을 좋아합니다.",
};

const projects: Project[] = [
    {
        slug: "realtime-collab",
        title: "Realtime Collaboration Tool",
        description:
            "WebSocket과 optimistic update를 활용해 실시간 협업 경험을 개선한 프로젝트입니다.",
        stack: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
        impact: "평균 응답 체감 속도 개선, 동시 편집 충돌 케이스 감소",
        links: {
            github: "https://github.com/your-id/realtime-collab",
            demo: "https://example.com",
        },
    },
    {
        slug: "portfolio-terminal",
        title: "Terminal Portfolio",
        description:
            "CLI 감성을 살린 인터랙티브 포트폴리오입니다. 명령어 기반으로 커리어와 프로젝트를 탐색할 수 있습니다.",
        stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        impact: "개발자다운 첫인상과 탐색 재미 제공",
        links: {
            github: "https://github.com/your-id/terminal-portfolio",
        },
    },
    {
        slug: "dashboard-analytics",
        title: "Analytics Dashboard",
        description:
            "데이터 시각화와 필터링 UX를 개선한 관리자 대시보드 프로젝트입니다.",
        stack: ["React", "Recharts", "Node.js", "Prisma"],
        impact: "반복 리포팅 작업 시간 단축 및 주요 지표 가시성 향상",
    },
];

const commandList = [
    "help",
    "about",
    "career",
    "skills",
    "projects",
    "project <slug>",
    "contact",
    "resume",
    "clear",
];

function OutputBlock({ children }: { children: React.ReactNode }) {
    return <div className="whitespace-pre-wrap leading-7 text-zinc-300">{children}</div>;
}

function ProjectList() {
    return (
        <div className="space-y-3">
            {projects.map((project) => (
                <div key={project.slug} className="rounded-xl border border-emerald-400/20 bg-white/5 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-emerald-300">{project.slug}</span>
                        <span className="text-zinc-500">—</span>
                        <span className="text-zinc-100">{project.title}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                    <p className="mt-2 text-xs text-zinc-500">자세히 보기: project {project.slug}</p>
                </div>
            ))}
        </div>
    );
}

function ProjectDetail({ project }: { project: Project }) {
    return (
        <div className="space-y-4 rounded-xl border border-emerald-400/20 bg-white/5 p-4">
            <div>
                <div className="text-lg font-semibold text-emerald-300">{project.title}</div>
                <div className="mt-1 text-sm text-zinc-400">slug: {project.slug}</div>
            </div>
            <p>{project.description}</p>
            <div>
                <div className="text-sm text-zinc-500">Stack</div>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <span key={item} className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <div className="text-sm text-zinc-500">Impact</div>
                <p className="mt-1 text-zinc-300">{project.impact}</p>
            </div>
            {project.links && (
                <div className="flex flex-wrap gap-3 text-sm">
                    {project.links.github && (
                        <a className="text-emerald-300 hover:underline" href={project.links.github} target="_blank">
                            GitHub
                        </a>
                    )}
                    {project.links.demo && (
                        <a className="text-emerald-300 hover:underline" href={project.links.demo} target="_blank">
                            Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default function TerminalPortfolioPage() {
    const [input, setInput] = useState("");
    const [lines, setLines] = useState<Line[]>([
        {
            id: 1,
            type: "system",
            text: (
                <OutputBlock>
                    {`Welcome to ${profile.name}'s portfolio terminal.\nType "help" to see available commands.`}
                </OutputBlock>
            ),
        },
    ]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const prompt = useMemo(() => `${profile.name.toLowerCase()}@portfolio:~$`, []);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lines]);

    const addLines = (newLines: Omit<Line, "id">[]) => {
        setLines((prev) => [
            ...prev,
            ...newLines.map((line, index) => ({ ...line, id: Date.now() + index })),
        ]);
    };

    const runCommand = (rawCommand: string) => {
        const command = rawCommand.trim();
        if (!command) return;

        setHistory((prev) => [command, ...prev]);
        setHistoryIndex(null);

        const inputLine: Omit<Line, "id"> = {
            type: "input",
            text: (
                <div className="flex gap-2">
                    <span className="text-emerald-400">{prompt}</span>
                    <span className="text-zinc-100">{command}</span>
                </div>
            ),
        };

        if (command === "clear") {
            setLines([]);
            return;
        }

        const output = getCommandOutput(command);
        addLines([inputLine, { type: "output", text: output }]);
    };

    const getCommandOutput = (command: string): React.ReactNode => {
        const [base, ...args] = command.split(" ");

        switch (base) {
            case "help":
                return (
                    <OutputBlock>
                        {`Available commands:\n\n${commandList.map((item) => `  ${item}`).join("\n")}\n\nTip: Try "projects" or "project portfolio-terminal".`}
                    </OutputBlock>
                );

            case "about":
                return (
                    <OutputBlock>
                        {`${profile.name}\n${profile.role}\n${profile.location}\n\n${profile.summary}`}
                    </OutputBlock>
                );

            case "career":
                return (
                    <OutputBlock>
                        {`Career highlights\n\n- 제품 문제를 기술적으로 정의하고 구현까지 연결\n- React / Next.js 기반 프론트엔드 아키텍처 설계\n- API 연동, 상태 관리, 성능 최적화 경험\n- 협업 과정에서 문서화와 의사결정 기록을 중요하게 생각`}
                    </OutputBlock>
                );

            case "skills":
                return (
                    <OutputBlock>
                        {`Frontend\n  Next.js, React, TypeScript, Tailwind CSS\n\nBackend\n  Node.js, PostgreSQL, Prisma, REST API\n\nTools\n  Git, Vercel, Figma, Notion\n\nFocus\n  UX, performance, maintainable architecture`}
                    </OutputBlock>
                );

            case "projects":
                return <ProjectList />;

            case "project": {
                const slug = args[0];
                const project = projects.find((item) => item.slug === slug);

                if (!slug) {
                    return <OutputBlock>{`Usage: project <slug>\nExample: project portfolio-terminal`}</OutputBlock>;
                }

                if (!project) {
                    return (
                        <OutputBlock>
                            {`Project not found: ${slug}\nRun "projects" to see available project slugs.`}
                        </OutputBlock>
                    );
                }

                return <ProjectDetail project={project} />;
            }

            case "contact":
                return (
                    <div className="space-y-2 text-zinc-300">
                        <div>Email: <a className="text-emerald-300 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
                        <div>GitHub: <a className="text-emerald-300 hover:underline" href={profile.github} target="_blank">{profile.github}</a></div>
                        <div>LinkedIn: <a className="text-emerald-300 hover:underline" href={profile.linkedin} target="_blank">{profile.linkedin}</a></div>
                    </div>
                );

            case "resume":
                return (
                    <OutputBlock>
                        <a className="text-emerald-300 hover:underline" href={profile.resume} target="_blank">
                            Open resume
                        </a>
                    </OutputBlock>
                );

            default:
                return (
                    <OutputBlock>
                        {`Command not found: ${command}\nType "help" to see available commands.`}
                    </OutputBlock>
                );
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        runCommand(input);
        setInput("");
    };

    const runQuickCommand = (command: string) => {
        runCommand(command);
        inputRef.current?.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (history.length === 0) return;
            const nextIndex = historyIndex === null ? 0 : Math.min(historyIndex + 1, history.length - 1);
            setHistoryIndex(nextIndex);
            setInput(history[nextIndex]);
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (historyIndex === null) return;
            const nextIndex = historyIndex - 1;
            if (nextIndex < 0) {
                setHistoryIndex(null);
                setInput("");
            } else {
                setHistoryIndex(nextIndex);
                setInput(history[nextIndex]);
            }
        }
    };

    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100 md:px-8">
            <div className="mx-auto max-w-6xl">
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                            <TerminalIcon className="h-4 w-4" />
                            Interactive Developer Portfolio
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                            {profile.name}
                            <span className="block text-emerald-300">Terminal Portfolio</span>
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{profile.summary}</p>
                    </div>

                    <Card className="border-white/10 bg-white/[0.03] text-zinc-100 shadow-2xl">
                        <CardContent className="space-y-4 p-5">
                            <div className="text-sm text-zinc-500">Quick links</div>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="secondary" className="justify-start gap-2" asChild>
                                    <a href={profile.github} target="_blank"><FiGithub className="h-4 w-4" /> GitHub</a>
                                </Button>
                                <Button variant="secondary" className="justify-start gap-2" asChild>
                                    <a href={profile.linkedin} target="_blank"><FiLinkedin className="h-4 w-4" /> LinkedIn</a>
                                </Button>
                                <Button variant="secondary" className="justify-start gap-2" asChild>
                                    <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> Email</a>
                                </Button>
                                <Button variant="secondary" className="justify-start gap-2" asChild>
                                    <a href={profile.resume} target="_blank"><FileText className="h-4 w-4" /> Resume</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.header>

                <div className="mb-4 flex flex-wrap gap-2">
                    {["help", "about", "skills", "projects", "contact"].map((command) => (
                        <button
                            key={command}
                            onClick={() => runQuickCommand(command)}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                        >
                            {command}
                        </button>
                    ))}
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#050807] shadow-2xl"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        <span className="ml-3 text-sm text-zinc-500">portfolio-terminal</span>
                    </div>

                    <div className="h-[560px] overflow-y-auto p-5 font-mono text-sm md:text-base">
                        <div className="space-y-5">
                            {lines.map((line) => (
                                <div key={line.id}>{line.text}</div>
                            ))}

                            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                <span className="shrink-0 text-emerald-400">{prompt}</span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="w-full bg-transparent text-zinc-100 outline-none placeholder:text-zinc-700"
                                    placeholder="type a command..."
                                    autoComplete="off"
                                    spellCheck={false}
                                />
                            </form>
                            <div ref={bottomRef} />
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
