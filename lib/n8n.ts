export async function callN8n(imageUrl: string): Promise<string> {
  const res = await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl })
  });

  const data = await res.json();
  return data.editedImageUrl;
}
