import React from 'react'
import { useHistory } from "react-router-dom";
import { routerPathProtected } from '../../../router/RouterPath';


function LoginScreen() {

    const history = useHistory()

    const actionLogin = () =>{
        history.replace(routerPathProtected.Dashboard)
    }


    return (
        <div>
            Login Pages
            <br />
            <button onClick={() => actionLogin()}>กดเข้าสู่ระบบ !</button>
        </div>
    )
}

export default LoginScreen
