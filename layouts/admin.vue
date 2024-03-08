<template>
    <!--  Body Wrapper -->
    <div class="page-wrapper !w-full" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
         data-sidebartype="full"
         data-sidebar-position="fixed" data-header-position="fixed">
        <!-- Sidebar Start -->
        <LeftSidebar/>
        <!--  Sidebar End -->
        <!--  Main wrapper -->
        <div class="body-wrapper">
            <!--  Header Start -->
            <Header/>
            <!--  Header End -->
            <slot/>
        </div>
    </div>
</template>
<script setup>
import Header from "~/components/admin/Header.vue";
import LeftSidebar from "~/components/admin/LeftSidebar.vue";
import * as bootstrap from '/assets/admin/libs/bootstrap/dist/js/bootstrap.bundle.min.js';

useHead({
    title: 'Modernize Free',
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
    link: [
        {rel: "shortcut icon", href: "/assets/admin/images/logos/favicon.png"},
    ],
    style: [],
    noscript: [],
    bodyAttrs: {
        class: 'app'
    },
});
</script>
<style>
@import "assets/admin/css/styles.min.css";
</style>