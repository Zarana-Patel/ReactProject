import React from "react";
import BookingForm  from "./BookingForm";
import {useState,useReducer} from "react";
import { fetchAPI, submitAPI } from './api.js';
import Heading from "./Heading";
import {ChakraProvider,CSSReset,} from "@chakra-ui/react";
import '../css/style.css';

function bookingReducer(state,action){
  switch(action.type){
    case "SET_AVAILABLE_TIMES":
      return{
        ...state,availableTimes:action.res,
      };
        default:
          return state;
  }
 }
function Booking(){
  const [state, dispatch] = useReducer(bookingReducer, {availableTimes: [],});
  function initializeTimes(date) { 
    const res = fetchAPI(date);
    if(res) {
      dispatch({ type: "SET_AVAILABLE_TIMES", res });
    }
  }
  function submitForm(formData){
    return submitAPI(formData); 
  }
  return(
    <ChakraProvider>
      <Heading />
        <BookingForm initializeTimes={initializeTimes} availableTimes={state.availableTimes} submitForm={submitForm}/>
    </ChakraProvider>
  );
};
export default Booking;