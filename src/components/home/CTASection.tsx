'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CTASection() {
    const t = useTranslations('Home.CTA');

    return (
        <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
            <div className="container relative mx-auto px-4 md:px-12 z-10">
                <div className="bg-secondary p-10 md:p-24 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl shadow-black/80">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #C8A46A 0%, transparent 70%)' }} />

                    <div className="relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold font-en-heading font-ar-heading mb-6 md:mb-6 tracking-wide drop-shadow-sm text-white leading-tight">
                            {t('title')}
                        </h2>
                        <p className="text-lg md:text-xl font-en-body font-ar-body max-w-xl mx-auto drop-shadow-sm text-gray-300 leading-relaxed">
                            {t('subtitle')}
                        </p>

                        <div className="mt-12 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 w-full">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-5 md:py-4 bg-accent text-[#0f0f0f] font-semibold tracking-wide rounded-full hover:bg-white active:scale-95 transition-all shadow-xl block text-center"
                            >
                                {t('btnConsult')}
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-5 md:py-4 bg-transparent border-2 border-accent text-accent font-semibold tracking-wide rounded-full hover:bg-accent/10 active:scale-95 transition-all font-en-heading font-ar-heading block text-center"
                            >
                                {t('btnContact')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
