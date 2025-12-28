import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | QuickPdf",
  description: "Contact QuickPdf for support, feedback, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
            Contact Us
          </h1>

          <p className="text-[#374151] mb-6 max-w-2xl">
            If you have questions, feedback, or need help using QuickPdf, feel
            free to get in touch. We’re always open to improving the product and
            helping users.
          </p>

          <div
            className="
              border border-[#E5E7EB]
              rounded-xl
              p-6
              bg-[#F9FAFB]
            "
          >
            <h2 className="text-lg font-semibold text-[#111827] mb-2">
              Support & Inquiries
            </h2>

            <p className="text-[#374151] mb-3">
              For support-related questions or general inquiries, you can
              contact us using the email below.
            </p>

            <p className="text-[#374151]">
              📧 Email:&nbsp;
              <a
                href="mailto:sonyoive12@gmail.com"
                className="text-[#2563EB] hover:underline"
              >
                sonyoive12@gmail.com
              </a>
            </p>

            <p className="text-sm text-[#6B7280] mt-4">
              Please do not share sensitive or confidential documents via email.
              Files uploaded on QuickPdf are processed automatically and deleted
              shortly after completion.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
