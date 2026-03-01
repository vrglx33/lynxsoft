import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} aria-label="Hero">
            {/* Background image */}
            <div className={styles.bgWrap} aria-hidden="true">
                <Image
                    src="/hero-bg.png"
                    alt=""
                    fill
                    priority
                    quality={90}
                    style={{ objectFit: "cover" }}
                />
                <div className={styles.bgOverlay} />
            </div>

            {/* Glow orbs */}
            <div className={`orb orb-cyan ${styles.orb1}`} aria-hidden="true" />
            <div className={`orb orb-violet ${styles.orb2}`} aria-hidden="true" />

            <div className={`container ${styles.content}`}>
                {/* Label */}
                <div className={`section-label animate-fade-up`}>
                    AI-Powered Software Engineering
                </div>

                {/* Headline */}
                <h1 className={`animate-fade-up-2 ${styles.headline}`}>
                    We Build Software That{" "}
                    <span className="gradient-text">Thinks</span>{" "}
                    &amp; Scales
                </h1>

                {/* Sub-headline */}
                <p className={`animate-fade-up-3 ${styles.sub}`}>
                    LynxSoft crafts precision-engineered software and intelligent AI
                    automation systems that help ambitious businesses operate at a higher
                    level — faster decisions, leaner teams, limitless scale.
                </p>

                {/* CTAs */}
                <div className={`animate-fade-up-4 ${styles.ctas}`}>
                    <a href="#contact" className="btn-primary">
                        <span>Start Your Project</span>
                        <span aria-hidden>→</span>
                    </a>
                    <a href="#services" className="btn-outline">
                        <span>Explore Services</span>
                    </a>
                </div>

                {/* Stats */}
                <div className={`animate-fade-up-4 ${styles.stats}`}>
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "10×", label: "Average ROI" },
                    ].map((s) => (
                        <div key={s.label} className={styles.stat}>
                            <span className={`gradient-text ${styles.statValue}`}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#services" className={styles.scrollDown} aria-label="Scroll to services">
                <span className={styles.scrollDot} />
            </a>
        </section>
    );
}
