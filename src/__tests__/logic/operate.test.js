import operate from '../../logic/operate';

describe('operate function', () => {
  it('should correctly perform addition', () => {
    expect(operate('2', '3', '+')).toEqual('5');
  });

  it('should correctly perform subtraction', () => {
    expect(operate('10', '5', '-')).toEqual('5');
  });

  it('should correctly perform multiplication', () => {
    expect(operate('4', '6', 'x')).toEqual('24');
  });

  it('should correctly perform division', () => {
    expect(operate('15', '3', '÷')).toEqual('5');
  });

  it('should handle division by zero gracefully and return an error message', () => {
    expect(operate('10', '0', '÷')).toEqual("Can't divide by 0.");
  });

  it('should correctly perform modulo', () => {
    expect(operate('10', '3', '%')).toEqual('1');
  });

  it('should handle modulo with divisor as zero gracefully and return an error message', () => {
    expect(operate('10', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '@')).toThrowError("Unknown operation '@'");
  });
});
