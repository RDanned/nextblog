import React, {useState, useEffect} from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";
import ArticlePreviewFavBtn from "./ArticlePreviewFavBtn";
import ArticleDeleteBtn from "./ArticleDeleteBtn";
import ArticleEditLink from "./ArticleEditLink";
import Image from "components/utils/Image";
import UserProfileLink from "components/user/UserProfileLink";
import {useSelector} from "react-redux";
import {selectUser} from "../../lib/store/modules/user";

function ArticlePreview({article}){
  const [articlePreview, setArticlePreview] = useState<ArticleType>()
  const currentUser = useSelector(selectUser)

  useEffect(() => {
    setArticlePreview(article)
  }, [])

  if(!articlePreview) return;

  let articleActions = null
  if(currentUser.username === articlePreview.author.username)
    articleActions = (
      <span className="mod-options">
            <ArticleEditLink slug={articlePreview.slug} />
            <ArticleDeleteBtn slug={articlePreview.slug}/>
          </span>
    )

  return (
    <div className="article-preview">
      <div className="article-meta">
        <UserProfileLink username={articlePreview.author.username}>
          <Image width={32} height={32} src={articlePreview.author.image} alt={articlePreview.author.username}/>
        </UserProfileLink>
        <div className="info">
          <Link href={`articles/${articlePreview.slug}`} className="author"><a>{articlePreview.author.username}</a></Link>
          <span className="date">{articlePreview.createdAt}</span>
          {articleActions}
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