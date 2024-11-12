import Link from "next/link";
import {auth} from "@/app/_lib/auth"

export default async function Navigation() {
    const user = await auth()
    console.log(user)
    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center text-accent-100">
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    {user?.user ?
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-3"
                        >
                            <div>
                                <img src={user.user.image} alt={user.user.name} className="h-8 rounded-full"/>
                            </div>
                            Guest area
                        </Link>
                        : <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors"
                        >
                            Guest area
                        </Link>}
                </li>
            </ul>
        </nav>
    );
}
