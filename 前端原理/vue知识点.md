# vue知识点
重点：多用demo来实现自己的疑问，找寻真香
***快速学习的感悟：想、做、记
1、自己多想如何实现
2、自己多动手去实现
3、自己多总结经验

## 指令
· v-for
· v-model 双向绑定
· v-cloak 配合属性选择器隐藏未处理的插值表达式
· v-once 插值数据改变不变化
· v-bind 绑定属性

## 修饰符
· number
· trim

## 循环数组与对象和数字
· (item, index) in []
· (value, key, index) in {}
· (item, index) in 10

注：Vue无法检测数组元素和对象属性的添加和删除
## 数组更新检测
· 使用变异方法
· 使用Vue.set(要改变的元素，下标，赋予的值)-原型方法
· 使用vm.$set(要改变的元素，下标，赋予的值)-实例方法

## 对象更新检测
· 使用Vue.set(要改变的元素，下标，赋予的值)-原型方法
· 使用vm.$set(要改变的元素，下标，赋予的值)-实例方法

注：v-if和v-for一起使用的方式不推荐使用，因为数据量很大的时候，开销比较大，最好采用过滤的方式，在计算属性当中。
## 条件渲染
· v-show有更高的首次渲染开销，v-if首次渲染开销更小
· v-show有更小的切换开销，v-if有更高的切换开销
· v-if可以搭配template使用，v-show不可以

## 事件修饰符
· stop
· prevent
· capture
· self
· once
· passive

## 特殊修饰符（按键修饰符）
· v-on:keyup.enter
. v-on:keyup.page-down

## 父组件与子组件通信
· 父组件传值给子组件：子组件属性props接受，不能直接改props的值
· 子组件传值给父组件：在子组件引用标签上添加自定义事件，子组件通过$emit(自定义事件名，参数，参数)

## watch
· 监听data里的数据变化，并可以做一些处理
· 监听不到对象的属性的变化，需要给对象obj使用handler() {},且设置deep: true。或者对某一属性进行特殊监听："obj.name": {}

## 插槽
· slot不具名插槽
· 传入元素添加slot属性添加name，插槽slot标签上添加name属性，具名插槽
· slot-scope，通过上级引用了子标签，可以通过该属性和子元素slot标签传递的属性拿到子标签的data数据
· 新写法：v-slot:name="{msg}"，与template标签搭配

## 动态组件component
· vue提供了一个component组件，通过属性is来指定要渲染的组件，is的值就是该组件的名称

## 动态缓存组件keep-alive
· 需要缓存的目的是为了切换回该组件的时候不需要再次发送请求。
· vue提供了一个keep-alive组件，当某个组件被 keep-alive 组件包裹之后，他会多出两个生命周期函数。同时被被包裹的组件不会被销毁处理，且保留失活前的组件状态。
· activated  组件被激活
· deactivated 组件被失活

可以通过设置 属性来控制那些组件被缓存，那些组件不被缓存
· include 包含
· exclude 排除

## 请求工具（都是实现ajax理念的工具）
· fetch 需要二次处理res.json(),有一些缺点
· axios 可以做一些拦截等工作

## 生命周期里方法执行的思考
· 对于new Swiper(挂载的容器，{配置项})，挂在的容器在mounted之前比如created时，获取不到dom节点，导致的问题是在new方法一次执行后，轮播图没有挂在好，所以导致页面上轮播图无法切换的问题。所以需要获取使用dom节点的操作都需要放在实际能获取到节点的生命周期函数中。
· 需要在页面渲染完毕后才能拿到相关数据的，可以在this.$nextTick(回调函数)，中执行，才能用获取到的节点数据进行精确地计算，避免问题

## ref和真实dom使用的问题思考（问题）
· 把new swiper封装成一个组件，然后多次调用，但是new swiper传入的挂载的容易都是用的真实dom传入的，产生的问题就是每次new swiper都会找同一个dom节点，然后将它重新渲染一遍，这样之前渲染出来的就相当于作废了，只是最后一个有效，而如果把给该元素上添加ref，那么每个组件都有自己ref，这样使用这个ref作为容器，则避免了这样的问题

