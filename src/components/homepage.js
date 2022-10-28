import {SaveNotes} from './../actions.js';
import {Logout} from './../actions.js';
import {connect} from 'react-redux';
import {useState} from 'react';
import NotesTitles from './notesTitles.js';
import NotesInput from './notesInput.js';

function HomePage({state_variable, Logout, SaveNotes}) {

	var emptyNotes = {id: '', title: '', description: ''},
		[currNotesObj, UPUI_CurrNotesObj] = useState(emptyNotes),
		[notesList, UPUI_NotesList] = useState([]);

	function validateAndSaveNotes(){
		var index,
			notesObj = {
				title: document.getElementById("title").value.trim(),
				description: document.getElementById("description").value.trim()
			};
		if(!validateNotes(notesObj.title)){
			return 0;
		}else if(!currNotesObj.id){
			notesObj.id = Math.random().toString();
			notesList.push(notesObj);
		}else{
			notesObj.id = currNotesObj.id;
			index = notesList.findIndex(item => item.id === currNotesObj.id);
			notesList[index] = notesObj;
		}
		SaveNotes(notesList);
		UPUI_CurrNotesObj(notesObj);
		return UPUI_NotesList(notesList);                                                                                                                                                                                                              
	}
	function validateNotes(title){
		var notesList = state_variable.notesList,
			isValid = true;
		if(!title.trim()){
			isValid = false;
			alert('Title should not be empty!');
		} else if(!currNotesObj.id){
			notesList.forEach(function(notes){
				if(notes.title.trim() === title.trim()){
					alert('Title should be different from other note titles!');
					isValid = false;
					return isValid;
				}
			});
		}
		return isValid;
	}
	function changeNotes(notesObj){
		return UPUI_CurrNotesObj(notesObj);
	}
	return (
		<>
			<h1>Notes Application</h1>
			<button onClick={() => changeNotes(emptyNotes)}>+ New Notes</button>
			<br></br>
			<button onClick={validateAndSaveNotes}>Save</button>
			<br></br>
			<button onClick={Logout}>Logout</button>
			<NotesTitles
				changeNotes={changeNotes}
				notesList={notesList}
			/>
			<NotesInput
				label="Title"
				id="title"
				notesInput={currNotesObj.title}
			/>
			<br></br>
			<NotesInput
				label="Description"
				id="description"
				notesInput={currNotesObj.description}
			/>
		</>
	);
}
const mapStateToProps = state => ({
    state_variable: state
});
export default connect(mapStateToProps, {Logout, SaveNotes})(HomePage);