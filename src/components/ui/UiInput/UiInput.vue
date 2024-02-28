<template>
    <input class="ui-input color-gray" :value="valueLocal" :type="type" :placeholder="placeholder" @input="handleInput">
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
    },

    emits: ['update:modelValue', 'input'],

    computed: {
        valueLocal: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },

    methods: {
        handleInput(inputEvent) {
            this.valueLocal = inputEvent.target.value
            this.$emit('input', inputEvent.target.value)
        },
    },
}
</script>

<style scoped lang="scss">
.ui-input {
    border-radius: 8px;
    border: 1px solid $border-color-gray;
    font-size: $font-size-sm;
    height: 49px;
    padding: 0 24px;
    transition: 180ms ease-in;
    width: 100%;

    &:focus {
        border: 1px solid $text-color-gray;
        outline: none;
    }
}
</style>