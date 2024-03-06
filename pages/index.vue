<template>
    <ProjectHeader></ProjectHeader>
    <div class="clearfix"></div>
    <HotWrapper></HotWrapper>
    <div class="clearfix"></div>
    <Wave/>
    <div class="clearfix"></div>
    <ContentWrapper/>
    <div class="clearfix"></div>
    <PopularTags/>
</template>
<script setup>

import ProjectHeader from "~/components/homes/ProjectHeader.vue";
import HotWrapper from "~/components/homes/HotWarpper.vue";
import Wave from "~/components/homes/Wave.vue";
import ContentWrapper from "~/components/homes/ContentWrapper.vue";
import PopularTags from "~/components/homes/PopularTags.vue";
</script>
