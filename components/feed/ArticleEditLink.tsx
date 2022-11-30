import Link from "next/link";
import React from "react";

function ArticleEditLink({slug}) {
  return (
    <Link href={{
      pathname: '/articles/[slug]/edit',
      query: {slug: slug}}}>
      <a><i className="ion-edit"></i></a>
    </Link>
  )
}

export default ArticleEditLink