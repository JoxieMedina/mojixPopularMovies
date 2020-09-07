import { ToTmdbURLPipe } from './to-tmdb-url.pipe';

describe('ToTmdbURLPipe', () => {
  it('create an instance', () => {
    const pipe = new ToTmdbURLPipe();
    expect(pipe).toBeTruthy();
  });
});
