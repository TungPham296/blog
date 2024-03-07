// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    plugins: [
        '~/plugins/fetch-config.js',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '~/public/css/template.css',
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            meta: [
                {name: "Content-Type", content: "text/html; charset=UTF-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {name: "description", content: ""},
                {content: 'website', property: 'og:type'},
                {content: 'Wavy', property: 'og:title'},
                {content: 'https://wavy-way2themes.blogspot.com/', property: 'og:rrl'},
                {content: '', property: 'og:description'},
                {content: 'Blog', property: 'og:site_name'},

            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                // { src: "https://awesome-lib.js" },
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                {rel: "icon", href: "https://wavy-way2themes.blogspot.com/favicon.ico"},
                {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"},
            ],
            // please note that this is an area that is likely to change
            style: [
                // <style type="text/css">:root { color: red }</style>
                // {children: ":root  color: red }", type: "text/css"},
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                //{children: "JavaScript is required"},
            ],
            bodyAttrs: {
                class: 'index home'
            }
        },
    },
});
