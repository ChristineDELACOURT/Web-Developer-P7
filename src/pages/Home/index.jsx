import React , { useContext }from "react";
import { ThemeContext } from '../../utils/context';
import  { useMediaQuery }  from  'react-responsive'
import { Link } from "react-router-dom";
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logementList from '../../datas/logementList.json';
import imageMer from '../../assets/image_mer_desktop.png';

const PageContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
`
const CardsContainer = styled.div`
  background:${colors.ternary};
  display: flex;
  flex-wrap: wrap;
  border-radius:10px;
  padding: 44px;
  justify-content: space-around;
  gap: 68px;
`

function ListeLogements () {
  var mobile = useContext(ThemeContext);
  console.log('mobile dans Home :' , mobile);
  return (
    <PageContainer>
      <Banner title='Chez vous, partout et ailleurs' cover={imageMer} />
        <CardsContainer>
              {logementList.map((card) => {      
        return (
          <article key={card.id}>
            <Link to={`/logement/${card.id}`}>
              <Card title={card.title} cover={card.cover}  />
            </Link>
          </article>
        );
      })}
      </CardsContainer>
    </PageContainer>
  );
};

export default ListeLogements;
