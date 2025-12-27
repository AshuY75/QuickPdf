import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length < 2) {
      return NextResponse.json(
        { error: "Upload at least 2 PDF files" },
        { status: 400 }
      );
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      if (file.type !== "application/pdf") continue;

      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    // 🔑 REQUIRED FIX
    const pdfBuffer = Buffer.from(mergedBytes);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=merged.pdf",
      },
    });
  } catch (error) {
    console.error("Merge error:", error);
    return NextResponse.json({ error: "Merge failed" }, { status: 500 });
  }
}
