import styles from "./Process.module.css";

const STEPS = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description:
            "We deep-dive into your business goals, existing systems, and constraints. No generic templates — we build a precise roadmap that fits your reality.",
    },
    {
        number: "02",
        title: "Architecture & Design",
        description:
            "Our engineers design the system architecture and UX flows before writing a single line of code. Solid foundations prevent expensive rewrites later.",
    },
    {
        number: "03",
        title: "Agile Development",
        description:
            "We ship in bi-weekly sprints with full transparency. You see real progress early, provide feedback often, and never wonder what your investment is producing.",
    },
    {
        number: "04",
        title: "Launch & Scale",
        description:
            "We handle deployment, monitoring, and post-launch support. As your business grows, we're your long-term technical partner — not a one-time vendor.",
    },
];

export default function Process() {
    return (
        <section id="process" className={`section ${styles.process}`}>
            <div className="container">
                <div className="section-header">
                    <div className="section-label">How We Work</div>
                    <h2>
                        A Process Built for{" "}
                        <span className="gradient-text">Zero Surprises</span>
                    </h2>
                    <p>
                        Consistent, transparent, and focused on outcomes. From kickoff to
                        launch, you always know where your project stands.
                    </p>
                </div>

                <div className={styles.steps}>
                    {STEPS.map((step, i) => (
                        <div key={step.number} className={styles.stepRow}>
                            {/* Connector line */}
                            {i < STEPS.length - 1 && (
                                <div className={styles.connector} aria-hidden="true" />
                            )}

                            <div className={`glass-card ${styles.step}`}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
