import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { PenTool, Store, Coffee, Briefcase } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Services.Meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Home.Services' });

    const services = [
        { icon: PenTool, title: t('s1_title'), desc: t('s1_desc') },
        { icon: Store, title: t('s2_title'), desc: t('s2_desc') },
        { icon: Coffee, title: t('s3_title'), desc: t('s3_desc') },
        { icon: Briefcase, title: t('s4_title'), desc: t('s4_desc') },
    ];

    return (
        <div className="py-24 bg-[#0a0a0a] min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title={t('title')} subtitle={t('subtitle')} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} title={service.title} description={service.desc} icon={service.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}
