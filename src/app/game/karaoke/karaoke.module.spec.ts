import { KaraokeModule } from './karaoke.module';

describe('KaraokeModule', () => {
  let karaokeModule: KaraokeModule;

  beforeEach(() => {
    karaokeModule = new KaraokeModule();
  });

  it('should create an instance', () => {
    expect(karaokeModule).toBeTruthy();
  });
});
