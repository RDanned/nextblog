import React, {useState} from "react";
import userApi from "../../lib/api/user";
import {setItem} from "../../lib/helpers/psStorage";
import Router from "next/router";

function Register(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errors, setErrors] = useState([])

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setErrors([]);

    userApi.register({
      email: email,
      password: password,
      username: username
    })
      .then((response) => {
        setItem('token', response.data.user.token);
        Router.push("/");
      })
      .catch((reason) => {
        setErrors(
          Object.keys(reason.response.data.errors).map(key => <li key={key}>That {key} {reason.response.data.errors[key]}</li>)
        )
      })
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            {
              errors &&
              <ul className="error-messages">
                {errors}
              </ul>
            }

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register