import React, {useEffect, useState} from "react";
import {ArticleType, Comments} from "../../lib/types/article";
import ArticleComment from "./ArticleComment";
import articleApi from "../../lib/api/article";

interface ArticleCommentsProps {
  article: ArticleType
}

function ArticleCommentsList({article}: ArticleCommentsProps){
  const [comments, setComments] = useState<Comments>(undefined)

  useEffect(() => {
    articleApi.getComments(article.slug).then(
      (response) =>
      setComments(response.data.comments.map(comment => <ArticleComment key={comment.id} comment={comment}/>))
    )
  }, [])

  return (
    <>
      {comments}
    </>
  )
}

export default ArticleCommentsList