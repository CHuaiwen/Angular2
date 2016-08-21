/* tslint:disable:no-unused-variable */

import {addProviders, async, inject} from '@angular/core/testing';
import {ToChineseNumberPipe} from './tochinesenumber.pipe';

describe('Pipe: Tochinesenumber', () => {
  it('create an instance', () => {
    let pipe = new ToChineseNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
