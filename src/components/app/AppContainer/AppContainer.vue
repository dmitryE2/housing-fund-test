<template>
    <div class="app-container">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.app-container {
    $gap-lg: 50px;
    $width-lg: 1266px;

    max-width: calc($width-lg + 2 * $gap-lg);
    padding: 0 $gap-lg;
    margin: 0 auto;
    width: 100%;
}
</style>