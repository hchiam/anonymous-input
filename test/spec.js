/* eslint-disable no-invalid-this */

const spectron = require('spectron');
const Application = spectron.Application;
const assert = require('assert');
// Require Electron from binaries included in node_modules:
const electronPath = require('electron');
const path = require('path');

describe('Application launch', function() {
  this.timeout(10000);

  this.beforeAll(function() {
    this.app = new Application({
      // Your electron path can be any binary
      // i.e for OSX an example path could be
      // '/Applications/MyApp.app/Contents/MacOS/MyApp'
      // But for the sake of the example we fetch it from our node_modules.
      path: electronPath,

      // Assuming you have the following directory structure

      //  |__ my project
      //     |__ ...
      //     |__ main.js
      //     |__ package.json
      //     |__ index.html
      //     |__ ...
      //     |__ test
      //        |__ spec.js  <- You are here! ~ Well you should be.

      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [path.join(__dirname, '..')],
    });
    return this.app.start();
  });

  this.afterAll(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('works', async function() {
    let input = null;
    let text = null;
    let exists = null;
    const c = this.app.client;
    // set/get input value: need async (see above) and await
    await c.setValue('#input', 'test');
    input = await c.getValue('#input');
    assert.equal(input, 'test');
    // click: need async (see above) and await
    await c.click('#input-button');

    await c.setValue('#input', 'a');
    input = await c.getValue('#input');
    assert.equal(input, 'a');
    await c.click('#input-button');

    await c.setValue('#input', 'b');
    input = await c.getValue('#input');
    assert.equal(input, 'b');
    await c.click('#input-button');

    await c.setValue('#input', 'c');
    input = await c.getValue('#input');
    assert.equal(input, 'c');
    await c.click('#input-button');

    await c.setValue('#input', 'asdf');
    input = await c.getValue('#input');
    assert.equal(input, 'asdf');

    await c.click('#get-data');
    //  getText for <p>, getValue for <input>
    text = await c.getText('#password-prompt');
    assert.equal(text, 'prompt');
    await c.setValue('#password', 'answer');

    // exists: need async (see above) and await
    // (in this case should really be testing CSS visibility,
    // but this is a good example test)
    exists = await c.isExisting('#output');
    assert.equal(exists, true);
    exists = await c.isExisting('#lock');
    assert.equal(exists, true);
    exists = await c.isExisting('#clear-data');
    assert.equal(exists, true);

    await c.click('#clear-data');
    text = await c.getText('#output');
    assert.equal(text, '');

    await c.click('#lock');
  });
});
