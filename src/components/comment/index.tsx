import React from 'react';
import Comments from '../comments';

import { Comment as CommentType } from '../../types';

import styles from './style.module.css'

type Props = CommentType & {
    selectedAuthor?: string,
    onUserSelect: (value: string) => void
}

const Comment: React.FC<Props> = ({ author, message, comments, selectedAuthor, onUserSelect }) => {
    return (
        <li className={styles.comment}>
            <div className={`${styles.message} ${author === selectedAuthor ? styles.active : ''}`}>
                <p className={styles.author} onClick={() => onUserSelect(author)}>{author}</p>
                <p className={styles.text} >{message}</p>
            </div>
            {comments && comments.length > 0 && (
                <Comments comments={comments} onUserSelect={onUserSelect} selectedAuthor={selectedAuthor} />
            )}
        </li>
    );
}

export default Comment;