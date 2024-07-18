import { Component, inject } from '@angular/core';
import { ArticleOperations } from '../interfaces/ArticleOperation';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements ArticleOperations {

  private articleS: ArticleService = inject(ArticleService);
  articleContent!: string;
  loadArticle(id: number): void {
    this.articleS.loadArticleById(id)
      .subscribe({
        next: (article) => {
          this.articleContent = article.text
        }
      })
  }

  displayArticle(): string {
    return this.articleContent
  }

}
