import React from 'react';
import Iframe from '@trendmicro/react-iframe';



const Map = (props) => {
    const to=props.to
    
   
    return (
        <Iframe
            src={`https://maps.google.com/maps?q=${to},BANGLADESH&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            style={{height: '80vh', width: '95%', borderRadius: '10px'}}
        />
    )
};

export default Map;