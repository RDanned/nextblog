import React from "react";
import {ArticleType} from "lib/types/article";
import FollowBtn from "components/user/FollowBtn";
import ArticleFavBtn from "components/feed/ArticleFavBtn";
import Image from "components/utils/Image";
import UserProfileLink from "components/user/UserProfileLink";

interface ArticleActionsProps {
  article: ArticleType
}

function ArticleActions({article}: ArticleActionsProps){
  return (
    <div className="article-actions">
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
        &nbsp;
        <ArticleFavBtn article={article}/>
      </div>
    </div>
  )
}

export default ArticleActions