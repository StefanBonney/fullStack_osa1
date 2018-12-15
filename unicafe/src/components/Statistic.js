import React from 'react' 


const Statistic = ({ text, tilasto, text2 }) => {
    return(
        <tr key={text}><td>{text}  </td><td>{tilasto} {text2}</td></tr>   
    )
        
} 

export default Statistic
