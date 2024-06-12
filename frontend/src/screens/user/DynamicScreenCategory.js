import { View } from 'react-native';
import GeralScreen from '../../components/GeralScreen'

export default DynamicScreenCategory = ({ route }) => {
  // Obtém o ID do item selecionado da navegação
  const { ItemId } = route.params;

  // Função para renderizar o conteúdo com base no ID
  const renderContent = () => {
    switch (ItemId) {
      case '1':
        return <GeralScreen />;
      case '2':
        return <GeralScreen />;
      case '3':
        return <GeralScreen />;
      case '4':
        return <GeralScreen />;
      default:
        return <GeralScreen />;
    }
  };

  return (
    <View>
      {renderContent()}
    </View>
  );
};


