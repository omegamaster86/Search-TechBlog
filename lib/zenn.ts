import type { ZennResponse } from "@/types/zenn";

export async function getZennArticles(page = 1, perPage = 20): Promise<ZennResponse> {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer
    ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    : "";
  const url = `${baseUrl}/api/zenn?page=${page}&per_page=${perPage}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Zenn articles");
  return res.json();
}