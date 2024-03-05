<template>
    <div class="hot-item-inner">
        <div class="post-image-wrap">
            <a class="post-image-link" :href="redirectLink">
                <img class="post-thumb lazy-yard" :alt="imageTitle" :src="imageLink">
            </a>
        </div>
        <div class="post-info">
            <div class="post-info-wrapper">
                <span class="post-tag">{{ tag }}</span>
                <h2 class="post-title">
                    <a :href="redirectLink">{{ title }}</a>
                </h2>
                <div class="post-meta">
                    <span class="post-author">
                        <a :href="authLink" target="_blank">{{ auth }}</a>
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