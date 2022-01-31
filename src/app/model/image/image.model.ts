import {ImageInterface} from '@interface/image.interface';
import {ImageTagModel} from '@model/image-tag/image-tag.model';

export class ImageModel implements ImageInterface {
  name: string = '';
  tags: ImageTagModel[] = [];

  constructor(data: any) {
    Object.assign(this, data);
    if (this.tags) {
      this.tags = this.tags.map(f => new ImageTagModel(f))
    }
  }

}
