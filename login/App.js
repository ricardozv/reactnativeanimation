import { Text, View, Dimensions, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import Svg, { Image } from 'react-native-svg';

export default function App() {
  const { height, width } = Dimensions.get('window');
  
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height / 2} width={width}>
          <Image 
            href={require('./assets/login-background.jpg')}
            width={width}
            height={height}
            preserveAspectRatio='xMidYMid slice'
          />
        </Svg>
      </View>

      <View style={styles.buttomContainer}>
       {/* <View style={styles.button}>
          <Text style={styles.buttonText}>
            LOG IN
          </Text>
        </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>
              REGISTER
            </Text>
  </View> */}
      </View>
        <View>
          <TextInput 
            placeholder='Email'
            placeholderTextColor={"black"}
            style={styles.textInput}
            />

          <TextInput 
            placeholder='Full Name'
            placeholderTextColor={"black"}
            style={styles.textInput}
            />

          <TextInput 
            placeholder='Password'
            placeholderTextColor={"black"}
            style={styles.textInput}/> 
            <View style = {styles.formButton}>
              <Text style={styles.buttonText}> LOG IN </Text>

            </View>
        </View>
    </View>
  );  
}
