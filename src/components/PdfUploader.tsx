"use client";

import { useRef, useState } from "react";

type PdfUploaderProps = {
  multiple?: boolean;
  actionUrl: string;
  buttonText: string;
  accept?: string;
};

export default function PdfUploader({
  multiple = false,
  actionUrl,
  buttonText,
  accept,
}: PdfUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    setFiles(Array.from(selected));
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  async function handleSubmit() {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append(multiple ? "files" : "file", file));

    setLoading(true);

    const res = await fetch(actionUrl, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setLoading(false);
      alert("Conversion failed");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = multiple ? "output.pdf" : "output.zip";
    a.click();

    setLoading(false);
  }

  return (
    <div>
      {/* Upload Area */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="
          border-2 border-dashed border-[#E5E7EB]
          rounded-lg p-8 text-center cursor-pointer
          hover:border-[#2563EB]
          transition-colors
        "
      >
        <p className="font-medium text-[#111827]">
          Drag & drop {multiple ? "files" : "a file"} here
        </p>
        <p className="text-sm text-[#374151] mt-1">or click to browse</p>

        <input
          ref={inputRef}
          type="file"
          accept={accept || "application/pdf"}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Selected Files */}
      {files.length > 0 && (
        <div className="mt-4 text-sm text-[#374151]">
          <p className="font-medium mb-1">Selected files:</p>
          <ul className="list-disc list-inside">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={handleSubmit}
        disabled={loading || files.length === 0}
        className="
          mt-6 bg-[#2563EB] hover:bg-[#1D4ED8]
          text-white px-6 py-2 rounded-md
          transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Processing..." : buttonText}
      </button>
    </div>
  );
}
