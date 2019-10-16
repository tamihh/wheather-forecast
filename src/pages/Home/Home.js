import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/page-container'
import { getWheatherByCity } from '../../services/api'

const CITIES = ['Dublin', 'São Paulo', 'Gold Coast']

const Card = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`

const CityName = styled.h1`
  font-size: 21px;
`
const Degress = styled.span`
  font-size: 18px;
`

export const Home = () => {
  const [cities, setCities] = useState([]);

  const getCityData = async cityName => {
    const url = getWheatherByCity(cityName);
    const res = await fetch(url);
    const json = await res.json();
    const data = json;

    return data;
  };

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
