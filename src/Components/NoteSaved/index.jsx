import React from "react";
import ReactMarkdown from "react-markdown";

const NoteSaved = ({notes, createNote, activeNote, setActiveNote}) => {
	return (
		<>
			<button onClick={createNote} className="btn btn-lg btn-outline-primary btn-extend m-3" >Nouvelle note</button>
			{notes.map((note) => (
				<div className={`card m-2 p-2 ${note.id === activeNote && "bg-light"}`} onClick={() => setActiveNote(note.id)}>
					<h4>{note.title}</h4>
					<ReactMarkdown>{note.content}</ReactMarkdown>
				</div>
			))}
		</>
	)
};

export default NoteSaved;
