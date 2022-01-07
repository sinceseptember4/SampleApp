// 省略
import { List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// 省略
export const MainScreen = () => {
  const navigation = useNavigation();

  const onPressAdd = () => {
    navigation.navigate('Compose'); // (3)
  };

  return (
    <View style={styles.container}>
      <FlatList
      // 省略
      />
      {/* (1) */}
      <FAB
        style={{
          // (2)
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
      />
    </View>
  );
}