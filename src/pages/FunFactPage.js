import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FunFact from '../components/FunFact';
import Nav from '../components/Nav';



export default function FunFactPage(){
  return (
    <>
     <Nav/>
     <Header/>
      <FunFact/>
      <Footer/>
    </>
  );
}