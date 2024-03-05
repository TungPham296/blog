<template>
    <div id="main-wrapper" class=" position-relative overflow-visible box-border min-h-[1px]">
        <div class="theiaStickySidebar pt-[0px] pb-[1px] position-static transform-none top-0 left-[20px]">
            <div class="main section" id="main" name="Main Posts">
                <div class="widget Blog" data-version="2" id="Blog1">
                    <div class="blog-posts hfeed container index-post-wrap">
                        <div class="grid-posts">
                            <Post
                                v-for="post in posts"
                                :title="post.title"
                                :tag="post.tag"
                                :redirect-link="post.redirect_link"
                                :date="post.date"
                                :auth-link="post.auth_link"
                                :auth="post.auth"
                                :description="post.description"
                                :image="post.image"
                                :tag-link="post.tag_link"
                            />
                        </div>
                    </div>
                    <div class="blog-pager container" id="blog-pager">
                        <a
                            class="blog-pager-older-link load-more"
                            data-load="https://wavy-way2themes.blogspot.com/search?updated-max=2016-03-17T00:47:00-07:00&amp;max-results=6"
                            href="javascript:;"
                            id="load-more-link"
                        >
                            Load More
                        </a>
                        <span class="loading"><span class="loader"></span></span>
                        <span class="no-more load-more"> That is All </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import Post from "~/components/homes/Post.vue";

const posts = [
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'I like fishing because it is always the great way of relaxing',
        tag: 'Beauty',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-fj-7-H-5wz0/YMW9Rkk4o0I/AAAAAAAAHXk/DtXUKaTtYYICAbDNLM13G5ldweEO_BFxwCLcBGAsYHQ/w405-h253-p-k-no-nu/21.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustrs standard dummy text ever since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'My Memorable story of trip to grand canyon National Park',
        tag: 'Beauty',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-15R1ZnZjonU/YMW9R0o53oI/AAAAAAAAHXs/DzsZTsv93AUmRlfAgC5P5xenTETbM3OxwCLcBGAsYHQ/w449-h253-p-k-no-nu/22.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry\'s standard dummy text ever  since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'Camping in an abandoned house under the starry night at hill top',
        tag: 'Business',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-rceGzMiDzGo/YMW9Rof_lDI/AAAAAAAAHXo/_3dRaNW9PsY7s01EM4HpnAJPWR2VthZNACLcBGAsYHQ/w449-h253-p-k-no-nu/23.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustrs standard dummy text ever since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'Some amazing similarities between people around the world',
        tag: 'Beauty',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-UFiyZJE41v8/YMW9SWOjsiI/AAAAAAAAHXw/iH0iZds9_PMqNeS1j1H1LJwn-3Qpck9WQCLcBGAsYHQ/w449-h253-p-k-no-nu/24.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustrs standard dummy text ever since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'A perfect road map for travelling asian countries',
        tag: 'Beauty',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-HHyB8_2kO8E/YMW9S7aeLfI/AAAAAAAAHX0/nY3_1fD8wDABdC-Ziaa9Vk1sLhL6zU6hQCLcBGAsYHQ/w449-h253-p-k-no-nu/25.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustrs standard dummy text ever since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
    {
        redirect_link: 'https://wavy-way2themes.blogspot.com/2016/03/i-like-fishing-because-it-is-always.html',
        title: 'Mind refreshing song by Rabindranath Tagore',
        tag: 'Beauty',
        tag_link: 'https://wavy-way2themes.blogspot.com/search/label/Beauty?&amp;max-results=5',
        image: 'https://1.bp.blogspot.com/-JRvwBZci1k4/YMW9TK-INbI/AAAAAAAAHX4/FsueaLHVCU0FnMU88cpnhJJc1rqz3iDvACLcBGAsYHQ/w449-h253-p-k-no-nu/26.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustrs standard dummy text ever since the 1500s, …',
        auth: 'Sora Blogging Tips',
        auth_link: 'https://www.blogger.com/profile/07873960646497749283',
        date: 'March 18, 2016',
    },
];
</script>