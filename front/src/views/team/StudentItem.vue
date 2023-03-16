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

.divinfo_s{
  height:135px;overflow:auto;vertical-align:top;
}

.q{
  width:33.3%;float:left;
}
</style>
