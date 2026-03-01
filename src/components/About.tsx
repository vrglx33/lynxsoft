import Image from "next/image";
import styles from "./About.module.css";

const HIGHLIGHTS = [
    { icon: "🎓", label: "10+ Years Experience" },
    { icon: "🌎", label: "Global Clients" },
    { icon: "🤝", label: "Trusted Partner" },
    { icon: "🚀", label: "50+ Projects Delivered" },
];

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`orb orb-cyan ${styles.orb}`} aria-hidden="true" />

            <div className="container">
                <div className={styles.grid}>
                    {/* Image column */}
                    <div className={styles.imageWrap}>
                        <div className={styles.imageBorder}>
                            <Image
                                src="/ceo-portrait.png"
                                alt="Alejandro Vega — Founder & CEO of LynxSoft"
                                width={480}
                                height={520}
                                className={styles.image}
                            />
                            {/* Floating card */}
                            <div className={`glass-card ${styles.floatingCard}`}>
                                <div className={styles.floatingAvail}>
                                    <span className={styles.availDot} />
                                    Available for new projects
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className={styles.text}>
                        <div className="section-label">Meet the Founder</div>
                        <h2>
                            Your Partner in Building{" "}
                            <span className="gradient-text-warm">Extraordinary</span>{" "}
                            Software
                        </h2>
                        <p className={styles.bio}>
                            Hi — I&apos;m <strong>Alejandro Vega</strong>, founder and CEO of
                            LynxSoft. With over a decade of engineering experience across
                            startups, scale-ups, and global enterprises, I built LynxSoft on
                            one conviction: software should work <em>for</em> your business,
                            not against it.
                        </p>
                        <p className={styles.bio}>
                            I blend deep systems engineering expertise with an AI-first
                            mindset — every solution we ship is engineered to deliver
                            measurable ROI on day one, not just technical elegance on a roadmap.
                        </p>

                        {/* Highlights */}
                        <div className={styles.highlights}>
                            {HIGHLIGHTS.map((h) => (
                                <div key={h.label} className={`glass-card ${styles.highlight}`}>
                                    <span className={styles.highlightIcon}>{h.icon}</span>
                                    <span className={styles.highlightLabel}>{h.label}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ alignSelf: "flex-start" }}
                        >
                            <span>Connect on LinkedIn</span>
                            <span aria-hidden>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
