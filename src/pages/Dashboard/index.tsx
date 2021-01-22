import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('profile');
  }, [navigate]);

  console.log(user.avatar_url);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: "https://avatars.githubusercontent.com/u/38335770?s=460&u=a5b1e9ff1a5b094e518862d3a098a880e753b443&v=4" }} />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
