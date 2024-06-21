import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { BaseScreenWithNavbar } from '../../../../globalComponents';
import Announcement from "../../privateComponents/Announcement";
import Menu from "../../privateComponents/Menu";
import { OnboardFlow } from 'react-native-onboard';

const HomeScreen: React.FC<HomeScreenProps> = ({ announcement, applist, loading, tutorialDone, changeStatusOnBoard }) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  console.log(tutorialDone);

  return (
    <BaseScreenWithNavbar activeId={1}>
      <Announcement data={announcement} />
      <Menu data={applist} />
      {!tutorialDone &&
        <OnboardFlow
          pages={[
            {
              title: 'Welcome to my app',
              subtitle: 'Connect your bank account now and start saving money.',
              imageUri: 'https://frigade.com/img/demo.png'
            },
            {
              title: 'Buy cool stuff',
              subtitle: 'Remember that ice cream you wanted to buy?',
              imageUri: 'https://illlustrations.co/static/15d8c30e1f77fd78c3b83b9fca9c3a92/day81-ice-cream.png'
            },
            {
              title: 'The right tools',
              subtitle: 'Our app can do anything. Literally anything. We are that good.',
              imageUri: 'https://illlustrations.co/static/a547d1bc532ad86a13dd8f47d754f0a1/day77-pocket-knief.png'
            }
          ]}
          type={'bottom-sheet'}
          onDone={() => changeStatusOnBoard()}
        />
      }
    </BaseScreenWithNavbar>
  );
};

export default HomeScreen;
