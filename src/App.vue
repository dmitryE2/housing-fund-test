<template>
    <div class="app-wrapper">
        <AppHeader />
        <main>
            <AppContainer>
                <AppSidebarWrapper>
                    <AppSidebar />
                    <AppUserInfo />
                </AppSidebarWrapper>
            </AppContainer>
        </main>
    </div>
</template>
<script>
import AppHeader from '@/components/app/AppHeader/AppHeader.vue'
import AppSidebar from '@/components/app/AppSidebar/AppSidebar.vue'
import AppSidebarWrapper from '@/components/app/AppSidebar/AppSidebarWrapper.vue'
import AppUserInfo from '@/components/app/AppUserInfo/AppUserInfo.vue'
import AppContainer from '@/components/app/AppContainer/AppContainer.vue'

export default {
    components: {
        AppHeader,
        AppSidebar,
        AppSidebarWrapper,
        AppUserInfo,
        AppContainer,
    },
}
</script>

<style scoped lang="scss">
.app-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>