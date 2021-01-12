import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencyRates: null
        },
        
        mounted: function(){
            this.fetchData()
        },
        methods: {
            fetchData: function(){
                fetch('https://api.exchangeratesapi.io/latest')
                .then( res => res.json())
                .then(data => this.currencyRates = data)
            }
        }
    })
})