import howToPlanLuxuryPool from "./how-to-plan-a-luxury-pool-in-sydney";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  howToPlanLuxuryPool,
];

export const getBlogPostBySlug = (slug?: string) => {
  return blogPosts.find((post) => post.slug === slug);
};