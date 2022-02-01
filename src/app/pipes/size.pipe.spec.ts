import {SizePipe} from './size.pipe';

describe('SizePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new SizePipe();

  it('check kilobyte', () => {
    expect(pipe.transform(1024)).toBe('1 KB');
  });

});
