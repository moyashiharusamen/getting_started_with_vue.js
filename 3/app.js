// new Vue({
//     el: '#fruits-list',
//     components: {
//         'fruits-list-title': {
//             template: '<h1>フルーツ一覧</h1>'
//         }
//     }
// })

Vue.component('fruits-list-title', {
    template: '#fruits-list-title'
})

new Vue({
    el: '#fruits-list'
})