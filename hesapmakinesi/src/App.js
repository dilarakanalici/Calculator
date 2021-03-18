import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

/// Konum: React.js kullanımı, JSX sentaks,
// basit uygulama yapımı, rakip kütüphane/framework karşılaştırması, bazı özelleşmiş yapı tanımlamaları 
const { useState } = React;
class App extends React.Component{
  constructor (props){
    super(props);

var number =0;


this.state = {
  ekran:0,
  prevekran:0,
  islem:"a"
  
  }

  }
 

  handleClick = (event) => {
 var sonuc=0;
 
    
    if(event.target.value != "all-clear"|| "/" || "+ "|| "-" || "=" ||"*"){

  var pdeg=this.state.prevekran;
 
  var nevdeg= pdeg+(event.target.value);
  if(this.state.prevekran==0){
    nevdeg = nevdeg.substring(1,nevdeg.length);
    console.log(nevdeg);
  }
 
  this.setState((state, props) =>({
    prevekran:nevdeg,
    ekran:nevdeg ,
  }));

    } 
 

 if (event.target.value=="all-clear"){
  console.log("logg");
   console.log(this.state.prevekran);
   console.log(this.state.islem);
   console.log(this.state.ekran);
   console.log(this.state.ilksayi); // bu ikisini aynı alıyor
   console.log(this.state.ikincisayi);
  this.setState({ 
    ekran:0,
    prevekran:0,
  
  
  });
 
  
 }
 if (event.target.value=="="){
var sntnc=this.state.ekran;
var i=-1;
var ilksayi= 0;
var ikincisayi= 0;

if(i==-1){
 i= sntnc.indexOf("-");
var ilksayi= sntnc.slice(0,i);
var ikincisayi= sntnc.slice(i+1,sntnc.length);
sonuc= parseFloat(ilksayi)- parseFloat(ikincisayi);

}

if(i==-1){
  i= sntnc.indexOf("/");
 var ilksayi= sntnc.slice(0,i);
 var ikincisayi= sntnc.slice(i+1,sntnc.length);
 sonuc= parseFloat(ilksayi)/ parseFloat(ikincisayi);
 
 }

if(i==-1){
   i= sntnc.indexOf("+");   
   ilksayi= sntnc.slice(0,i);
 ikincisayi= sntnc.slice(i+1,sntnc.length);
 sonuc= parseFloat(ilksayi)+ parseFloat(ikincisayi);

}

if(i==-1){
   i= sntnc.indexOf("*");
    ilksayi= sntnc.slice(0,i);
ikincisayi= sntnc.slice(i+1,sntnc.length);
sonuc= parseFloat(ilksayi)* parseFloat(ikincisayi);
}
console.log(ikincisayi);
console.log(ilksayi);

this.setState({ ekran:sonuc });
 }


}


  
render (){

  return (
      
    <div class="main-class">
<div class="calculator" >

<input type="text" class="calculator-screen" value={this.state.ekran} disabled />

<div class="calculator-keys">

  <button type="button" class="operator" value="+" onClick={this.handleClick}>+</button>
  <button type="button" class="operator" value="-"onClick={this.handleClick}>-</button>
  <button type="button" class="operator" value="*" onClick={this.handleClick}>&times;</button>
  <button type="button" class="operator" value="/" onClick={this.handleClick}>&divide;</button>

  <button type="button" value="7" onClick={this.handleClick}>7</button>
  <button type="button" value="8" onClick={this.handleClick}>8</button>
  <button type="button" value="9"onClick={this.handleClick}>9</button>


  <button type="button" value="4" onClick={this.handleClick}>4</button>
  <button type="button" value="5" onClick={this.handleClick}>5</button>
  <button type="button" value="6" onClick={this.handleClick}>6</button>


  <button type="button" value="1" onClick={this.handleClick}>1</button>
  <button type="button" value="2" onClick={this.handleClick}>2</button>
  <button type="button" value="3" onClick={this.handleClick}>3</button>


  <button type="button" value="0" onClick={this.handleClick}>0</button>
  <button type="button" class="decimal" value="." onClick={this.handleClick}>.</button>
  <button type="button" class="all-clear" value="all-clear" onClick={this.handleClick}>AC</button>

 

</div>
<button type="button" class="equal-sign" value="="onClick={this.handleClick}>=</button>
</div>
</div>
  );
}
}
export default App;
