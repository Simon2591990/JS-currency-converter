import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencyData: null,
            selectedCurrency: null,
            amount: null,
            convertedAmount:  null,
            convertMode: null,
        },
        
        mounted: function(){
            this.fetchData();
        },
        methods: {
            fetchData: function(){
                fetch('https://api.exchangeratesapi.io/latest')
                .then( res => res.json())
                .then(data => this.currencyData = data)
            },
            convert: function(){
                let currency = this.currencyData.rates[this.selectedCurrency]
                let result = 0
                if (this.convertMode === "fromEuros") {result = this.amount * currency}
                else if(this.convertMode === "toEuros") {result = this.amount / currency};

                this.convertedAmount = result.toFixed(2)
            }
        }
    })
})