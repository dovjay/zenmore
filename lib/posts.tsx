import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostDataInterface {
  id: string,
  contentMd: any,
  date: string,
  thumbnail: string,
  title: string
}

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

export async function getPostData(id: string): Promise<PostDataInterface> {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf-8')

  const matterResult: any = matter(fileContents)

  const contentMd = matterResult.content

  return {
    id,
    contentMd,
    ...matterResult.data
  }
}