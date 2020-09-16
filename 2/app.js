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
        numberWithDelimiter(val) {
            if(!val) return '0';

            return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice() {
            return this.items.reduce((sum, item) =>{
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax() {
            // 算出プロパティに依存した算出プロパティも定義できる
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy() {
            return this.totalPrice >= 1000
        }
    }
});

vm.$watch(() => {
    return this.items[0].quantity
}, (quantity) => {
    console.log(quantity);
})