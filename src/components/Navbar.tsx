"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <a href="#" className={styles.logo} aria-label="LynxSoft home">
                    <span className={styles.logoIcon}>⬡</span>
                    <span className={styles.logoText}>
                        Lynx<span className="gradient-text">Soft</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className={styles.links} aria-label="Main navigation">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className={styles.link}>
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a href="#contact" className={`btn-primary ${styles.ctaBtn}`}>
                    <span>Get in Touch</span>
                    <span aria-hidden>→</span>
                </a>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className={styles.mobileMenu} aria-label="Mobile navigation">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
                        <span>Get in Touch</span>
                    </a>
                </nav>
            )}
        </header>
    );
}
