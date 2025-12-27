import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PdfUploader from "@/components/PdfUploader";

export const metadata: Metadata = {
  title: "PDF to PNG Converter – Convert PDF Pages to Images | QuickPdf",
  description:
    "Convert PDF pages into PNG images online. Download all pages as images in a ZIP file. Free and fast.",
};

export default function PdfToPngPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            PDF to PNG Converter
          </h1>

          <p className="text-[#374151] mb-8 max-w-2xl text-sm md:text-base">
            Convert each page of your PDF into high-quality PNG images. Download
            all pages as a ZIP file.
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
              actionUrl="/api/pdf-to-png"
              buttonText="Convert to PNG"
            />
          </div>

          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Extract PDF pages as images
            </h2>
            <p>
              Use QuickPdf to convert PDF documents into PNG images for
              previews, presentations, or sharing individual pages.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
