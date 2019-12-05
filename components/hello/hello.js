// components/hello/hello.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    innerTitle:"组件的初始数据"
  },  

  /**
   * 组件的方法列表
   */
  methods: {
     show(){
       console.log(this.data.innerTitle)
     },
    send(){
      this.triggerEvent("xx",{x:1,y:2},{})
    }
  }
})
