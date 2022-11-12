import {useSelector} from "react-redux";
import {loadList as loadArticleList, selectTags} from "../../lib/store/modules/articles";
import {v4 as uid} from 'uuid'
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAppDispatch} from "../../lib/store/hooks";
import Link from "next/link";

function HomeTags(){
  const router = useRouter()
  const {tag, path} = router.query
  const tags = useSelector(selectTags)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(tag) dispatch(loadArticleList({tag: tag as string}))
    else dispatch(loadArticleList({}))
  }, [tag])

  return (
    <div className="tag-list">
      {
        tags.map((tag) => <Link href={`/?tag=${tag}`} key={uid()}><a className="tag-pill tag-default">{tag}</a></Link>)
      }
    </div>
  )
}

export default HomeTags