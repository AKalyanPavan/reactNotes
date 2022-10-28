import Homepage from './components/homepage.js';
import Loginpage from './components/loginpage.js';
import Aboutus from './components/aboutus.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {connect} from 'react-redux';

function App({state_variable}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={
                        (state_variable.isLogged) ? <Homepage/> : <Loginpage/>
                    }/>
                    <Route path="aboutus" element={<Aboutus/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({
    state_variable: state
});


export default connect(mapStateToProps)(App);