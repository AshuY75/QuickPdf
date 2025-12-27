import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-[#111827] hover:opacity-90 transition"
        >
          Quick<span className="text-[#2563EB]">Pdf</span>
        </Link>

        {/* Right Navigation */}
        <nav className="flex items-center gap-4 text-sm font-medium">
          {/* Tools Dropdown – Desktop Only */}
          <div className="relative hidden md:block group">
            <button
              className="
                px-3 py-1.5 rounded-md
                text-[#1F2937]
                hover:text-[#2563EB]
                hover:bg-blue-50
                transition-all
              "
            >
              Tools
            </button>

            {/* Dropdown Menu */}
            <div
              className="
                absolute right-0 mt-2 w-48
                bg-white border border-[#E5E7EB]
                rounded-md shadow-md
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all
              "
            >
              <Link
                href="/compress-pdf"
                className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-blue-50 hover:text-[#2563EB]"
              >
                Compress PDF
              </Link>

              <Link
                href="/merge-pdf"
                className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-blue-50 hover:text-[#2563EB]"
              >
                Merge PDF
              </Link>

              <Link
                href="/image-to-pdf"
                className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-blue-50 hover:text-[#2563EB]"
              >
                Image to PDF
              </Link>

              <Link
                href="/pdf-to-png"
                className="block px-4 py-2 text-sm text-[#1F2937] hover:bg-blue-50 hover:text-[#2563EB]"
              >
                PDF to PNG
              </Link>
            </div>
          </div>

          {/* Auth */}
          <Link
            href="/sign-in"
            className="text-[#1F2937] hover:text-[#2563EB] transition-colors"
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className="
              px-4 py-1.5 rounded-md
              bg-[#2563EB] text-white
              hover:bg-[#1D4ED8]
              transition-colors
            "
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
