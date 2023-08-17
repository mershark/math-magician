import calculate from '../../logic/calculate';

describe('calculate function', () => {
  it('should reset the calculator state for "AC" button', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(initialState, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle the "." button correctly for "next"', () => {
    const initialState = {
      total: null,
      next: '12',
      operation: null,
    };
    const result = calculate(initialState, '.');
    expect(result).toEqual({
      total: null,
      next: '12.',
      operation: null,
    });
  });

  it('should handle the "=" button correctly for addition', () => {
    const initialState = {
      total: '5',
      next: '7',
      operation: '+',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });
});
