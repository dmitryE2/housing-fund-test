<template>
    <div class="ui-user-card shadow-lg" :class="{ 'ui-user-card--active': isActive }" :style="`--imageWidth: ${imageWidth}`"
        @click="handleClick">
        <div class="ui-user-card__image">
            <UiImage :width="parseInt(imageWidth, 10)" :aspect-ratio="1" />
        </div>
        <div class="ui-user-card__info">
            <div class="ui-user-card__name font-bold font-sm" :title="name">
                {{ name }}
            </div>
            <div class="ui-user-card__email font-sm" :title="email">
                <a class="color-gray ui-user-card__email-link" :href="`mailto:${email}`" @click.stop>{{ email }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import UiImage from '@/components/ui/UiImage/UiImage.vue'

export default {
    components: {
        UiImage,
    },

    props: {
        address: {
            type: Object,
            default: null,
        },
        company: {
            type: Object,
            default: null,
        },
        email: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            default: '',
        },
        username: {
            type: String,
            default: '',
        },
        website: {
            type: String,
            default: '',
        },
        id: {
            type: Number,
            default: NaN,
        },
        activeId: {
            type: Number,
            default: NaN,
        },
    },

    data() {
        return {
            imageWidth: '70px',
        }
    },

    emits: ['click'],

    computed: {
        isActive() {
            return this.id === this.activeId
        },
    },

    methods: {
        handleClick() {
            this.$emit('click', { id: this.id })
        },
    },
}
</script>

<style scoped lang="scss">
.ui-user-card {
    display: flex;
    align-items: stretch;
    border: 1px solid $border-color-gray-2;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 180ms ease-in;

    &:hover {
        box-shadow: 0 0 0 transparent;
    }

    &--active {
        cursor: default;

        &:hover {
            box-shadow: $shadow-lg;
        }
    }

    &__image {
        border-right: 1px solid $border-color-gray-2;
    }

    &__info {
        padding: 0 15px;
        width: calc(100% - var(--imageWidth));
        transition: 180ms ease-in;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &--active &__info {
        background-color: $border-color-gray-2;
    }

    &__email,
    &__name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__email-link {
        text-decoration: none;
    }
}
</style>