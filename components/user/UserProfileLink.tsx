import Link from "next/link";
import React from "react";
import {TsConfigJson} from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

interface UserProfileLinkProps {
  username: string,
  children?: JSX.Element
}

function UserProfileLink({username, children}: UserProfileLinkProps){
  return (
    <Link href={`/user/${username}`}>
      <a>
        {children}
      </a>
    </Link>
  )
}

export default UserProfileLink