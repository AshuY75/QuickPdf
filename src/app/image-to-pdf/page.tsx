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

          {/* Info Section */}
          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Convert images into a single PDF
            </h2>

            <p className="mb-4">
              Convert images to PDF online with QuickPdf in just a few clicks.
              This free image to PDF converter allows you to merge multiple JPG,
              PNG, and other image formats into one PDF file without creating an
              account or installing any software.
            </p>

            <p className="mb-4">
              Whether you are submitting assignments, sharing scanned documents,
              or uploading files to online portals, QuickPdf makes image to PDF
              conversion fast, secure, and easy to use.
            </p>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              How to convert images to PDF:
            </h3>
            <ol className="list-decimal list-inside mb-4 space-y-1">
              <li>Upload one or more image files using the uploader above.</li>
              <li>Arrange the images in the order you want.</li>
              <li>Click the “Convert to PDF” button.</li>
              <li>Download your PDF file instantly.</li>
            </ol>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              Why use QuickPdf for image to PDF conversion?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Convert images to PDF for free</li>
              <li>No signup or login required</li>
              <li>Works directly in your browser</li>
              <li>Secure processing – files are not stored permanently</li>
              <li>Compatible with all devices</li>
            </ul>

            <p className="mt-4">
              This online image to PDF converter is ideal for students,
              professionals, and businesses who need to turn images into PDF
              files quickly without watermarks or restrictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
