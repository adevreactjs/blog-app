export interface PostProps {
  cursor: Key | null | undefined;
  node: any;
  createdAt(createdAt: any): unknown;
  author: any;
  slug: string;
  featuredImage: any;
  title: string;
  excerpt: string;
}