<template>
    <div>
        <h2>Reviews</h2>
        <hr />
        <br />

        <div style="margin-left: 35px;">
            <h4>Average grade: {{grade}}</h4>
            <div class="mt-3">
                <b-card-group class="mb-3" columns>
                    <b-card border-variant="dark" class="text-center review" v-for="comment in comments" :key="comment.comment">
                        <b-card-text>{{comment.comment}}, {{comment.grade}}</b-card-text>
                    </b-card>
                </b-card-group>
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
                grade: undefined,
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
                    console.warn(this.grade)
                })
        }
    }
</script>

<style scoped>
    .review{
        max-width: 25%;
        color: black;
        margin: 10px;
    }
</style>