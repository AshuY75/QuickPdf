import type { Metadata } from "next";
import PdfUploader from "@/components/PdfUploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compress PDF Online – Reduce PDF Size Free | QuickPdf",
  description:
    "Compress PDF files online for free. Reduce PDF size without losing quality. No signup, fast and secure.",
};

export default function CompressPdfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            Compress PDF Online
          </h1>

          {/* Description */}
          <p className="text-[#374151] mb-8 max-w-2xl text-sm md:text-base">
            Reduce PDF file size online without losing quality. Free, fast and
            secure.
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
            <PdfUploader actionUrl="/api/compress" buttonText="Compress PDF" />
          </div>

          {/* Info Section */}
          <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
            <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
              Compress PDF files easily
            </h2>

            <p className="mb-4">
              Compress PDF files online with QuickPdf in just a few seconds.
              This free PDF compressor helps you reduce file size while
              maintaining document quality, without requiring any signup or
              software installation.
            </p>

            <p className="mb-4">
              Whether you need to email large PDF files, upload documents to
              government portals, or share files on WhatsApp, QuickPdf makes PDF
              compression simple, fast, and secure.
            </p>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              How to compress a PDF file:
            </h3>
            <ol className="list-decimal list-inside mb-4 space-y-1">
              <li>Upload your PDF file using the uploader above.</li>
              <li>Click the “Compress PDF” button.</li>
              <li>Wait a few seconds while the file is processed.</li>
              <li>Download your compressed PDF instantly.</li>
            </ol>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              Why use QuickPdf to compress PDFs?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Reduce PDF file size for free</li>
              <li>No signup or login required</li>
              <li>Works directly in your browser</li>
              <li>Secure processing – files are not stored permanently</li>
              <li>Compatible with all devices</li>
            </ul>

            <p className="mt-4">
              This online PDF compressor is ideal for students, professionals,
              and businesses who need to reduce PDF file size quickly without
              watermarks or restrictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
