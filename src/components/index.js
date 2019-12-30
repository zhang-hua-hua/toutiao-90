import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/bread-crumb.vue'
import { quillEditor } from 'vue-quill-editor' // quil编辑组件的对象
import CoverImage from './publish/cover-image.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 注册一个全局组件
    Vue.component('layout-header', layoutHeader)// 注册一个全局组件
    Vue.component('bread-crumb', breadCrumb)// 注册一个全局面包屑
    Vue.component('quill-editor', quillEditor) // 注册一个全局富文本编辑器
    Vue.component('cover-image', CoverImage)// 注册一个封面组件
  }
}
