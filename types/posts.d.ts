type blog = {
  docs: Docs[];
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

type FeatureImage = {
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

type Docs = {
  id: string;
  featureImage: FeatureImage;
  title: string;
  metaDescription: string;
  body: Body;
  slug: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  category: DocsCategory
  additionalCategories:DocsCategory[]
};

type DocsCategory = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  image: {
    url: string;
  };
};

type Author = {
  id: string;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
  socials: [];
};
