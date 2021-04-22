export default{
    setStars:function(state,stars){
        state.stars=stars.map(s=>{
            return {
                'id':s.id,
                'name':s.name,
                'isPlanet':s.isPlanet,
                'discoveryDate':s.discoveryDate,
                'discoveredBy':s.discoveredBy,
            }
        });
    },
    AddStars:function(state,star){
        state.stars.push(star)
    },
    DeleteStars:function(state,id){
        state.delStars.push(state.stars.find(t => t.id==id));
        state.stars=state.stars.filter(t => t.id !==id);
    },
    UpdateStars:function(state,star){
        state.stars=state.stars.map(s=>{
            if (s.id==star.id){
                s=star;
            }
        return s;
        })
    },
    getStars:function(state,star){
        let id=star.id;
        let dataStar=star.data;
        let findstar=state.stars.find(t => t.id==id);
        if (findstar=='undefined')
        {
            state.starView=dataStar;
        }
        else{
            dataStar.name=findstar.name;
            dataStar.discoveredBy=findstar.discoveredBy;
            dataStar.discoveryDate=findstar.discoveryDate;
            dataStar.isPlanet=findstar.isPlanet;
            state.starView=dataStar;
        }
    }
}