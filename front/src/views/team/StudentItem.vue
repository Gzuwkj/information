<template>
  <div class="q">
    <table border="0" class="teamtb">
      <tbody>
      <tr>
        <td class="tdimg" rowspan="4"><img :alt="name" height="159" :src="imgUrl" width="120"></td>
        <td><b>{{name}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pos}}</td>
      </tr>
      <tr>
        <td class="tdinfo">
          <div class="divinfo_s">&nbsp;{{info}}</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentItem",
  props:{
    name:String,
    imgUrl:String,
    info:String,
    pos:String
  }
}
</script>

<style scoped>

.teamtb th, .teamtb td{
  padding:3px 5px;
  line-height:18px;
  border:1px dotted #d8d8d8;
}

.teamtb{
  border-collapse:collapse;
  border-spacing:0;
  width:95%;
  float:left;
  margin:0 8px 10px 8px;
}

td.tdinfo{
  vertical-align:top;
}

td.tdimg{
  width:120px;
}

.divinfo_s{
  height:135px;
  overflow:auto;
  vertical-align:top;
}

.q{
  width:33.3%;
  float:left;
}

</style>
