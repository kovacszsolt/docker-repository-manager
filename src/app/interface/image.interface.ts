import {ImageTagInterface} from './image-tag.interface';

export interface ImageInterface {
  name: string;
  tags?: ImageTagInterface[];
}
