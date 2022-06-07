<template>
    <div>
        <h2>Reviews</h2>
        <hr />
        <br />

        <div style="margin-left: 35px;">
            <h4>Average grade: {{grade}}</h4>
            <div>
                <div v-for="comment in comments" :key="comment.comment">
                    <div class="d-flex w-100 justify-content-between" style="margin-bottom:-15px;">
                        <h5 class="mb-1">{{comment.comment}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'

    Vue.use(VueAxios, axios)

    export default {
        name: "CommentsView",
        data() {
            return {
                comments: null,
                grade: null,
                title: this.$route.params.title
            }
        },
        mounted() {
            axios
                .get('https://newsbackend.azurewebsites.net/Review/GetReviews?title=' + this.title)
                .then(response => {
                    this.comments = response.data
                    console.warn(this.comments)
                }),
            axios
                .get('https://newsbackend.azurewebsites.net/Review/GetGrade?title=' + this.title)
                .then(responseGrade => {
                    this.grade = responseGrade.data
                })
        }
    }
</script>

<style>

</style>