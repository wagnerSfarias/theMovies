import React from 'react';
import {Container, ImageActor, Name, Character} from './styles';

export default function Actors({data}) {
 return (
   <Container>

    {data.profile_path === null?(   
        <ImageActor source={{uri:'https://letrasjuridicas.com.br/product_images/AuthorDefaultImage.png'}}/>   
    ):
    (    
       <ImageActor source={{uri:`https://image.tmdb.org/t/p/original${data?.profile_path}`}}/>   
    )}
    
    <Name numberOfLines={1}>{data?.name}</Name>
  
    <Character numberOfLines={1}>{data?.character}</Character>
    
   </Container>
  );
}
