import {Login} from './../actions.js';
import {connect} from 'react-redux';
import style from './../stylings/loginpage.module.css';

function Loginpage({state_variable, Login}) {

	function validateAndLogin(){
		var userName = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if (!userName.trim() || !password.trim()) {
			alert('Username and Password should not be empty!');
		}else{
			Login();
		}
	};

	return (
		<>
			<center>
				<div className={style.loginPage}>
					<h1>Notes Application</h1>
					<label>Username</label>
					<input type="text" id="username"></input>
					<br></br>
					<label>Password</label>
					<input type="text" id="password"></input>
					<br></br>
					<button onClick={validateAndLogin}>Login</button>
				</div>
			</center>
		</>
	);
}
const mapStateToProps = state => ({
    state_variable: state
});
export default connect(mapStateToProps, {Login})(Loginpage);