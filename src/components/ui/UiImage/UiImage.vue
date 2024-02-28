<template>
    <div class="ui-image" :style="styleWrapper" :class="{ 'ui-image--contented': contented }">
        <img :src="imageSrc" :srcset="srcset" :style="styleImage" :loading="loading" :alt="imageAlt" @load="handleLoad"
            @error="handleError">
    </div>
</template>
<script>
import notFoundImageUrl from './assets/not-found-image.svg?file'
export default {
    props: {
        alt: {
            type: String,
            default: '',
        },
        src: {
            type: String,
            default: '',
        },
        srcset: {
            type: String,
            default: '',
        },
        loading: {
            type: String,
            default: 'auto',
        },
        position: {
            type: String,
            default: 'center',
        },
        fit: {
            type: String,
            default: 'cover',
        },
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
        aspectRatio: {
            type: Number,
            default: 0,
        },
        contented: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            isLoading: true,
            isFailed: false,
        }
    },

    computed: {
        isImageSrc() {
            return Boolean(this.src) || Boolean(this.srcset)
        },
        imageAlt() {
            return this.isImageSrc && !this.isFailed ? this.alt : 'Изображение отсутствует'
        },
        imageSrc() {
            return this.isImageSrc && !this.isFailed ? this.src : notFoundImageUrl
        },
        styleWrapper() {
            const width = this.width ? `${this.width}px` : '100%'
            const height = this.height ? `${this.height}px` : '100%'
            const gap = `${100 / this.aspectRatio}%`

            if (this.aspectRatio) {
                return { width: width, paddingTop: gap }
            } else {
                return { width: width, height: height }
            }
        },
        styleImage() {
            return { objectFit: `${this.fit}`, objectPosition: `${this.position}` }
        },
    },

    methods: {
        handleLoad() {
            this.isLoading = true
        },
        handleError() {
            this.isLoading = true
            this.isFailed = true
        },
    },
}
</script>

<style scoped lang="scss">
.ui-image {
    overflow: hidden;
    position: relative;
    max-height: 100%;
    max-width: 100%;

    img {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &--contented {
        padding: 0;

        img {
            margin: 0 auto;
            height: 100%;
            width: 100%;
            position: static;
            top: 0;
            left: 0;
        }
    }
}
</style>