import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './Components/MarkdownInput';
import './styles/output.css'

const App = () => (
	<div className='bg-gray-700'>
		<MarkdownInput/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
