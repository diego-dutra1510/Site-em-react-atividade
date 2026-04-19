import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-title">
                    © {new Date().getFullYear()} • Projeto Subnautica React
                </p>

                <p className="footer-author">
                    Desenvolvido por <span>Diego</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;