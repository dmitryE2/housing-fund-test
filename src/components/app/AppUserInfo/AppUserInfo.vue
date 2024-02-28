<template>
    <div class="app-user-info" :class="{ 'app-user-info--empty': !user }">
        <div v-if="user" class="app-user-info__content">
            <div class="app-user-info__image">
                <UiImage :contented="true" />
            </div>
            <div class="app-user-info__user">
                <div class="app-user-info__user-name font-bold">{{ user.name }}</div>
                <div class="app-user-info__contacts">
                    <div class="app-user-info__contacts-item">
                        <div class="font-bold font-sm">email:</div>
                        <div class="color-gray font-sm">{{ user.email }}</div>
                    </div>
                    <div class="app-user-info__contacts-item">
                        <div class="font-bold font-sm">phone:</div>
                        <div class="color-gray font-sm">{{ user.phone }}</div>
                    </div>
                </div>
                <div v-if="aboutText" class="app-user-info__about">
                    <div class="app-user-info__about-header font-bold">О себе:</div>
                    <div class="app-user-info__about-text color-gray">
                        {{ aboutText }}
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="app-user-info__empty-message font-sm color-gray">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import UiImage from '@/components/ui/UiImage/UiImage.vue'

export default {
    components: {
        UiImage,
    },

    computed: {
        ...mapGetters({
            user: 'users/activeUser',
        }),
        aboutText() {
            return this.user?.company?.catchPhrase || ''
        },
    },
}
</script>

<style scoped lang="scss">
.app-user-info {
    $gap: 62px;
    $userWidth: 439px;

    flex-grow: 1;
    padding: 30px 30px 30px 20px;

    &--empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    &__content {
        display: flex;
        gap: $gap;
    }

    &__image {
        max-width: 424px;
        min-width: 424px;
        width: 100%;
    }

    &__contacts {
        margin-top: 10px;
    }

    &__contacts-item {
        display: flex;
        gap: 10px;
        line-height: 19px;

        &:not(:last-of-type) {
            margin-bottom: 10px;
        }
    }

    &__about {
        margin-top: 20px;
    }

    &__about-header {
        margin-bottom: 25px;
    }

    &__about-text {
        line-height: 17px;
    }
}
</style>