import React from 'react';
import {Layout, Timeline, Progress, Menu, Breadcrumb, Button, DatePicker, version} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import Logo from '../assets/images/logo.svg';

function App() {
    const {Header, Content, Footer} = Layout;

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', display: 'flex'}}>
                <img src={Logo} alt='SportHUB' className='logo' style={{marginRight: '20px'}}/>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                    <Menu.Item key='1'>Программы</Menu.Item>
                    <Menu.Item key='2'>О проекте</Menu.Item>
                </Menu>
            </Header>
            <Content className='site-layout' style={{padding: '0 50px', marginTop: 64}}>
                <div className='container'>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='site-layout-background' style={{padding: 24, minHeight: 380}}>
                        <h1>antd version: {version}</h1>
                        <DatePicker/>
                        <Button type='primary' style={{marginLeft: 8}}>
                            Primary Button
                        </Button>
                        <Progress percent={50} status="active"/>
                    </div>
                    <Timeline mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                    </Timeline>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;
