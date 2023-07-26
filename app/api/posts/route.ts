import { db } from '@/lib/db'
import { z } from 'zod'

export async function GET(req: Request) {
  const url = new URL(req.url)

  try {
    const { limit, page, tags } = z
      .object({
        limit: z.string(),
        page: z.string(),
        tags: z.string().nullish().optional(),
      })
      .parse({
        tags: url.searchParams.get('tags'),
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
      })

    let whereClause = {}

    if (tags) {
      whereClause = {
        tag: {
          name: tags,
        },
      }
    }

    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        tags: true,
        votes: true,
        author: true,
        comments: true,
      },
      where: whereClause,
    })

    return new Response(JSON.stringify(posts))
  } catch (error) {
    return new Response('Could not fetch posts', { status: 500 })
  }
}
