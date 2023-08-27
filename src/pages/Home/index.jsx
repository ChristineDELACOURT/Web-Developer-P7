import React , { useContext }from "react";
import { ThemeContext } from '../../utils/context';
import { Link } from "react-router-dom";
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logementList from '../../datas/logementList.json';
import imageMer from '../../assets/image_mer_desktop.png';

const PageContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`
const CardLink = styled(Link)`
  display: block;
  &:hover {
    cursor: pointer;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius:10px;
  padding: 44px;
  justify-content:space-around;
  align-content:space-around;
  gap: 50px;
`

function ListeLogements () {
  var mobile = useContext(ThemeContext);
  return (
    <PageContainer>
      <Banner title='Chez vous, partout et ailleurs' cover={imageMer}/>
        <CardsContainer style={{flexDirection:(mobile.mobile ? 'column' : 'row')}}>
              {logementList.map((card) => {      
        return (
            <CardLink  style={{width:(mobile.mobile ? '335px' : '340px')}}
            key={card.id} to={`/logement/${card.id}`}>
              <Card title={card.title} cover={card.cover}  />
            </CardLink>
        );
      })}
      </CardsContainer>
    </PageContainer>
  );
};

export default ListeLogements;
