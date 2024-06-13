import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { BaseScreenWithNavbar } from '../../../../globalComponents';
import Announcement from "../../privateComponents/Announcement";
import Menu from "../../privateComponents/Menu";

const HomeScreen: React.FC<HomeScreenProps> = ({ announcement, applist, loading }) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <BaseScreenWithNavbar activeId={1}>
      <Announcement data={announcement} />
      <Menu data={applist} />
    </BaseScreenWithNavbar>
  );
};

export default HomeScreen;
