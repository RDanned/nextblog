import React, {useEffect, useState} from "react";
import {ArticleType} from "../../../lib/types/article";
import articleApi from "lib/api/article"
import {useRouter} from "next/router";

function ArticleDelete(){
  const [article, setArticle] = useState<ArticleType>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [deleted, setDeleted] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(3)
  const router = useRouter()

  useEffect(() => {
    if(router.query.slug)
    articleApi.getArticle(router.query.slug as string).then((response) => setArticle(response.data.article))
  }, [router.query.slug])

  function deleteArticle(){
    setLoading(true)
    articleApi.deleteArticle(article.slug).then(() => {
      setLoading(false)
      setDeleted(true)
      let intervalId = setInterval(() => {
        setCounter(currentCounter => {
          if(currentCounter == 0) {
            clearInterval(intervalId)
            router.push('/')
            return currentCounter
          } else {
            return currentCounter - 1
          }
        })
      }, 1000)
    })
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-10 offset-md-1 col-xs-12">
            {
              deleted ?
                <span>You will be redirected to main page in {counter}</span>
                :
                <span>Are you sure you want to delete article "{article.title}"?</span>
            }
            <br />
            <button
              onClick={deleteArticle}
              className="btn btn-lg  btn-primary"
              type="submit">
              {loading ? 'Loading...' : 'Yes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDelete