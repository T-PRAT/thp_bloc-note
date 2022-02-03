import { useState } from "react";

const MarkdownInput = () => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return(
		<>
			<div className="text-blue-400">Note : {value}</div>
			<input type="text" value={value} onChange={onChange} />
		</>
	);
}

export default MarkdownInput;
