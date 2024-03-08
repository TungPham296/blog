<template>
    <div>
        <AppHeader/>
        <slot/>
        <AppFooter/>
    </div>
</template>

<script setup>
import AppHeader from "~/components/web/layouts/AppHeader.vue";
import AppFooter from "~/components/web/layouts/AppFooter.vue";


useHead({
    title: 'web',
    link: [
        {rel: 'icon', href: 'https://wavy-way2themes.blogspot.com/favicon.ico'},
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'},
    ],
    meta: [
        {name: "Content-Type", content: "text/html; charset=UTF-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {name: "description", content: ""},
        {content: 'website', property: 'og:type'},
        {content: 'Wavy', property: 'og:title'},
        {content: 'https://wavy-way2themes.blogspot.com/', property: 'og:rrl'},
        {content: '', property: 'og:description'},
        {content: 'Blog', property: 'og:site_name'},
    ],
    script: [],
    style: [],
    noscript: [],
    bodyAttrs: {
        class: 'app'
    },
});
</script>
<style>
@import "/assets/main.css";
@import "/assets/web/css/template.css";
</style>