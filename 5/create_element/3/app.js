new Vue({
    el: '#app',
    data() {
        return {
            counter: 0
        }
    },
    render(createElement) {
        return createElement(
            'div',
            [
                createElement(
                    'button',
                    {
                        on: {
                            click: () => this.counter += 1
                        }
                    },
                    'クリックでカウントアップ'
                ),
                createElement(
                    'p',
                    [
                        'クリックされた回数：',
                        createElement(
                            'b',
                            this.counter + ' 回'
                        )
                    ]
                )
            ]
        )
    }
})