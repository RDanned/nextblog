import React from "react";
import {CommentType} from "../../lib/types/article";

interface ArticleCommentProps {
  comment: CommentType
}

function ArticleComment({comment}){
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href="" className="comment-author">
        </a>
        <img src={comment.author.image} alt={comment.author.username} className="comment-author-img"/>
        &nbsp;
        <a href="" className="comment-author">{comment.author.username}</a>
        <span className="date-posted">{comment.createdAt}</span>
      </div>
    </div>
  )
}

export default ArticleComment