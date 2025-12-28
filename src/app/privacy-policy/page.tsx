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
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#6B7280] mb-6">
            Last updated: September 2025
          </p>

          <p className="text-[#374151] mb-4">
            QuickPdf values your privacy and is committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and safeguard information when you use our website and online
            PDF tools.
          </p>

          {/* 1 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-[#374151]">
            QuickPdf does not require users to create an account to use most of
            its services. We do not ask for personal information such as your
            name, phone number, or postal address.
          </p>
          <p className="text-[#374151] mt-2">
            We may automatically collect limited technical information such as
            browser type, device information, operating system, and anonymized
            IP address. This data is used only to improve website performance,
            reliability, and user experience.
          </p>

          {/* 2 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            2. Uploaded Files
          </h2>
          <p className="text-[#374151]">
            Files uploaded to QuickPdf are processed only to perform the
            requested operation, such as compressing, merging, or converting PDF
            files.
          </p>
          <p className="text-[#374151] mt-2">
            Uploaded files are stored temporarily and are automatically deleted
            from our systems shortly after processing is completed. We do not
            access, view, share, or analyze the contents of your files.
          </p>

          {/* 3 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            3. Cookies and Analytics
          </h2>
          <p className="text-[#374151]">
            QuickPdf may use cookies or similar technologies to ensure basic
            functionality and to understand how users interact with the website.
          </p>
          <p className="text-[#374151] mt-2">
            In the future, we may use third-party analytics or advertising
            services (such as Google Analytics or AdSense) to analyze traffic
            patterns and support the operation of the website. These services
            may use cookies in accordance with their own privacy policies.
          </p>
          <p className="text-[#374151] mt-2">
            You can control or disable cookies through your browser settings.
            Disabling cookies may affect certain features of the website.
          </p>

          {/* 4 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-[#374151]">
            We may rely on trusted third-party tools or services for analytics,
            performance monitoring, file processing, or content delivery. These
            third parties may process limited technical data as required to
            provide their services.
          </p>

          {/* 5 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            5. Data Security
          </h2>
          <p className="text-[#374151]">
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, misuse, or loss.
            However, no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </p>

          {/* 6 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            6. Children’s Privacy
          </h2>
          <p className="text-[#374151]">
            QuickPdf is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children.
          </p>

          {/* 7 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            7. International Users
          </h2>
          <p className="text-[#374151]">
            QuickPdf is operated from India and may be accessed by users around
            the world. By using the website, you consent to the processing of
            information in accordance with this Privacy Policy.
          </p>

          {/* 8 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            8. Changes to This Policy
          </h2>
          <p className="text-[#374151]">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and continued use of the website
            indicates acceptance of the updated policy.
          </p>

          {/* 9 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            9. Contact Information
          </h2>
          <p className="text-[#374151]">
            If you have any questions about this Privacy Policy or how QuickPdf
            handles data, you can contact us at:
          </p>
          <p className="text-[#374151] mt-2">
            📧{" "}
            <a
              href="mailto:sonyoive12@gmail.com"
              className="text-[#2563EB] hover:underline"
            >
              sonyoive12@gmail.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
