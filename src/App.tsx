import { useCallback, useEffect, useState } from "react";
import Authors from "./components/authors";
import Comments from "./components/comments";

import { Comment } from "./types";

import "./App.css";

const comments = [
	{
    	id: 1,
		author: "Nikolay",
		message: "Hi",
		comments: [
			{
        		id: 3,
				author: "Olga",
				message: "Hi there",
				comments: [],
			},
			{
        		id: 4,
				author: "Nikolay",
				message: "What's up?!",
				comments: [
					{
            			id: 5,
						author: "Olga",
						message: "How are u?",
						comments: [],
					},
				],
			},
		],
	},
	{
    	id: 2,
		author: "Alex",
		message: "Hey folks!",
		comments: [],
	},
];

function App() {
  	const [selectedAuthor, setSelectedAuthor] = useState<string>("");
	const [authors, setAuthors] = useState<string[]>([]);
	const [uniqueAuthors, setUniqueAuthors] = useState<string[]>([]);

	const clearSelectedAuthor = () => {
		setSelectedAuthor("");
	};
	
	const getAuthors = useCallback((comments: Comment[]) => {
		comments.forEach((comment: Comment) => {
			setAuthors((prevState) => [...prevState, comment.author])

			if (comment.comments.length > 0) {
				getAuthors(comment.comments)
			}
		})

		return authors
	}, []);

	useEffect(() => {
		getAuthors(comments)
	}, [getAuthors]);

	useEffect(() => {
		const unique = authors.filter((author, idx, arr) => arr.indexOf(author) === idx)

		setUniqueAuthors(unique)
	}, [authors]);

	return (
		<div className="App">
			<h1>Комментарии</h1>
			<button onClick={clearSelectedAuthor}>Clear selected</button>
			<Comments comments={comments} selectedAuthor={selectedAuthor} onUserSelect={setSelectedAuthor} />
			<Authors authors={uniqueAuthors} />
		</div>
	);
}

export default App;
