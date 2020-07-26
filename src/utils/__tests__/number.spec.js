import { formatOrdinalnumber } from '../number';

describe('Format ordinal number', () => {
  test('Should return ordinal number if number < 10', async () => {
    expect(formatOrdinalnumber(1)).toEqual('01');
    expect(formatOrdinalnumber(2)).toEqual('02');
  });
  test('Should return string type', async () => {
    expect(typeof formatOrdinalnumber(10)).toEqual('string');
    expect(formatOrdinalnumber(20)).toEqual('20');
  });
});
