<template>
    <div class="row container" id="content-wrapper" style="transform: none">
        <!-- Main Wrapper -->
        <MainWrapper :id="props.id"/>
        <!-- Sidebar Wrapper -->
        <SidebarWrapper/>
    </div>
</template>
<script setup lang="ts">
import MainWrapper from "~/components/products/MainWrapper.vue";
import SidebarWrapper from "~/components/homes/SidebarWrapper.vue";

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    }
});
</script>