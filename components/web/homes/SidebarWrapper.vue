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

import SocialPlugin from "~/components/web/homes/SocialPlugin.vue";
import Subscribe from "~/components/web/homes/Subscribe.vue";
import MostPopular from "~/components/web/homes/MostPopular.vue";
import Facebook from "~/components/web/homes/Facebook.vue";
import Tags from "~/components/web/homes/Tags.vue";
import Categories from "~/components/web/homes/Categories.vue";
</script>