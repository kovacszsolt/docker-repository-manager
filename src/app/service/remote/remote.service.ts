import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RemoteImageListInterface} from '@interface/remote/remote-image-list.interface';
import {RemoteTagListInterface} from '@interface/remote/remote-tag-list.interface';
import {RemoteManifestInfoInterface} from '@interface/remote/remote-manifest-info.interface';
import {ImageModel} from '@model/image/image.model';
import {ConfigService} from '../config/config.service';


@Injectable({
  providedIn: 'root',
})
export class RemoteService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
  }

  imageListGet(): Observable<ImageModel[]> {
    return this.http.get<RemoteImageListInterface>(`${this.configService.config.url.base}${this.configService.config.url.catalog}`).pipe(
      map((response) => {
          return response.repositories.map(repository => new ImageModel({name: repository}))
        }
      ))
  }

  imageTagListGet(imageName: string): Observable<RemoteTagListInterface> {
    return this.http.get<RemoteTagListInterface>(`${this.configService.config.url.base}${imageName}${this.configService.config.url.tagList}`).pipe(
      map((response) => {
          return response;
        }
      ))
  }

  imageTagInfoGet(imageName: string, tagName: string): Observable<RemoteManifestInfoInterface> {
    return this.http.get<RemoteManifestInfoInterface>(`${this.configService.config.url.base}/${imageName}${this.configService.config.url.tagInfo}${tagName}`).pipe(
      map((response) => {
          return response;
        }
      ))
  }

  imageTagInfoLayersGet(imageName: string, tagName: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/vnd.docker.distribution.manifest.v2+json',
    });
    const httpOptions = {
      headers: headers,
      observe: 'response' as 'body',
    };
    return this.http.get<any>(`${this.configService.config.url.base}/${imageName}${this.configService.config.url.tagInfoLayers}${tagName}`, httpOptions).pipe(
      map((response) => {
          return response;
        }
      ))
  }

  imageDelete(imageName: string, hashCode: string): Observable<any> {
    return this.http.delete(`${this.configService.config.url}/${imageName}/manifests/${hashCode}`);
  }

}
