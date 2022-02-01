import {ImageModel} from '@model/image/image.model';


describe('ImageModel', () => {
  it('create without data', () => {
    const dataModel = new ImageModel({});
    expect(dataModel.name).toBe('');
  });
});
