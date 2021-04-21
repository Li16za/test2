import axios from 'axios'
export default{
    getData:function(store){
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(response=>{
            store.commit('setStars',response.data.bodies)
        })
        .catch(error=>{
            console.error(error);
        });
    }
} 