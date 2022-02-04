import React from "react";
import ReactMarkdown from "react-markdown";

const NoteDisplay = ({activeNote}) => {
	if (!activeNote){
		return (<p>pas de note</p>)
	}
	return (
		<>
			<div>
				<h1>{activeNote.title}</h1>
				<ReactMarkdown>{activeNote.content}</ReactMarkdown>
			</div>
		</>
	)
};

export default NoteDisplay;
