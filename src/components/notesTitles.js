import style from '../stylings/notesTitles.module.css';

function notesTitles(props){

	var notesList = props.notesList,
		notesElms = notesList.map((notes) =>
			<li 
				key={notes.id} 
				onClick={() => props.changeNotes(notes)}>{notes.title}
			</li>
		)

	return (
		<div>
			<ul className={style}>
				{notesElms}
			</ul>
		</div>
	)
}

export default notesTitles;