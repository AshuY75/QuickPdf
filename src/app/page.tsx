import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document.",
    href: "/merge-pdf",
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size without losing quality.",
    href: "/compress-pdf",
  },
  {
    title: "Image to PDF",
    description: "Convert JPG and PNG images into a single PDF.",
    href: "/image-to-pdf",
  },
  {
    title: "PDF to PNG",
    description: "Convert each page of a PDF into PNG images.",
    href: "/pdf-to-png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            QuickPdf – Free Online PDF Tools
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-[#374151] mb-12">
            QuickPdf helps you merge, compress, and convert PDF files online.
            Fast, secure, and completely free. No signup required.
          </p>

          {/* Tools Grid */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-[#111827] mb-6">
              Available PDF Tools
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="
                    group rounded-xl
                    border border-[#E5E7EB]
                    bg-[#F9FAFB]
                    p-6
                    transition-all
                    hover:-translate-y-1
                    hover:border-[#2563EB]
                    hover:shadow-md
                  "
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#111827] group-hover:text-[#2563EB]">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-[#374151]">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Trust Section */}
          <section className="mt-16 max-w-3xl">
            <h2 className="text-lg font-semibold text-[#111827] mb-3">
              Why use QuickPdf?
            </h2>
            <p className="text-sm md:text-base text-[#374151] leading-relaxed">
              QuickPdf is designed for students, professionals, and businesses
              who need reliable PDF tools without watermarks, account creation,
              or software installation. All files are processed securely and
              deleted automatically after completion.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
