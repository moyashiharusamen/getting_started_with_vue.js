const MyButton = {
    data() {
        return {
            textLabel: 'child'
        }
    },
    template: `
        <div>
            <slot>OK</slot>
        </div>
    `
};

new Vue({
    el: '#app',
    data() {
        return {
            textLabel: 'parent'
        }
    },
    components: {
        MyButton: MyButton
    }
});