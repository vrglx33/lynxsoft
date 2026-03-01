"use client";
import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New inquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:hello@lynxsoft.com.co?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className={`orb orb-cyan ${styles.orbLeft}`} aria-hidden="true" />
            <div className={`orb orb-violet ${styles.orbRight}`} aria-hidden="true" />

            <div className="container">
                <div className={styles.inner}>
                    {/* Left — copy */}
                    <div className={styles.copy}>
                        <div className="section-label">Let&apos;s Build</div>
                        <h2>
                            Ready to Transform{" "}
                            <span className="gradient-text">Your Business?</span>
                        </h2>
                        <p>
                            Whether you&apos;re starting from scratch, scaling an existing
                            product, or looking to automate workflows with AI — let&apos;s
                            talk. First consultation is always free.
                        </p>

                        <div className={styles.contactInfo}>
                            <a href="mailto:hello@lynxsoft.com.co" className={styles.contactItem}>
                                <span className={styles.contactIcon}>✉</span>
                                <span>hello@lynxsoft.com.co</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                                <span className={styles.contactIcon}>in</span>
                                <span>linkedin.com/in/lynxsoft</span>
                            </a>
                        </div>

                        {/* Email notice */}
                        <div className={`glass-card ${styles.webmailNotice}`}>
                            <span className={styles.webmailIcon}>☁️</span>
                            <div>
                                <div className={styles.webmailTitle}>Powered by Cloudflare Email</div>
                                <div className={styles.webmailDesc}>
                                    Domain email routing via Cloudflare — 100% free, routes
                                    @lynxsoft.com.co to any inbox, no subscription required.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className={`glass-card ${styles.formCard}`}>
                        {sent ? (
                            <div className={styles.success}>
                                <div className={styles.successIcon}>🎉</div>
                                <h3>Your email client is open!</h3>
                                <p>
                                    Complete sending the email and we&apos;ll get back to you within
                                    24 hours.
                                </p>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <h3 className={styles.formTitle}>Send a Message</h3>

                                <div className={styles.field}>
                                    <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        className="input-field"
                                        placeholder="Jane Smith"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        className="input-field"
                                        placeholder="jane@company.com"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="contact-message" className={styles.label}>Tell us about your project</label>
                                    <textarea
                                        id="contact-message"
                                        className={`input-field ${styles.textarea}`}
                                        placeholder="I need help building..."
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                                    <span>Send Message</span>
                                    <span aria-hidden>→</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