## 单页面应用（SPA）
· 多页面应用（MPA）一个项目中有多个html文件的

## vue-router
· 安装 vue-router `npm install --save vue-router`
· 项目中选择某个位置放入一个坑 router-view 这个组件
· 项目中配置路由规则，最后要暴露出去路由器的实例对象
· 在main.js中就是 new Vue 的地方需要将第3步中暴露出来的 router 实例对象配置给 根组件 的router选项

### router-view
· 只会渲染当前路由下一级

### router-link
· 这也是使用了 路由之后，提供给我们的一个全局组件，它就是一个 a 标签，能帮我们实现路由的切换功能

## router-link 与 a 标签的区别
· 默认情况下，写不写 # 的区别
· router-link 可以帮我们实现高亮的效果

### 动态路由匹配
当我们使用上路由之后，会在 Vue 的原型上挂载 两个属性

· $route
· $router

### 编程式导航 - 通过js代码来控制路由的跳转
· $router.push() 跳转页面，新增一个历史记录
· $router.back() 后退
· $router.forward() 前进
· $router.go() 根据参数来看是前进还是后退
· $router.replace() 跳转页面，不加历史记录

### 命名路由
· 在路由规则上给每个规则加上 name 属性，后续方便我们操作路由的跳转
· <router-link to="/home/page1"></router-link>
· <router-link to="{ path: '/home/page1/', name: 'page1', query: {}, params: {} }"></router-link>
· params 与 path 不能共存，会以path为准，params会在斜杠后面

## 父级路由加斜杠，子集路由不加

## 命名视图
· router-view上指定属性name，路由配置时 使用components： {name：组件}形式，找到指定坑
· 应用场景主要是一个页面中存在多个不同作用的坑，如角色不同显示不同的左边菜单栏

## 重定向
· redirect：路由路径名
· 用于默认跳转到指定路由，如匹配*和空到指定路劲

## 别名
· alias

## 路由组件参数
· 使用props让路由组件也可以在与路由规则配合外作他用
· 路由属性中props可以用布尔、对象、函数
· 在规则中配置属性props：true
· 路由规则外引用该组件时，通过属性传参，props接受使用

## 路由模式
· hash 默认
· history
· 两种模式的区别：
· 从外观上来说，hash模式会让url地址上面多一个#号，而history没有，更像url地址
· 从原理上来说，hash模式是通过window.onHashChange 这个事件来处理的，而history模式是基于html5 中 history 新增的一些api。history.pushState()、history.replaceState()及history.onpopState事件来实现的
· 切换方式：在实例化路由器对象时，设置mode选项
`
new VueRouter({
    mode: 'history'
})
`
### 路由懒加载（component: () => import('./views/Home.vue')）

## 去掉vue控制台tip（vue.config.productionTip = false）
## 导航守卫
· "导航"：路由正在发生变化
· 分三大块
- 全局
    - 全局前置 beforeEach，接收一个函数，函数中有三个参数to（要去那个路由）、from（来自那个路由）、next（是否去）
        - 如果直接调用next函数，则放行
        - 如果调用，但传递一个false，则不放行
        - 如果不调用，则不放行
        - 调用，且可以传递path路径或者路由的对象信息，这样可重定向到指定的位置
    - 全局解析守卫 beforeResolve
    - 全局后置 afterEach
- 路由独享
    - beforeEnter 进入当前路由时
- 组件级别
    - beforeRouteEnter 进入当前组件时
    - beforeRouteUpdate 当前组件更新时
    - beforeRouteLeave 退出当前组件时
· 导航守卫的钩子函数
> 在路由变化时会触发的函数

