import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Table, Tag } from 'antd';
import styled from 'styled-components';
// import dynamic from 'next/dynamic'
// const Map = dynamic(() => import('../credentials/mapbox'), {
//   ssr: false
// });


const Page2Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

const PageHeader = styled.h1`
    text-align: center;
`

var mapboxgl = {}
if (process.browser) {
  mapboxgl = require('mapbox-gl')
}

mapboxgl.accessToken = 'pk.eyJ1IjoibW9mbG8iLCJhIjoidHo2M0hBMCJ9.W9Azve5aQ9VUNfI1dHOmvg'

export default class Page2 extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile: this.props.isMobile || false,
    lng: -71.020000,
    lat: 42.362400,
    zoom: 10.0
  };

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    if (process.browser) {
    
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/moflo/cjpm243u904ue2smu3hhen462',
        center: [lng, lat],
        zoom
      });
    
      map.on('move', () => {
        const { lng, lat } = map.getCenter();
    
        // this.setState({
        //   lng: lng.toFixed(4),
        //   lat: lat.toFixed(4),
        //   zoom: map.getZoom().toFixed(2)
        // })
      })
        
    }
  }

  render() {

  const DemoBox = props => <Card title={`Title: ${props.title}`}>{props.children}</Card>;

  const columns = [{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (text, record) => (
      <span>
        {record.tags.map(tag => <Tag color={tag} key={tag} style={{width: record.age+"%"}}>{record.age}</Tag>)}
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 22,
    address: 'New York No. 1 Lake Park',
    tags: ['blue', 'red'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['green'],
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['yellow', 'grey'],
}, {
    key: '4',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['green'],
  }, {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['#f06633', '#007bff'],
}, {
    key: '6',
    name: 'Jim Green',
    age: 11,
    address: 'London No. 1 Lake Park',
    tags: ['#007bff'],
  }, {
    key: '7',
    name: 'Joe Black',
    age: 40,
    address: 'Sidney No. 1 Lake Park',
    tags: ['#b8daff', 'grey'],
  }];
  

  return (
    <Page2Container>
      <PageHeader>Page Two</PageHeader> 
      <Row type="flex" justify="space-around" align="top">
        <Col span={5}><DemoBox title="Testing2">
        <Table columns={columns} dataSource={data} showHeader={false} size="small" pagination={false} bordered={false}/>
        </DemoBox></Col>
        <Col span={5}>
            <h2>Testing 3</h2>
            <Table columns={columns} dataSource={data} showHeader={false} size="small" pagination={false} bordered={false}/>
        </Col>
        <Col span={5}><DemoBox title="Testing2">
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" style={{ height: 300 }} />
        </DemoBox></Col>
      </Row>
    </Page2Container>
    );
  }
}
Page2.propTypes = {
  isMobile: PropTypes.bool,
};