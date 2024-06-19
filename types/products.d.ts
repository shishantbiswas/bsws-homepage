type products = {
  docs: ProductsDocs[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

type ProductsDocs = {
  id: string;
  featureImage: ProductFeatureImage;
  sliderImage: ProductFeatureImage[];
  title: string;
  metaDescription: string;
  body: Body;
  slug: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  category: ProductCategory
  additionalCategories: ProductCategory[]
  price: string | number;
  options: Option[];
};

type ProductCategory = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  image: {
    url: string;
  };
};

type Option = {
  name: string;
  variants: {
    value: string;
  }[];
};

type ProductFeatureImage = {
  id: string | number;
  filename: string;
  url: string;
  alt: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
};
