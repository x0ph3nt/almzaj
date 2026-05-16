'use client'

import { motion } from 'framer-motion'

const industryImages = [
    {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Large enterprise warehouse management for IT assets',
        className: 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]', // الصورة الكبيرة الأساسية: مستودع مركزي ضخم
    },
    {
        url: 'https://images.unsplash.com/photo-1579803077234-151bad863918?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Smartphone repair technician working on motherboard micro-soldering',
        className: 'md:col-span-1 md:row-span-1 h-[240px] md:h-[288px]', // صيانة دقيقة وبوردات جوال
    },
    {
        url: 'https://images.unsplash.com/photo-1550041473-d296a3a8a18a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Mobile device diagnostic tools and screen refurbishment area',
        className: 'md:col-span-1 md:row-span-1 h-[240px] md:h-[288px]', // أدوات فحص وفك الجوالات
    },
    {
        url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
        alt: 'Electronics parts inventory and components testing setup',
        className: 'md:col-span-1 md:row-span-1 h-[240px] md:h-[288px]', // قطع غيار ومكونات إلكترونية
    },
    {
        url: 'https://images.unsplash.com/photo-1735875530804-d661ca2001da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Industrial logistics center with storage pallets',
        className: 'md:col-span-2 md:row-span-1 h-[240px] md:h-[288px]', // مستودع شحن ولوجستيات عريض
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1726797616358-5221a54d066b?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Enterprise technology recycling facility and distribution hub',
        className: 'md:col-span-3 md:row-span-1 h-[280px] md:h-[380px]', // تقفيل السكشن بصورة منشأة ومستودع عريضة جداً
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export function FacilitiesSection() {
    return (
        <section id="facilities" className="py-24 sm:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Simple & Clear Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                        Our Infrastructure
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
                        Our Warehouses & Technical Labs
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        An inside look at our global operations, enterprise-scale storage facilities, and certified device hardware maintenance centers.
                    </p>
                </motion.div>

                {/* Professional Mix Image Grid (Warehouses & Mobile Repair) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {industryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative group overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${image.className}`}
                        >
                            {/* Image with smooth hover interactions */}
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out grayscale-[8%] group-hover:grayscale-0"
                                loading="lazy"
                            />

                            {/* Minimal overlay for depth consistency */}
                            <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-300" />

                            {/* Premium micro-border neon feedback on hover */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-2xl pointer-events-none transition-colors duration-300" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}