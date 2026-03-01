import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
    {
        quote:
            "LynxSoft didn't just build our platform — they redesigned how our entire operations team works. The AI automation they implemented saved us 30+ hours of manual work per week from day one.",
        author: "Sarah Chen",
        role: "COO, Meridian Logistics",
        initials: "SC",
        color: "#00D4FF",
    },
    {
        quote:
            "We had been burned by agencies before. LynxSoft was completely different — transparent process, sharp engineers, and a product that actually shipped on time and within budget. Remarkable.",
        author: "Marcus Webb",
        role: "Founder, Clearflow Finance",
        initials: "MW",
        color: "#7C3AED",
    },
    {
        quote:
            "Their AI data extraction pipeline eliminated an entire data entry team's worth of work and is 99.7% accurate. The ROI was under 60 days. I wish I had done this three years ago.",
        author: "Elena Rossi",
        role: "VP Engineering, DataStream SaaS",
        initials: "ER",
        color: "#EC4899",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className={`orb orb-pink ${styles.orb}`} aria-hidden="true" />

            <div className="container">
                <div className="section-header">
                    <div className="section-label">Client Results</div>
                    <h2>
                        Don&apos;t Take Our{" "}
                        <span className="gradient-text">Word For It</span>
                    </h2>
                    <p>
                        Real outcomes, real clients — here&apos;s what happens when great
                        software meets bold ambition.
                    </p>
                </div>

                <div className={styles.grid}>
                    {TESTIMONIALS.map((t) => (
                        <blockquote key={t.author} className={`glass-card ${styles.card}`}>
                            <div className={styles.stars} aria-label="5 stars">★★★★★</div>
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <footer className={styles.footer}>
                                <div
                                    className={styles.avatar}
                                    style={{ background: `${t.color}22`, border: `2px solid ${t.color}44`, color: t.color }}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <div className={styles.author}>{t.author}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
