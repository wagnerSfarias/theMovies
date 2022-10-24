
import React from 'react';
import {Container, NameGenres} from './styles';

export default function Genres({data}) {
 return (
   <Container>
    <NameGenres>{data.name}</NameGenres>
   </Container>
  );
}
