var appData = {
	isLogged: false,
	notesList: []
};

function reducer(state = appData, action){
	const {type, payload} = action;
	switch(type){
		case "LOGIN":
			state.isLogged = true;
			return {
				...state
			};
		case "LOGOUT":
			state.isLogged = false;
			return {
				...state
			}
		case "SAVENOTES":
			state.notesList = payload;
			return {
				...state
			}
		default:
			return state
	}
}

export default reducer;

// const {type, payload} = action;