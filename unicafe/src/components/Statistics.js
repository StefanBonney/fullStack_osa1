import React from 'react'
import Statistic from './Statistic'


const Statistics = ({hyva, neutraali, huono}) => {


    const keskiarvo = () => {
        const keski = hyva * 1 + neutraali * 0 + huono * -1
        const jaettava = hyva + neutraali + huono
        const x = keski / jaettava * 10
        const y = Math.ceil(x) 
        const kesk = y / 10
        return(kesk)
    }
    
    
   const positiivisia = () => {
        const a = neutraali + huono + hyva
        const b = hyva / a 
        const y = Math.ceil(b * 1000)
        const pos = y /10
        return(pos)
    }
    

    if (hyva + neutraali + huono > 0) {
        return(
            <div>  
                <h1>statistiikkaa</h1>
                
                <table>
                <tbody>    
                <tr><td>hyvä </td><td>{hyva}</td></tr>
                <tr><td>neutraali </td><td>{neutraali}</td></tr>
                <tr><td>huono </td><td>{huono}</td></tr>
                
                <Statistic text={'keskiarvo'} tilasto={keskiarvo()} text2={''}/>
                <Statistic text={'positiivisia'} tilasto={positiivisia()} text2={' %'}/>
                </tbody>                
                </table>

            </div> 
        )
    }else{
        return(
            <div>
                <h1>statistiikkaa</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>
         )
    }
}

    export default Statistics