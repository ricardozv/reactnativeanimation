import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import styles from './styles';
import Svg, { Image } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';

export default function App() {
  const { height, width } = Dimensions.get('window');
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle (() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height /2,0]);
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  });

  const loginHandler = () => {
    imagePosition.value = 0
  }

  
  return (
    <View style={styles.container}>
      <Animated.View style={[ StyleSheet.absoluteFill, imageAnimatedStyle ]}>
        <Svg height={height } width={width}>
          <Image 
            href={require('./assets/login-background.jpg')}
            width={width}
            height={height}
            preserveAspectRatio='xMidYMid slice'
          />
        </Svg>
        <View style={styles.closeButtonContainer}>
          <Text>
            Run
          </Text>
        </View>
      </Animated.View>

      <View style={styles.buttomContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            LOG IN
          </Text>
        </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              REGISTER
            </Text>
          </Pressable> 
          
      </View>
       {/* <View style={ styles.formInputContainer}>
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
</View> */}
    </View>
  );  
}
