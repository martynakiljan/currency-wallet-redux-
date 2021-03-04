import styled from 'styled-components'


export const WalletContainer = styled.div`

width: 70%;
margin: 0 auto;
min-height: 500px;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,233,228,1) 100%);
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #CECECE;
`;


export const Title = styled.h1`
width: 100%;
text-align: center;
color: white;
padding: 40px;
font-size: 30px;
text-transform: uppercase;
`;


export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
margin: 0 auto;
`;

export const FormBox = styled.form`
display: flex;
flex-direction: column;
background-color: white;
margin: 0 auto;
width: 70%auto;
`;


export const TitleForForm = styled.h2`
width: 100%;
text-align: center;
color: #484848;
font-weight: lighter;
padding: 10px;
box-shadow: 5px 5px 15px 5px #CECECE;
`;


export const Label = styled.label`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;


`;


export const Select = styled.select`
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 40%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

`;


export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin-left: 40px;

`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: white;
  width: 20%;
  margin: 0 auto;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  border: none;
  height: 35px;
  box-shadow: 5px 5px 17px 5px rgba(229,229,229,0.2);
  box-shadow: 5px 5px 15px 5px #CECECE;

 
`;



export const AddedCurrencyTitle = styled.h3`
width: 100%;
text-align: center;
font-weight: lighter;
color: grey;

`;


export const List = styled.li`
display: flex;
width: 100%;
justify-content: space-around;
font-weight: bold;
border: 1px solid lightblue;


`;