import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#000e24] border-b-2 border-yellow-500 px-6 py-4 font-['Pixelify_Sans'] shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-500 animate-pulse shadow-[0_0_10px_#eab308]"></div>
                    <span className="text-yellow-400 font-bold text-2xl tracking-tighter uppercase">
                        HOLY<span className="text-white">GAMES</span>
                    </span>
                </div>

                <div className="hidden md:flex gap-10">
                    <a href="/" className="text-gray-400 text-lg uppercase hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400 pb-1">
                        Home
                    </a>
                    <a href="/about" className="text-gray-400 text-lg uppercase hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400 pb-1">
                        About
                    </a>
                    <a href="/help" className="text-gray-400 text-lg uppercase hover:text-green-400 transition-colors border-b-2 border-transparent hover:border-green-400 pb-1">
                        Help
                    </a>
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-yellow-400 focus:outline-none"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-8 h-1 bg-yellow-400 transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-yellow-400 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-yellow-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-4 bg-[#001a41] p-4 rounded-lg border border-yellow-500/30">
                    <a href="/home" className="text-yellow-400 text-xl uppercase border-b border-yellow-500/20 pb-2">
                        [ Home ]
                    </a>
                    <a href="/about" className="text-cyan-400 text-xl uppercase border-b border-cyan-500/20 pb-2">
                        [ About ]
                    </a>
                    <a href="/help" className="text-green-400 text-xl uppercase pb-2">
                        [ Help ]
                    </a>
                </div>
            </div>
        </nav>
    );
}