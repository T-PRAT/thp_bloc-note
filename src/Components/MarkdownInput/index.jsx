import { useState } from "react";

const MarkdownInput = ({activeNote}) => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
		return (activeNote.content = event.target.value);
	};

	return(
		<>
			<input type="text" placeholder="Titre"/>
			<textarea type="text" placeholder="contenu" value={value} onChange={onChange} />
		</>
	);
}

export default MarkdownInput;
