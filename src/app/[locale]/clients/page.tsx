import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Clients.Meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Clients' });

    // Placeholder clients array
    const clients = Array.from({ length: 12 }).map((_, i) => `Client ${i + 1}`);

    return (
        <div className="pt-40 pb-32 min-h-screen bg-background">
            <div className="container mx-auto px-6 md:px-12 text-center text-white">
                <SectionHeading title={t('title')} subtitle={t('subtitle')} center />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
                    {clients.map((client, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-lg hover:shadow-accent/10 cursor-pointer h-32">
                            <span className="font-en-heading font-ar-heading font-medium text-lg text-gray-300">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
