const MarkdownInput = ({activeNote, editNote}) => {
	const onChange = (key, value) => {
		editNote({
			...activeNote,
			[key]: value,
		});
	}
	if (!activeNote)
		return("")
	return(
		<>
			<input className="m-2" type="text" placeholder="Titre" value={activeNote.title} onChange={(e) => onChange("title", e.target.value)}/>
			<textarea className="m-2 textarea" type="text" placeholder="contenu" value={activeNote.content} onChange={(e) => onChange("content", e.target.value)}/>
		</>
	);
}

export default MarkdownInput;
