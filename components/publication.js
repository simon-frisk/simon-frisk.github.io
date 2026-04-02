 
import styles from "./publication.module.css";

export default function Publication({name, authorlist, venue, paper, arxiv, website}) {
    return (
        <article className={styles.item}>
            <div className={styles.titleRow}>
                <h4 className={styles.title}>{name}.</h4>
                <div className={styles.links}>
                    {paper && (
                        <a
                        href={paper}
                        className={styles.paperLink}
                        >Paper</a>
                    )}
                    {arxiv && (
                        <a
                        href={arxiv}
                        className={styles.arxivLink}
                        >Arxiv</a>
                    )}
                    {website && (
                        <a
                        href={website}
                        className={styles.websiteLink}
                        >Website</a>
                    )}
                </div>
            </div>
            <p className={styles.metaLine}>
                <span>{authorlist}</span>
                {venue && <span className={styles.venue}>. {venue}</span>}
            </p>
        </article>
    )
}