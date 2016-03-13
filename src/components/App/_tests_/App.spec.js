import chai from 'chai'
let expect = chai.expect
import React from 'react'
import sd from 'skin-deep'
import sinon from 'sinon'
import proxyquire from 'proxyquire'
const { App } = proxyquire('../App', {
  'react-css-modules': sinon.stub().returns(sinon.spy()),
  './App.css': {}
})

describe('App', () => {
  var tree, vdom
  let win

  beforeEach(() => {
    win = global.window

    global.window = {
      location: {
        pathname: '/'
      }
    }

    tree = sd.shallowRender(
      <App />
    )

    vdom = tree.getRenderOutput()
  })

  afterEach(() => {
    global.window = win
  })

  it('should render', () => {
    expect(vdom.type).to.eql('div')
  })
})
