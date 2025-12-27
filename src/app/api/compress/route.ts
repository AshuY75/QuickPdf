import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Please upload a valid PDF file" },
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(buffer);

    // Basic compression: re-save PDF
    const compressedPdf = await pdfDoc.save({
      useObjectStreams: false,
    });

    const pdfBuffer = Buffer.from(compressedPdf);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=compressed.pdf",
      },
    });
  } catch (error) {
    console.error("Compression error:", error);
    return NextResponse.json({ error: "Compression failed" }, { status: 500 });
  }
}
