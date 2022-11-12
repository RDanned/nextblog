import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import articleApi from "lib/api/article";
import {ArticleType} from "lib/types/article";
import ArticleHeader from "components/feed/ArticleHeader";
import ArticleActions from "components/feed/ArticleActions";
import ArticleCommentForm from "components/feed/ArticleCommentForm";
import ArticleCommentsList from "components/feed/ArticleCommentsList";
import {loadList as loadCommentsList} from "lib/store/modules/comments";
import {useAppDispatch} from "lib/store/hooks";

function ArticlePage() {
  const router = useRouter();
  const slug = router.query.slug;
  const [article, setArticle] = useState<ArticleType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug) {
      articleApi.getItem(slug as string).then((response) => {
        setArticle(response.data.article);
        dispatch(loadCommentsList(response.data.article.slug));
      })
    }
  }, [slug])

  if (!article) return;

  return (
    <div className="article-page">

      <div className="banner">
        <div className="container">
          <ArticleHeader article={article}/>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <div dangerouslySetInnerHTML={{__html: article.body}}></div>
          </div>
        </div>
        <hr/>

        <ArticleActions article={article}/>

        <div className="row">

          <div className="col-xs-12 col-md-8 offset-md-2">

            <ArticleCommentForm article={article}/>

            <ArticleCommentsList article={article}/>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                </a>
                &nbsp;
                <a href="" className="comment-author">Jacob Schmidt</a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options"><i className="ion-edit"></i><i className="ion-trash-a"></i></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage;