import './app2.css'
import $ from "jquery"

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

// jquery可以通过监听父元素来监听子元素的事件（事件委托）
$tabBar.on('click', 'li', (e)=>{
    // 通过jquery来操作元素
    const $li = $(e.currentTarget)
    // 添加选择器实现背景色转换
    $li.addClass('selected')
      .siblings().removeClass('selected')
    const index = $li.index()
    // 添加选择器实现切换内容
    $tabContent.children()
      .eq(index).addClass('active')
      .siblings().removeClass('active')
})

// 默认显示1
$tabBar.children().eq(0).trigger('click')