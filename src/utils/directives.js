/**
 * 全局指令
 */


export default function initDirectives(Vue) {
  /**
   * 获取  input 的焦点
   */
  Vue.directive("focus", {
		// 当绑定元素插入到 DOM 中。
		inserted: function (el) {
			// 聚焦元素
			el.focus()
		}
	});
}  
