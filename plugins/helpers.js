import Vue from 'vue'
const numeral = require('numeral')
const truncate = require('truncate')

Vue.prototype.$number_format = (number) => {
    return numeral(number).format('0,0')
}

Vue.prototype.$limit_text = (text, limit) => {
    return truncate(text, limit)
}