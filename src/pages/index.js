import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroImg from '@site/static/img/crescendo-hero3.png';

import styles from './index.module.css';

export function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={styles.hero}>
            <div className={styles.inner}>
                {/* ─── copy ─────────────────────────────────────────── */}
                <div className={styles.copy}>
                    <h1 className={styles.title}>{siteConfig.title}</h1>
                    <p className={styles.subtitle}>{siteConfig.tagline}</p>

                    <Link
                        to="docs/category/documentation"
                        className={clsx('button', styles.cta)}
                    >
                        Get&nbsp;started&nbsp;→
                    </Link>
                </div>

                {/* ─── illustration ───────────────────────────────── */}
                <div className={styles.art}>
                    <img src={HeroImg} alt="" className={styles.image} />
                </div>
            </div>
        </header>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`crescendo.ai`}
      description={`crescendo.ai - ${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
