const assert = require('assert')
describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.index,'/Users/sunjianming/Desktop/github/webpack/mrsun_build_webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search,'/Users/sunjianming/Desktop/github/webpack/mrsun_build_webpack/test/smoke/template/src/search/index.js')
    })
})