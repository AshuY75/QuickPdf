import Link from "next/link";

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
    <main className="min-h-screen bg-zinc-50 px-6 py-20 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <h1 className="text-4xl font-bold mb-4">
          QuickPDF – Free Online PDF Tools
        </h1>

        <p className="max-w-2xl text-lg text-zinc-600 mb-14">
          QuickPDF helps you merge, compress, and convert PDF files online.
          Fast, secure, and completely free. No signup required.
        </p>

        {/* Tools Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Available PDF Tools</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all
                           hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-600">
                  {tool.title}
                </h3>
                <p className="text-sm text-zinc-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Text */}
        <p className="mt-16 max-w-xl text-sm text-zinc-500">
          Designed for students, professionals, and businesses who need reliable
          PDF tools without ads or account creation.
        </p>
      </div>
    </main>
  );
}
