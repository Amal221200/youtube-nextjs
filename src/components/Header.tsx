import { auth, signIn, signOut } from "@/lib/auth"
import Image from "next/image"
import { LogOut } from "lucide-react"
import Avatar from "./Avatar"

const Header = async () => {
  const session = await auth()

  return (
    <header className="mb-1 px-2 flex justify-between items-center">
      <div className="flex gap-2 items-center relative w-28 h-12">
        <Image src={'/youtube.svg'} alt="youtube" fill className="object-cover" />
      </div>
      <div>
        {
          session && session.user ? (
            <form action={async () => {
              "use server"
              await signOut()
            }}>
              <div className="flex gap-4">
                <Avatar height={30} width={30} src={session.user?.image!} alt={session.user.name!} />
                <button>
                  <LogOut />
                </button>
              </div>
            </form>
          ) : (
            <form action={async () => {
              "use server"
              await signIn()
            }}>
              <button >Sign In</button>
            </form>
          )
        }
      </div>
    </header>
  )
}

export default Header