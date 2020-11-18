const IconShareButton = {
    template: `
        <button @click="share"><i class="fas fa-share-square"></i></button>
    `,
    data() {
        return {
            _isProcessing: false
        }
    },
    methods: {
        share() {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            // 実際はここで SNS の SDK の API を呼び出す
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    }
}

const TextShareButton = {
    template: `
        <button @click="share">{{ buttonLabel }}</button>
    `,
    data() {
        return {
            buttonLabel: 'シェアする',
            _isProcessing: false
        }
    },
    methods: {
        share() {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            // 実際はここで SNS の SDK の API を呼び出す
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    }
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
})