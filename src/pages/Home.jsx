import img from "../assets/imgs/holygames.jpg"
import game1_1 from "../assets/imgs/solo.png"
import game1_2 from "../assets/imgs/duo.png"
import game2 from "../assets/imgs/danger.png"
import game3_1 from "../assets/imgs/soloCar.png"
import game3_2 from "../assets/imgs/duoCar.png"

export default function Home() {
    return (
        <div className="min-h-screen bg-[#00122e] text-white font-['Pixelify_Sans'] p-4 flex flex-col items-center gap-8">
            
            {/* Header Section */}
            <div className="w-full max-w-4xl border-4 border-yellow-400 p-6 rounded-lg bg-[#001a41] shadow-[0_0_15px_rgba(250,204,21,0.5)] text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 uppercase tracking-widest mb-4">
                    Holy Games
                </h1>
                <p className="text-cyan-400 text-lg md:text-xl mb-6">
                    BLESSINGS FROM THE HOLY CODER
                </p>
                <div className="flex justify-center">
                    <img src={img} alt="Holy Games Logo" className="w-32 h-32 border-2 border-yellow-400 rounded-sm shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                </div>
            </div>

            {/* Game Gallery Section */}
            <div className="w-full max-w-4xl border-4 border-green-500 p-8 rounded-lg bg-[#001a41] text-center space-y-6">
                <h2 className="text-2xl md:text-3xl">🕊️ WELCOME TO THE HOLY REALM OF GAMES! 🕊️</h2>
                <p className="text-cyan-300 text-lg">Play the games you will definitely like!</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
                    <img src={game1_1} alt="Game 1" className="w-full rounded border-2 border-cyan-500 hover:scale-105 transition-transform cursor-pointer" />
                    <img src={game1_2} alt="Game 2" className="w-full rounded border-2 border-cyan-500 hover:scale-105 transition-transform cursor-pointer" />
                    <img src={game2} alt="Game 3" className="w-full rounded border-2 border-cyan-500 hover:scale-105 transition-transform cursor-pointer" />
                    <img src={game3_1} alt="Game 4" className="w-full rounded border-2 border-cyan-500 hover:scale-105 transition-transform cursor-pointer" />
                    <img src={game3_2} alt="Game 5" className="w-full rounded border-2 border-cyan-500 hover:scale-105 transition-transform cursor-pointer" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="w-full max-w-4xl space-y-4">
                <h2 className="text-xl text-center text-yellow-400 uppercase tracking-widest">Heres the site and phone version</h2>
                
                <a 
                    href="https://holygames-s87n.onrender.com/"
                    className="block w-full bg-yellow-400 text-black text-center py-5 text-3xl font-bold border-b-8 border-yellow-700 active:border-b-0 active:translate-y-2 transition-all uppercase"
                >
                    ▶ Begin Holy Quest (Site) ◀
                </a>

                <a 
                    href="https://expo.dev/accounts/berdia/projects/HolyGames/builds/682738ed-f898-4a49-ac1c-41cd513e8284"
                    className="block w-full bg-cyan-600 hover:bg-cyan-500 text-white text-center py-4 text-2xl font-bold border-b-8 border-cyan-800 active:border-b-0 active:translate-y-2 transition-all uppercase"
                >
                    Download APK Version
                </a>
            </div>

            {/* Warning/Notes Section */}
            <div className="w-full max-w-4xl bg-black/40 p-6 border-2 border-white/10 rounded-md text-sm md:text-base space-y-3 italic text-gray-400">
                <p>Note: if you are on iOS, unfortunately you can't download the APK file, but you can try out the site version!</p>
                <p>And for the Android users, if you need help on the downloading, please navigate to the help page.</p>
            </div>

            {/* Footer */}
            <footer className="mt-auto py-10 text-center border-t-2 border-yellow-400 w-full">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Created by Berdia, Servant of the Code</p>
                <p className="text-cyan-400 text-xl font-bold">HOLY GAMES - BLESSED BY THE CODE</p>
                <p className="text-yellow-400 text-lg">May your pixels be forever blessed 🙏</p>
            </footer>
        </div>
    )
}