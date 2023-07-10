interface SearchParams {
  pages?: string;
  sort_by: string;
  min_price?: string;
  max_price?: string;
}

interface PageResult {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

interface Content {
  url: string;
  page: number;
  results: Results;
  last_visible_page: number;
  parse_status_code: number;
}

interface Results {
  paid: any[];
  filters: Filter[];
  organic: Organic[];
  search_information: {
    query: string;
    show_result_for: number;
  };
}

interface Filter {
  name: string;
  values: Value[];
}

interface Value {
  url: string;
  value: string;
}

interface Organic {
  pos: number;
  url: string;
  type: string;
  price: number;
  title: string;
  currency: string;
  merchant: {
    url: string;
    name: string;
  };
  price_str: string;
  pos_overall: number;
}

interface ProductData {
  content: ProductContent;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

interface ProductContent {
  url: string;
  title: string;
  description: string;
  images: {
    full_size: string[];
    thumbnails: string[];
  };
  highlights?: string[];
  related_items: {
    items: {
      url: string;
      price?: number;
      title: string;
      rating?: number;
      currency?: string;
      reviews_count?: number;
    }[];
    title: string;
  }[];
  specifications: {
    items: {
      title: string;
      value: string;
    }[];
    section_title: string;
  }[];
  reviews: {
    rating: number;
    top_review: {
      text: string;
      title: string;
      rating: number;
      author: string;
      source: string;
    };
    rating_stars: number;
    reviews_count: number;
    reviews_by_stars: {
      [starRating]: {
        url: string;
        reviews_count: number;
      };
    };
  };
  pricing: {
    online: {
      price: number;
      seller: string;
      details: string;
      currency: string;
      condition: string;
      price_tax: number;
      price_total: number;
      seller_link: string;
      price_shipping: number;
    }[];
  };
}
