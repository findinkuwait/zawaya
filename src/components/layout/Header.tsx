'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const t = useTranslations('Navigation');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/about', label: t('about') },
        { href: '/services', label: t('services') },
        { href: '/projects', label: t('projects') },
        { href: '/process', label: t('process') },
        { href: '/clients', label: t('clients') },
        { href: '/contact', label: t('contact') }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-md shadow-sm shadow-white/5 py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Zawaya International Logo"
                        width={140}
                        height={50}
                        className="brightness-0 invert opacity-90 object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-accent transition-colors tracking-wide">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side items */}
                <div className="hidden md:flex items-center gap-6">
                    <LanguageSwitcher />
                    <Link href="/contact" className="bg-accent text-[#0f0f0f] px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                        {t('contact')}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f0f] border-t border-white/10 shadow-lg shadow-black/50 p-6 flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-200 hover:text-accent transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                        <LanguageSwitcher />
                        <Link href="/contact" className="bg-accent text-[#0f0f0f] px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors text-center w-full ml-4">
                            {t('contact')}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
