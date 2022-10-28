import {useState, useEffect} from 'react';

function NotesInput(props){

	var [notesInput, UPUI_Input] = useState(props.notesInput);

	function updateInput(event){
		var value = event.target.value;
		return UPUI_Input(value)
	}

	useEffect(() => {
		return UPUI_Input(props.notesInput)
	}, [props.notesInput])

	return (
		<div>
			<label>{props.label}</label>
			<input
				onChange={updateInput}
				type="text" 
				value={notesInput}
				name={props.id}
				id={props.id}>
			</input>
		</div>
	)
}

export default NotesInput;