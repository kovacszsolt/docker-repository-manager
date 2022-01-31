import {ImageTagModel} from '@model/image-tag/image-tag.model';


describe('ImageTagModel', () => {
  it('create without data', () => {
    const dataModel = new ImageTagModel({});
    expect(dataModel.name).toBe('');

  });
});
