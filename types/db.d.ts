import type { Post, User, Vote, Comment } from '@prisma/client'

export type ExtendedPost = Post & {
  votes: Vote[]
  author: User
  comments: Comment[]
}
