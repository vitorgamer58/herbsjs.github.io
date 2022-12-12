import React from 'react'
import styles from './styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export default function Assist() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.details}>
                    <h3>Herbs Assist</h3>
                    <p>
                    <Link to={useBaseUrl('docs/project/assist')} >Herbs Assist</Link> is a powerful AI assistant that helps developers streamline their workflow using Herbs JS.
                        By leveraging OpenAI Codex, Herbs Assist can automatically create Use Cases and Specs, freeing developers to focus on their domain and let Herbs JS handle the infrastructure.
                        With Herbs Assist, developers can create powerful applications faster and more efficiently than ever before.
                    </p>
                </section>
                <section className={styles.animation}>
                    <Link to={useBaseUrl('docs/tutorial/new-project#with-herbs-cli')} >
                        <img src={useBaseUrl('/assets/herbs-new.gif')} />
                    </Link>
                </section>
            </div>
        </>
    )
}
