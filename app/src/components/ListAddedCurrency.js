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
      const {quantity, price} = item
      const  totalPrice = ((quantity) * (price))
      return totalPrice.toFixed(2)
    }
   
    const calculateProfitOrLoss = (item, totalPrice) => {
      const {quantity, currency, price} = item
      const curr = exchange[currency]
      const calculateResult =   ((quantity) * (price) * (curr)) - ((quantity) * (price)) 

      const result = calculateResult.toFixed(2)

      if(totalPrice < result) {
        return <span> {result} ++ </span>
      } else {
        return <span> {result} -- </span>
      }
    }


      const renderBody = () => {
        
        return  currencyList.map(item => {
        const {quantity, currency, price, date, id} = item
        const currentRate= parseFloat(exchange[item.currency]);
              if(item) {
                return (
                  <Tr key={id}>
                  <Td>{currency}</Td>
                  <Td>{quantity}x</Td>
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