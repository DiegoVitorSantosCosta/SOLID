import { Observable } from "rxjs";

export interface IArticleService {
  loadArticleById(id: number): Observable<{ text: string, id: number }>;
}
