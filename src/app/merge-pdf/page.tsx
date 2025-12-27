import type { Metadata } from "next";
import PdfUploader from "@/components/PdfUploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merge PDF Files Online – Combine PDFs Free | QuickPdf",
  description:
    "Merge multiple PDF files into one document online for free. No signup required. Fast and secure PDF merger.",
};

export default function MergePdfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            Merge PDF Files Online
          </h1>

          {/* Description */}
          <p className="text-[#374151] mb-8 max-w-2xl text-sm md:text-base">
            Combine multiple PDF files into a single document quickly and
            securely.
          </p>

          {/* Uploader Card */}
          <div
            className="
              border border-[#E5E7EB]
              rounded-xl
              p-4 sm:p-6
              bg-[#F9FAFB]
              transition-all duration-200
              hover:border-[#2563EB]
              hover:shadow-md
            "
          >
            <PdfUploader
              multiple
              actionUrl="/api/merge"
              buttonText="Merge PDFs"
            />
          </div>

          {/* Info Section */}
          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Merge PDF documents easily
            </h2>
            <p>
              Perfect for students, professionals, and offices who need to
              combine multiple PDFs into one file without signups.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
