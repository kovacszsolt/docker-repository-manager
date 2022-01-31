import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConfigInterface} from '@interface/config.interface';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {


  public config: ConfigInterface = {
    name: '', url: {
      base: '',
      catalog: '',
      tagList: '',
      tagInfo: '',
      tagInfoLayers: '',
    }
  }

  constructor(
    private http: HttpClient
  ) {
  }


  readConfig(): Observable<ConfigInterface> {
    return this.http.get<ConfigInterface>(environment.config).pipe(
      map((response) => {
          this.config = response;
          return response;
        }
      ))
  }

}
