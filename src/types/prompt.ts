export interface Prompt {
  id: number;

  title: string;

  category: string;

  tool: string;

  creator: string;

  rating: number;

  likes: string;

  views: string;

  price: "Free" | "Premium";
}