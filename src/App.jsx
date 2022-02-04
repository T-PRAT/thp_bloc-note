import React from 'react';
import MarkdownInput from './Components/MarkdownInput';
import NoteDisplay from './Components/NoteDisplay';
import NoteSaved from './Components/NoteSaved';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import uuid from 'react-uuid';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	const createNote = () => {
		const newNote = {
			id: uuid(),
			title: "Titre",
			content: "Contenu",
		};
		setNotes([newNote, ...notes]);
	};

	const getActiveNote = () => {
		return notes.find((note) => note.id === activeNote);
	}

	return (
		<div>
		<Row>
			<Col xs={2}>
				<NoteSaved notes={notes} createNote={createNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
			</Col>
			<Col>
				<Row>
					<MarkdownInput activeNote={getActiveNote()}/>
				</Row>
				<Row>
					<NoteDisplay activeNote={getActiveNote()}/>
				</Row>
			</Col>
		</Row>
		</div>
	);
}

export default App;
