import React from "react";
import validate from './validateInfo'
import useForm from './useForm'
import "../App.css"
import {
    FormBox,
    TitleForForm,
    Label,
    Select,
    Input,
    Button,
    Container
} from '../style/Wallet.styled'



  const Form = () => {
  const {handleChange, values, handleSubmit, errors} = useForm(validate)

  
    return (
      
       <FormBox onSubmit={handleSubmit}>
           <TitleForForm>Add a new currency and check the exchange rate!</TitleForForm>
       <Container>
       <Label>
           Currency:{" "}
           <Select name="currency" id="currency"  onChange={handleChange}>
           <option  selected disabled hidden required>Choose here</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="ISK">ISK</option>
                <option value="ZAR">ZAR</option>
                <option value="DKK">DKK</option>
                <option value="RON">RON</option>
            </Select>
            {errors.select && <p className="error">{errors.select}</p>}
           </Label>
       </Container>

        <Container>
          <Label>
             Quantity:{" "}
            <Input
              id="quality"
              type='number'
              name="quality"
              value={values.quality}
              onChange={handleChange}
              />
            {errors.quality && <p className="error">{errors.quality}</p>}
          </Label>
        </Container>
        <Container>
          <Label>
            Buy date:{" "}
            <Input
               id="date"
               type="date"
               name="date"
               value={values.date}
               onChange={handleChange}
               />
            {errors.date && <p className="error">{errors.date}</p>}
           </Label>
          </Container>

        <Container>
        <Label>
            Price:{" "}
            <Input
             id="price"
             type='number'
             name="price"
             value={values.price}
             onChange={handleChange}/>
            {errors.price && <p className="error">{errors.price}</p>}
          </Label>
        </Container>
        <Button type="submit">Save</Button>
  
       </FormBox>
    )


}

export default Form;