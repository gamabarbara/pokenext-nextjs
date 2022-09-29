import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav>
            <div>
                <Image src="/images/pokeball.png" height="30" width="30" alt="Pokedex" />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}