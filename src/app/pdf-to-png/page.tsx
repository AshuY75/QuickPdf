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

          {/* Info Section */}
          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Extract PDF pages as images
            </h2>

            <p className="mb-4">
              Convert PDF to PNG online with QuickPdf in just a few seconds.
              This free PDF to image converter allows you to extract each page
              of a PDF file as a high-quality PNG image without creating an
              account or installing any software.
            </p>

            <p className="mb-4">
              Whether you need images for presentations, previews, design work,
              or sharing individual pages, QuickPdf makes PDF to PNG conversion
              fast, secure, and easy to use.
            </p>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              How to convert PDF to PNG:
            </h3>
            <ol className="list-decimal list-inside mb-4 space-y-1">
              <li>Upload your PDF file using the uploader above.</li>
              <li>Click the “Convert to PNG” button.</li>
              <li>Wait while each PDF page is converted into an image.</li>
              <li>Download all PNG images as a ZIP file.</li>
            </ol>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              Why use QuickPdf for PDF to PNG conversion?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Convert PDF pages to PNG images for free</li>
              <li>No signup or login required</li>
              <li>Works directly in your browser</li>
              <li>Secure processing – files are not stored permanently</li>
              <li>Compatible with all devices</li>
            </ul>

            <p className="mt-4">
              This online PDF to PNG converter is ideal for students,
              professionals, and businesses who need to turn PDF pages into
              images quickly without watermarks or restrictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
