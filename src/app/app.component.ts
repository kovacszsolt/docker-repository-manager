import {Component, OnInit} from '@angular/core';
import {ConfigService} from '@service/config/config.service';
import {ConfigInterface} from '@interface/config.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  loading = true;
  error = false;
  config: ConfigInterface = {
    name: '', url: {
      base: '',
      catalog: '',
      tagList: '',
      tagInfo: '',
      tagInfoLayers: '',
    }
  }

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.readConfig().subscribe((config) => {
      this.config = config;
      this.loading = false;
    }, _ => {
      this.error = true;
      this.loading = false;
    });
  }

}
