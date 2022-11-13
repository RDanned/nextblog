import React, {useState} from "react";
import {ArticleType} from "../../lib/types/article";
import {useAppDispatch} from "../../lib/store/hooks";
import {favArticle, unfavArticle} from "../../lib/store/modules/articles";
import classNames from "classnames";

interface ArticleFavBtnProps {
  article: ArticleType
}


function ArticleFavBtn({article}: ArticleFavBtnProps){
  const dispatch = useAppDispatch()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    if(!article.favorited){
      dispatch(favArticle(article.slug))
    } else {
      dispatch(unfavArticle(article.slug))
    }
  }

  const btnClassNames = classNames(
    'btn',
    'btn-sm',
    {
      'btn-outline-primary': !article.favorited,
      'btn-primary': article.favorited
    }
  )

  if(!article) return;

  return (
    <button className={btnClassNames} onClick={handleClick}>
      <i className="ion-heart"></i>
      &nbsp;
      Favorite Post <span className="counter">({article.favoritesCount})</span>
    </button>
  )
}

export default ArticleFavBtn