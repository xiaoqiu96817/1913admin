import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd'
import './index.less'
class Login extends React.Component{
    submit=()=>{
        console.log('提交')
        // let result = this.props.form.getFieldsValue()
        // console.log(result)
        this.props.form.validateFields((err,data)=>{
            console.log(err,data)
            if(err){
                message.error('输入信息有误，请重试')
            }else{
                message.success('登陆成功，1s后跳入首页',1,()=>{
                    this.props.history.push('./admin')
                })
            }
        })
    }
    render(){
        const {getFieldDecorator}= this.props.form
        console.log(this,'登录组件')
        return(
            <div className="login">
                <div className="login-form">
                    <Form.Item> 
                        {getFieldDecorator('us',
                        {
                            rules: [{ required: true, message: '请正确输入你的用户名！' },
                                    { min: 6,message:'用户名长度6~9位'},
                                    { max: 9,message:'用户名长度6~9位'}],
                        })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('ps',{
                            rules: [{ required: true, message: '请正确输入你的用户名！' },
                                    { min: 9,message:'用户名长度9~16位'},
                                    { max: 16,message:'用户名长度9~16位'}],
                        })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />)}
                    </Form.Item>
                        <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" onClick={this.submit} className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)