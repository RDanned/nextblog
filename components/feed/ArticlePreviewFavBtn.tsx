import React, {useState, useEffect} from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";
import {useAppDispatch} from "../../lib/store/hooks";
import {favArticle, unfavArticle} from "../../lib/store/modules/articles";
import classNames from 'classnames'

interface ArticlePreviewFavBtnProps {
  article: ArticleType
}

function ArticlePreviewFavBtn({article}: ArticlePreviewFavBtnProps){
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
    'pull-xs-right',
    {
      'btn-outline-primary': !article.favorited,
      'btn-primary': article.favorited
    }
  )

  if(!article) return;

  return (
    <button className={btnClassNames} onClick={handleClick}>
      <i className="ion-heart"></i> {article.favoritesCount}
    </button>
  )
}

export default ArticlePreviewFavBtn