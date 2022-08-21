import React from "react";
import {ArticleType} from "../../lib/types/article";

interface ArticleHeaderProps {
  article: ArticleType
}

function ArticleHeader({article}: ArticleHeaderProps){
  return (
    <>
      <h1>{article.title}</h1>
      <div className="article-meta">
        <a href=""><img src={article.author.image} alt={article.author.username}/></a>
        <div className="info">
          <a href="" className="author">{article.author.username}</a>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp;
          {`Follow ${article.author.username}`}
        </button>
        &nbsp;&nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp;
          Favorite Post <span className="counter">({article.favoritesCount})</span>
        </button>
      </div>
    </>
  )
}

export default ArticleHeader