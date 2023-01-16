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
  description: string
}

type PostCategory = "game-info" | null

const postsDirectory: string = path.join(process.cwd(), 'posts')

export function getAllPostIds(category?: PostCategory): object {
  const dir: string = path.join(postsDirectory, category || '')
  const fileNames = fs.readdirSync(dir)

  return fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.mdx$/, '')

    return {
      params: {
        id
      },
    }
  })
}

export async function getAllPosts(category?: PostCategory): Promise<PostDataInterface[]> {
  const dir: string = path.join(postsDirectory, category || '')
  const fileNames = fs.readdirSync(dir)

  let posts: PostDataInterface[] = await Promise.all(fileNames.map(async (fileName: string) => {
    const id: string = fileName.replace(/\.mdx$/, '')

    return await getPostData(id, category)
  }))

  while (posts.length < 7) {
    posts.push(...posts)
  }

  return posts
}

export async function getPostData(id: string, category?: PostCategory): Promise<PostDataInterface> {
  const dir: string = path.join(postsDirectory, category || '')
  const fullPath: string = path.join(dir, `${id}.mdx`)
  const file: string = fs.readFileSync(fullPath, 'utf-8')

  const matterResult: any = matter(file)

  const mdxSource = await serialize(matterResult.content)

  return {
    id,
    content: mdxSource,
    ...matterResult.data
  }
}