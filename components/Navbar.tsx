"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-[90px] backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center group mr-auto">
                    {/* PNG Logo */}
                    <div className="relative w-[100px] h-[100px] mt-2 transition-transform group-hover:scale-110">
                        <Image
                            src="/pic_logo_main_try.png"
                            alt="Andhra Avakai Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* CTA Button */}
                <a
                    href="#buy-now"
                    className="px-6 py-3 bg-gradient-to-r from-chili to-chili-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sesame/50 transition-all duration-300 hover:scale-105"
                >
                    Buy Avakai
                </a>
            </div>
        </nav>
    );
}
