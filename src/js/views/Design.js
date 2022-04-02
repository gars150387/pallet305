import React from 'react'
import { DesignTemplate } from '../component/DesignTemplate';
import { DesignData } from '../component/DesignData';

export const Design = ( ) =>{
    const { img } = DesignData;
    console.log( img )
    return (
        <div>
            {DesignData.map(({img, index }) =>{
                return (
                    <DesignTemplate key={ index } img={ img }/>
                )
            } )}
        </div>
    )
}