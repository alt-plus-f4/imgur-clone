import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { Button, buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { cn } from '@/lib/utils'

const Navbar = async () => {
  const motd = "You miss 100% of the shots you don't take."
  const session = await getServerSession(authOptions)
  const tags = ['Chocolate', 'Cake', 'Memes', 'Funny', 'Reddit', 'Counter Strike', 'Gaming', 'League of Legends', 'Drip', 'Valorant', 'Music', 'Skins', 'Tech']

  return (
    <div className='HomeCover'>
      <div className='Navbar'>
        {/* logo */}
        <div className='Navbar-Left'>
          <Link href='/' className='flex gap-2 items-center'>
            <h2 className='Logo'>TUES</h2>
          </Link>
          <Button className='Upload'><img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.da483e9d9559c3b4e912.svg"/><span className='Upload-label'>New post</span></Button>
        </div>

        {/* search bar */}
        <div className='Navbar-Center'>
          <SearchBar />
        </div>


        {/* actions */}
        <div className='Navbar-Right'>
          {session?.user ? (<UserAccountNav user={session.user} />) : (
            <>
            <Link href='/sign-in' className={cn(buttonVariants({variant: 'outline'}), 'Signin-Button')} >
              Sign In
            </Link>
            <Link href='/sign-up' className={cn(buttonVariants({variant: 'outline'}), 'Signup-Button')} >
              Sign Up
            </Link>
            </>
          )}
        </div>

      </div>

      <div className='Motd'>{motd}</div>

      <div className='Tags'>
          <div className='Tags-header'><span>EXPLORE TAGS</span><a>MORE TAGS +</a></div>
          <div className='Tags-container'> 
            {tags.map((tag, index) => (
              <a className='Tag' href='/'>
                <div key={index} className='Tag-title'>
                  <div className='Tag-name'>{tag}</div>
                  <div className='Tag-posts'>4,991 Posts</div>
                </div>
              </a>
            ))}
          </div>
      </div>

      <div className='Cover-Gallery'>
        <div className='Cover-Sort'>
          <span className='Change-Sort-Pop'>Most Viral</span>
          <span className='Change-Sort-Pop'>Newest</span>
        </div>
      </div>


    </div>
  )
}

export default Navbar
