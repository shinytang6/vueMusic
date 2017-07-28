
const apiUrl = "https://api.imjad.cn/cloudmusic/"     
export default {
    // getSongs:function(str,limit){
    //      return apiUrl+"?type=search&search_type=1&s="+str+"&limit="+limit
    // },
    getMVList:function(str,limit){
         return apiUrl+"?type=search&search_type=1004&s="+str+"&limit="+limit
    },
    getMv:function(id){
         return apiUrl+"?type=mv&id="+id
    }

}