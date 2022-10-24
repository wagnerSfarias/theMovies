import React, {useState, useLayoutEffect} from 'react';
import { FlatList, Keyboard} from 'react-native';
import api from '../../services/api';
import { API_KEY } from "@env";
import SearchItem from '../../components/SearchItem';
import { getListMovies } from '../../../utils/movie';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ButtonBack } from '../Detail/styles';
import { Container, Header, Input, ButtonSearch, WarnText} from './styles';

export default function Search() {
    const navigation = useNavigation();
    const[ input, setInput] = useState('');
    const[ movies, setMovies] = useState([]);
    useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft:()=>(
                <ButtonBack onPress={handleBack} activeOpacity={0.6}>
                    <Icon name='arrow-left' size={25} color='#FFF'/>
                </ButtonBack>
            )
        })
    },[])

   async function Search(){
        if(input === '') return;
        const response = await api.get(`search/movie?api_key=${API_KEY}&query=${input}&language=pt-BR&page1`)
      
        if(response.data.results.length === 0){
            Keyboard.dismiss();
            setMovies('');
            setInput('');
            return;
        }else{
            const nowList = getListMovies(10, response.data.results);
            setMovies(nowList)
            Keyboard.dismiss();
            setInput('');
        }
    }

    function handleBack() {
        navigation.goBack();
      }
    

 return (
   <Container>
         <Header>
            <Input 
              placeholder="buscar....."
              placeholderTextColor="#FFF"
              value={input}
              autoCorrect={false}
              onChangeText={(text)=> setInput(text)}/>

            <ButtonSearch onPress={Search} activeOpacity={0.6}>
               <Icon name="search" size={25} color='#FFF'/>
            </ButtonSearch>
         </Header>
       
         {movies ?(
            <FlatList
            horizontal={true}
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <SearchItem data={item}/>}
            />
         ):<WarnText>Não encontramos o filme desejado, verifique se o nome está correto!</WarnText>}
       
   </Container>
  );
}