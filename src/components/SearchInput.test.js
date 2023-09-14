import SearchInput from './SearchInput.js'

customElements.define('test-component', SearchInput)

test('SearchInput in JSDOM', () => {
    document.body.innerHTML = `<h1>Custom element test</h1> <test-component></test-component>`
    expect(document.body.innerHTML).toContain('<h1>Custom element test</h1> <test-component></test-component>')
})