export default {
    requests(state, _, _2, rootGetters ){
        const coachId = rootGetters.userId
        return state.requests.filter(r=>r.coachId == coachId);
    },
    hasRequest(_, getters){
        const requests = getters.requests
        return requests && requests.lenght >0;
    }
}