import { Text, View , StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/header/Header.js';
import ProfileIconPanel from '../../components/profile/ProfileIconPanel.js';
import BasicInfoPanel from '../../components/profile/BasicInfoPanel.js';
import InterestsPanel from '../../components/profile/InterestsPanel.js';

export default function EntryProfileScreen() {
    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container}>
            <ProfileIconPanel></ProfileIconPanel>
            <BasicInfoPanel></BasicInfoPanel>
            {/* <InterestsPanel></InterestsPanel> */}
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  