    export const FETCH_START = "FETCH_START";
    export const FETCH_SUCCESS = "FETCH_SUCCESS";
    export const FETCH_ERROR =  "FETCH_ERROR" ;

    export const fetchStart = ()=>({

        type: FETCH_START,
    })

    export const fetchSuccess = (data)=>({

        type: FETCH_SUCCESS,
        payload: data
    })

    export const fetchError = (error)=>({

        type: FETCH_ERROR,
        payload: error
    })

    export const fetchPeople = () => {
        return async(dispatch) => {
            try{
                dispatch(fetchStart());

                const res = await fetch("https://swapi.dev/api/people")
                const data = await res.json();

                dispatch(fetchSuccess(data.results))


            }catch(err){    
                    dispatch(fetchError(err.message))
            }

        }


    }