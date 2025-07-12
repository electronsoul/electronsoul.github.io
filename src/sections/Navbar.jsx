import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation(){
    return (
        <ul className="nav-ul">
            <li className="nav-li"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/#about">About Me!</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/#projects">My Projects</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/#work">My Experience</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/#contact">Contact Me</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/blog">Blog</Link></li>
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const location = useLocation();
    const isBlogPage = location.pathname.startsWith("/blog");

    return (

        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex py-2 sm:py-0 items-center justify-between">

                    <a  href = "/" 
                        className="text-2xl font-extrabold transition-colors
                        text-neutral-400 hover:text-white 
                        hidden md:block justify-start"> 
                        {isBlogPage ? "My Blogs" : "My Portfolio"}
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-neutral-400
                        hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                        className="w-6 h-6" alt="toggle" />
                    </button>
                    
                    <nav 
                        className="hidden sm:flex justify-end">
                        <Navigation />
                    </nav>

                </div>
            </div>
            { isOpen && (
                <motion.div className="block overflow-hidden text-center sm:hidden" 
                initial    ={{ opacity: 0, x: -10}}
                animate    ={{ opacity: 1, x: 0}}
                style      ={{ maxHeight: "100vh"}}
                transition ={{ duration: 1}}> 
                <nav className="pb-5">
                    <Navigation />
                </nav>
            </motion.div>)}

        </div>
    );
};

export default Navbar