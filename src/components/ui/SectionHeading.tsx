"use client";
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    dark?: boolean;
    center?: boolean;
}

export default function SectionHeading({ title, subtitle, dark = false, center = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            className={`mb-12 ${dark ? 'text-white' : 'text-foreground'} ${center ? 'text-center mx-auto' : ''}`}
        >
            <h2 className={`text-3xl md:text-5xl font-en-heading font-ar-heading font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-secondary'}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

