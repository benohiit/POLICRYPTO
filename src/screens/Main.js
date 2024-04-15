//import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Calculation from '../sections/Calculation'
import CurrentRate from '../sections/CurrentRate'
import ListCurrencies from '../sections/ListCurrencies'
import Divider from '../components/ui/Divider'
import { useGetBTC, useGetCurr } from '../hooks/customHooks'

const Main = () => {
    const [getBitcoin, timeStamp, EUR, USD, GBP, isLoadingBTC, errorBTC] = useGetBTC()
    const [getAllCurrFromEuro, isLoadingCurr, errorCurr, responseCurr] = useGetCurr()
    useEffect(() => {
        getBitcoin()   //Need to be lunched a first time
        getAllCurrFromEuro()    //change only once a day, so we suppose we need to lunch it only once
        const interval = setInterval(() => {  //actualise crypto            
            //console.log("refresh");
            getBitcoin();
        }, 1500000);  //1 sec = 1000 
        return () => clearInterval(interval);
    }, []);

    return (
        // I choosed to let it in a single page frame, not in a scrollView
        // the fetch here for the children
        <>
            <CurrentRate rates={{ timeStamp: timeStamp, eur: EUR, usd: USD, gbp: GBP }} isLoading={isLoadingBTC} />
            <Divider />
            {
                responseCurr && EUR &&
                <ListCurrencies euroBTC={EUR} allCurr={responseCurr} />
            }
            <Divider />
            <Calculation />
        </>
    )
}

export default Main