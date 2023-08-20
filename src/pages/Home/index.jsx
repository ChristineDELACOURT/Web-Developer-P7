import React from "react";
import { Link } from "react-router-dom";
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { Loader } from '../../utils/style/Atoms'
// import { useFetch, useTheme } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
import logementList from '../../datas/logementList.json'
import imageMer from '../../assets/image-mer-desktop.png'

const PageContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
`
const CardsContainer = styled.div`
  background:#f6f6f6;
  display: flex;
  flex-wrap: wrap;
  border-radius:10px;
  padding: 44px;
  justify-content: space-around;
  gap: 68px;
`

const ListeLogements = () => {
  return (
    <PageContainer>
      <Banner title='Chez vous, partout et ailleurs' cover={imageMer} />
        <CardsContainer>
              {logementList.map((card) => {      
        return (
          <article key={card.id}>
            <Link to={`/card/${card.id}`}>
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
