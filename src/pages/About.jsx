import img from "../assets/imgs/holygames.jpg"
import game1_1 from "../assets/imgs/solo.png"
import game2 from "../assets/imgs/danger.png"
import game3_1 from "../assets/imgs/soloCar.png"
import { Link } from "react-router"

export default function About() {
    return (
        <div className="min-h-screen bg-[#00122e] text-white font-['Pixelify_Sans'] p-6 flex flex-col items-center gap-12">
            
            <section className="w-full max-w-4xl border-b-4 border-yellow-400 pb-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 uppercase tracking-[0.2em] mb-4">
                    The Legend
                </h1>
                <img src={img} alt="Holy Games Logo" className="w-40 h-40 mx-auto border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-lg mb-4" />
                <p className="text-xl md:text-2xl text-cyan-300 italic">"Pixels that heal, games that bless."</p>
            </section>

            <div className="w-full max-w-3xl space-y-12 text-center md:text-left">
                
                <div className="bg-[#001a41] border-l-8 border-cyan-500 p-8 rounded-r-lg shadow-lg">
                    <h2 className="text-3xl text-cyan-400 mb-4 uppercase underline decoration-2 underline-offset-8">
                        The Divine Vision
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                        In a world of stressful matches and angry losses, <span className="text-white font-bold">HolyGames</span> was forged to be a sanctuary. 
                        I believe gaming shouldn't raise your heart rate—it should soothe your soul. 
                        My algorithm is designed to ensure no two rounds feel the same, keeping the journey fresh and the spirit calm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center p-4 border-2 border-white/10 bg-black/20 rounded-lg hover:border-yellow-400 transition-colors">
                        <img src={game3_1} alt="CarAway" className="w-20 h-20 mb-3 grayscale hover:grayscale-0 transition-all" />
                        <h3 className="text-yellow-400 text-xl font-bold">CARAWAY</h3>
                        <p className="text-xs text-gray-400 text-center mt-2">Drive into the horizon of peace.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border-2 border-white/10 bg-black/20 rounded-lg hover:border-cyan-400 transition-colors">
                        <img src={game1_1} alt="Dodger" className="w-20 h-20 mb-3 grayscale hover:grayscale-0 transition-all" />
                        <h3 className="text-cyan-400 text-xl font-bold">DODGER</h3>
                        <p className="text-xs text-gray-400 text-center mt-2">Evade the stress of the modern world.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border-2 border-white/10 bg-black/20 rounded-lg hover:border-green-400 transition-colors">
                        <img src={game2} alt="PrimeGuess" className="w-20 h-20 mb-3 grayscale hover:grayscale-0 transition-all" />
                        <h3 className="text-green-400 text-xl font-bold">PRIMEGUESS</h3>
                        <p className="text-xs text-gray-400 text-center mt-2">Calculate your way to pure happiness.</p>
                    </div>
                </div>

                <div className="text-center p-10 border-4 border-double border-yellow-400/50 bg-[#001a41]">
                    <h2 className="text-2xl text-white mb-6 uppercase tracking-widest">Why HolyGames?</h2>
                    <ul className="text-lg space-y-4 text-cyan-200">
                        <li>✦ No Stress, Just Pixels</li>
                        <li>✦ Dynamic Rounds for Infinite Replay</li>
                        <li>✦ Pure Happiness in Every Frame</li>
                        <li>✦ Created for the True Servant of the Code</li>
                    </ul>
                </div>
            </div>

            <footer className="w-full max-w-4xl py-12 flex justify-center">
                <Link 
                    to="/" 
                    className="px-12 py-4 bg-yellow-400 text-black text-2xl font-bold border-b-8 border-yellow-700 active:border-b-0 active:translate-y-2 transition-all uppercase"
                >
                    Return to the Temple
                </Link>
            </footer>
        </div>
    )
}