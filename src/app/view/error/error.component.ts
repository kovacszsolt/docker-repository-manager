import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from '@service/config/config.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class AppErrorComponent implements OnInit {
  errorMessage: string = ''
  errorMessage2: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    const errorCode = this.activatedRoute.snapshot.paramMap.get('code');
    switch (errorCode) {
      case 'no_repository':
        this.errorMessage = 'No repository found';
        this.errorMessage2 = 'Repository URL: ' + this.config.config.url;
        break;
    }
  }
}
