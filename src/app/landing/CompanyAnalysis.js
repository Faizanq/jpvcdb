import React from 'react';
import PropTypes from 'prop-types';
import Router from "next/router";
import { Card, Row, Col, Avatar, Icon, Tabs } from 'antd';
import styled from 'styled-components';

const AnalysisContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f8f9fa;
 .ant-tabs-card > .ant-tabs-content {
    margin-top: -16px;
  }
  
  .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
      background: #fff;
      padding: 16px;
    }
    
  .ant-tabs-card > .ant-tabs-bar {
      border-color: #fff;
    }
    
  .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
      border-color: transparent;
      background: transparent;
    }
    
  .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
      border-color: #fff;
      background: #fff;
    }
`
const PageHeader = styled.h2`
    padding-bottom: 30px;
`

const TabPane = Tabs.TabPane

export default function Analysis({ isMobile }) {

  const { Meta } = Card;

  const onCardSelect = (e,props) => {
    const target = props.link || "exit"
    console.log("Select Card: ", target)
    Router.push(`/ranking?id=${target}`,`/ranking/${target}`)
  }

  const DemoMeta = props => (
  <Card hoverable={true} 
    onClick={(e) => { onCardSelect(e,props) } }
    >
    <Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={props.title}
        description={props.info}
    />
  </Card>
  )

  const DemoMetaAction = props => (
  <Card actions={[<Icon type="table">Details</Icon>]} hoverable={true} onClick={(e) => { onCardSelect(e,props) } }>
    <Meta avatar={<Icon type={props.icon} />}
        title={props.title}
        description={props.info}
    />
  </Card>
  )

  const DemoBox = props => (
  <Card hoverable={true} 
        title={props.title} 
        onClick={(e) => { onCardSelect(e,props) } }
        >
  {props.info}
  </Card>
  )

  return (
    <AnalysisContainer>
      <PageHeader>Company Analysis</PageHeader> 
      <Tabs
          defaultActiveKey="1"
          type="card"
          // tabBarStyle={{ color: "#00f", backgroundColor: "#fff", paddingTop: 0, paddingBottom: 0 }}
        >
          <TabPane tab={<span><Icon type="home" />Performance vs. Cohort</span>} key="1">

          <Row type="flex" justify="space-around" align="middle">
          <Col ><DemoMeta title="Top Funded" info="Top 100 companies by funding" link="funding" icon="pay-circle">Funding</DemoMeta></Col>
          <Col ><DemoMeta title="Top Exits" info="Top 100 companies by exit" link="exit" icon="rocket">Exit</DemoMeta></Col>
          </Row>
          <br />
          <Row type="flex" justify="space-around" align="top">
          <Col ><DemoMetaAction title="Top Exits" info="Top 100 companies by exit" link="exit" icon="rocket">Exit</DemoMetaAction></Col>
          <Col ><DemoMetaAction title="Top Employers" info="Top 100 companies by employees" link="employees" icon="team">Employees</DemoMetaAction></Col>
          </Row>
          <br />

          </TabPane>

          <TabPane tab={<span><Icon type="home" />vs. Sector</span>} key="2">

          <Row type="flex" justify="space-around" align="top">
          <Col ><DemoMetaAction title="Top Exits" info="Top 100 companies by exit" link="exit" icon="rocket">Exit</DemoMetaAction></Col>
          <Col ><DemoMetaAction title="Top Employers" info="Top 100 companies by employees" link="employees" icon="team">Employees</DemoMetaAction></Col>
          </Row>
          <br />
          <Row type="flex" justify="space-around" align="top">
          <Col ><DemoBox title="Top Funded" info="Top 100 companies by funding" link="funding" icon="pay-circle">Funding</DemoBox></Col>
          <Col ><DemoBox title="Top Exits" info="Top 100 companies by exit" link="exit" icon="rocket">Exit</DemoBox></Col>
          <Col ><DemoBox title="Top Employers" info="Top 100 companies by employees" link="employees" icon="team">Employees</DemoBox></Col>
          </Row>

          </TabPane>

      </Tabs>
    </AnalysisContainer>
    );
}
Analysis.propTypes = {
  isMobile: PropTypes.bool,
};