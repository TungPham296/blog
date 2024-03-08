import {ofetch} from "ofetch";
import useAuth from "~/composables/useAuth.js";
import useLoading from "~/composables/useLoading.js";


export default defineNuxtPlugin((_nuxtApp) => {
    const authStore = useAuth();
    const loadingStore = useLoading();
    const route = useRoute();
    globalThis.$fetch = ofetch.create({
        onRequest({_request, options}) {
            loadingStore.value[route.fullPath] = loadingStore.value[route.fullPath] ? loadingStore.value[route.fullPath] + 1 : 1;
            if (authStore?.value?.token) {
                options.headers = {Authorization: `Bearer ${authStore.value.token}`}
            }
            console.log('request');
            console.log(loadingStore.value);
        },
        onResponse(context) {
            loadingStore.value[route.fullPath] = loadingStore.value[route.fullPath]? loadingStore.value[route.fullPath] - 1 : 0;
            console.log('onResponse');
            console.log(loadingStore.value);
        },
        onRequestError({error}) {
            console.error(error)
        }
    })
})