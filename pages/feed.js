import { getAllPosts } from '@/lib/notion'
import { generateRss } from '@/lib/rss'
export async function getServerSideProps ({ res }) {
  res.setHeader('Content-Type', 'text/xml')
  let posts = await getAllPosts()
  posts = posts.filter(post => post.status === 'Published' && post.type === 'Post')
  const xmlFeed = generateRss(posts)
  res.write(xmlFeed)
  res.end()
  return {
    props: {}
  }
}
const feed = () => null
export default feed
