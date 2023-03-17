<template>
  <div id="tdls">
    <h1 class="title">教师团队</h1>
    <div class="aaa">
      <div class="bord">
        <h2 class="title">教授</h2>
        <div class="bord" v-for="t in ProfTeas">
          <teacher-item :imgUrl=t.imgUrl :aHref=t.aHref :pos=t.Pos :name=t.name :info=t.info></teacher-item>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="clear">&nbsp;</div>
      </div>
      <div class="bord">
        <h2 class="title">副教授/讲师/博士后</h2>
        <div class="bord" v-for="t in NoProf">
          <teacher-item :imgUrl=t.imgUrl :aHref=t.aHref :pos=t.Pos :name=t.name :info=t.info></teacher-item>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="clear">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherItem from "./TeacherItem";

export default {
  name: "teamteacher",
  components:{
    TeacherItem
  },
  data() {
    return{
      ProfTeas: [
        {name:"秦永彬", Pos:"教授", imgUrl:require("@/assets/Qin.png"), aHref:"http://cs.gzu.edu.cn/2021/1210/c16356a163794/page.htm", info:"秦永彬，教授、博士、博士生导师。现为贵州大学计算机科学与技术学院（贵州大学省级示范性软件学院）院长，公共大数据国家重点实验室常务副主任，文本计算与认知智能教育部工程研究中心主任。中国计算机学会（CCF）高级会员，中国计算机学会大数据专家委员会委员，贵州省计算机学会副理事长兼秘书长，ACM中国区重庆分会副主席，《大数据》期刊第2届、第3届编委会编委。贵州省放管服领导小组专家组数字化专家，贵州省大数据发展领导小组专家库首批专家，贵州省大数据教育及网络安全教学指导委员会委员，贵州省教育信息化专家委员会委员。贵州省首届数字经济领域重点人才。"},
        {name:"陈艳平", Pos:"教授", imgUrl:require("@/assets/Chen.png"), aHref:"http://cs.gzu.edu.cn/2021/1210/c16356a163849/page.htm", info:"陈艳平，男，博士，贵州大学计算机学院教授、大数据学部特聘教授、学科学术带头人、硕士研究生导师、省部共建公共大数据国家重点实验室数据融合方向副主任、教育部文本计算与认知智能工程研究中心副主任、中国计算机学会信息系统专委会执行委员。研究方向为自然语言处理，相关研究成果在ACL、Artificial Intelligence、Neural Network、Information Science、Information Fusion、IEEE Intelligent Systems、Natural Language Engineering、Cognitive Computation等国际顶级刊物上发表。长期承担ACL、AAAI、IJCAI、ICDM、KDD、TKDE、ECAI、TASL等人工智能和自然语言处理国际会议或期刊的程序委员会委员或审稿人，第三届大数据技术国际会议分会主席，第七届机器人与人工智能国际会议技术主席。共发表各类会议期刊论文60余篇。其中，第一作者和通讯作者SCI论文20余篇、CCF 会议期刊6篇、EI会议论文4篇。主持/参与国家级项目6项、省/部级项目5项、校级项目2项、横向项目3项。获得国家发明专利授权2项。主持国家级、校级教改项目2项、发表教改论文3篇。"},
        {name:"黄瑞章", Pos:"教授", imgUrl:require("@/assets/Huang.png"), aHref:"http://cs.gzu.edu.cn/2021/1210/c16356a163800/page.htm", info:"黄瑞章，女，2008年博士毕业于香港中文大学，2007至2011年任教于香港理工大学工业工程系，主要从事行业数据分析研究。现为贵州大学计算机科学与技术学院副教授，硕士生导师，IEEE会员。主要研究领域与方向：文本挖掘、机器学习、信息提取、知识学习。近五年来，作为课题负责人主持国家自然科学基金课题、国家教育部高等学校博士学科点专项科研基金课题、国家科技部创新基金课题、贵州省教育厅重点课题、贵州省科技厅重点课题多项。参与香港优配基金课题、国家自然科学基金课题多项。发表EI、SCI检索的论文20多篇，在数据挖掘领域国际顶级会议和期刊（SIGKDD、TKDE、TOIS、SIGIR、ICDM）等发表论文多篇。研究领域与方向：文本挖掘、机器学习、信息提取、知识学习。"},
      ],
      NoProf:[
        {name:"林川", Pos:"副教授", imgUrl:require("@/assets/Lin.png"), aHref:"http://cs.gzu.edu.cn/2021/1215/c16356a164311/page.htm", info:"副教授、硕土生导师，贵州大学科技成果转化专员。在大数据工程应用、政务服务应用和企业信息化方面具有多年的研究与实践经验。主婴研究方向:大数据分析与处理、政务数据融合与分析、电子政务与企业信息化。"},
        {name:"蔡丽", Pos:"讲师", imgUrl:require("@/assets/Cai.png"), aHref:"http://cs.gzu.edu.cn/2021/1210/c16356a163877/page.htm", info:"主讲《数揭结构》、《计算机网络》等课理，主持省级及校级教改项目多项。发表多篇教改论文。在自然语言处理顶级会议发表论文多篇。主要研究方向:自然语言处理、知识发现。"},
        {name:"孙利雷", Pos:"博士",imgUrl:require("@/assets/Sun.png"), aHref:"",  info:"分别于2016年和2022年于费州大学获得计算机技术专业硕士和软件工程专业博士学位。主要研究方向;文本挖据、机器学习。"},
      ]
    }

  },
  methods: {
  }
}
</script>

<style scoped>

#tdls .aaa{
  background-color:#F8F8F8;
  border:1px solid #CCC;
  margin-top:2px;
  padding:0;
}

#tdls{
  margin:5px 5px 10px;
  padding:0;
  font-size:12px;
}

#tdls h1.title{
  padding-left:42px;
  margin-bottom:8px;
  background:transparent url(../../assets/icon-h1.png) no-repeat 0 50%;
}

#tdls h2.title{
  padding-left: 36px;
  padding-bottom: 2px;
  font-size:18px;
  margin-top: 6px;
  margin-left: 6px;
  background:transparent url(../../assets/icon-h2.png) no-repeat 0 50%;
}

.clear{
  font-size:0;
  height:0;
  clear:both;
  overflow:hidden;
}

</style>
