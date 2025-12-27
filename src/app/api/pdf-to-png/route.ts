import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";
import JSZip from "jszip";
import { promisify } from "util";

const execAsync = promisify(exec);

// Poppler binary available in Linux/Docker
const PDFTOPPM_PATH = "pdftoppm";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Please upload a valid PDF file" },
        { status: 400 }
      );
    }

    // Create temp working directory
    const workDir = fs.mkdtempSync(path.join(os.tmpdir(), "pdf-to-png-"));
    const inputPdfPath = path.join(workDir, "input.pdf");
    const outputPrefix = path.join(workDir, "page");

    // Save uploaded PDF
    const pdfBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(inputPdfPath, pdfBuffer);

    // Convert PDF → PNG using Poppler
    const command = `${PDFTOPPM_PATH} -png "${inputPdfPath}" "${outputPrefix}"`;
    await execAsync(command);

    // Zip generated PNG files
    const zip = new JSZip();
    const pngFiles = fs.readdirSync(workDir).filter((f) => f.endsWith(".png"));

    for (const filename of pngFiles) {
      const filePath = path.join(workDir, filename);
      zip.file(filename, fs.readFileSync(filePath));
    }

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Cleanup temp directory
    fs.rmSync(workDir, { recursive: true, force: true });

    // ✅ Convert Buffer → ArrayBuffer for Web Response (TypeScript-safe)
    const blob = new Blob([new Uint8Array(zipBuffer)], {
      type: "application/zip",
    });

    return new Response(blob, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=pdf-to-png.zip",
      },
    });
  } catch (error) {
    console.error("PDF to PNG error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
