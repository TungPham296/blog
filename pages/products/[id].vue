<template>
    <ContentWrapper :id="id"/>
</template>
<script setup>
import ContentWrapper from "~/components/web/products/ContentWrapper.vue";

const route = useRoute();
const id = route.params.id;

</script>