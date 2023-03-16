<template>
  <div class="bord">
    <div id="wbwj">
      <h1 class="title">知识处理小组</h1>
      <div v-for="s in stus">
        <student-item :name="s.name" :img-url="s.imgUrl" :pos="s.pos" :info="s.info"></student-item>
      </div>
    </div>
  </div>
</template>

<script>
import studentItem from "./StudentItem";
export default {
  name: "TeamStudent",
  components:{
    studentItem
  },
  data(){
    return{
      stus:[
        {name:"唐瑞雪", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"王凯", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"黄辉", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"杨卫哲", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"郭晓", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"黄蓉", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"吴宜钊", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"罗小城", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"徐章节", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
        {name:"余靖", pos:"研究生", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
      ]
    }
  }
}
</script>

<style scoped>

#wbwj{
  margin:5px;
  padding:0;
  font-size:12px;
}
#wbwj h1.title{
  margin:0;
  padding:0;
  height:52px;
  line-height:52px;
  font-size:22px;
}


</style>
