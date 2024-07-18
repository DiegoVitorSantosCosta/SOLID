import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IVideoService } from "../interfaces/VideoService";

@Injectable({ providedIn: "root" })
export class VideoService implements IVideoService {
  loadVideosById = (id: number): Observable<{ blob: Blob, id: number }> => {
    return of({ blob: new Blob(), id: 2 })
  }
}
