
const initState = {
    projects:[
        {id:'1', title:'First Project', content:'First Project Content'},
        {id:'2', title:'Second Project', content:'Second Project Content'},
        {id:'3', title:'Third Project', content:'Third Project Content'}
    ]
}

const projectReducer = (state = initState, action) => {
    if(action.type === 'CREATE_PROJECT'){
        console.log(action.project)
        return state
    } else if(action.type === 'CREATE_PROJECT_ERROR'){
        console.log(action.err)
    }
    return state
}

export default projectReducer