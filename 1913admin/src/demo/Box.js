import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
class Box extends React.Component{
    render(){
        return(
            <div>
                <Box1></Box1>
                <Box2></Box2>
            </div>
        )
    }
}

export default Box