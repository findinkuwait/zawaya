import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'About.Meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About' });

    return (
        <div className="pt-40 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title={t('title')} subtitle={t('subtitle')} center />
                <div className="mt-12 text-lg text-gray-300 space-y-6 max-w-4xl mx-auto text-center font-en-body font-ar-body leading-relaxed">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                    <p>{t('p3')}</p>
                </div>
            </div>
        </div>
    );
}
