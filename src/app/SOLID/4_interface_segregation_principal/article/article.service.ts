import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IArticleService } from "../interfaces/ArticleService";

@Injectable({ providedIn: "root" })
export class ArticleService implements IArticleService {

  loadArticleById(id: number): Observable<{ text: string; id: number; }> {
    return of({ text: 'artigo carregado com sucesso', id: 2 });
  }
}
