import { getTranslations } from 'next-intl/server';
import ProcessSection from '@/components/home/ProcessSection'; // Reusing section

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Process.Meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function ProcessPage() {
    return (
        <div className="pt-40 pb-24 min-h-screen bg-background">
            <ProcessSection />
        </div>
    );
}
