const express = require('express')
const router = express.Router()

const btn = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
const LongUrl = ""
btn.onclick(() => {
  LongUrl = JSON.stringify(input.value)
  div.remove()
  console.log(LongUrl)
})
/*div.innerHTML = `
<div>
<h1>Here is the shorter url:</h1>
${url}
</div>
`  */ 

