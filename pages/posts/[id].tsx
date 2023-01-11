import { getAllPostIds, getPostData } from "../../lib/posts"

export default function Post(props: any) {
  let { postData } = props

  return <>
    {postData.title} <br />
    {postData.id} <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </>
}

export function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(props: any) {
  let { params } = props

  const postData = await getPostData(params.id)

  return {
    props: { postData }
  }
}