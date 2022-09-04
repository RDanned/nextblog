import React, {useEffect, useState} from "react";
import userApi from "../../lib/api/user";

function Settings(){
  const [user, setUser] = useState();

  useEffect(() => {
    userApi.getUser()
      .then((response) => {
        console.log(response.data)
      })
  })

  return (

    <div className="settings-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    name="username"
                  />
                </fieldset>
                <fieldset className="form-group">
                            <textarea className="form-control form-control-lg" rows={8}
                                      placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings