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
    <div>
      {user}
    </div>
  )
}

export default Settings