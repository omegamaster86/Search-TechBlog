// import type { ZennResponse } from "@/types/zenn";

// export async function fetchZennArticles(
// 	page = 1,
// 	perPage = 20,
// ): Promise<ZennResponse> {
// 	const response = await fetch(
// 		`https://zenn.dev/api/articles?page=${page}&per_page=${perPage}`,
// 		{ next: { revalidate: 3600 } },
// 	);
// 	if (!response.ok) throw new Error("Failed to fetch Zenn articles");
// 	return response.json();
// }

// export async function getZennArticles(
// 	page = 1,
// 	perPage = 20,
// ): Promise<ZennResponse> {
// 	const isServer = typeof window === "undefined";
// 	const url = isServer
// 		? `http://localhost:3000/api/zenn?page=${page}&per_page=${perPage}`
// 		: `/api/zenn?page=${page}&per_page=${perPage}`;
// 	const response = await fetch(url);
// 	if (!response.ok) throw new Error("Failed to fetch Zenn articles");
// 	return response.json();
// }
import type { ZennResponse } from "@/types/zenn";

export async function getZennArticles(page = 1, perPage = 20): Promise<ZennResponse> {
  const response = await fetch(
    `https://zenn.dev/api/articles?page=${page}&per_page=${perPage}`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) throw new Error("Failed to fetch Zenn articles");
  return response.json();
}