import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PdfUploader from "@/components/PdfUploader";

export const metadata: Metadata = {
  title: "Image to PDF Converter – JPG, PNG to PDF | QuickPdf",
  description:
    "Convert images to PDF online. Merge JPG, PNG images into a single PDF file. Fast, free, and secure.",
};

export default function ImageToPdfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            Image to PDF Converter
          </h1>

          <p className="text-[#374151] mb-8 max-w-2xl text-sm md:text-base">
            Convert JPG, PNG, and other image files into a single PDF document.
            Free, fast, and secure.
          </p>

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
              accept="image/*"
              actionUrl="/api/image-to-pdf"
              buttonText="Convert to PDF"
            />
          </div>

          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Convert images into a single PDF
            </h2>
            <p>
              QuickPdf lets you combine multiple images into one PDF file. Ideal
              for assignments, scanned documents, and online submissions that
              require PDF format.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
