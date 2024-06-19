type search = {
  docs: 
    {
      id: string
      title: string
      doc: { relationTo: string; value: string };
      createdAt: string;
      updatedAt: string;
    }[]
  totalDocs: number;
  limit: number
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: false;
  hasNextPage: false;
  prevPage: boolean|null;
  nextPage: boolean|null;
};