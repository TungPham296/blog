<template>
    <div id="hot-wrapper">
        <div class="row container section" id="hot-section" name="Hot Posts">
            <div class="widget PopularPosts" data-version="2" id="PopularPosts1">
                <div class="widget-content">
                    <ul class="hot-posts multiple">
                        <li class="hot-item" v-for="popularPost in data">
                            <PopularPostItem
                                :redirect-link="popularPost.image"
                                :image-title="popularPost.title"
                                :image-link="popularPost.image"
                                :tag="popularPost.category"
                                :title="popularPost.title"
                                auth="Sora Blogging Tips"
                                auth-link="https://www.blogger.com/profile/07873960646497749283"
                                date="March 18, 2016"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PopularPostItem from "~/components/homes/PopularPostItem.vue";

const {data} = await useFetch('https://fakestoreapi.com/products?limit=4');
</script>
