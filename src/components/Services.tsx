import styles from "./Services.module.css";

const SERVICES = [
    {
        icon: "⚙️",
        badge: "badge-cyan",
        badgeLabel: "Engineering",
        title: "Custom Software Development",
        description:
            "From zero to production, we design and build scalable, maintainable software systems tailored to your business logic — web platforms, APIs, microservices, and enterprise backends.",
        features: [
            "Full-stack web applications",
            "REST & GraphQL APIs",
            "Cloud-native architecture",
            "CI/CD & DevOps setup",
        ],
    },
    {
        icon: "🤖",
        badge: "badge-violet",
        badgeLabel: "AI & Automation",
        title: "AI Process Automation",
        description:
            "We integrate cutting-edge AI and machine learning to automate your most repetitive and costly workflows — reducing overhead, eliminating errors, and freeing your team to focus on what matters.",
        features: [
            "LLM-powered workflows",
            "Document & data extraction",
            "Predictive analytics",
            "Custom AI model fine-tuning",
        ],
        featured: true,
    },
    {
        icon: "☁️",
        badge: "badge-pink",
        badgeLabel: "Cloud",
        title: "Cloud Architecture & DevOps",
        description:
            "We design resilient, cost-effective cloud infrastructure on AWS, GCP, or Azure, set up robust observability, and implement DevSecOps pipelines that ship faster and sleep soundly.",
        features: [
            "AWS / GCP / Azure",
            "Kubernetes & containers",
            "Infrastructure as Code",
            "24/7 monitoring & alerting",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            {/* Background accent */}
            <div className={`orb orb-violet ${styles.orb}`} aria-hidden="true" />

            <div className="container">
                <div className="section-header">
                    <div className="section-label">What We Do</div>
                    <h2>
                        Solutions Built for the{" "}
                        <span className="gradient-text">Modern Business</span>
                    </h2>
                    <p>
                        Three core disciplines. One unified vision: helping you move faster,
                        work leaner, and build competitive moats that last.
                    </p>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map((s) => (
                        <article
                            key={s.title}
                            className={`glass-card ${styles.card} ${s.featured ? styles.featured : ""}`}
                        >
                            {s.featured && (
                                <div className={styles.featuredBadge}>Most Popular</div>
                            )}
                            <div className={styles.icon} aria-hidden="true">{s.icon}</div>
                            <span className={`badge ${s.badge} ${styles.badge}`}>{s.badgeLabel}</span>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.description}</p>
                            <ul className={styles.features}>
                                {s.features.map((f) => (
                                    <li key={f} className={styles.feature}>
                                        <span className={styles.check} aria-hidden="true">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={s.featured ? "btn-primary" : "btn-outline"} style={{ marginTop: "auto" }}>
                                <span>Learn More</span>
                                <span aria-hidden>→</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
