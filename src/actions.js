export const Login = () => async dispatch => {
	dispatch({
		type: "LOGIN"
	})
}
export const Logout = () => async dispatch => {
	dispatch({
		type: "LOGOUT"
	})
}
export const SaveNotes = (value) => async dispatch => {
	dispatch({
		type: "SAVENOTES",
		payload: value
	})
}