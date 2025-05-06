import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("per_page") || "20";

  const response = await fetch(
    `https://zenn.dev/api/articles?page=${page}&per_page=${perPage}`
  );
  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch Zenn articles" }, { status: 500 });
  }
  const data = await response.json();
  return NextResponse.json(data);
}