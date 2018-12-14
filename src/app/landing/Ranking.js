import React from 'react';
// import DocumentTitle from 'react-document-title';
// import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import RankingTable from './RankingTable';
// import Page4 from './Page4';
import Footer from './Footer';
import './static/style';
import styled from 'styled-components';

let isMobile = false;
// enquireScreen((b) => {
//   isMobile = b;
// });

class Ranking extends React.PureComponent {
  state = {
    id: this.props.id,
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    // enquireScreen((b) => {
    //   this.setState({
    //     isMobile: !!b,
    //   });
    // });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }

  render() {

    const sort = this.props.id || 'funding'

    return (
      [
        <Header key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
        <Banner key="banner" />,
        <RankingTable key="ranking" isMobile={this.state.isMobile} sort={sort}/>,
        <Footer key="footer" />
      ]
    );
  }
}
export default Ranking;