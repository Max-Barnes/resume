import Link from "next/link";

export default function Landing() {
  return (
    <main>
      <div class="navbar">
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </main>
  );
}
