import React, {useState, useEffect} from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";
import ArticlePreviewFavBtn from "./ArticlePreviewFavBtn";
import ArticleDeleteBtn from "./ArticleDeleteBtn";
import Image from "components/utils/Image";
import UserProfileLink from "components/user/UserProfileLink";

function ArticlePreview({article}){
  const [articlePreview, setArticlePreview] = useState<ArticleType>()

  useEffect(() => {
    setArticlePreview(article)
  })

  if(!articlePreview) return;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <UserProfileLink username={articlePreview.author.username}>
          <Image width={32} height={32} src={articlePreview.author.image} alt={articlePreview.author.username}/>
        </UserProfileLink>
        <div className="info">
          <Link href={`articles/${articlePreview.slug}`} className="author"><a>{articlePreview.author.username}</a></Link>
          <span className="date">{articlePreview.createdAt}</span>
          <span className="mod-options">
            <Link href={{
              pathname: '/articles/[slug]/edit',
              query: {slug: articlePreview.slug}}}>
              <a><i className="ion-edit"></i></a>
            </Link>
            <ArticleDeleteBtn article={articlePreview}/>
          </span>
        </div>
        <ArticlePreviewFavBtn article={articlePreview}/>
      </div>
      <Link href={`articles/${articlePreview.slug}`}>
        <a className="preview-link">
          <h1>{articlePreview.title}</h1>
          <p>{articlePreview.description}</p>
          <span>Read more...</span>
        </a>
      </Link>
    </div>
  )
}

export default ArticlePreview