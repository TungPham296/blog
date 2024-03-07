import {ofetch} from "ofetch";
import useAuth from "~/composables/useAuth.js";
import useLoading from "~/composables/useLoading.js";


export default defineNuxtPlugin((_nuxtApp) => {
    const authStore = useAuth();
    const loadingStore = useLoading();

    globalThis.$fetch = ofetch.create({
        onRequest({_request, options}) {
            loadingStore.value++;
            if (authStore.value.token) {
                options.headers = {Authorization: `Bearer ${authStore.value.token}`}
            }
        },
        onResponse(context) {
            console.log(context);
            loadingStore.value--;
        },
        onRequestError({error}) {
            console.error(error)
        }
    })
})