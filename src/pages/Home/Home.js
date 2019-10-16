import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/page-container'
import { Card } from '../../components/card'
import { getCityData  } from '../../services/get-city-data';

const CITIES = ['Dublin', 'São Paulo', 'Gold Coast']

const CityName = styled.h1`
  font-size: 21px;
`
const Degress = styled.span`
  font-size: 18px;
`

export const Home = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCitiesData = async () => {
      const cities = await Promise.all(CITIES.map(city => getCityData(city)));
      setCities(cities);
    };
    getCitiesData();
  }, []);


  return (
    <PageContainer>{
      cities.map(city => {
        const { name, main} = city;
        const { temp } = main;

        return (
          <Card key={`city-${city.name}`}>
            <CityName>{name}</CityName>
            <Degress>{parseInt(temp)}&#8451;</Degress>
          </Card>
        )
      })
    }</PageContainer>
  );
}

export default Home;
