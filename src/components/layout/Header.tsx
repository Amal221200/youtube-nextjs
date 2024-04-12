import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"
import { LogOut, Menu } from "lucide-react"
import Avatar from "../Avatar"
import ToggleSidebar from "./ToggleSidebar"
import Link from "next/link"
import UserButton from "../buttons/UserButton"
import ThemeToggler from "../buttons/ThemeToggler"

const Header = async () => {
  const session = await auth()

  return (
    <header className="mb-1 px-2 flex justify-between items-center">
      <div className="flex gap-1 items-center ">
        <ToggleSidebar />
        <div className="relative w-28 h-12">
          <Link href={"/new"}>
            <Image src={'/youtube.svg'} alt="youtube" fill className="object-cover dark:invert" />
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center px-3">
        <ThemeToggler />
        {
          session?.user && (
            <UserButton imageUrl={session.user.image!} name={session.user.name!} />
          )
        }
      </div>
    </header>
  )
}

export default Header