import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ImagePoster, ContainerTitle, Title } from './styles';

export default function SearchItem({ data }) {
    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.navigate('Detail', { id: data.id })}>
            <ImagePoster source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }} />
            <ContainerTitle>
                <Title numberOfLines={1}>{data?.title}</Title>
            </ContainerTitle>
        </Container>
    );
}
