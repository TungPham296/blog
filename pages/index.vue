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

import ProjectHeader from "~/components/web/homes/ProjectHeader.vue";
import HotWrapper from "~/components/web/homes/HotWarpper.vue";
import Wave from "~/components/web/homes/Wave.vue";
import ContentWrapper from "~/components/web/homes/ContentWrapper.vue";
import PopularTags from "~/components/web/homes/PopularTags.vue";

setPageLayout('web');

</script>