## 作用场景
· beforeEach 与 afterEach 能实现页面进度条的效果
· 登录拦截
    · beforeEach 后台管理系统除了登录和注册一般都要拦截
    · beforeEnter 部分页面需要拦截

## vuex相关概念
· 核心：store（仓库）
    · state：状态
    · getters：对state的派生，可以理解为store的计算属性
    · mutations：修改 state 的唯一操作就是提交mutation
    · actions：类似于mutation，用来处理异步
    · modules：对仓库分割成模块
· mapState（）：state的辅助函数
· mapGetters（）：getters的辅助函数
· mapMutations（）：mutations的辅助函数
· mapActions（）：actions的辅助函数

## vuex的操作流程
· 先要有仓库，将我们项目中组件上需要共享的数据放置到我们 仓库中 state 的位置。
· 组件要使用 仓库 中 state 的数据，就从仓库里面拿出来用。
· 要修改仓库中 state 的数据、
    · commit（提交）mutation
    · dispatch（派发）action -》 commit mutation
· 然后仓库中 state 数据发生变化，组件就会得到更新

### vuex 的使用
· 安装 vuex
· 项目中 src/store/index.js 文件中创建仓库的实例对象 new Vuex.Store({}) 注：调用的store方法首字母大写
· 要 main.js new Vue的地方配置一个 store 的选项。选项的值就是2中仓库实例对象

### 如何将仓库中的数据拿到组件中去使用
· this.$store 就是仓库的实例对象
· 直接使用 this.$store 方式去拿仓库的数据，不推荐
· 组件中使用计算属性去拿仓库的数据
`js
computed: {
    title() {
        return this.$store.state.title
    }
}
`
· 借助 vuex 的辅助函数 mapState();辅助函数的原理同上(推荐)
> 辅助函数引用方式：import { mapState } from 'vuex'
`js
computed: mapState(['title'])
`或者
`js
computed: mapState({
    newTitle: 'title'
})
`或者
`js
computed: mapState({
    newTitle: state => state.title
})
`
### 修改仓库里的数据
· 在mutations里定义函数，key是方法名
· mutation函数接受两个参数(state, 参数)
· 在组件中使用 this.$store.commit() 方法调用mutations里的修改函数名
    - commit的两种使用方法：
    - 第一种：commit(方法名，参数)，后面参数不能传递多个，只有一个
    - 第二种：commit({ type: 方法名, payload: 参数 })
· 第二种修改state数据的方法是：辅助函数mapMutations，在组件的methods属性里展开，然后直接调用，就相当于直接进行了上面commit的操作提交了mutation里的方法直接修改state数据
· 特殊：v-model修改仓库的数据，应该给该方法重写为get和set形式，如下：
· 注: 如果是子仓库的数据修改，则获取用this.$store.state.子仓库名.inputVal
`js
title: {
    get() {
        return this.$store.state.inputVal
    },
    set(value) {
        this.$store.commit('chgTitle', value);
    }
}
`
· mutation不允许异步代码的

### 如何写异步代码在仓库中 axtions
· 每一个action里面都可以写异步代码，但是action并不能修改state中的数据，真正修改数据的还是mutation
· 定义的action函数接受(context, 参数),context相当于store的实例对象，具有commit、state等属性
· 在组件中如何派发这个action
    · this.$store.dispatch('action的名字')
    · mapActions 辅助函数

### 拆分仓库
· 主仓库文件里其他属性不需添加，new Vuex.Store创建一个仓库，然后配置modules属性即可
· 子仓库文件中不需要引入vuex并创建仓库，只需添加一个namespaced：true，属性，配置该仓库中必须的state等属性，并以对象形式导出即可给主仓库引用

## 第三方UI库
Element pc
MintUI mobile
vux mobile 
vantUI mobile

### vant的使用
· 全局引入
· npm i -S vant
· 在main.js中引入
· 按需引入
· npm i babel-plugin-import -D
· 修改 babel 配置
· 删除掉 main.js 中去全局引入的方式，改用按需引入的方式