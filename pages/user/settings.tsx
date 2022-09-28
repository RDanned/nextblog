import React, {useEffect, useState} from "react";
import userApi from "../../lib/api/user";
import {UserType} from "../../lib/types/user";

type SettingsForm = {
  email: {
    value: string
  }
}

function Settings(){
  const [updated, setUpdated] = useState<boolean>(false)
  const [formData, setFormData] = useState<UserType>({
    username: '',
    bio: '',
    image: '',
    following: false,
    email: '',
    password: ''
  });

  useEffect(() => {
    userApi.getUser()
      .then((response) => {
        setFormData(response.data.user)
      })
  }, [])

  function handleSubmit(e: React.SyntheticEvent){
    setUpdated(false)
    e.preventDefault()
    userApi.updateUser({user: formData})
      .then(response => {
        setFormData(response.data.user)
        setUpdated(true)
      })
  }

  function handleChange(e: React.SyntheticEvent){
    setUpdated(false)
    const {name, value} = e.target as typeof e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (

    <div className="settings-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            {
              updated &&
              <div className="text-success">Your setting are successfully updated</div>
            }
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    name="image"
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    defaultValue={formData.image}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="username"
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    defaultValue={formData.username}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    name="bio"
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                    defaultValue={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="email"
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    defaultValue={formData.email}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="password"
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    defaultValue={formData.password}
                    onChange={handleChange}
                  />
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