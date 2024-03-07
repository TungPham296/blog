<template>
    <div class="row container" id="content-wrapper" style="transform: none">
        <!-- Main Wrapper -->
        <MainWrapper/>
        <!-- Sidebar Wrapper -->
        <SidebarWrapper/>
    </div>
</template>
<script setup>

import MainWrapper from "~/components/web/homes/MainWrapper.vue";
import SidebarWrapper from "~/components/web/homes/SidebarWrapper.vue";
</script>
<style scoped>
.videoWrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
}

.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>