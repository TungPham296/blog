<template>
    <div class="widget Label" data-version="2" id="Label3">
        <div class="widget-title">
            <h3 class="title">Categories</h3>
        </div>
        <div class="widget-content list-label">
            <ul>
                <li v-for="category in data">
                    <a
                        class="label-name"
                        href="https://wavy-way2themes.blogspot.com/search/label/Business?&amp;max-results=5"
                    >
                        {{ category }}
                        <span class="label-count">(0)</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const {data} = useFetch(`https://fakestoreapi.com/products/categories`);
</script>