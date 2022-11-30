import {useEffect, useState} from "react";
import {useAppDispatch} from "../../lib/store/hooks";
import {useSelector} from "react-redux";
import {loadList as loadArticleList, loadTags as loadArticleTags, selectList} from "../../lib/store/modules/articles";
import {hasToken} from "../../lib/helpers/user";
import ArticlePreview from "../../components/feed/ArticlePreview";
import HomeTags from "../../components/feed/HomeTags";
import Link from "next/link";
import {selectIsLoggedIn, selectUser} from "../../lib/store/modules/user";
import Router from "next/router";

function MyFeed(){

  const [articles, setArticles] = useState<[]>([])
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useAppDispatch();
  const articlesData = useSelector(selectList)
  const currentUser = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(loadArticleTags())
    dispatch(loadArticleList({favorited: currentUser.username}))
  }, [])

  useEffect(() => {
    setArticles(articlesData.map((article) => <ArticlePreview key={article.slug} article={article} />))
  }, [articlesData])

  if(!hasToken()) Router.push('/user/login')

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
                    <a className="nav-link active">Your Feed</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Global Feed</a>
                  </Link>
                </li>
              </ul>
            </div>
            <>
              {
                articles.length > 0 ? articles : <div>Articles wasn't found</div>
              }
            </>

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

export default MyFeed