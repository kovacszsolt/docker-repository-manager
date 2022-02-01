import {Component, OnInit} from '@angular/core';
import {RemoteService} from '@service/remote/remote.service';
import {ImageModel} from '@model/image/image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class AppImageListComponent implements OnInit {
  imageList: ImageModel[] = []
  loading = true;

  displayedColumns: string[] = ['name'];

  constructor(
    private remoteService: RemoteService) {
  }


  ngOnInit(): void {
    this.remoteService.imageListGet().subscribe((response) => {
      this.imageList = response;
      this.loading = false;
    });
  }

}
