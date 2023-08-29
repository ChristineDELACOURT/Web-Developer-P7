import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const TitreAvisContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap:16px;
  flex-wrap: wrap;
  margin:25px 0px;
`
export const TitreContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const AvisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
`
export const IdentiteContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`
export const Titre = styled.h1`
  font-size: 36px;
  line-height: 51px;
`
export const SousTitre = styled.h2`
  font-size: 18px;
  line-height: 26px;
  margin:10px 0;
`
export const Host = styled.h4`
  width: 93px;
  height: 52px;
  font-size: 18px;
  line-height: 25.67px;
  text-align: right;
`
export const Picture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
export const DescriptionEquipementsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`
export const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`