import React from 'react';
import PropTypes from 'prop-types';
import Router from "next/router";
import { Card, Row, Col, Avatar, Button, Icon } from 'antd';
import styled from 'styled-components';

const ContactSection = styled.div`
    text-align: left;
    border-left: 1px solid #d9d9d9;
    padding-left: 40px;
`


export default function CompanyContact({ isMobile, isLoading, data }) {

const www = isLoading ? 'https://jpvcdb.co' : data.www
  
  return (
    <ContactSection>
        <Button type="primary" icon="link" href={www}>Open the Company Website</Button>
        <br />
        <br />

        <h2>Contact</h2>
        <div style={{ margin: 10, paddingLeft: 20 }}>
            <Button shape="circle" icon="twitter" />
            <Button shape="circle" icon="facebook" />
        </div>

        <br />
        <br />
        <h2>Address</h2>
        <div style={{ margin: 10, paddingLeft: 20 }}>
            <p>Shibuya, Tokyo</p>
            <p>Japan</p>
        </div>
        
        <br />
        <br />
        <h2>Location</h2>
        <div style={{ margin: 10, paddingLeft: 20 }}>
            <img src="https://via.placeholder.com/300" />
        </div>
    </ContactSection>
    );
}
CompanyContact.propTypes = {
    isMobile: PropTypes.bool,
    isLoading: PropTypes.bool,
    data: PropTypes.object,
  };