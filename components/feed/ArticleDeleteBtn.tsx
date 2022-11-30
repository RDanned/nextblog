import React from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";

interface ArticleDeleteBtnProps {
  slug: string
}

function ArticleDeleteBtn({slug}: ArticleDeleteBtnProps){
  return (
    <Link href={{
      pathname: '/articles/[slug]/delete',
      query: {slug: slug}}}>
      <a><i className="ion-trash-a"></i></a>
    </Link>
  )
}

export default ArticleDeleteBtn