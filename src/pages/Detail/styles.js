import styled from 'styled-components/native';

export const Container = styled.ScrollView`
flex: 1;
background-color: #1F1F1F;
padding-bottom: 20px;
`;

export const TitleMovie = styled.Text`
font-size: 28px;
font-weight: bold;
text-align: center;
color: #FFF;
`;

export const ContainerHeader = styled.View`
flex-direction: row;
align-items: center;
margin-top: 3%;
margin-bottom: 5%;
`;

export const ImageMovie = styled.Image`
margin: 0 5%;
width: 140px;
height: 220px;
margin-right: 35px;
`;

export const ContainerDetail = styled.View`
`;

export const SubTitle = styled.Text`
 font-size: 23px;
 font-weight:bold;
 padding: 8px 0;
 color: #FFF;
`;

export const ContainerDescription = styled.View`
flex-direction: row;
`;

export const DetailText = styled.Text`
 font-size: 20px;
 margin-left: 5px;
 color: #FFF;
`;

export const ContainerNoImage = styled.View`
    margin: 0 5%;
    height: 220px;
    width: 140px;
    justify-content: center;
    align-items: center;
    background-color: #AEAFB1;
`;

export const WarnImage = styled.Text`
`;


export const ContainerSinopse = styled.View`
`;

export const Title = styled.Text`
color:#FFF;
font-size: 25px;
padding-left:12px;
margin-top: 10px;
`;

export const TextSinopse = styled.Text`
padding: 0 14px;
margin: 5% 0;
font-size: 18px;
color: #FFF;
`;

export const WarnSinopse = styled.Text`
padding: 0 14px;
margin: 5% 0;
font-size: 18px;
color: #FFF;
`;

export const ButtonBack = styled.TouchableOpacity`
  background-color:#F40134;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 9%;
`;

export const Split = styled.View`
width:90%; 
height:1px;
background-color: #FFF;
margin-left: 10px;
`;