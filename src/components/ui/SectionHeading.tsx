import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    dark?: boolean;
}

export default function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            className={`mb-12 ${dark ? 'text-white' : 'text-foreground'}`}
        >
            <h2 className={`text-3xl md:text-5xl font-en-heading font-ar-heading font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl ${dark ? 'text-gray-300' : 'text-secondary'}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
