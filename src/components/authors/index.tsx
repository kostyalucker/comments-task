import React from "react";
import styles from './style.module.css'

type Props = {
    authors: string[]
}

const Authors:React.FC<Props> = ({ authors }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Авторы</h2>
            <ul>
            {authors.map((author, idx) => (
                <li key={`${author}_${idx}`} className={styles.author}>{author}</li>
            ))}
            </ul>
        </div>
    );
}

export default Authors;