export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  inStock: boolean;
  specifications: Record<string, string>;
}

export interface Company {
  name: string;
  representative: string;
  address: string;
  phone: string;
  email: string;
  registrationNumber: string;
  businessHours: string;
}

export interface PolicySection {
  title: string;
  content: string;
} 