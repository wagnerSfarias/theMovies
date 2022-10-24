import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #1F1F1F;
`;

export const Header = styled.View`
 flex-direction: row;
 padding: 3%;
 background-color: #1F1F1F;
`;

export const Input = styled.TextInput`
 width: 85%;
 height: 50px;
 background-color:#383737;
 margin-right: 1%;
 font-size: 20px;
 border-radius:10px;
 padding:0 10px;
 color: #FFF;
`;

export const ButtonSearch = styled.TouchableOpacity`
 width: 14%;
 height: 50px;
 align-items: center;
 justify-content: center;
 background-color: #F40134;
 border-radius: 25px;
`;

export const WarnText = styled.Text`
color:#F40134;
font-size:18px; 
text-align: center;
`;