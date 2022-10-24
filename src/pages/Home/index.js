import React, {useEffect, useState} from 'react';
import { StatusBar, Dimensions, ActivityIndicator} from 'react-native';
import api from '../../services/api';
import { API_KEY } from "@env";
import Carousel from 'react-native-snap-carousel';
import Poster from '../../components/Poster';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getListMovies } from '../../../utils/movie';
import { useNavigation, useIsFocused} from '@react-navigation/native';

import { Container, CategoryTitle, ViewButtons, Button, ButtonText, ContainerLoading } from './styles'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

const width = Dimensions.get('screen').width;

export default function Home() {
    const[movies, setMovies] = useState(false)
    const[title, setTitle] = useState('Popular')
    const[category, setCategory] = useState('popular')
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(()=>{
      let isActive = true;
      async function getMovies(){
  
        const response = await api.get(`/movie/${category}?api_key=${API_KEY}&language=pt-BR&page1&region=BR`)
       
      if(isActive){
        const nowList =  getListMovies(15, response.data.results);
        setMovies(nowList)
       } 
      }
      getMovies();

      return ()=> {
        isActive= false;
      }

    },[category, isFocused])
  
    function click(t,b){
        setTitle(t);
        setCategory(b);
    }
    if (!movies) {
        return (
          <ContainerLoading>
            <ActivityIndicator color="#F40134" size={45} />
           </ContainerLoading>
        )
      } else {
 return (

   <Container paddingStatusBar={`${statusBarHeight + 'px'}`}>

    <StatusBar backgroundColor="transparent"  translucent={true} barStyle="light-content"/>
         
          <CategoryTitle>{title}</CategoryTitle>
  
     <ViewButtons horizontal={true}>
          
        <Button  onPress={()=> click('Popular','popular')} activeOpacity={0.7}>
           <Icon name="star" size={25} color='#FFF'/>
            <ButtonText>Popular</ButtonText>
        </Button>

        <Button onPress={()=> click('No Cinema','now_playing')} activeOpacity={0.7}>
          <Icon name="film" size={25} color='#FFF'/>
            <ButtonText>No Cinema</ButtonText>
        </Button>

        <Button onPress={()=> click('Bem-Avaliados','top_rated')} activeOpacity={0.7}>
           <Icon name="thumbs-up" size={25} color='#FFF'/>
            <ButtonText>Bem-Avaliados</ButtonText>
        </Button>
       
        <Button onPress={()=>navigation.navigate('Search')} activeOpacity={0.7}>
        <Icon name="search" size={25} color='#FFF'/>
            <ButtonText>Buscar</ButtonText>
        </Button>
    
      </ViewButtons>

        <Carousel
         data={movies}
         renderItem={({item}) => <Poster data={item}/>}
         sliderWidth={width}
         itemWidth={width-50}
         useScrollView={true}
         inactiveSlideScale={0.95}
         inactiveSlideOpacity={0.5}
         activeSlideAlignment={'start'}
         enableSnap={true}  
        />

   </Container>
  );
}
}