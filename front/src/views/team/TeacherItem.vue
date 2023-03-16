<template>
  <div class="t">
    <table border="0" class="teamtb">
      <tbody>
      <tr>
        <td class="tdimg" rowspan="4"><img height="161" width="120" :src="imgUrl"></td>
        <td><a :href="aHref">{{ name }}</a></td>
      </tr>
      <tr>
        <td>教授</td>
      </tr>
      <tr>
        <td class="tdinfo">
          <div class="divinfo"> {{ info }}<br>
            &nbsp;</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TeacherItem",
  props:{
    imgUrl:String,
    aHref:String,
    name:String,
    info:String
  }
}
</script>

<style scoped>

.teamtb th, .teamtb td{
  padding:3px 5px;
  line-height:18px;
  border:1px dotted #d8d8d8;
}

.t{
  width:50%;
  float:left;
}

.teamtb{
  border-collapse:collapse;
  border-spacing:0;
  width:95%;
  float:left;margin:0 8px 10px 8px;
}

td.tdinfo{
  vertical-align:top;
}

td.tdimg{
  width:120px;
}

.divinfo{
  height:113px;
  overflow:auto;
  vertical-align:top;
}

</style>
