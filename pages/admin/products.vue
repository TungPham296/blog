<template>
    <div class="container-fluid">
        <h1>Products</h1>
    </div>
</template>
<script setup>
setPageLayout('admin');
definePageMeta({
    middleware: ['auth'],
})

</script>