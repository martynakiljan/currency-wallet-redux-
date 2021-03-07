import React from "react";
import {
AddedCurrencyTitle
} from '../style/Wallet.styled';
import { useSelector } from "react-redux";
import '../App.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
                  <Tr key={id}>
                  <Td>{currency}</Td>
                  <Td>{quality}x</Td>
                  <Td>{date}</Td>
                  <Td>{price} PLN </Td>
                  <Td>{currentRate}</Td>
                  <Td>{totalPrice(item)} {currency}</Td>
                  <Td>{calculateProfitOrLoss(item, totalPrice)} </Td>
                  </Tr>
                )
              } else {
                return null;
              }
                    
        });
       }


     const renderTable = () => {	
       return (	
         <Table id='tableItem' >	
               <Thead>	
                   <Tr>{renderHeader()}</Tr>	
               </Thead>	
               <Tbody>	
                      {renderBody()}	
               </Tbody>	
         </Table>	
       );	
     };
    return (
        <>
            <AddedCurrencyTitle>Added Currency:</AddedCurrencyTitle>
            <> { renderTable() } </>   
        </>
     
    )

}

export default ListAddedCurrency;