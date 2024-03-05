<template>
    <div class="blog-post hentry index-post post-0">
        <div class="index-post-inside-wrap">
            <div class="post-image-wrap">
                <a class="post-image-link" :href="redirectLink">
                    <img :alt="title" class="post-thumb lazy-yard" :src="image"
                    />
                </a>
                <a class="post-tag" :href="tagLink">{{ tag }}</a>
            </div>
            <div class="post-info">
                <h2 class="post-title">
                    <a :href="redirectLink">{{ title }}</a>
                </h2>
                <div class="index-post-footer">
                    <p class="post-snippet">{{ description }}</p>
                    <div class="post-meta">
                            <span class="post-author">
                                <a :href="authLink" target="_blank">{{ auth }}</a>
                            </span>
                        <span class="post-date published">{{ date }}</span>
                    </div>
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
    title: {
        type: String,
        default: '',
    },
    tag: {
        type: String,
        default: '',
    },
    tagLink: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    description: {
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
    date: {
        type: String,
        default: '',
    },
});
</script>