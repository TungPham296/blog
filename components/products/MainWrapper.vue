<template>
    <div id="main-wrapper" class="relative overflow-visible box-border min-h-[1px]">
        <div class="theiaStickySidebar pt-0 pb-[1px] static transform-none">
            <div class="main section" id="main" name="Main Posts">
                <div class="widget Blog" id="Blog1">
                    <div class="blog-posts hfeed container item-post-wrap">
                        <div class="blog-post hentry item-post">
                            <div class="post-item-inner">
                                <nav id="breadcrumb">
                                    <a href="https://wavy-way2themes.blogspot.com/">Home</a>
                                    <em class="delimiter"></em>
                                    <a class="b-label"
                                       href="https://wavy-way2themes.blogspot.com/search/label/Fashion?&amp;max-results=5">Fashion</a>
                                    <em class="delimiter"></em>
                                    <span class="current">{{ data.title }}</span>
                                </nav>

                                <h1 class="post-title">{{ data.title }}</h1>
                                <div class="post-meta">
                                    <span class="post-author"><a
                                        href="https://www.blogger.com/profile/07873960646497749283" target="_blank"
                                        title="Sora Blogging Tips">Sora Blogging Tips</a></span>
                                    <span class="post-date published" datetime="2016-03-17T00:59:00-07:00">March 17, 2016</span>
                                </div>
                                <div id="prev-ad">
                                    <div class="widget HTML" data-version="2" id="HTML4">
                                        <div class="widget-title">
                                            <h3 class="title">
                                                Recent Posts
                                            </h3>
                                        </div>
                                        <div class="widget-content">
                                            <a class="sora-ads-full" href="javascript:;">Responsive Advertisement</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-body post-content" id="post-body">
                                    <img alt="Beautiful vintage aircraft" border="0"
                                         :src="data.image"
                                         title="Beautiful vintage aircraft" width="100%" class="lazy-yard"><br>
                                    <div><br></div>
                                    {{ data.description }}
                                </div>
                                <div id="nxt-ad">
                                    <div class="widget HTML" data-version="2" id="HTML5">
                                        <div class="widget-title">
                                            <h3 class="title">
                                                Women
                                            </h3>
                                        </div>
                                        <div class="widget-content">
                                            <a class="sora-ads-full" href="javascript:;">Responsive Advertisement</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-labels">
                                    <div class="label-head Label">
                                        <a class="label-link"
                                           href="https://wavy-way2themes.blogspot.com/search/label/Fashion?&amp;max-results=5"
                                           rel="tag">{{ data.category }}</a>
                                    </div>
                                </div>
                                <PostShare :title="data.title" :link="currentLink"/>
                            </div>
                            <div class="post-footer">
                                <PostNav :id="data.id"/>
                                <div class="about-author">
                                    <div class="avatar-container">
                                        <img alt="Sora Blogging Tips" class="author-avatar lazy-yard"
                                             src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicfZ_0fAZA6JdK0uZurtPDzyHAWyfgMfc1nYagHD3Gm2gEpP9UOdRtKc5fFE9AP-ekEAsLL-dwv5R3eBIvrPy3aK-_BSWNhxaqtOD20HwfJPs_pcSSQjtNcmh_jTmH-w/w100/Sora+Blogging+Tips.jpg=w88-h88-p-k-no-nu">
                                    </div>
                                    <h3 class="author-name">
                                        <span>Posted by</span>
                                        <a alt="Sora Blogging Tips"
                                           href="https://www.blogger.com/profile/07873960646497749283"
                                           target="_blank">
                                            Sora Blogging Tips</a>
                                    </h3>
                                    <span class="author-description">SoraBloggingTips Is A Site Where You Find Unique And High-Quality Professional Blogger Templates For Free.</span>
                                </div>
                                <RelatedWrap :category="data.category"/>
                            </div>
                        </div>
                        <!--<PostComment/>-->
                    </div>

                </div>
            </div>
            <div id="custom-ads2">
                <div class="section" id="ty-post-after-ad" name="Post ADS 2"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

import PostShare from "~/components/products/PostShare.vue";
import PostNav from "~/components/products/PostNav.vue";
import RelatedWrap from "~/components/products/RelatedWrap.vue";
import PostComment from "~/components/products/PostComment.vue";

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    }
});

const {data} = await useFetch(`https://fakestoreapi.com/products/${props.id}`);
const url = useRequestURL()
const currentLink = url.href;

</script>