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
    <>
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
              <PdfUploader
                actionUrl="/api/compress"
                buttonText="Compress PDF"
              />
            </div>

            {/* Info Section */}
            <section className="mt-12 text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl">
              <h2 className="text-base md:text-lg font-semibold mb-2 text-[#2563EB]">
                Compress PDF files easily
              </h2>
              <p>
                Use QuickPdf to compress PDF documents quickly for email,
                WhatsApp, or government uploads that have strict file size
                limits.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
