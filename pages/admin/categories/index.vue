<template>
    <div class="container-fluid">
        <div class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
            <div class="card-body px-4 py-3">
                <div class="row align-items-center">
                    <div class="col-9">
                        <h4 class="fw-semibold mb-8">Quản lý danh mục {{ loadingStore }}</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <NuxtLink to="/admin" class="text-muted text-decoration-none">Trang chủ</NuxtLink>
                                </li>
                                <li class="breadcrumb-item" aria-current="page">Danh mục</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-3">
                        <div class="text-center mb-n5">
                            <img src="../assets/images/breadcrumb/ChatBc.png" alt="" class="img-fluid mb-n4">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div hidden="" class="card w-100 position-relative overflow-hidden">
            <div class="px-4 py-3 border-bottom">
                <h5 class="card-title fw-semibold mb-0 lh-sm">Danh sách danh muc</h5>
            </div>
            <div class="card-body p-4">
                <div class="table-responsive mb-4">
                    <table class="table border text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                        <tr>
                            <th>
                                <h6 class="fs-4 fw-semibold mb-0">ID</h6>
                            </th>
                            <th>
                                <h6 class="fs-4 fw-semibold mb-0">Tên</h6>
                            </th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(category,index) in data">
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <h6 class="fs-4 fw-semibold mb-0">{{ index + 1 }}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class=" fs-2 gap-1 d-inline-flex align-items-center">{{ category }}</span>
                            </td>
                            <td>
                                <div class="dropdown dropstart">
                                    <a href="#" class="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        <i class="ti ti-dots fs-5"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a class="dropdown-item d-flex align-items-center gap-3" href="#"><i
                                                class="fs-4 ti ti-plus"></i>Add</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item d-flex align-items-center gap-3" href="#"><i
                                                class="fs-4 ti ti-edit"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item d-flex align-items-center gap-3" href="#"><i
                                                class="fs-4 ti ti-trash"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div>loading...</div>
    </div>
</template>
<script setup>
import useLoading from "~/composables/useLoading.js";

setPageLayout('admin');
definePageMeta({
    middleware: ['auth'],
});

const loadingStore = useLoading();
const route = useRoute();
const data = ref([]);
onMounted(async () => {
    try {
        const {data} = await $fetch('https://fakestoreapi.com/products/categories');
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});

</script>