export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  rating: number;
  reviews: number;
  description?: string;
  features?: string[];
  categoryId: string;
  affiliateUrl: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}
