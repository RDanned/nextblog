import {useState} from "react";
import userApi from "lib/api/user";

interface FollowBtnProps {
  username: string,
  className?: string
}

function FollowBtn({username, className=""}: FollowBtnProps){
  const [followed, setFollowed] = useState<boolean>(false)

  function follow(){
    userApi.followUser(username).then(() => setFollowed(true))
  }

  return (
    <button className={"btn btn-sm btn-outline-secondary " + className} onClick={follow}>
      <i className="ion-plus-round"></i>
      &nbsp;
      {followed ? <>Followed!</> : <>Follow {username}</>}
    </button>
  )
}

export default FollowBtn