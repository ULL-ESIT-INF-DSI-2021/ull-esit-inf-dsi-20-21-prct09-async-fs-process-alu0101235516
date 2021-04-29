import 'mocha';
import {expect} from 'chai';
import {add} from '../src/prueba';

describe('EJ 9 - FILESYSTEM', () => {
  describe('Prueba del método add', () => {
    it('Se puede sumar dos numeros', () => {
      const expected = 5;
      const result = add(2, 3);
      expect(expected).to.be.equal(result);
    });
  });
});
