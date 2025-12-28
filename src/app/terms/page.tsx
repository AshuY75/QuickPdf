import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | QuickPdf",
  description: "Terms and conditions for using QuickPdf.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Terms of Service
          </h1>

          <p className="text-sm text-[#6B7280] mb-6">
            Last updated: September 2025
          </p>

          <p className="text-[#374151] mb-4">
            These Terms of Service govern your access to and use of the QuickPdf
            website and online PDF tools. By accessing or using QuickPdf, you
            agree to be bound by these terms. If you do not agree, please do not
            use the service.
          </p>

          {/* 1 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            1. Use of the Service
          </h2>
          <p className="text-[#374151]">
            QuickPdf provides online tools for processing PDF documents,
            including but not limited to compressing, merging, and converting
            files. The service is intended for personal and professional use.
          </p>
          <p className="text-[#374151] mt-2">
            You agree not to misuse the service, attempt unauthorized access,
            interfere with system operations, or use the service for any
            unlawful or prohibited activity.
          </p>

          {/* 2 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            2. File Responsibility
          </h2>
          <p className="text-[#374151]">
            You are solely responsible for the files you upload, process, or
            download using QuickPdf. This includes ensuring that you have the
            legal right to use and process such files.
          </p>
          <p className="text-[#374151] mt-2">
            QuickPdf does not verify, monitor, or take responsibility for the
            content of uploaded files.
          </p>

          {/* 3 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            3. File Processing and Storage
          </h2>
          <p className="text-[#374151]">
            Uploaded files are processed temporarily to perform the requested
            operation. Files are not stored permanently and are automatically
            deleted after processing is completed.
          </p>
          <p className="text-[#374151] mt-2">
            While we take reasonable measures to ensure secure processing, no
            method of transmission over the internet is completely secure, and
            we cannot guarantee absolute security.
          </p>

          {/* 4 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-[#374151]">
            All content, software, branding, logos, and design elements on
            QuickPdf are the property of QuickPdf or its licensors and are
            protected by applicable intellectual property laws.
          </p>
          <p className="text-[#374151] mt-2">
            You may not copy, modify, distribute, or reproduce any part of the
            website without prior written permission.
          </p>

          {/* 5 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            5. Service Availability
          </h2>
          <p className="text-[#374151]">
            We aim to keep QuickPdf available and functional, but we do not
            guarantee uninterrupted or error-free operation.
          </p>
          <p className="text-[#374151] mt-2">
            The service may be updated, modified, suspended, or discontinued at
            any time without prior notice.
          </p>

          {/* 6 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            6. Disclaimer
          </h2>
          <p className="text-[#374151]">
            QuickPdf is provided on an “as is” and “as available” basis. We make
            no warranties, express or implied, regarding the reliability,
            accuracy, or suitability of the service for any purpose.
          </p>

          {/* 7 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-[#374151]">
            To the maximum extent permitted by law, QuickPdf shall not be liable
            for any direct, indirect, incidental, or consequential damages
            arising from your use of or inability to use the service.
          </p>

          {/* 8 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            8. International Use
          </h2>
          <p className="text-[#374151]">
            QuickPdf is operated from India and may be accessed by users
            worldwide. By using the service, you agree that your use is subject
            to these Terms of Service regardless of your location.
          </p>

          {/* 9 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            9. Changes to These Terms
          </h2>
          <p className="text-[#374151]">
            We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and continued use of the service
            constitutes acceptance of the updated terms.
          </p>

          {/* 10 */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            10. Contact Information
          </h2>
          <p className="text-[#374151]">
            If you have any questions about these Terms of Service, you can
            contact us at:
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
