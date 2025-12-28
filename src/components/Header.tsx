import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-[#111827]"
        >
          Quick<span className="text-[#2563EB]">Pdf</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#374151]">
          <Link
            href="/merge-pdf"
            className="hover:text-[#2563EB] transition-colors"
          >
            Merge PDF
          </Link>
          <Link
            href="/compress-pdf"
            className="hover:text-[#2563EB] transition-colors"
          >
            Compress PDF
          </Link>
          <Link
            href="/image-to-pdf"
            className="hover:text-[#2563EB] transition-colors"
          >
            Image to PDF
          </Link>
          <Link
            href="/pdf-to-png"
            className="hover:text-[#2563EB] transition-colors"
          >
            PDF to PNG
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#2563EB] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
