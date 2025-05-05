export interface ZennArticle {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  bookmarked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  published_at: string;
  path: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
  publication: null | {
    id: number;
    name: string;
    display_name: string;
  };
}

export interface ZennResponse {
  articles: ZennArticle[];
  next_page: number | null;
  total_count: number | null;
} 