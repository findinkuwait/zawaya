import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const t = await getTranslations({ locale, namespace: 'Projects.Meta' });
    return {
        title: `${slug.replace('-', ' ')} | Zawaya`,
        description: t('description')
    };
}

export default async function SingleProjectPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: 'SingleProject' });

    // Placeholder static project data
    const project = {
        title: slug.replace(/-/g, ' ').toUpperCase(),
        location: 'Kuwait City',
        area: '450 sqm',
        year: '2025',
        client: 'Premium Brand',
        scope: t('scopeDesc'),
        overview: t('overviewDesc'),
        images: [
            'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop'
        ]
    };

    return (
        <div className="bg-background pt-24 pb-20">
            {/* Hero Image */}
            <div
                className="w-full h-[60vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${project.images[0]})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white container mx-auto">
                    <h1 className="text-5xl font-bold font-en-heading font-ar-heading mb-4">{project.title}</h1>
                    <p className="text-xl opacity-90 font-en-body font-ar-body">{project.location}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-white font-en-heading font-ar-heading mb-6">{t('overview')}</h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-en-body font-ar-body">{project.overview}</p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl border border-white/10 h-fit space-y-6">
                        <h3 className="text-xl font-bold text-white font-en-heading font-ar-heading border-b border-white/10 pb-4">{t('details')}</h3>

                        <div className="grid grid-cols-2 gap-y-4 text-sm font-en-body font-ar-body">
                            <span className="text-gray-500">{t('client')}</span>
                            <span className="font-semibold text-gray-200 text-right">{project.client}</span>

                            <span className="text-gray-500">{t('location')}</span>
                            <span className="font-semibold text-gray-200 text-right">{project.location}</span>

                            <span className="text-gray-500">{t('area')}</span>
                            <span className="font-semibold text-gray-200 text-right">{project.area}</span>

                            <span className="text-gray-500">{t('year')}</span>
                            <span className="font-semibold text-gray-200 text-right">{project.year}</span>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <span className="block text-gray-500 mb-2 font-en-body font-ar-body">{t('scope')}</span>
                            <span className="font-semibold text-gray-200 font-en-body font-ar-body">{project.scope}</span>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-primary font-en-heading font-ar-heading mb-10">{t('gallery')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images.slice(1).map((img, idx) => (
                            <div
                                key={idx}
                                className="h-[400px] rounded-xl bg-cover bg-center hover:shadow-xl transition-all duration-300"
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
