import ZennArticlesClient from "@/app/articles/client";
import { getZennArticles } from "@/lib/zenn";

export default async function ZennArticlesPage() {
	try {
		const { articles } = await getZennArticles();
		return <ZennArticlesClient initialArticles={articles} />;
	} catch (error) {
		console.error("Error in ZennArticlesPage:", error);
		return (
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-bold mb-8">Zenn Articles</h1>
				<div className="text-red-500">
					記事の取得に失敗しました。しばらく経ってから再度お試しください。
				</div>
			</div>
		);
	}
}
