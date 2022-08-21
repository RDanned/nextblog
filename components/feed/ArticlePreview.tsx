import React, {useState, useEffect} from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";

function ArticlePreview({article}){
  const [articlePreview, setArticlePreview] = useState<ArticleType>()

  useEffect(() => {
    setArticlePreview(article)
  })

  if(!articlePreview) return;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href={`articles/${articlePreview.slug}`}>
          <a><img src={articlePreview.author.image} alt={articlePreview.author.username}/></a>
        </Link>
        <div className="info">
          <Link href={`articles/${articlePreview.slug}`} className="author"><a>{articlePreview.author.username}</a></Link>
          <span className="date">{articlePreview.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {articlePreview.favoritesCount}
        </button>
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