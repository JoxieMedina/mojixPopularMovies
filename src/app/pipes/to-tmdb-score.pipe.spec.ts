import { ToTmdbScorePipe } from './to-tmdb-score.pipe';

describe('ToTmdbScorePipe', () => {
  it('create an instance', () => {
    const pipe = new ToTmdbScorePipe();
    expect(pipe).toBeTruthy();
  });
});
