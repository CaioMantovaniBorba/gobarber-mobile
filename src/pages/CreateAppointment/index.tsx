import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';
interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { providerId } = route.params as RouteParams;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar
          source={{
            uri:
              /* item.avatar_url */ 'https://avatars.githubusercontent.com/u/38335770?s=460&u=a5b1e9ff1a5b094e518862d3a098a880e753b443&v=4',
          }}
        />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
