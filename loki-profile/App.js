import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.bb961a61515c143c30cf73db13969e03?rik=lwYqZ3VIBa1vUA&pid=ImgRaw&r=0',
              }}
              style={{width: 150, height: 150}}
            />
        </View>
        <View style={styles.description}>
          <Text>Loki Laufeyson</Text>
          <Text>Rei de Asgard</Text>
        </View>
      </View>
      <ScrollView style={styles.scrool}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.dec834a1bfab2a941a6d8721d2a15056?rik=vmeihXZUYQesMg&pid=ImgRaw&r=0',
              }}
              style={{width: 200, height: 200}}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              defaultValue="You can type in me"
            />
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.UmzAcHpZp8OZMtqMDV3wOwHaHa?pid=ImgDet&rs=1',
              }}
              style={{width: 200, height: 200}}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              defaultValue="You can type in me"
            />
              <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.EE_yl-n5vYzfyBC1qN399gHaKl?pid=ImgDet&rs=1',
              }}
              style={{width: 200, height: 200}}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              defaultValue="You can type in me"
            />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    display: 'flex',
  },
  description: {
    width: 300,
    alignItems: 'center',
    padding:50,
    paddingRight: 130,
    color: 'white',
    backgroundColor: 'blue'
  },
  scrool:{
    backgroundColor: '#ddd9ce'
  }
});
