import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import Login from './component/login'
import Admin from './component/admin'
import Home from './component/home'
import User from './component/user'
import CustomNav from './component/customNav'

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                {/* 导航 */}
                <CustomNav></CustomNav>
                {/* 路由渲染 */}
                <Redirect exact from='/' to='/login'></Redirect>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            <Route path='/admin/home' component={Home}></Route>
                            <Route path='/admin/user' component={User}></Route>
                        </Admin>
                    )
                }}></Route>
            </HashRouter>
        )
       
    }
}

export default RootRouter