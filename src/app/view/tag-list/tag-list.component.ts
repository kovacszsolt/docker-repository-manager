import {Component, OnInit} from '@angular/core';
import {RemoteService} from '@service/remote/remote.service';
import {ActivatedRoute} from '@angular/router';
import {AppYesNoComponent} from '../yes-no/yes-no.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class AppTagListComponent implements OnInit {
  tagList: string[] = []
  imageName: string | null = '';
  displayedColumns: string[] = ['name', 'action'];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private remoteService: RemoteService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.imageName = this.activatedRoute.snapshot.paramMap.get('imageName') ? this.activatedRoute.snapshot.paramMap.get('imageName') : '';
    // @ts-ignore
    this.remoteService.imageTagListGet(this.imageName).subscribe((response) => {
      this.tagList = response.tags;
    });
  }

  deleteImage(event: any, element: any) {
    const dialogRef = this.dialog.open(AppYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // @ts-ignore
        this.remoteService.imageTagInfoLayersGet(this.imageName, element).subscribe((layersData) => {
          const hashCode = layersData.headers.get('Docker-Content-Digest');
          // @ts-ignore
          this.remoteService.imageDelete(this.imageName, hashCode).subscribe(_ => {
            this.deleteSuccessful(element);
          }, _ => {
            this.deleteSuccessful(element);
          });

        });
      }
    });
  }

  private deleteSuccessful(element: any): void {
    this.tagList = this.tagList.filter(tag => tag !== element);
    this.snackBar.open('Delete Successful');
  }
}
