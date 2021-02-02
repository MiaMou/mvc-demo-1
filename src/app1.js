import './app1.css'
import $ from 'jquery'

// 获取选择器
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
// 初始化n
const n = localStorage.getItem('n')
$number.text(n || 100)

// 然后绑定事件
$button1.on('click', ()=>{
    let n = parseInt($number.text())
    n+=1
    // 有数据存储功能的n (当刷新页面的时候保留最新的n值)
    localStorage.setItem('n', n)
    $number.text(n)
})
$button2.on('click', ()=>{
    let n = parseInt($number.text())
    n-=1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button3.on('click', ()=>{
    let n = parseInt($number.text())
    n*=2
    localStorage.setItem('n', n)
    $number.text(n)
})
$button4.on('click', ()=>{
    let n = parseInt($number.text())
    n/=2
    localStorage.setItem('n', n)
    $number.text(n)
})