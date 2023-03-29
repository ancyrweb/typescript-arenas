import { obj } from '../index';
import { Equal, Expect } from './test-helpers';

type ExpectedObj = {
  aNumber: number;
  aString: string;
  aBoolean: boolean;
  aNull: null;
  anUndefined: undefined;
};
describe('Scalar Types', () => {
  it('should be true', () => {
    type Assertion1 = Expect<Equal<ExpectedObj, typeof obj>>;
    expect(true).toBe(true);
  });
});
