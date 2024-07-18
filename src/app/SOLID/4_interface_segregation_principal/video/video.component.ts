import { Component, inject } from '@angular/core';
import { VideoOperation } from '../interfaces/VideoOperaation';
import { IVideoService } from '../interfaces/VideoService';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements VideoOperation {

  videoS: IVideoService = inject(VideoService);
  video!: { blob: Blob, id: number };
  loadVideo(id: number): void {
    this.videoS.loadVideosById(id)
      .subscribe({
        next: (res) => {
          this.video = res
        }
      })
  }
  displayVideo(): Blob {
    return this.video.blob;
  }

}
