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

            <p className="mb-4">
              Merge PDF files online with QuickPdf in just a few clicks. This
              free PDF merger allows you to combine multiple PDF documents into
              a single file without creating an account or installing any
              software.
            </p>

            <p className="mb-4">
              Whether you want to join PDF files for school assignments, office
              reports, or personal documents, QuickPdf makes the process fast,
              secure, and easy to use.
            </p>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              How to merge PDF files:
            </h3>
            <ol className="list-decimal list-inside mb-4 space-y-1">
              <li>
                Upload two or more PDF files using the file uploader above.
              </li>
              <li>Arrange the files in the order you want.</li>
              <li>Click the “Merge PDFs” button.</li>
              <li>Download your merged PDF instantly.</li>
            </ol>

            <h3 className="font-semibold text-[#111827] mt-6 mb-2">
              Why use QuickPdf to merge PDFs?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Merge multiple PDFs into one file for free</li>
              <li>No signup or login required</li>
              <li>Works directly in your browser</li>
              <li>Secure processing – files are not stored permanently</li>
              <li>Compatible with all devices</li>
            </ul>

            <p className="mt-4">
              This online PDF merger is ideal for students, professionals, and
              businesses who need to combine PDF files quickly without
              watermarks or restrictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
