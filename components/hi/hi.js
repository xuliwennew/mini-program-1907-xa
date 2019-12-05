// components/hi/hi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo(e){
      console.log(e.detail)
    }
  },

  lifetimes:{
    created(){
      console.log("#1 created")
    },
    attached(){
      console.log("#2 attached")
    },
    ready(){
      console.log("# ready")
    }
  }
})
