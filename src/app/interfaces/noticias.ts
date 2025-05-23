export interface NoticiResult {
  status: string;
  totalResults: number;
  articles: Noticia[];
}

export interface Noticia {
  source: Source;
  author: null | string;
  title: string;
  description: null | string;
  url: string;
  urlToImage: null | string;
  publishedAt: string;
  content: null | string;
}

export interface Source {
  id: null | string;
  name: string;
}