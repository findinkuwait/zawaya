import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/components/ui/SectionHeading';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Contact.Meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <div className="pt-40 pb-24 min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title={t('title')} subtitle={t('subtitle')} center />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Contact Info */}
                    <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl border border-white/10">
                        <h3 className="text-2xl font-bold font-en-heading font-ar-heading mb-8 text-white">
                            {t('infoTitle')}
                        </h3>

                        <div className="space-y-8 text-gray-300 font-en-body font-ar-body">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-accent mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold">{t('location')}</h4>
                                    <p className="text-gray-500 mt-1">Kuwait City, Al Asimah<br />Zawaya International Studios</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-accent shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold">{t('phone')}</h4>
                                    <p className="text-gray-500 mt-1">+965 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="text-accent shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold">{t('email')}</h4>
                                    <p className="text-gray-400 mt-1">info@zawayainternational.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="font-semibold mb-4 text-white font-en-heading font-ar-heading">{t('social')}</h4>
                            <div className="flex items-center gap-4 text-gray-300">
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-[#0f0f0f] transition-all"><Instagram size={20} /></a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-[#0f0f0f] transition-all"><Facebook size={20} /></a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-[#0f0f0f] transition-all"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl border border-white/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('formName')}</label>
                                    <input type="text" className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('formEmail')}</label>
                                    <input type="email" className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('formPhone')}</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('formProjectType')}</label>
                                    <select className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent">
                                        <option>Retail</option>
                                        <option>Commercial</option>
                                        <option>Hospitality</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('formMessage')}</label>
                                <textarea rows={5} className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-accent text-[#0f0f0f] rounded-lg font-bold hover:bg-white transition-colors mt-4 shadow-sm">
                                {t('btnSend')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
