import Link from "next/link";
import type { ZennArticle } from "@/types/zenn";

export default function ArticleCard({ article }: { article: ZennArticle }) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{article.emoji}</span>
        <span className="text-sm text-gray-500">{article.article_type}</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`https://zenn.dev${article.path}`} target="_blank" rel="noopener noreferrer">
          {article.title}
        </Link>
      </h2>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>👍</span>
          <span>{article.liked_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🔖</span>
          <span>{article.bookmarked_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>💬</span>
          <span>{article.comments_count}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <img
          src={article.user.avatar_small_url}
          alt={article.user.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm">{article.user.name}</span>
      </div>
    </article>
  );
} 