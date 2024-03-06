<template>
    <ul class="post-nav">
        <li v-if="nextProduct" class="post-next">
            <a class="next-post-link"
               :href="getLink(id + 1)"
               id="Blog1_blog-pager-newer-link" rel="next">
                <div class="post-nav-inner">
                    <span>Newer</span>
                    <p>{{ nextProduct.title }}</p>
                </div>
            </a>
        </li>
        <li v-if="preProduct" class="post-prev">
            <a class="prev-post-link"
               :href="getLink(id - 1)"
               id="Blog1_blog-pager-older-link" rel="previous">
                <div class="post-nav-inner">
                    <span>Older</span>
                    <p>{{ preProduct.title }}</p>
                </div>
            </a>
        </li>
    </ul>
</template>
<script setup>
const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    },
});

const getDataProduct = async (id) => {
    let {data} = await useFetch(`https://fakestoreapi.com/products/${id}`);
    return data.value;
}
const getLink = (id) => `/products/${id}`;
const preProduct = await getDataProduct(props.id - 1);
const nextProduct = await getDataProduct(props.id + 1);

</script>