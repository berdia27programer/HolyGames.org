import img from "../assets/imgs/help.png"
import { Link } from "react-router"

export default function Help() {
    return (
        <div className="min-h-screen bg-[#00122e] text-white font-['Pixelify_Sans'] p-6 flex flex-col items-center gap-10">
            
            <header className="w-full max-w-4xl border-4 border-cyan-500 p-6 rounded-lg bg-[#001a41] shadow-[0_0_20px_rgba(6,182,212,0.4)] text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 uppercase tracking-widest">
                    The Sacred Manual
                </h1>
                <p className="text-gray-400 text-lg mt-2 italic">Follow the steps to obtain the Holy APK</p>
            </header>

            <div className="w-full max-w-4xl space-y-8">
                
                <div className="flex flex-col md:flex-row items-center gap-6 border-2 border-yellow-500/30 p-4 rounded-md bg-[#001a41]/50">
                    <div className="bg-yellow-500 text-black w-12 h-12 flex items-center justify-center text-3xl font-bold shrink-0 shadow-[0_0_10px_#eab308]">
                        1
                    </div>
                    <h2 className="text-xl md:text-2xl text-yellow-400">
                        CLICK THE "APK VERSION" LINK ON THE HOME PAGE
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 border-2 border-green-500/30 p-4 rounded-md bg-[#001a41]/50">
                    <div className="bg-green-500 text-black w-12 h-12 flex items-center justify-center text-3xl font-bold shrink-0 shadow-[0_0_10px_#22c55e]">
                        2
                    </div>
                    <h2 className="text-xl md:text-2xl text-green-400">
                        CLICK THE "DOWNLOAD APK" BUTTON
                    </h2>
                </div>

                <div className="w-full border-4 border-white/20 p-6 rounded-lg bg-[#001a41] space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-white text-black w-10 h-10 flex items-center justify-center text-2xl font-bold">3</div>
                        <h3 className="text-lg md:text-xl text-cyan-300">
                            ON THE EXPO GO SITE, CLICK THE BUTTON SHOWN BELOW:
                        </h3>
                    </div>
                    <div className="flex justify-center py-4 bg-black/40 rounded border border-white/10">
                        <img 
                            src={img} 
                            alt="Instructional Guide" 
                            className="max-w-full h-auto rounded border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 border-2 border-yellow-500/30 p-4 rounded-md bg-[#001a41]/50">
                    <div className="bg-yellow-500 text-black w-12 h-12 flex items-center justify-center text-3xl font-bold shrink-0 shadow-[0_0_10px_#eab308]">
                        4
                    </div>
                    <h2 className="text-xl md:text-2xl text-yellow-400 uppercase">
                        WAIT FOR THE DOWNLOAD TO COMPLETE. YOUR JOURNEY IS READY!
                    </h2>
                </div>
            </div>

            <div className="w-full max-w-4xl">
                <Link 
                    to="/" 
                    className="block w-full bg-cyan-600 hover:bg-cyan-500 text-white text-center py-4 text-2xl font-bold transition-all border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 uppercase"
                >
                    ◀ RETURN TO HOME
                </Link>
            </div>

            <footer className="text-gray-500 text-xs py-8">
                <p>DO NOT INTERRUPT THE DIVINE DOWNLOAD PROCESS</p>
                <p>And also, if you have any problems, you can send an email to berdiabekauri5@gmail.com</p>
            </footer>
        </div>
    )
}