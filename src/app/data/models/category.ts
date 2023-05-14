export interface Category {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  sub_categories: Subcategory[];
}

export interface Subcategory {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
