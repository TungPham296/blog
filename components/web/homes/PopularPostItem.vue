<template>
    <div class="hot-item-inner">
        <div class="post-image-wrap">
            <NuxtLink :to="redirectLink" class="post-image-link">
                <img class="post-thumb lazy-yard" :alt="imageTitle" :src="imageLink">
            </NuxtLink>
        </div>
        <div class="post-info">
            <div class="post-info-wrapper">
                <span class="post-tag">{{ tag }}</span>
                <h2 class="post-title">
                    <NuxtLink :to="redirectLink">{{ title }}</NuxtLink>
                </h2>
                <div class="post-meta">
                    <span class="post-author">
                        <NuxtLink :to="authLink" target="_blank">{{ auth }}</NuxtLink>
                    </span>
                    <span class="post-date published">{{ date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    redirectLink: {
        type: String,
        default: '#',
    },
    imageTitle: {
        type: String,
        default: '',
    },
    imageLink: {
        type: String,
        default: '',
    },
    tag: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    date: {
        type: String,
        default: '',
    },
    auth: {
        type: String,
        default: '',
    },
    authLink: {
        type: String,
        default: '',
    },

});
</script>