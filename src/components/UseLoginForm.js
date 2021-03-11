import {useState} from 'react'; 

function useLoginForm(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        console.log(values);
    }

    return { values, handleChange, handleSubmit };
}

export default useLoginForm;