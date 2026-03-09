'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useLocale } from 'next-intl';

export default function AboutPreview() {
    const t = useTranslations('Home.About');
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")' }}
                        />
                        <div className="absolute inset-0 border-8 border-white/20 m-4 rounded-xl" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col items-start"
                    >
                        <SectionHeading title={t('title')} />

                        <div className="space-y-6 text-gray-400 text-lg font-en-body font-ar-body leading-loose mb-10 max-w-prose">
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                        </div>

                        <ul className="space-y-4 mb-12 text-gray-300 font-en-body font-ar-body max-w-prose">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span>{t('bullet1')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span>{t('bullet2')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span>{t('bullet3')}</span>
                            </li>
                        </ul>

                        <Link
                            href="/about"
                            className="w-full sm:w-auto text-center justify-center px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-[#0f0f0f] transition-all duration-300 flex items-center gap-2 group tracking-wide"
                        >
                            {t('btn')}
                            <ArrowRight size={18} className={`transition-transform transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
