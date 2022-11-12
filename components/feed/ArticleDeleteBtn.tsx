import React from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";

interface ArticleDeleteBtnProps {
  article: ArticleType
}

function ArticleDeleteBtn({article}: ArticleDeleteBtnProps){
  return (
    <Link href={{
      pathname: '/articles/[slug]/delete',
      query: {slug: article.slug}}}>
      <a><i className="ion-trash-a"></i></a>
    </Link>
  )
}

export default ArticleDeleteBtn