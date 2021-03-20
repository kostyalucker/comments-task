import React from 'react';
import Comment from '../comment';

import { Comment as CommentType } from '../../types';

import styles from './style.module.css';

type Props = {
    comments: CommentType[],
    selectedAuthor?: string,
    onUserSelect: (value: string) => void
}


const Comments: React.FC<Props> = ({ comments, selectedAuthor, onUserSelect }) => {
    return (
        <ul className={styles.comments}>
            {comments.map(comment => (
                <Comment {...comment} key={comment.id} selectedAuthor={selectedAuthor} onUserSelect={onUserSelect} />
            ))}
        </ul>
    );
}

export default Comments;