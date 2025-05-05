import { getZennArticles } from "@/lib/zenn";
import ZennArticlesClient from "@/app/articles/client";

export default async function ZennArticlesPage() {
  const { articles } = await getZennArticles();

  return <ZennArticlesClient initialArticles={articles} />;
}
