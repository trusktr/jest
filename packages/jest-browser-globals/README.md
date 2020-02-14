
# jest-browser-globals

Lets you run [Jest] in a real browser. Works with [Mocha], which is expected to
be in the global scope first.

Makes the following available:

- [expect](https://jestjs.io/docs/en/expect)
- `jest.fn` - [mock functions](https://jestjs.io/docs/en/mock-function-api)
- `test.each` - one of the few [globals](https://jestjs.io/docs/en/api) that
  Mocha doesn't define


## Installation

Run `npm install --save-dev jest-browser-globals`

In a test runner like Karma, include the built file in the global scope:

```js
// karma.config.js

module.exports = {
  frameworks: [ 'mocha' ],
  files: [
    './node_modules/jest-browser-globals/build-es5/index.js'
    // other test files...
  ]
}
```

To run it in an HTML file, do something like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8' />
    <link href='https://cdn.jsdelivr.net/npm/mocha@7.0.1/mocha.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/mocha@7.0.1/mocha.js'></script>
    <script>mocha.setup('bdd')</script>
    <script src='./node_modules/jest-browser-globals/build-es5/index.js'></script>
    <script>

      describe('cool thing', function() {
        test('that is works', function() {
          expect(5).toBe(6);
        });
      });

    </script>
  </head>
  <body>
    <div id='mocha'></div>
    <script>mocha.run()</script>
  </body>
</html>
```


# Fork Info

This package has been created from a fork of the [Jest Project]. It aggregates
the `expect`, `jest-mock`, and `jest-each` packages, attaches them to the
`window`, and does various other things to ensure that Jest runs similarly to
how it runs in Node. It also strips out lots of dependencies that only make
sense in a Node environment, resulting in a slimmer build.


[Jest]: https://jestjs.io/
[Mocha]: https://mochajs.org/
[Jest Project]: https://github.com/facebook/jest
