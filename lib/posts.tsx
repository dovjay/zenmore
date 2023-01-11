import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export function getAllPostIds(): object {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '')

    return {
      params: {
        id
      },
    }
  })
}

export async function getPostData(id: string) {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf-8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  
  const contentHtml: string = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}