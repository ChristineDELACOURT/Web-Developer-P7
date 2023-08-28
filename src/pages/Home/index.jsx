import React , { useContext }from "react";
import { ThemeContext } from '../../utils/context';
// Import des composants
import { PageContainer } from '../../css/Home';
import { CardLink } from '../../css/Home';
import { CardsContainer } from '../../css/Home';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import logementList from '../../datas/logementList.json';
import imageMer from '../../assets/image_mer_desktop.png';

function Home () {
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

export default Home;
