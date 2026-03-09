import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className="bg-[#0a0a0a] text-white pt-20 pb-28 md:pb-10 border-t border-white/5">
            <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 border-b border-white/10 pb-16 md:pb-12 text-center md:text-left">
                {/* Brand */}
                <div className="space-y-6 flex flex-col items-center md:items-start">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo.png"
                            alt="Zawaya International Logo"
                            width={160}
                            height={60}
                            className="brightness-0 invert opacity-90 object-contain"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Crafting Exceptional Interior Spaces. Specializing in retail, commercial, and high-end finishing works.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl md:text-lg font-semibold mb-6 text-white font-en-heading font-ar-heading">Company</h4>
                    <ul className="space-y-5 md:space-y-4">
                        <li><Link href="/about" className="block py-1 text-gray-400 hover:text-accent transition-colors">{t('about')}</Link></li>
                        <li><Link href="/services" className="block py-1 text-gray-400 hover:text-accent transition-colors">{t('services')}</Link></li>
                        <li><Link href="/projects" className="block py-1 text-gray-400 hover:text-accent transition-colors">{t('projects')}</Link></li>
                        <li><Link href="/contact" className="block py-1 text-gray-400 hover:text-accent transition-colors">{t('contact')}</Link></li>
                    </ul>
                </div>

                {/* Address & Contact */}
                <div>
                    <h4 className="text-xl md:text-lg font-semibold mb-6 text-white font-en-heading font-ar-heading">{t('contact')}</h4>
                    <ul className="space-y-5 md:space-y-4">
                        <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-400 py-1">
                            <MapPin size={22} className="text-accent shrink-0 md:mt-1 mb-2 md:mb-0" />
                            <span>Kuwait City, Al Asimah<br className="hidden md:block" /> { }Zawaya International Studios</span>
                        </li>
                        <li className="flex flex-col md:flex-row items-center gap-3 text-gray-400 py-1">
                            <Phone size={22} className="text-accent shrink-0 mb-2 md:mb-0" />
                            <a href="tel:+96512345678" className="hover:text-accent transition-colors">+965 1234 5678</a>
                        </li>
                        <li className="flex flex-col md:flex-row items-center gap-3 text-gray-400 py-1 break-all">
                            <Mail size={22} className="text-accent shrink-0 mb-2 md:mb-0" />
                            <a href="mailto:info@zawayainternational.com" className="hover:text-accent transition-colors">info@zawayainternational.com</a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-xl md:text-lg font-semibold mb-6 text-white font-en-heading font-ar-heading">Follow Us</h4>
                    <div className="flex items-center gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 md:p-3 bg-white/5 rounded-full hover:bg-accent hover:text-[#0f0f0f] transition-all duration-300">
                            <Instagram size={24} className="md:w-5 md:h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 md:px-12 mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4 md:gap-0 text-center">
                <p>© 2026 Zawaya International. All rights reserved.</p>
                <p>Premium Interior Fit-Out & Retail Design</p>
            </div>
        </footer>
    );
}
