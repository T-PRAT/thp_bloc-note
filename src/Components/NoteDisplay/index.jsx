import React from "react";

const NoteDisplay = ({activeNote}) => {
	if (!activeNote){
		return (<p>pas de note</p>)
	}
	return (
		<>
			<div>
				<h1>{activeNote.title}</h1>
				<p>{activeNote.content}</p>
			</div>
		</>
	)
};

export default NoteDisplay;
