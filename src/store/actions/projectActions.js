
export const createProject = (project) => async (dispatch, getState, {getFirebase}, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('projects').add({
                ...project,
                authorFirstName:'Net',
                authorLastName: 'Ninja',
                authorId:1234,
                createdAt: new Date()
        }).then(()=>{
                dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
                dispatch({type:'CREATE_PROJECT_ERROR', err})
        }) 
}