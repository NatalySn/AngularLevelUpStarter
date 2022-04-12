import { CurrencyNumPipe } from './currency-num.pipe';

describe('CurrencyNumPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyNumPipe();
    expect(pipe).toBeTruthy();
  });
});
