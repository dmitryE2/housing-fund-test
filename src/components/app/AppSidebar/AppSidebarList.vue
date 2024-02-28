<template>
    <div class="app-sidebar-list" :style="{ maxHeight: `${listHeight}px` }">
        <div v-if="isList" class="app-sidebar-list__items">
            <LazyComponent v-for="item in list" :key="item.id">
                <UiUserCard :activeId="activeId" v-bind="item" @click="handleUserChoice" />
            </LazyComponent>
        </div>
        <div v-else class="app-sidebar-list__empty-message color-gray font-sm">
            {{ emptyMessage }}
        </div>
    </div>
</template>

<script>
import UiUserCard from '@/components/ui/UiUserCard/UiUserCard.vue'
import LazyComponent from "v-lazy-component/vue2"

export default {
    components: {
        UiUserCard,
        LazyComponent,
    },

    props: {
        list: {
            type: Array,
            default: null,
        },
        listHeight: {
            type: Number,
            default: 0,
        },
        activeId: {
            type: Number,
            default: NaN,
        }
    },

    emits: ['onChoice'],

    computed: {
        isList() {
            return this.list && this.list?.length
        },
        emptyMessage() {
            return this.list ? 'ничего не найдено' : 'начните поиск'
        },
    },

    methods: {
        handleUserChoice(userCardData) {
            this.$emit('onChoice', userCardData)
        }
    }
}
</script>

<style scoped lang="scss">
.app-sidebar-list {
    &__items {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
}
</style>