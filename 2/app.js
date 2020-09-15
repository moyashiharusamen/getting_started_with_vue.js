var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWidthDelimiter(val) {
            if(!val) return;

            return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    }
});

vm.$watch(() => {
    return this.items[0].quantity
}, (quantity) => {
    console.log(quantity);
})