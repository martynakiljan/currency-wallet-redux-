import styled from 'styled-components'


export const WalletContainer = styled.div`

max-width: 900px;
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

@media (max-width: 760px) {
   font-size:10px;
   padding: 10px;
  }

@media (min-width: 760px) {
   font-size:16px;
   padding: 10px;
  }
`;

export const TitleForForm = styled.h2`
width: 100%;
text-align: center;
color: #484848;
font-weight: lighter;
padding: 10px;
box-shadow: 5px 5px 15px 5px #CECECE;
@media (min-width: 650px) {
   font-size: 20px;
  }
`;


export const Label = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-size:14px;
height: 50px;
@media (max-width: 650px) {
    width: 100%
}
@media (min-width: 650px) {
   font-size:16px;

  }


`;


export const Select = styled.select`
  display: block;
  font-family: sans-serif;
  font-size: 12px;
  color: #444;
  height: 30px;
  padding-left: 5px;
  width: 40%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  @media (max-width: 650px) {
    width: 50%;
    padding: 0;
}
@media (min-width: 650px) {
   font-size:16px;

  }


`;


export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  height: 30px;
  font-size: 16px;
  font-family: sans-serif;
  color: #444;
  padding: .6em 1.4em .5em .8em;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin-left: 40px;
  @media (max-width: 650px) {
    width: 100%;
    
  }
@media (min-width: 650px) {
   font-size:16px;
   line-height: 1rem;
   width: 60%;
  }


`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: white;
  font-size: 12px;
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  border: none;
  height: 35px;
  box-shadow: 5px 5px 17px 5px rgba(229,229,229,0.2);
  box-shadow: 5px 5px 15px 5px #CECECE;

  @media (min-width: 650px) {
   margin-top: 50px;
   width: 30%;
  }
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
