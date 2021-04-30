/**
 * 
 * This is the title components
 * 
 */

import React from 'react';

export interface Props {
    text: any,
}

const Question: React.FC<Props> = ({text}) => {
    return (
        
        <h3 style={{marginLeft: 100, marginRight: 100, backgroundColor: 'white', borderRadius: 5}}>
            {text}
        </h3>
        
        );
        }
    
    export default Question;

// styles
