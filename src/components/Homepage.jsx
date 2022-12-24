import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import {Typography,Row,Col,Statistic} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
const {Title} = Typography

const Homepage = () => {
  const {data,isFetching} = useGetCryptosQuery();
  console.log("data",data)

  return (
    <>
    <Title level={2} className='heading'>Global crypto stats</Title>
    <Row>
      <Col span={12}><Statistic title="total cryptocurrencies" value="5"/></Col>
      <Col span={12}><Statistic title="total Exchanges" value="5"/></Col>
      <Col span={12}><Statistic title="total Market cap" value="5"/></Col>
      <Col span={12}><Statistic title="total 24h volume" value="5"/></Col>
      <Col span={12}><Statistic title="total markets" value="5"/></Col>
    </Row>
    </>
  )
}

export default Homepage