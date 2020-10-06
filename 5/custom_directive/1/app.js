Vue.directive('fallback-image', {
    bind(el, binding) {
        console.log('bind', binding);

        el.addEventListener('error', () => {
            el.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image';
        });
    },
    update(el, binding) {
        console.log('update', binding);
    }
})

const vm = new Vue({
    el: '#app',
    data() {
        return {
            altText: 'logo'
        }
    }
})