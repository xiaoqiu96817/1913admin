import React from 'react'
import Loadable from 'react-loadable'
import './load.less'

const LoadableComponent =()=>{
    return (
        <div className='test'>
            loading 
        </div>
    )
  }
   
  export default Loadable({
      loader:()=>import('./index.js'),//需要被加载的组件
      loading:LoadableComponent //在加载过程中显示的过程组件
  }) 