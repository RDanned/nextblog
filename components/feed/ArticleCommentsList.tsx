import React, {useEffect, useState} from "react";
import {ArticleType, Comments} from "../../lib/types/article";
import ArticleComment from "./ArticleComment";
import {selectList} from "../../lib/store/modules/comments";
import {useSelector} from "react-redux";

interface ArticleCommentsProps {
  article: ArticleType
}

function ArticleCommentsList({article}: ArticleCommentsProps){
  const [comments, setComments] = useState<Comments>(undefined)
  const commentsList = useSelector(selectList)

  useEffect(() => {
    if(commentsList) setComments(commentsList.map(comment => <ArticleComment key={comment.id} comment={comment}/>))
  }, [commentsList])

  return (
    <>
      {comments}
    </>
  )
}

export default ArticleCommentsList