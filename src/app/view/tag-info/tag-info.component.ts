import {Component, OnInit} from '@angular/core';
import {RemoteService} from '@service/remote/remote.service';
import {ActivatedRoute, Router} from '@angular/router';
import {forkJoin} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AppYesNoComponent} from '../yes-no/yes-no.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ImageTagModel} from '@model/image-tag/image-tag.model';

@Component({
  selector: 'app-tag-info',
  templateUrl: './tag-info.component.html',
  styleUrls: ['./tag-info.component.scss'],
})
export class AppTagInfoComponent implements OnInit {
  imageName: string = '';
  tagName: string = '';
  history: ImageTagModel = new ImageTagModel({});
  isLoading: boolean = true;
  hashCode = '';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private remoteService: RemoteService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.imageName = this.activatedRoute.snapshot.paramMap.get('imageName') ? this.activatedRoute.snapshot.paramMap.get('imageName') : '';
    // @ts-ignore
    this.tagName = this.activatedRoute.snapshot.paramMap.get('tagName') ? this.activatedRoute.snapshot.paramMap.get('tagName') : '';
    forkJoin([
      this.remoteService.imageTagInfoGet(this.imageName, this.tagName),
      this.remoteService.imageTagInfoLayersGet(this.imageName, this.tagName)
    ]).subscribe(([infoData, layersData]) => {
      const history = infoData.history.map(history => {
        return JSON.parse(history.v1Compatibility);
      })
      this.hashCode = layersData.headers.get('Docker-Content-Digest');
      const layerData = layersData.body;
      const size = layerData.layers.reduce((sum: number, current: any) => sum + current.size, 0);

      this.history = new ImageTagModel(history[0]);
      this.history.size = size;
      this.isLoading = false;
    });
  }

  delete(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AppYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.remoteService.imageDelete(this.imageName, this.hashCode).subscribe(() => {
            this.snackBar.open('Delete Successful');
           this.router.navigate(['/', this.imageName]);

          }, _ => {
            this.snackBar.open('Delete Successful');
         this.router.navigate(['/', this.imageName]);
          }
        );
      }
    });
  }
}
