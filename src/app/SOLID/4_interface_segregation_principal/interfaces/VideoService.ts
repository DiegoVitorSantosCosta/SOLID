import { Observable } from "rxjs";

export interface IVideoService {
  loadVideosById(id: number): Observable<{ blob: Blob, id: number }>;
}
