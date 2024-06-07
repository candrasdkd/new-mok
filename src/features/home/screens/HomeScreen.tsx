// src/components/Home/HomeScreen.tsx

import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { BaseScreen } from '../../../globalComponents';
import Announcement from "../privateComponents/Announcement";

const HomeScreen: React.FC<HomeScreenProps> = ({ announcement, loading, onLogout }) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <BaseScreen>
      <Announcement data={announcement}/>
      <Button title="Logout" onPress={onLogout} />
    </BaseScreen>
  );
};

export default HomeScreen;
