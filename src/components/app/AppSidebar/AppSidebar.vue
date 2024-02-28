<template>
    <div class="app-sidebar" ref="sidebar" :style="`--gapY: ${gapY}`">
        <div class="app-sidebar__header" ref="header">
            <div class="app-sidebar__title font-bold">
                Поиск сотрудников
            </div>
            <div class="app-sidebar__input-field">
                <UiInput v-model="searchQuery" placeholder="Введите Id или имя" @input="debounceUserSearch" />
            </div>
            <div class="app-sidebar__title app-sidebar__result-title font-bold">
                Результаты
            </div>
        </div>
        <div class="app-sidebar__result">
            <div v-if="isLoading" class="app-sidebar__loader">
                <UiLoader />
            </div>
            <div v-else-if="errorMessage" class="app-sidebar__error color-red font-sm">
                {{ errorMessage }}
            </div>
            <div v-else class="app-sidebar__result-list custom-sroll">
                <AppSidebarList :list="usersList" :activeId="activeUserId" :listHeight="listHeight"
                    @onChoice="setActiveUser" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { isNumber } from '@/utils/general'
import { debounce } from '@/utils/debounce'

import UiInput from '@/components/ui/UiInput/UiInput.vue'
import UiLoader from '@/components/ui/UiLoader/UiLoader.vue'
import AppSidebarList from '@/components/app/AppSidebar/AppSidebarList.vue'

export default {
    components: {
        UiInput,
        AppSidebarList,
        UiLoader,
    },

    data() {
        return {
            searchQuery: '',
            gapY: '27px',
            listHeight: 0,
        }
    },

    computed: {
        ...mapGetters({
            usersList: 'users/usersList',
            isLoading: 'users/isLoading',
            errorMessage: 'users/errorMessage',
            activeUserId: 'users/activeUserId',
        }),

        resultHeigth() {

        },
    },

    methods: {
        ...mapActions({
            getUsers: 'users/getUsers',
            setActiveUser: 'users/setActiveUser',
            resetUsersData: 'users/resetData',
        }),
        getSearchData() {
            const searchChunks = this.searchQuery.split(',')

            const filteredChunks = searchChunks.filter(chunk => Boolean(chunk.trim()))

            const searchData = filteredChunks.map(chunk => {
                const trimChunk = chunk.trim()
                const isId = isNumber(trimChunk)
                return [isId ? 'id' : 'name', trimChunk]
            })

            return searchData
        },
        async handleUserSearch() {
            const searchData = this.getSearchData()
            if (!searchData.length) {
                this.resetUsersData()
                return
            }

            await this.getUsers({ data: searchData })
            if (this.activeUserId) this.setActiveUser({ id: this.activeUserId })
        },
        debounceUserSearch: debounce(function () {
            this.handleUserSearch()
        }, 500),
        handleUserChoice(userData) {
            this.setActiveUser(userData)
        },
        setListHeight() {
            const barHeight = this.$refs.sidebar.clientHeight
            const headerHeight = this.$refs.header.clientHeight
            const headerGap = parseInt(this.gapY, 10) * 2

            this.listHeight = barHeight - headerHeight - headerGap
        },
    },

    mounted() {
        this.setListHeight()
    }
}
</script>

<style scoped lang="scss">
.app-sidebar {
    padding: var(--gapY) 0 var(--gapY);
    border-right: 1px solid $border-color-gray-2;
    display: flex;
    flex-direction: column;
    max-width: 291px;

    &__header,
    &__error {
        padding: 0 30px 0 20px;
    }

    &__input-field {
        margin-top: 14px;
    }

    &__loader {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    &__result-list {
        overflow: hidden;
        overflow-y: auto;
        padding: 0 15px 0 20px;
        margin-right: 15px;
    }

    &__result-title {
        margin-top: 22px;
        margin-bottom: 18px;
    }
}
</style>