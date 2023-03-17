<template>
  <div id="tdls">
    <h1 class="title">研究小组</h1>
    <div class="bord">
      <div id="wbwj">
        <h2 class="title">信息抽取</h2>
        <div v-for="s in infoExtStus">
          <student-item  :name="s.name" :img-url="s.imgUrl" :pos="s.pos" :info="s.info"></student-item>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="clear">&nbsp;</div>

        <h2 class="title">司法抽取</h2>
        <div v-for="s in judExtStus">
          <student-item  :name="s.name" :img-url="s.imgUrl" :pos="s.pos" :info="s.info"></student-item>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="clear">&nbsp;</div>

        <h2 class="title">文本聚类</h2>
        <div v-for="s in textClusterStus">
          <student-item  :name="s.name" :img-url="s.imgUrl" :pos="s.pos" :info="s.info"></student-item>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="clear">&nbsp;</div>

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
      infoExtStus:[
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
      ],
      judExtStus:[
        {name:"唐瑞雪", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
      ],
      textClusterStus:[
        {name:"唐瑞雪", pos:"博士", imgUrl:require("@/assets/logo.png"), info:"计算机科学与技术专业，西安交通大学2010级计算机科学与技术专业本科生，于2014年9月进入西安交通大学电信学院学习，攻读硕士学位。爱好运动。主要研究方向为文本挖掘、机器学习和知识处理。"},
      ],
    }
  }
}
</script>

<style scoped>

#wbwj{
  background-color:#F8F8F8;
  border:1px solid #CCC;
  margin:0;
  padding-top:6px;
  font-size:12px;
}

#tdls h1.title{
  padding-left:42px;
  margin-bottom:8px;
  background:transparent url(../../assets/icon-h1.png) no-repeat 0 50%;
}

#wbwj h2.title{
  padding-top: 4px;
  padding-left: 34px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size:18px;
  margin-left: 4px;
  background:transparent url(../../assets/icon-h2.png) no-repeat 0 50%;
}

.clear{
  font-size:0;
  height:0;
  clear:both;
  overflow:hidden;
}

</style>
