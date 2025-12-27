import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "Please upload at least one image" },
        { status: 400 }
      );
    }

    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
      if (!file.type.startsWith("image/")) continue;

      const bytes = await file.arrayBuffer();

      let image;
      if (file.type === "image/png") {
        image = await pdfDoc.embedPng(bytes);
      } else {
        image = await pdfDoc.embedJpg(bytes);
      }

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }

    const pdfBytes = await pdfDoc.save();

    // 🔑 FIX: Uint8Array → Buffer
    const pdfBuffer = Buffer.from(pdfBytes);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=images-to-pdf.pdf",
      },
    });
  } catch (error) {
    console.error("Image to PDF error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
