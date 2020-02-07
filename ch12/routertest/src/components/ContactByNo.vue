<template>
  <div>
    <hr/>
    <div >
        <table class="detail table table-bordered">
            <tbody>
            <tr class="active">
                <td>일련번호</td>
                <td>{{contact.no}}</td>
            </tr>
            <tr class="active">
                <td>이름</td>
                <td>{{contact.name}}</td>
            </tr>
            <tr class="active">
                <td>전화</td>
                <td>{{contact.tel}}</td>
            </tr>
            <tr class="active">
                <td>주소</td>
                <td>{{contact.address}}</td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>


<script>
import contactlist from '../contactlist'
export default {
    name: 'ContactByNo',
    data() {
        return {
            // no:0,
            contacts : contactlist.contacts
        }
    },
    props:['no'],
    // created(){
    //     this.no = parseInt(this.$route.params.no,10)
    // },
    // beforeRouteUpdate(to,from,next){
    //     this.no =  parseInt(to.params.no,10)           
    //     next() 
    // },
    // watch:{
    //     $route(to){
    //         this.no = parseInt(to.params.no,10)            
    //     }
    // },
    computed:{
        contact(){
            return this.contacts.find((item)=>item.no === this.no)
        }
    }
}
</script>

<style>
table.detail { width:400px; }
</style>