<template>
  <div>
        <div class="header1">
                <span class="iconfont icon-shangyiyehoutuifanhui" @click='mine()'>&lt;</span>
                出借记录
        </div>
      <div class="box">
        <table>
            <tr>
                <td>产品名称</td>
                <td>期限</td>
                <td>起购（元）</td>
                <td>购买金额</td>
                

            </tr>
            <!-- <tr>
                        <td>暂无记录</td>
                       
            </tr> -->
            <tr v-for="item in arr"> 
                    <td>{{item.name}}</td>
                    <td>{{item.day}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.buymoney}}</td>
                    <td><mt-button type="danger" size='small' style="font-size: 12px;width: 50px" @click='zhuan(item.id,item.buymoney)'>转出</mt-button></td>
                </tr>
                
        </table>
      </div>
      <div></div>
  </div>
</template>
<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui';
 export default {
     name:"Jilu",
     data:function(){
         return{

             arr:[]
         }
     },
      methods:{
         mine(){
                history.go(-1)
            },
        zhuan(a,b){   //a代表id    b代表buymoney

              var _this=this;        
            axios({
                method:"post",
                 headers:{
			 'Content-type': 'application/x-www-form-urlencoded'   
              },
              url:"http://localhost:3000/zhuan",
              params:{
                  id:a,
                  buymoney:b
              }
            }).then(function(data){
                if(data.data==1){
                    // alert("zhuanchu")
                    MessageBox('提示', '转出成功');
                    _this.$router.push("/jilu")
                }
            })
        }

      },
      mounted() {
          var _this=this;
        
            axios({
                method:"post",
                 headers:{
			 'Content-type': 'application/x-www-form-urlencoded'   
              },
              url:"http://localhost:3000/jilu",
            }).then(function(data){
            //   console.log(data.data)
                _this.arr=data.data
            })
      }
 }
</script>
<style scoped>
 .box{
     padding: 10px;
     font-size: 12px;
 }
 td{
     width:150px;
 }
 .header1{
            height: 40px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            background:#1c3d68;
            width: 100vw;
        }
        
        .header1 span{
            position:absolute;
            top: 0;
            left: 10px;
        }
        table tr:nth-of-type(1) td{
            border-bottom: 1px solid #ddd;
            font-weight: 800;
        }
        table tr td{
            padding: 10px 10px
        }
</style>