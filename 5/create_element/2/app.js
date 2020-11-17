const MyButton = {
    props: ['href', 'tag'],
    render(createElement) {
        const tag = this.tag || (this.href ? 'a' : 'button')

        return createElement(tag, {
            attrs: {
                href: this.href || '#'
            }
        }, this.$slots.default)
    }
}

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(MyButton, {
            attrs: {
                href: 'https://vuejs'
            },
            props: {
                tag: 'a'
            }
        }, 'anchor')
    }
})