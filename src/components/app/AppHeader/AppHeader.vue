<template>
    <header class="app-header">
        <AppContainer class="app-header__container">
            <div class="app-header__logo">
                <UiLogo />
            </div>
            <div class="app-header__action-block">
                <div class="app-header__user-name">Пользователь</div>
            </div>
        </AppContainer>
    </header>
</template>

<script>
import AppContainer from '@/components/app/AppContainer/AppContainer.vue'
import UiLogo from '@/components/ui/UiLogo/UiLogo.vue'

export default {
    components: {
        AppContainer,
        UiLogo,
    },
}
</script>

<style scoped lang="scss">
.app-header {
    padding-top: 50px;
    padding-bottom: 26px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>