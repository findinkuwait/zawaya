import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="group bg-white p-10 md:p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-accent/30 cursor-pointer flex flex-col items-start gap-8 md:gap-6">
            <div className="p-5 md:p-4 bg-background rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent shadow-sm">
                <Icon size={40} />
            </div>
            <div>
                <h3 className="text-xl font-bold font-en-heading font-ar-heading mb-3 text-primary">{title}</h3>
                <p className="text-secondary leading-relaxed font-en-body font-ar-body">{description}</p>
            </div>
        </div>
    );
}
