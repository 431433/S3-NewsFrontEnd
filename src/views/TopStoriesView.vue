<template>
    <div class="content">
        <section>
            <h1 class="center">The top articles right now!</h1>
            <b-carousel id="top-stories"
                        v-model="slide"
                        :interval="5000"
                        background="#fffff"
                        img-width="800"
                        img-height="800"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        class="top">
                <b-carousel-slide caption="" img-blank img-alt="Blank image">
                    <b-card title="Doen ben"
                            img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 18rem; margin:40px;"
                            class="mb-2"
                            align="center">
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="danger">Read more</b-button>
                    </b-card>
                </b-carousel-slide>

                <b-carousel-slide caption="" img-blank img-alt="Blank image">
                    <b-card title="Ben iets doen"
                            img-src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 18rem; margin:40px;"
                            class="mb-2"
                            align="center">
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="danger">Read more</b-button>
                    </b-card>
                </b-carousel-slide>
            </b-carousel>

            <div>
                <h3>Here you can find all the top news</h3>
                <h3> articles from the last month</h3><hr style="max-width: 20%" />
                <p style="max-width: 500px">
                    If you want to be more specific with your search
                    consider signing in! This way you can save all your
                    prefrences for when you come back. If you don't want to sign in
                    u can simply use the search page, wich can be found at the top
                    of your screen, right there in the navbar!
                </p>
            </div>


            <div>
                <h3 style="margin-top:355px">Pssst..</h3>
                <h5 style="margin-left:20px">Down here there are even more articles</h5>
            </div>
        </section>
        <section>
            <b-card-group style="margin: 80px;">
                <b-card title="Doen ben"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 18rem; margin:40px;"
                        class="mb-2"
                        align="center">
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="danger">Read more</b-button>
                </b-card>

                <b-card title="Doen ben"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 18rem; margin: 40px;"
                        class="mb-2"
                        align="center">
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="danger">Read more</b-button>
                </b-card>

                <b-card title="Doen ben"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 18rem; margin:40px;"
                        class="mb-2"
                        align="center">
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="danger">Read more</b-button>
                </b-card>

                <b-card title="Doen ben"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 18rem; margin:40px;"
                        class="mb-2"
                        align="center">
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="danger">Read more</b-button>
                </b-card>
            </b-card-group>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';

    Vue.use(BootstrapVue)

    export default {
        name: 'TopStoriesView',
        components: {},
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    };
</script>

<style>
    .top{
        max-width: 500px;
        max-height: 150px;
        margin: auto;
    }

    .card {
        max-width: 100px;
        text-shadow: 1px 1px 2px #808080;
        color: black !important;
    }
    .center{
        text-align: center;
    }

    body {
        width: 100%;
        margin: 0;
    }

        body .content {
            height: 100vh;
            scroll-snap-type: y mandatory;
            scroll-snap-type: proximity;
            overflow: auto;
        }

            body .content section {
                width: 100%;
                height: 120vh;
                scroll-snap-align: start;
            }
</style>