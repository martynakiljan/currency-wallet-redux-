import React from "react";
import {
AddedCurrencyTitle
} from '../style/Wallet.styled';
import { useSelector } from "react-redux";
import '../App.css'


const ListAddedCurrency = () => {

    const currencyList = useSelector(state => state.localStorage.currencies)	
    const { exchange } = useSelector(state => state.api)
 
    let headerElement = ['currency', 'quantity', 'date', 'price', 'current rate', 'total', 'profit++ / loss--' ]


    const renderHeader = () => {	
        return headerElement.map((key, index) => {	
          return <th key={index}>{key.toUpperCase()}</th>	
        })	
      }


    const totalPrice = item => {
      const {quality, currency, price} = item
      const  totalPrice = ((quality) * (price) * (exchange[currency]))
      return totalPrice.toFixed(2);
    }
   
    const calculateProfitOrLoss = item => {
      const {quality, currency, price} = item
      const curr = exchange[currency]
      const calculateResult = (quality * price * curr) - (quality * curr) 

      const result = calculateResult.toFixed(2)

      if(totalPrice < result) {
        return <span> {result} ++ </span>
      } else {
        return <span> {result} -- </span>
      }
    }


      const renderBody = () => {
        
        return  currencyList.map(item => {
        const {quality, currency, price, date, id} = item
        const currentRate= parseFloat(exchange[item.currency]).toFixed(2);
              if(item) {
                return (
                  <tr key={id}>
                  <td>{currency}</td>
                  <td>{quality}x</td>
                  <td>{date}</td>
                  <td>{price} PLN </td>
                  <td>{currentRate}</td>
                  <td>{totalPrice(item)} {currency}</td>
                  <td>{calculateProfitOrLoss(item, totalPrice)} </td>
                  </tr>
                )
              } else {
                return null;
              }
                    
        });
       }


     const renderTable = () => {	
       return (	
         <table id='tableItem' >	
               <thead>	
                   <tr>{renderHeader()}</tr>	
               </thead>	
               <tbody>	
                      {renderBody()}	
               </tbody>	
         </table>	
       );	
     };
    return (
        <>
            <AddedCurrencyTitle>Added Currency:</AddedCurrencyTitle>
            <ul> { renderTable() } </ul>   
        </>
     
    )

}

export default ListAddedCurrency;