import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../lib/store/hooks";
import {useSelector} from "react-redux";
import {login, setErrors, selectErrors} from "../../lib/store/modules/user";

function Login(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")
  const errors = useSelector(selectErrors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setErrors([]))
  }, [])

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    dispatch(setErrors([]))
    dispatch(login({email: email, password: password}))
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
                  {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            }

            <form>
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

export default Login