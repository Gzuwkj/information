<template>
  <div id="jiyu">
    <h1 class="title" >{{ title }}</h1>
    <div class="bord">
      <p style="text-indent: 20px">{{ jiyu }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamAbstract",
  data(){
    return{
      title:'团队建设寄语',
      jiyu:'贵州大学计算机科学与技术学院文本计算与认知智能实验室现有博士生导师2人、硕士生号8人、研究生80余人。实验室一直从车吾言处理、文本挖掘、知识融台号，承担国家自然科学基金7项，贡州省曰然科学基金5项，贵州省重大应用基础研元计划项目1项，贵州省公共大数据重点实验室开放课题3项，教育部重点实验室开放课题2项。作为骨干成员参与或完成国家自然学科基金重大研究计划1项，国家自然科学基金联合基金重点项目1项，国家重点研发计划1项，贵州省科技重大专项1项。发表CCF推荐A类会议/期刊论文7篇、SCI论文20余篇、EI论文30余篇、申请专利12项、软件著作权8项。实验室与西安交通大学、南京大学研究团队、马萨诸塞大学、贵州省高级人民法院、贵州省人民检察院、贵州省网信办、贵州省省委宣传部、贵州省政法委等机构建立了良好的合作关系，在项目咨询、实验数据、部署测试等方面提供大力的支撑。'
    }
  }
}
</script>

<style scoped>

#jiyu{
  margin:5px 5px 10px;
  padding:0;
  font-size:14px;
}

#jiyu h1.title{
  padding-left:42px;
  margin-bottom:8px;
  background:transparent url(../../assets/icon-h1.png) no-repeat 0 50%;
}

#jiyu p{
  text-indent:48px;
  line-height:28px;
  margin:0;
  padding:0 10px;
}

#jiyu .nav a{
  font-size:14px;
  font-weight:bold;
  margin:0 10px;
}

#jiyu div.bord{
  background-color:#F8F8F8;
  border:1px solid #CCC;
  margin:0;
  padding:0;
}

</style>
