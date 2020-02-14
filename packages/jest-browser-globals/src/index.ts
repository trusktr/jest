
const expect = require('expect');
const jestMock = require('jest-mock');
import {bind as bindEach} from 'jest-each';

let win = window as any
let rootLib = {
  expect,
  jest: {
    fn: jestMock.fn.bind(jestMock)
  }
};

Object.assign(win, rootLib);

if (!win.describe) {
  throw new Error(
    'describe() not found. Cannot attach .each to describe. ' +
    'Please load a compatible library like Mocha first.'
  );
} else {

  // create jest aliased globals
  if (!win.fit) { win.fit = win.it.only; }
  if (!win.xit) { win.xit = win.it.skip; }
  if (!win.fdescribe) { win.fdescribe = win.describe.only; }
  if (!win.xdescribe) { win.xdescribe = win.describe.skip; }

  // derived from <root>/packages/jest-jasmine2/src/each.ts
  win.it.each = bindEach(win.it);
  win.fit.each = bindEach(win.fit);
  win.xit.each = bindEach(win.xit);
  win.describe.each = bindEach(
    win.describe,
    false,
  );
  win.xdescribe.each = bindEach(
    win.xdescribe,
    false,
  );
  win.fdescribe.each = bindEach(
    win.fdescribe,
    false,
  );
}

export = rootLib
