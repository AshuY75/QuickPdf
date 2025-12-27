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
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
            Terms of Service
          </h1>

          <p className="text-[#374151] mb-4">
            These Terms of Service govern your use of the QuickPdf website and
            services. By accessing or using QuickPdf, you agree to be bound by
            these terms. If you do not agree, please do not use the service.
          </p>

          {/* Use of Service */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            1. Use of the Service
          </h2>
          <p className="text-[#374151]">
            QuickPdf provides online tools to process PDF documents, such as
            compressing or merging files. The service is intended for personal
            and professional use only.
          </p>
          <p className="text-[#374151] mt-2">
            You agree not to misuse the service, attempt unauthorized access,
            interfere with system performance, or use the service for any
            unlawful activity.
          </p>

          {/* File Responsibility */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            2. File Responsibility
          </h2>
          <p className="text-[#374151]">
            You are solely responsible for the files you upload to QuickPdf.
            This includes ensuring that you have the legal right to upload,
            process, and download such files.
          </p>
          <p className="text-[#374151] mt-2">
            QuickPdf does not verify, monitor, or take responsibility for the
            content of uploaded files.
          </p>

          {/* Temporary Processing */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            3. File Processing and Storage
          </h2>
          <p className="text-[#374151]">
            Uploaded files are processed temporarily to perform the requested
            operation. Files are not stored permanently and are automatically
            removed after processing.
          </p>
          <p className="text-[#374151] mt-2">
            While we take reasonable measures to ensure secure processing, we
            cannot guarantee absolute security of data transmitted over the
            internet.
          </p>

          {/* Intellectual Property */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-[#374151]">
            All content, design elements, logos, and software used on QuickPdf
            are the property of QuickPdf or its licensors and are protected by
            applicable intellectual property laws.
          </p>
          <p className="text-[#374151] mt-2">
            You may not copy, modify, distribute, or reproduce any part of the
            website without prior written permission.
          </p>

          {/* Service Availability */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            5. Service Availability
          </h2>
          <p className="text-[#374151]">
            We strive to keep QuickPdf available and functional at all times,
            but we do not guarantee uninterrupted or error-free operation.
          </p>
          <p className="text-[#374151] mt-2">
            The service may be modified, suspended, or discontinued at any time
            without prior notice.
          </p>

          {/* Disclaimer */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            6. Disclaimer
          </h2>
          <p className="text-[#374151]">
            QuickPdf is provided on an “as is” and “as available” basis. We make
            no warranties, expressed or implied, regarding the accuracy,
            reliability, or suitability of the service for any purpose.
          </p>

          {/* Limitation of Liability */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-[#374151]">
            To the maximum extent permitted by law, QuickPdf shall not be liable
            for any direct, indirect, incidental, or consequential damages
            resulting from your use of or inability to use the service.
          </p>

          {/* Changes */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            8. Changes to These Terms
          </h2>
          <p className="text-[#374151]">
            We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and continued use of the service
            constitutes acceptance of the updated terms.
          </p>

          {/* Contact */}
          <h2 className="text-lg font-semibold text-[#111827] mt-8 mb-2">
            9. Contact Information
          </h2>
          <p className="text-[#374151]">
            If you have any questions about these Terms of Service, please
            contact us through the contact page available on this website.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
