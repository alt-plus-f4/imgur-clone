import Feed from '@/components/homepage/Feed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const tags = ['Chocolate', 'Cake', 'Memes', 'Funny', 'Reddit', 'Counter Strike', 'Gaming', 'League of Legends', 'Drip', 'Valorant', 'Music', 'Skins', 'Tech']

  return (
    <>
    <div className='Images-Cover'>
      <div className="images-section">
        {tags.map((tag, index) => (
        <div className="imageContainer" key={index}> 
          <img className="image color-loading" alt="Image" src="test.jpg" width="300"/>
          <div className="postData">
            <a className="postText">This is an example image</a>
          </div>
            <div className="postInfo">
              <div className="upvoteContainer">
                <img src="upvote.svg" className="upvote"/>
                <p className="upvoteCount">69</p>
              </div>
              <div className="downvoteContainer">
                <img src="downvote.svg" className="downvote"/>
                <p className="downvoteCount">69</p>
              </div>
              <div className="commentContainer">
                <img src="comment.svg" className="comment"/>
                <p className="commentCount">42</p>
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>

    </>
  )
}
