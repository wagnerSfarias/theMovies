import React, { useState, useEffect, useLayoutEffect } from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { API_KEY } from "@env";
import Genres from '../../components/Genres';
import Actors from '../../components/Actors';
import { getListMovies } from '../../../utils/movie';
import { getTime } from '../../../utils/time';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { format } from 'date-fns';

import { Container, 
  TitleMovie, 
  ContainerHeader, 
  ImageMovie, 
  ContainerDetail,
  SubTitle, 
  ContainerDescription, 
  DetailText, 
  ContainerNoImage, 
  WarnImage, 
  ContainerSinopse, 
  Title,
  TextSinopse, 
  WarnSinopse, 
  ButtonBack,
  Split } from './styles';

import { ContainerLoading } from '../Home/styles';

export default function Detail() {
  const navigation = useNavigation();
  const [data, setData] = useState(false);
  const [person, setPerson] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
   
  const route = useRoute();

  useEffect(() => {
    
    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}?api_key=${API_KEY}&language=pt-BR`)
      const res = await api.get(`/movie/${route.params?.id}/credits?api_key=${API_KEY}&language=pt-BR`)

      const size = Object.keys(res.data.cast).length;
      const actors = getListMovies(size, res.data.cast);
      const time = getTime(response.data.runtime);
      const date = format(new Date(response.data.release_date), 'dd/MM/yyyy');
    
      setDate(date);
      setData(response.data);

      setPerson(actors);
      setTime(time);
      
    }
    getMovie();
  }, [])

  useLayoutEffect(()=>{

    navigation.setOptions({
        headerLeft:()=>(
            <ButtonBack onPress={handleBack} activeOpacity={0.6}>
                <Icon name='arrow-left' size={25} color='#FFF'/>
            </ButtonBack>
        )
    })
},[])

  function handleBack() {
    navigation.goBack();
  }

  if (!person) {
    return (
        <ContainerLoading>
          <ActivityIndicator color="#F40134" size={45} />
        </ContainerLoading>
    
    )
  } else {
    return (
      <Container>
     
        <TitleMovie numberOfLines={3}>{data?.title}</TitleMovie>
       
          <ContainerHeader>
          {data.poster_path === null ? (
            <ContainerNoImage>
              <WarnImage>Filme sem imagem</WarnImage>
            </ContainerNoImage>
          ) : (
            <ImageMovie source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }} />
          )}
          
          <ContainerDetail>

            <SubTitle> Duração</SubTitle>

            <ContainerDescription>
              <Icon name="clock" size={25} color='#FFF' />
              <DetailText>{time}</DetailText>
            </ContainerDescription>
           
            <SubTitle>Lançamento</SubTitle>
            <ContainerDescription>
              <Icon name="calendar-alt" size={25} color='#FFF' />
              <DetailText>{date}</DetailText>
            </ContainerDescription>

          </ContainerDetail>
          </ContainerHeader>
      
        
        <FlatList
          data={data?.genres}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Genres data={item} />}
        />

   
        {data.overview !== null? (<ContainerSinopse>
         <Title>Sinopse</Title>
          <Split></Split>
          <TextSinopse>{data.overview}</TextSinopse>
        </ContainerSinopse>
          ) :
          (<WarnSinopse>.....No momento não temos a descrição do filme</WarnSinopse>)}

         <Title>Atores</Title>
         <Split></Split>

        <FlatList
          data={person}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Actors data={item} />}
        />
      
      </Container>
    );
  }
}
