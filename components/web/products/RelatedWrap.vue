<template>
    <div id="related-wrap">
        <div class="title-wrap">
            <h3>You may like these posts</h3>
        </div>
        <div class="related-ready">
            <ul class="related-posts">
                <li class="related-item item-0" v-for="item in data">
                    <NuxtLink class="post-image-link" :to="getLink(item.id)">
                        <img class="post-thumb lazy-yard" alt="" :src="item.image">
                    </NuxtLink>
                    <h2 class="post-title">
                        <NuxtLink :to="getLink(item.id)">{{ item.title }}</NuxtLink>
                    </h2>
                    <div class="post-meta">
                        <span class="post-date">March 17, 2016</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    category: {
        type: String,
        required: true,
    }
});

const {data} = await useFetch(`https://fakestoreapi.com/products/category/${props.category}?limit=3&sort=desc`);
const getLink = (id) => `/products/${id}`;

</script>