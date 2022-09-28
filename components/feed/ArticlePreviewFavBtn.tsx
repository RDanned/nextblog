import React, {useState, useEffect} from "react";
import Link from "next/link";
import {ArticleType} from "../../lib/types/article";
import {useAppDispatch} from "../../lib/store/hooks";
import {favArticle, unfavArticle} from "../../lib/store/modules/articles";
import classNames from 'classnames'

function ArticlePreview({articlePreview}){
  const dispatch = useAppDispatch()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    if(!articlePreview.favorited){
      dispatch(favArticle(articlePreview.slug))
    } else {
      dispatch(unfavArticle(articlePreview.slug))
    }
  }

  const btnClassNames = classNames(
    'btn',
    'btn-sm',
    'pull-xs-right',
    {
      'btn-outline-primary': !articlePreview.favorited,
      'btn-primary': articlePreview.favorited
    }
  )

  if(!articlePreview) return;

  return (
    <button className={btnClassNames} onClick={handleClick}>
      <i className="ion-heart"></i> {articlePreview.favoritesCount}
    </button>
  )
}

export default ArticlePreview