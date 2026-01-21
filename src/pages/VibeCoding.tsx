import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Target, Layers, ArrowRight, Code2, Copy, Check } from 'lucide-react';

const VibeCoding = () => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const [techStack, setTechStack] = useState('React/Tailwind');
    const [codingStyle, setCodingStyle] = useState('Vibe-Centric');

    const copyToClipboard = () => {
        const prompt = `System Instructions:
Role: Expert Software Engineer
Style: ${codingStyle}
Stack: ${techStack}
Rules:
- NO PLACEHOLDERS. Implement full features.
- THINK FIRST. Outline plans before code.
- THE LOOP IS GOD. Focus on iteration speed.
- MANAGE CONTEXT. Reset chats frequently.`;
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <section className="text-center mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
                        <Zap size={16} />
                        <span>The Modern Way to Code</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            {t('vibecoding.hero.title')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {t('vibecoding.hero.subtitle')}
                    </p>
                </section>

                {/* Principles Section */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold text-center mb-16">{t('vibecoding.principles.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Target className="text-cyan-400" />, title: t('vibecoding.p1.title'), desc: t('vibecoding.p1.desc') },
                            { icon: <Layers className="text-blue-400" />, title: t('vibecoding.p2.title'), desc: t('vibecoding.p2.desc') },
                            { icon: <Code2 className="text-purple-400" />, title: t('vibecoding.p3.title'), desc: t('vibecoding.p3.desc') }
                        ].map((p, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm group hover:border-cyan-500/50 transition-all">
                                <div className="mb-6 p-3 rounded-lg bg-gray-800 w-fit group-hover:bg-gray-700 transition-colors">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vibe Clinic */}
                <section className="mb-32">
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-cyan-500/5 rotate-12">
                            <Zap size={200} />
                        </div>
                        <h2 className="text-3xl font-bold mb-12">{t('vibecoding.clinic.title')}</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                                <div className="text-red-400 font-mono text-sm mb-4 uppercase tracking-widest">Bad Vibe</div>
                                <p className="text-gray-400 italic">"Fix this bug."</p>
                            </div>
                            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                                <div className="text-green-400 font-mono text-sm mb-4 uppercase tracking-widest">Good Vibe</div>
                                <p className="text-gray-400 italic">
                                    "{t('vibecoding.clinic.good')}"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Generator Section */}
                <section className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('vibecoding.generator.title')}</h2>
                        <p className="text-gray-400">Configure your agent for the ultimate vibe.</p>
                    </div>

                    <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-3">Tech Stack</label>
                                <select
                                    value={techStack}
                                    onChange={(e) => setTechStack(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none appearance-none cursor-pointer"
                                >
                                    <option>React/Tailwind</option>
                                    <option>Python/FastAPI</option>
                                    <option>Next.js/Postgres</option>
                                    <option>Rust/Wasm</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-3">Coding Style</label>
                                <select
                                    value={codingStyle}
                                    onChange={(e) => setCodingStyle(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none appearance-none cursor-pointer"
                                >
                                    <option>Vibe-Centric</option>
                                    <option>Clean Architecture</option>
                                    <option>Hacker Mode</option>
                                    <option>Enterprise</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-gray-950 rounded-xl p-6 font-mono text-sm text-cyan-400 border border-gray-800">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500 text-xs">system_prompt.txt</span>
                                    <button
                                        onClick={copyToClipboard}
                                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2 text-xs"
                                    >
                                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                        {copied ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <p className="mb-2">Role: Expert Software Engineer</p>
                                <p className="mb-2">Style: {codingStyle}</p>
                                <p className="mb-2">Stack: {techStack}</p>
                                <p className="mb-2">Rules:</p>
                                <p className="ml-4">- NO PLACEHOLDERS. Implement full features.</p>
                                <p className="ml-4">- THINK FIRST. Outline plans before code.</p>
                                <p className="ml-4">- THE LOOP IS GOD. Focus on iteration speed.</p>
                                <p className="ml-4">- MANAGE CONTEXT. Reset chats frequently.</p>
                            </div>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className="w-full mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group"
                        >
                            {t('vibecoding.generator.cta')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VibeCoding;
