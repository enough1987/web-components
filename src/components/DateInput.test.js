import DateInput from './DateInput.js'

customElements.define('test-component', DateInput)

test('DateInput in JSDOM', () => {
    document.body.innerHTML = `<h1>Custom element test</h1> <test-component></test-component>`
    expect(document.body.innerHTML).toContain('<h1>Custom element test</h1> <test-component></test-component>')
})