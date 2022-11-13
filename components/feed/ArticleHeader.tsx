import React from "react";
import {ArticleType} from "../../lib/types/article";
import Image from "components/utils/Image";
import Link from "next/link";
import FollowBtn from "components/user/FollowBtn";
import ArticleFavBtn from "components/feed/ArticleFavBtn";
import UserProfileLink from "components/user/UserProfileLink";

interface ArticleHeaderProps {
  article: ArticleType
}

function ArticleHeader({article}: ArticleHeaderProps){
  return (
    <>
      <h1>{article.title}</h1>
      <div className="article-meta">
        <UserProfileLink username={article.author.username}>
          <Image width={32} height={32} src={article.author.image} alt={article.author.username}/>
        </UserProfileLink>
        <div className="info">
          <UserProfileLink username={article.author.username}>
            <>{article.author.username}</>
          </UserProfileLink>
          <span className="date">{article.createdAt}</span>
        </div>
        <FollowBtn username={article.author.username} />
        &nbsp;&nbsp;
        <ArticleFavBtn article={article}/>
      </div>
    </>
  )
}

export default ArticleHeader