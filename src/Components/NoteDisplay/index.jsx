import React from "react";


const NoteDisplay = ({activeNote}) => {
	return (
		<>
			<h1>{activeNote.title}</h1>
			<p>{activeNote.content}</p>
		</>
	)
};

export default NoteDisplay;
