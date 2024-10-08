import Image from "next/image"
import Link from "next/link"

export default function topbar() {
    return (
        <header className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                  <span className="sr-only">Home</span>
                  <Image src={`/image/logo.svg`} alt="Logo" width="150" height="150" />
                </a>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <Link href="/" className="text-gray-500 transition hover:text-gray-500/75" >Beranda</Link>
                    <Link href="/blog" className="text-gray-500 transition hover:text-gray-500/75" >Blog</Link>
                    <Link href="/produk-portofolio" className="text-gray-500 transition hover:text-gray-500/75">Produk & Portofolio</Link>
                    <Link href="/tentang-kami" className="text-gray-500 transition hover:text-gray-500/75">Tentang Kami</Link>
                    <Link href="/kontak" className="text-gray-500 transition hover:text-gray-500/75">Kontak</Link>
                    <Link href="/blog" className="text-gray-500 transition hover:text-gray-500/75" >Blog</Link>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </header>

    )
}