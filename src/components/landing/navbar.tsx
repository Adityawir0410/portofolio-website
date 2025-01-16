import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">My Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="#skills" className="text-white hover:text-gray-300">
              Skills
            </Link>
            <Link href="#portfolio" className="text-white hover:text-gray-300">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
