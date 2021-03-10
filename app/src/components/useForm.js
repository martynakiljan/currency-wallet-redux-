
import { useEffect } from "react";
import {useState} from 'react'
import uuid from 'react-uuid'
import {loadExchangeAction}  from '../api/action'
import {addCurrency, saveDatainLS, loadDataFromLS}  from '../localStorage/action'
import { useDispatch} from "react-redux";
import {getCurrentRate} from '../api/action'


const useForm = (validate) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadExchangeAction())   
        dispatch(loadDataFromLS())   
    }, [dispatch])
    


    const [values, setValues] = useState({
       currency: '',
       quantity: '',
       date: '',
       price: '',
    })




    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
     
        const err = validate(values);
        setErrors(err)
        console.log(values)
       
     
        if(err.length === 0) {
           const currencyList = {
            id: uuid(),
            ...values,
          };

            const {date, currency} = values;
            dispatch(addCurrency(currencyList))
            dispatch(getCurrentRate(date, currency))
            dispatch(saveDatainLS())
                

            setValues({
               ...values,
               quantity: '',
               date: '',
               price: '',
            })
       
        }
   
    }
 

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;