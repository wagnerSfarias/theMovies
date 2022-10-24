import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #1F1F1F;
padding-top: ${(props)=>props.paddingStatusBar};
`;

export const CategoryTitle = styled.Text`
padding-bottom: 10px;
text-align: center;
font-size: 26px;
color: #FFF;
font-weight: bold;
/* width: 100%; */
`;

export const ViewButtons = styled.ScrollView`
 flex-direction: row;
 position: absolute;
 bottom: 2%;
 z-index: 1;
`;

export const Button = styled.TouchableOpacity`
padding: 10px;
align-items: center;
margin: 0 5px;
border-bottom-width: 5px;
border-width: 1px;
border-color: #F40134;
border-bottom-right-radius: 10px;
`;

export const ButtonText = styled.Text`
font-size: 16px;
color: #FFF;
`;

export const ContainerLoading = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #1F1F1F;
`;

