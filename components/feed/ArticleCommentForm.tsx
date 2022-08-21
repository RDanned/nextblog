import React, {useState} from "react";
import {ArticleType} from "../../lib/types/article";

interface ArticleCommentFormProps {
  article: ArticleType
}

function ArticleCommentForm({article}){

  const [commentText, setCommentText] = useState<string>("");

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setCommentText(e.target.value)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>){

  }

  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea
          onChange={handleOnChange}
          className="form-control"
          placeholder="Write a comment..."
          rows={3}>
        </textarea>
      </div>
      <div className="card-footer">
        <img src={article.author.image} alt={article.author.username} className="comment-author-img"/>
        <button
          onClick={handleSubmit}
          className="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>
  )
}

export default ArticleCommentForm