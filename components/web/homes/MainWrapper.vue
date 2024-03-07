<template>
    <div id="main-wrapper" class=" position-relative overflow-visible box-border min-h-[1px]">
        <div class="theiaStickySidebar pt-[0px] pb-[1px] position-static transform-none top-0 left-[20px]">
            <div class="main section" id="main" name="Main Posts">
                <div class="widget Blog" data-version="2" id="Blog1">
                    <div class="blog-posts hfeed container index-post-wrap">
                        <div class="grid-posts">
                            <Post
                                v-for="post in posts"
                                :title="post.title"
                                :tag="post.category"
                                :redirect-link="`/products/${post.id}`"
                                :date="post.date"
                                :auth-link="post.auth_link"
                                :auth="post.auth"
                                :description="post.description"
                                :image="post.image"
                                :tag-link="post.tag_link"
                            />
                        </div>
                    </div>
                    <div class="blog-pager container" id="blog-pager">
                        <a
                            @click="limit+=6"
                            class="blog-pager-older-link load-more"
                            data-load="https://wavy-way2themes.blogspot.com/search?updated-max=2016-03-17T00:47:00-07:00&amp;max-results=6"
                            href="javascript:;"
                            id="load-more-link"
                        >
                            Load More
                        </a>
                        <span class="loading"><span class="loader"></span></span>
                        <span class="no-more load-more"> That is All </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import Post from "~/components/web/homes/Post.vue";

let limit = ref(6);
let posts = ref([]);

const {data} = await useFetch(`https://fakestoreapi.com/products?limit=${limit.value}`);
posts.value = data.value;

watch(limit, async (value) => {
    posts.value = await $fetch(`https://fakestoreapi.com/products?limit=${value}`);
});
</script>