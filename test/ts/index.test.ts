import { greet } from '../../src/ts';

describe('greet', () => {
  it('should return a greet message', () => {
    expect(greet()).toBe('Hello, world');
  });
});
