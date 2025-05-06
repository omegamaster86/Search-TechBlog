"use client";

import { getZennArticles } from "@/lib/zenn";
import type { ZennResponse } from "@/types/zenn";
import { useState } from "react";
import ArticleCard from "./card";

interface Props {
	initialArticles: ZennResponse["articles"];
}

export default function ZennArticlesClient({ initialArticles }: Props) {
	const [page, setPage] = useState(1);
	const [articles, setArticles] = useState(initialArticles);
	const [loading, setLoading] = useState(false);

	const loadMore = async () => {
		setLoading(true);
		try {
			const { articles: newArticles } = await getZennArticles(page + 1);
			setArticles([...articles, ...newArticles]);
			setPage(page + 1);
		} catch (error) {
			console.error("Failed to load more articles:", error);
		}
		setLoading(false);
	};

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8">Zenn Articles</h1>
			<div className="grid gap-6 md:grid-cols-2">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
			<div className="mt-8 text-center">
				<button
					type="button"
					onClick={loadMore}
					disabled={loading}
					className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
				>
					{loading ? "読み込み中..." : "もっと表示する"}
				</button>
			</div>
		</div>
	);
}
