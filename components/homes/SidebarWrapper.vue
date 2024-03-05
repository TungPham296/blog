<template>
    <div id="sidebar-wrapper" class="position-relative overflow-visible box-border min-h-[1px]">
        <div class="theiaStickySidebar pt-[0px] pb-[1px] position-static transform-none">
            <div class="sidebar section" id="social-widget">
                <SocialPlugin/>
            </div>
            <div class="sidebar common-widget section">
                <Subscribe/>
                <MostPopular/>
                <Facebook/>
                <Tags/>
                <Categories/>
            </div>
        </div>
    </div>
</template>
<script setup>

import SocialPlugin from "~/components/homes/SocialPlugin.vue";
import Subscribe from "~/components/homes/Subscribe.vue";
import MostPopular from "~/components/homes/MostPopular.vue";
import Facebook from "~/components/homes/Facebook.vue";
import Tags from "~/components/homes/Tags.vue";
import Categories from "~/components/homes/Categories.vue";
</script>