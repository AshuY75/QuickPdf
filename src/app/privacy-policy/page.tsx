import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | QuickPdf",
  description: "Learn how QuickPdf collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
            Privacy Policy
          </h1>

          <p className="text-[#374151] mb-4">
            QuickPdf values your privacy and is committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and safeguard data when you use our website and services.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-[#374151]">
            QuickPdf does not require users to create an account to use basic
            PDF tools. We do not collect personal information such as your name,
            phone number, or address.
          </p>

          <p className="text-[#374151] mt-2">
            We may automatically collect limited technical information such as
            browser type, device type, IP address (anonymized where possible),
            and usage statistics to improve performance and reliability.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            2. Uploaded Files
          </h2>
          <p className="text-[#374151]">
            Files uploaded to QuickPdf are processed only to perform the
            requested action, such as compressing or merging PDF files.
          </p>

          <p className="text-[#374151] mt-2">
            Uploaded files are stored temporarily and are automatically deleted
            from our servers shortly after processing is completed. We do not
            access, view, or analyze the contents of your files.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            3. Cookies and Analytics
          </h2>
          <p className="text-[#374151]">
            QuickPdf may use cookies or similar technologies to understand how
            users interact with the website. These cookies help us analyze
            traffic, improve user experience, and maintain website
            functionality.
          </p>

          <p className="text-[#374151] mt-2">
            You can control or disable cookies through your browser settings.
            Disabling cookies may affect some features of the website.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-[#374151]">
            We may use trusted third-party services for analytics, performance
            monitoring, or content delivery. These services may process limited
            usage data in accordance with their own privacy policies.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            5. Data Security
          </h2>
          <p className="text-[#374151]">
            We take reasonable technical and organizational measures to protect
            your data from unauthorized access, loss, or misuse. However, no
            method of data transmission over the internet is completely secure.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            6. Children’s Privacy
          </h2>
          <p className="text-[#374151]">
            QuickPdf is not intended for use by children under the age of 13. We
            do not knowingly collect personal data from children.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-[#374151]">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and continued use of the website
            indicates acceptance of the updated policy.
          </p>

          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            8. Contact Us
          </h2>
          <p className="text-[#374151]">
            If you have any questions about this Privacy Policy or how QuickPdf
            handles data, you can contact us through the contact page available
            on this website.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
