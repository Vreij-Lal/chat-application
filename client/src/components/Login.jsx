import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../styles/Login.scss";


function Login() {
     //user input values
     let [values, setValues] = useState({
        username:"",
        password:""
    });

    //handel input change
    const changeHandler = (event) => {
        setValues(
            {...values, [event.target.name] : event.target.value}
        );
    };

    const validationHandler = (event) => {
        const {username, email, password} = values;
       if(username == ""){
            alert("username is required");
            return false;
       }
       else if(password == ""){
        alert("password is required");
        return false;
       }
       else{
        return true;
       }
    }

    const submitHandler =  async (event) => {
        event.preventDefault();
        if(validationHandler()){

            const {username, password} = values;
            await axios.post("http://localhost:3001/users/login", {username,password})
                        .then(alert("Welcome"));
        }
    };
  
    return (
    <>
        <div className="login-form-container">
            <form action="" className="login-form-field" onSubmit={(e) => submitHandler(e)}>
                <div>
                    <img src="" alt="" />
                    <h1>Login</h1>
                </div>
                <div className="login-inputs-container">
                    <input type="text" placeholder="username" name="username" onChange={(e) => changeHandler(e)}/>
                    <input type="text" placeholder="password" name="password" onChange={(e) => changeHandler(e)} />
                    <button>Login</button>
                    <span>don't have an account ?<Link to="/">Signup</Link></span>
                </div>

            </form>
        </div>
    </>
  );
}

export default Login