<template>
    <ul class="post-nav">
        <li v-if="nextProduct" class="post-next">
            <NuxtLink class="next-post-link" :to="getLink(id + 1)">
                <div class="post-nav-inner">
                    <span>Newer</span>
                    <p>{{ nextProduct.title }}</p>
                </div>
            </NuxtLink>
        </li>
        <li v-if="preProduct" class="post-prev">
            <NuxtLink class="prev-post-link" :to="getLink(id - 1)">
                <div class="post-nav-inner">
                    <span>Older</span>
                    <p>{{ preProduct.title }}</p>
                </div>
            </NuxtLink>
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

const preProduct = ref(null);
const nextProduct = ref(null);
const getLink = (id) => `/products/${id}`;

const getDataProduct = async (id) => {
    let {data} = await useFetch(`https://fakestoreapi.com/products/${id}`);
    return data.value;
}

const fetchProductData = async () => {
    const [preProductData, nextProductData] = await Promise.all([
        getDataProduct(props.id - 1),
        getDataProduct(props.id + 1)
    ]);

    return {preProductData, nextProductData};
}

fetchProductData().then(({preProductData, nextProductData}) => {
    preProduct.value = preProductData;
    nextProduct.value = nextProductData;
});


</script>