<template>
    <div class="app-sidebar-wrapper shadow-lg">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.app-sidebar-wrapper {
    display: flex;
    height: 100%;
    align-items: stretch;
    border-radius: 10px;
    overflow: hidden;
}
</style>