export interface Books {
  book_id: number;
  title: string;
  genre: string;
  rating: number;
  description: string;
  publisher: Publisher;
  authors: Authors;
}

export interface Publisher {
  publisher_id: number;
  name: string;
}

export interface Authors {
  author_id: number;
  author_name: string;
}

export function emptyBook(): Books {
  return {
    book_id: 0,
    title: '',
    genre: '',
    rating: 0,
    description: '',
    publisher: {
      publisher_id: 0,
      name: ''
    },
    authors: {
      author_id: 0,
      author_name: ''
    }
  };
}

