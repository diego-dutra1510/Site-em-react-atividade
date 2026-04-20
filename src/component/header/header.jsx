import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./header.css";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <div>
                <h3 style={{ marginLeft: "6px", color: '#a8e9fe' }}><span style={{ color: '#ed7700f6' }}>Sub</span>nautica</h3>
            </div>
            <nav className="nav-center">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <FaHome style={{ marginRight: "6px" }} /> Home
                </Link>
                <Link
                    to="/wiki"
                    className={location.pathname === "/wiki" ? "active" : ""}
                >
                    <FaBook style={{ marginRight: "6px" }} /> Wiki
                </Link>
                <Link
                    to="/API"
                    className={location.pathname === "/API" ? "active" : ""}
                >
                    <FaBook style={{ marginRight: "6px" }} /> Api
                </Link>
            </nav>

            <div className="login">
                <button
                    className={`menu-btn ${menuAberto ? "ativo" : ""}`}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    ☰
                </button>
            </div>

            <nav className={menuAberto ? "mobile-menu ativo" : "mobile-menu"}>
                <div className="mobile-menu-header">
                    <h6>Menu</h6>
                </div>
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <FaHome style={{ marginRight: "6px" }} />
                        Home
                    </div>

                    <IoIosArrowForward />
                </Link>
                <Link
                    to="/wiki"
                    className={location.pathname === "/wiki" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <FaBook />
                        Wiki
                    </div>

                    <IoIosArrowForward />
                </Link>
                <Link
                    to="/API"
                    className={location.pathname === "/API" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <FaBook />
                        Api
                    </div>

                    <IoIosArrowForward />
                </Link>
            </nav>
        </header>
    );
}

export default Header;