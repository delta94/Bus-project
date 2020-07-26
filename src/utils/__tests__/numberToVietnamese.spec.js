import numberToVietnamese from '../numberToVietnamese';

describe('Number to Vietnamese', () => {
  test('Should return viettnamese', async () => {
    expect(typeof numberToVietnamese(1)).toEqual('string');
    expect(numberToVietnamese(1)).toEqual('một');
    expect(numberToVietnamese(20)).toEqual('hai mươi');
    expect(numberToVietnamese(1991)).toEqual(
      'một nghìn chín trăm chín mươi mốt',
    );
    expect(numberToVietnamese(999999)).toEqual(
      'chín trăm chín mươi chín nghìn chín trăm chín mươi chín',
    );
  });
});
