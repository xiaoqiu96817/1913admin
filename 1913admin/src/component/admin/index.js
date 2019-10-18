import React from 'react'
import './index.less'
class Admin extends React.Component{
    render(){
        return(
            <div className="admin">
                <div className='admin-nav'>
                    这里是导航
                </div>
                <div className='admin-content'>
                    <div>
                        头部信息
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                    <div>
                        底部信息
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin