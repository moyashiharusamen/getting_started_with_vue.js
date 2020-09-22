// new Vue({
//     el: '#fruits-list',
//     components: {
//         'fruits-list-title': {
//             template: '<h1>フルーツ一覧</h1>'
//         }
//     }
// })

Vue.component('input-date-with-today', {
    render(createElement) {
        return createElement(
            'input',
            {
                attrs: {
                    type: 'date',
                    value: new Date().toISOString().substring(0, 10)
                }
            }
        )
    }
})

// data を関数の return で返している
Vue.component('simple-counter', {
    template: '<h1>フルーツ一覧</h1>',
    data() {
        return {
            fruits: ['りんご', 'みかん']
        }
    }
})

new Vue({ el: '#app' })