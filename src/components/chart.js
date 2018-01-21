import React from 'react';
import {Sparklines, SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import __ from 'lodash';

function average(data){
    return __.round(__.sum(data)/data.length);
}

export default (props)=>{
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color = {props.color}/>
                <SparklinesReferenceLine type ="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
    
}