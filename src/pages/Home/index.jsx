import React from "react";
import { Link } from "react-router-dom";
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { Loader } from '../../utils/style/Atoms'
// import { useFetch, useTheme } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
import logementList from '../../datas/logementList.json'
import imageMer from '../../assets/image-mer-desktop.png'

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-items: center;
`
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  width:100%;
  border-radius:0.8em;
  background: url('../../assets/image-mer-desktop.png');
  height: 223px;
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  color:#fff000;
`

//const PageSubtitle = styled.h2`
//  font-size: 20px;
//  color: ${colors.secondary};
//  font-weight: 300;
//  text-align: center;
//  padding-bottom: 30px;
//  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
//`

//const LoaderWrapper = styled.div`
//  display: flex;
//  justify-content: center;
//`

const ListeLogements = () => {
  const { theme } = useTheme()
  return (
    <PageContainer>
      <PageTitle theme={theme}>Chez vous, partout et ailleurs</PageTitle>
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
