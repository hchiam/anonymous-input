const spectron = require('spectron')
const Application = spectron.Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('Application launch', function () {
  this.timeout(10000)

  this.beforeAll(function () {
    this.app = new Application({
      // Your electron path can be any binary
      // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
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
      args: [path.join(__dirname, '..')]
    })
    return this.app.start()
  })

  this.afterAll(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('works', async function () {
    let input = null
    let text = null
    let exists = null
    // set/get input value: need async (see above) and await
    await this.app.client.setValue('#input', 'test')
    input = await this.app.client.getValue('#input')
    assert.equal(input, 'test')
    // click: need async (see above) and await
    await this.app.client.click('#input-button')

    await this.app.client.setValue('#input', 'a')
    input = await this.app.client.getValue('#input')
    assert.equal(input, 'a')
    await this.app.client.click('#input-button')

    await this.app.client.setValue('#input', 'b')
    input = await this.app.client.getValue('#input')
    assert.equal(input, 'b')
    await this.app.client.click('#input-button')

    await this.app.client.setValue('#input', 'c')
    input = await this.app.client.getValue('#input')
    assert.equal(input, 'c')
    await this.app.client.click('#input-button')

    await this.app.client.setValue('#input', 'asdf')
    input = await this.app.client.getValue('#input')
    assert.equal(input, 'asdf')

    await this.app.client.click('#get-data')
    //  getText for <p>, getValue for <input>
    text = await this.app.client.getText('#password-prompt')
    assert.equal(text, 'prompt')
    await this.app.client.setValue('#password', 'answer')

    // exists: need async (see above) and await
    // (in this case should really be testing CSS visibility, but this is a good example test)
    exists = await this.app.client.isExisting('#output')
    assert.equal(exists, true)
    exists = await this.app.client.isExisting('#lock')
    assert.equal(exists, true)
    exists = await this.app.client.isExisting('#clear-data')
    assert.equal(exists, true)

    await this.app.client.click('#clear-data')
    text = await this.app.client.getText('#output')
    assert.equal(text, '')

    await this.app.client.click('#lock')
  })
})
