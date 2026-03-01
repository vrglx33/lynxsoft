import styles from "./Footer.module.css";

const LINKS = {
    Company: ["About", "Services", "Process", "Contact"],
    Services: ["Custom Software", "AI Automation", "Cloud Architecture", "Consulting"],
    Connect: ["LinkedIn", "GitHub", "Twitter", "hello@lynxsoft.com.co"],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="divider" />
            <div className={`container ${styles.inner}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <a href="#" className={styles.logo} aria-label="LynxSoft">
                        <span className={styles.logoIcon}>⬡</span>
                        <span className={styles.logoText}>
                            Lynx<span className="gradient-text">Soft</span>
                        </span>
                    </a>
                    <p className={styles.tagline}>
                        Software Engineering &amp; AI Automation for ambitious businesses.
                    </p>
                    <div className={styles.socials}>
                        {["𝕏", "in", "gh"].map((s) => (
                            <a key={s} href="#" className={styles.social} aria-label={s}>
                                {s}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                {Object.entries(LINKS).map(([group, items]) => (
                    <div key={group} className={styles.linkGroup}>
                        <div className={styles.groupTitle}>{group}</div>
                        <ul className={styles.linkList}>
                            {items.map((item) => (
                                <li key={item}>
                                    <a
                                        href={item.includes("@") ? `mailto:${item}` : "#"}
                                        className={styles.link}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="divider" />
            <div className={`container ${styles.bottom}`}>
                <span className={styles.copy}>
                    © {new Date().getFullYear()} LynxSoft. All rights reserved.
                </span>
                <div className={styles.bottomLinks}>
                    {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                        <a key={l} href="#" className={styles.link}>{l}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
