import type { NextPage } from 'next'
import {useEffect, useState} from "react";
import {ArticleList} from "../lib/types/article";
import ArticlePreview from "../components/feed/ArticlePreview";
import {useAppDispatch} from "../lib/store/hooks";
import {loadList as loadArticleList, loadTags as loadArticleTags} from "../lib/store/modules/articles";
import {useSelector} from "react-redux";
import {selectList} from "../lib/store/modules/articles";
import {hasToken} from "../lib/helpers/user";
import HomeTags from "../components/feed/HomeTags";
import Link from "next/link";

const Home: NextPage = () => {

  const [articles, setArticles] = useState<[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useAppDispatch();
  const articlesData = useSelector(selectList)

  useEffect(() => {
    setIsLoggedIn(hasToken)
    dispatch(loadArticleTags())
    dispatch(loadArticleList({}))
    // if(articlesData.length !== 0) {
    //   setArticles(articlesData.map((article) => <ArticlePreview key={article.slug} article={article} />))
    // } else {
    //   dispatch(loadArticleList({}))
    // }
  }, [])

  useEffect(() => {
    setArticles(articlesData.map((article) => <ArticlePreview key={article.slug} article={article} />))
  }, [articlesData])

  if(!articles) return;

  return (
    <div className="home-page">

      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">

          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link href="/my-feed/">
                    <a className="nav-link">Your Feed</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active">Global Feed</a>
                  </Link>
                </li>
              </ul>
            </div>
            <>
              {
                articles.length > 0 ? articles : <div>Articles wasn't found</div>
              }
            </>

            {/*<div className="article-preview">
              <div className="article-meta">
                <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
                <div className="info">
                  <a href="" className="author">Eric Simons</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a href="" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>*/}

            {/*<div className="article-preview">
              <div className="article-meta">
                <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg"/></a>
                <div className="info">
                  <a href="" className="author">Albert Pai</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="" className="preview-link">
                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>*/}

          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <HomeTags />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
