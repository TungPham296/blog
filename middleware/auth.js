import useAuth from "~/composables/useAuth.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuth();
    if (!authStore.value.token){
        return navigateTo('/login');
    }
});