<template>
    <div class="post-share">
        <ul class="share-links social social-color">
            <li class="facebook">
                <a class="facebook"
                   :href="`https://www.facebook.com/sharer.php?u=${props.link}`"
                   onclick="window.open(this.href, 'windowName', 'width=550, height=650, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
            <li class="x-twitter">
                <a class="x-twitter"
                   :href="`https://twitter.com/share?url=${props.link}`"
                   onclick="window.open(this.href, 'windowName', 'width=550, height=450, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
            <li class="pinterest">
                <a class="pinterest"
                   :href="`https://www.pinterest.com/pin/create/button/?url=${props.link}&amp;description=${props.title}`"
                   onclick="window.open(this.href, 'windowName', 'width=735, height=750, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
            <li class="linkedin">
                <a class="linkedin"
                   :href="`https://www.linkedin.com/shareArticle?url=${props.link}`"
                   onclick="window.open(this.href, 'windowName', 'width=550, height=650, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
            <li class="whatsapp whatsapp-desktop">
                <a class="whatsapp"
                   :href="`https://web.whatsapp.com/send?text=${props.title} | ${props.link}`"
                   onclick="window.open(this.href, 'windowName', 'width=900, height=550, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
            <li class="email">
                <a class="email"
                   :href="`mailto:?subject=${props.title}&amp;body=${props.link}`"
                   onclick="window.open(this.href, 'windowName', 'width=500, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                   rel="nofollow"></a>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})
</script>