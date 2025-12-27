export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-sm text-[#374151] bg-white">
      <div
        className="
          max-w-5xl mx-auto px-4 py-6
          flex flex-col sm:flex-row
          gap-4 sm:gap-0
          justify-between items-center
        "
      >
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-[#111827]">
            Quick<span className="text-[#2563EB]">Pdf</span>
          </span>
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="/privacy-policy"
            className="hover:text-[#2563EB] transition-colors"
          >
            Privacy
          </a>
          <a href="/terms" className="hover:text-[#2563EB] transition-colors">
            Terms
          </a>
          <a href="/contact" className="hover:text-[#2563EB] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
