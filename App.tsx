// Atividade jogo da forca
// Débora Cristina Silva Ferreira (UC23200792)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  const letras = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
];

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Text>Pontos:</Text>
        <Text>Record:</Text>
      </View>
      <View>
        <Image style={styles.forca} source={{uri: "https://cdn-icons-png.flaticon.com/512/252/252192.png"}}/>
      </View>
      
      <View style={styles.teclado}>
        {letras.map((letra) => (
          <Pressable key={letra} style={styles.tecla} onPress={() => console.log('cliclou'
          )}>
            <Text>{letra}</Text>

      </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100
    
  },

  options: {
    gap: '30%',
    flexDirection: 'row'
  },

  forca: {
    width: 300,
    height: 300
  },

  teclado: {
  width: 300,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 5,
},

tecla: {
  width: 40,
  height: 40,
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,

},
  
});
