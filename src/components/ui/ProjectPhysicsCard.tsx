'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: string;
        category: string;
        title: string;
        location: string;
        img: string;
    };
}

export default function ProjectPhysicsCard({ project }: ProjectCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="group cursor-pointer relative perspective-1000"
            style={{ perspective: 1000 }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="overflow-hidden rounded-3xl relative w-full h-[400px] md:h-[500px] shadow-2xl"
            >
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.img})` }}
                />

                {/* Inertia Shadow Layer (Moves opposite to mouse) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    style={{
                        x: useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]),
                        y: useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]),
                    }}
                />

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8"
                    style={{ transform: 'translateZ(50px)' }} // Pop text out in 3D space
                >
                    <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10" />
                    <span className="text-accent text-sm uppercase tracking-widest font-en-body font-ar-body mb-2 relative z-20 pointer-events-none">{project.category}</span>
                    <h3 className="text-3xl font-bold text-white font-en-heading font-ar-heading mb-2 relative z-20 pointer-events-none">{project.title}</h3>
                    <div className="flex items-center justify-between text-gray-300 font-en-body font-ar-body relative z-20 pointer-events-none">
                        <span>{project.location}</span>
                        <ArrowUpRight className="text-white bg-accent/20 p-2 rounded-full" size={40} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
