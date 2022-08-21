import React from "react";
import {ArticleType} from "../../lib/types/article";

interface ArticleActionsProps {
  article: ArticleType
}

function ArticleActions({article}: ArticleActionsProps){
  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="profile.html"><img src={article.author.image} alt={article.author.username}/></a>
        <div className="info">
          <a href="" className="author">{article.author.username}</a>
          <span className="date">{article.createdAt}</span>
        </div>

        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp;
          {`Follow ${article.author.username}`}
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp;
          Favorite Post <span className="counter">{article.favoritesCount}</span>
        </button>
      </div>
    </div>
  )
}

export default ArticleActions