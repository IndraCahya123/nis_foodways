import {useState} from 'react'; 

function useLoginForm(){
    const [values, setValues] = useState(false)

    const handledChange = setValues(true);

    return { values, handledChange };
}

export default useLoginForm;