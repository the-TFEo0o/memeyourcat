import { NextResponse } from "next/server";
import { uploadToCloudinary } from "../../../lib/cloudinary";
import { callN8n } from "../../../lib/n8n";


export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  // 1. Upload original image
  const originalUrl = await uploadToCloudinary(file);

  // 2. Call n8n
  const editedImageUrl = await callN8n(originalUrl);

  return NextResponse.json({ editedImageUrl });
}
