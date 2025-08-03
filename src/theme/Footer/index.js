import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import CrescendoLogo from '@site/static/img/crescendo_logo_white.svg';

/** Small helper so we can mix internal/external links easily */
const FLink = ({ href, children, external }) =>
    external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ) : (
        <Link to={href}>{children}</Link>
    );

export default function Footer() {
    return (
        <footer className={clsx('footer', styles.footer)}>
            <div className={styles.inner}>
                {/* ─── Address & contact ─────────────────────────────────── */}
                <div className={styles.block}>
                    <a href="https://crescendo.ai" target="_blank" rel="noopener noreferrer">
                        <CrescendoLogo className={styles.logo} role="img" title="Crescendo logo" />
                    </a>

                    <p className={styles.address}>
                        201&nbsp;Spear&nbsp;Street<br />
                        San&nbsp;Francisco,&nbsp;CA&nbsp;94105
                    </p>
                    <p className={styles.contact}>
                        Email:{' '}
                        <a href="mailto:info@crescendo.ai">info@crescendo.ai</a>
                        <br />
                        Phone:{' '}
                        <a href="tel:+18884108077">+1&nbsp;(888)&nbsp;410-8077</a>
                    </p>
                    <div className={styles.social}>
                        <a
                            href="https://www.linkedin.com/company/crescendo-ai/"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/670eeaaebe3a8ce79444ac48/672b6904309633f5ee9d4c1e_Linkedin.svg"
                                alt=""
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/@CrescendoAI"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/670eeaaebe3a8ce79444ac48/6775db6c4ec3d475d4edf81a_YouTube.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>

                {/* ─── Nav columns ───────────────────────────────────────── */}
                <div className={styles.links}>
                    <div>
                        <h5>Product</h5>
                        <ul>
                            <li><FLink href="https://crescendo.ai/product/omnichannel-ai">Omnichannel AI</FLink></li>
                            <li><FLink href="https://crescendo.ai/product/human-in-the-loop">Human in the Loop</FLink></li>
                            <li><FLink href="https://crescendo.ai/product/insights-reporting">Insights & Reporting</FLink></li>
                            <li><FLink href="https://crescendo.ai/product/apps-integrations">Apps & Integrations</FLink></li>
                            <li><FLink href="https://crescendo.ai/product/agentic-ai">Agentic AI</FLink></li>
                            <li><FLink href="https://crescendo.ai/product/managed-service">Managed Service</FLink></li>
                            <li><FLink href="https://crescendo.ai/demo">Demo</FLink></li>
                            <li><FLink href="https://crescendo.ai/pricing">Pricing</FLink></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Solutions</h5>
                        <ul>
                            <li><FLink href="https://crescendo.ai/solutions/ai-human-integration">AI & Human Integration</FLink></li>
                            <li><FLink href="https://crescendo.ai/solutions/voc-platform">VoC Platform</FLink></li>
                            <li><FLink href="https://crescendo.ai/solutions/email-automation">Email Automation</FLink></li>
                            <li><FLink href="https://crescendo.ai/solutions/voice-agents">Voice Agents</FLink></li>
                            <li><FLink href="https://crescendo.ai/solutions/live-chat">Live Chat</FLink></li>
                            <li><FLink href="https://crescendo.ai/solutions/features">All Features</FLink></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Resources</h5>
                        <ul>
                            <li><FLink href="https://crescendo.ai/blog">Blog</FLink></li>
                            <li><FLink href="https://crescendo.ai/news">News</FLink></li>
                            <li><FLink href="https://crescendo.ai/case-studies">Case Studies</FLink></li>
                            <li><FLink href="https://crescendo.ai/augmentedai">Augmented AI</FLink></li>
                            <li><FLink href="https://crescendo.ai/diy-ai">DIY AI</FLink></li>
                            <li><FLink href="https://crescendo.ai/company">Company</FLink></li>
                            <li><FLink href="https://crescendo.ai/careers">Careers</FLink></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Legal</h5>
                        <ul>
                            <li><FLink href="https://crescendo.ai/policies/website-terms-of-use" external>Terms of Use</FLink></li>
                            <li><FLink href="https://crescendo.ai/policies/privacy" external>Privacy Policy</FLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ─── Copyright line ─────────────────────────────────────── */}
            <div className={styles.copy}>
                © {new Date().getFullYear()} Crescendo. All rights reserved.
            </div>
        </footer>
    );
}
