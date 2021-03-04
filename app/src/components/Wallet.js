
import React from "react";
import Form from './Form'
import {
WalletContainer,
Title,
} from '../style/Wallet.styled'
import ListAddedCurrency from "./ListAddedCurrency";


const Wallet = () => {


    return (
        <>
        <WalletContainer>
           <Title>Your Wallet</Title>
           <Form/>
        </WalletContainer>
        <ListAddedCurrency/>
         </>
    )


}

export default Wallet;