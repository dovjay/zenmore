import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

export interface PostDataInterface {
  id: string,
  content: any,
  date: string,
  thumbnail: string,
  title: string,
  description: string,
}

const postsDirectory: string = path.join(process.cwd(), 'posts')

export function getAllPostIds(): object {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.mdx$/, '')

    return {
      params: {
        id
      },
    }
  })
}

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  return await Promise.all(fileNames.map(async (fileName: string) => {
    const id: string = fileName.replace(/\.mdx$/, '')

    return await getPostData(id)
  }))
}

export async function getPostData(id: string): Promise<PostDataInterface> {
  const fullPath: string = path.join(postsDirectory, `${id}.mdx`)
  const file: string = fs.readFileSync(fullPath, 'utf-8')

  const matterResult: any = matter(file)

  const mdxSource = await serialize(matterResult.content)

  return {
    id,
    content: mdxSource,
    ...matterResult.data
  }
}