import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import articleApi from "../../lib/api/article";
import {ArticleType} from "../../lib/types/article";
import {useAppDispatch} from "../../lib/store/hooks";
import {hasToken} from "../../lib/helpers/user";

function ArticleCreate() {
  const router = useRouter();
  const [updated, setUpdated] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState<ArticleType>({
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString(),
    favorited: false,
    favoritesCount: 0,
    author: null
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoggedIn(hasToken())
    if(!hasToken()) router.push('/user/login')
  }, [])

  function handleChange(e: React.SyntheticEvent){
    setUpdated(false)
    let {name, value} = e.target as typeof e.target;

    if(name === 'tagList') {
      value = value.replace(/\s+/g, '').split(',')
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(e: React.SyntheticEvent){
    setUpdated(false)
    e.preventDefault()
    articleApi.createArticle({article: formData})
      .then(response => {
        setFormData(response.data.article)
        setUpdated(true)
      })
  }


  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-10 offset-md-1 col-xs-12">
            {
              updated &&
              <div className="text-success">New article was added</div>
            }
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input onChange={handleChange}
                         name="title"
                         type="text"
                         className="form-control form-control-lg"
                         placeholder="Article Title" />
                </fieldset>
                <fieldset className="form-group">
                  <input onChange={handleChange}
                         name="description"
                         type="text"
                         className="form-control"
                         placeholder="What's this article about?" />
                </fieldset>
                <fieldset className="form-group">
                <textarea onChange={handleChange}
                          name="body"
                          className="form-control" rows={8}
                          placeholder="Write your article (in markdown)"></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={handleChange}
                    name="tagList"
                    type="text"
                    className="form-control"
                    placeholder="Enter  (tag1,tag2,tag3)" />
                  <div className="tag-list"></div>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary"
                        type="submit">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ArticleCreate;