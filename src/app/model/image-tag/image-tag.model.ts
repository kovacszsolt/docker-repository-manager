import {ImageTagInterface} from '@interface/image-tag.interface';

export class ImageTagModel implements ImageTagInterface {
  architecture: string = '';
  created: string = '';
  id: string = '';
  os: string = '';
  name: string = '';
  size: number = 0;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
