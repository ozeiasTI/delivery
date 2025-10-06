import { Text } from 'react-native';
import { styles } from './style';
import Button from './src/components/button/button';

export default function App() {

  return (
      <>
        <Text style={styles.textos}>Hello Word</Text>
        <Button texto='Botao'/>
      </>
  );
}
