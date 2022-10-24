import React from 'react';
import {Container, ImagePoster, WarnContainer, WarnText, Title} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Poster({data}) {

     const navigation = useNavigation();
   
 return (
   <Container onPress={()=>navigation.navigate('Detail',{id:data.id})} activeOpacity={0.5}>

    {
        data.poster_path === null?
        (<WarnContainer>
            <WarnText>Filme sem imagem</WarnText>
            <Title>{data.title}</Title>
        </WarnContainer>):
        
        ( <ImagePoster
        source={{uri:`https://image.tmdb.org/t/p/original${data.poster_path}`}}/>)
    }
  
   </Container>
  );
}

