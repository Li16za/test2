export default{
    setStars:function(state,stars){
        state.stars=stars;
    },
    AddStars:function(state,star){
        state.stars.push(star)
    },
    DeleteStars:function(state,id){
            state.delStars.push(state.stars.find(t => t.id==id));
            state.stars=state.stars.filter(t => t.id !==id);
            
    }
}