import { expect } from 'chai'
import { resolveImport as resolve } from '../index'

import path from 'path'

const file = path.join(__dirname, 'files', 'dummy.js')

describe("externals", () => {
  it("works on just a string", () =>
    expect(resolve('bootstrap', file)).to.be.null)

  it("works on object-map", () =>
    expect(resolve('jquery', file)).to.be.null)

  it("returns null for core modules", () =>
    expect(resolve('fs', file)).to.be.null)
})
