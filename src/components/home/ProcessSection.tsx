'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Hammer, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
    const t = useTranslations('Home.Process');

    const steps = [
        { icon: MessageSquare, title: t('step1_title'), desc: t('step1_desc') },
        { icon: PenTool, title: t('step2_title'), desc: t('step2_desc') },
        { icon: Hammer, title: t('step3_title'), desc: t('step3_desc') },
        { icon: CheckCircle2, title: t('step4_title'), desc: t('step4_desc') },
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <SectionHeading title={t('title')} subtitle={t('subtitle')} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 relative">
                    {/* Connecting line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />

                    {/* Vertical Timeline Line (Mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-[3rem] w-[1px] bg-white/10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center z-10 gap-6 md:gap-0"
                        >
                            <div className="w-24 h-24 shrink-0 rounded-full bg-[#1a1a1a] border border-white/10 shadow-2xl flex items-center justify-center text-white md:mb-6 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-accent transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100" />
                                <step.icon size={36} className="relative z-10 transition-colors duration-300 group-hover:text-[#0f0f0f]" />
                                {/* Step Number */}
                                <div className="absolute top-2 right-2 text-white/20 text-sm font-bold opacity-50 font-en-heading">0{idx + 1}</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-en-heading font-ar-heading mb-3">{step.title}</h3>
                                <p className="text-gray-400 font-en-body font-ar-body">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
