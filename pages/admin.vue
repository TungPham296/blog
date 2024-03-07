<template>
    <h1>admin</h1>
</template>

<script setup>
setPageLayout('admin');
definePageMeta({
    middleware: ['auth'],
});

</script>