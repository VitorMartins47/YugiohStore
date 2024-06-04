import { StatusBar, SafeAreaView } from "react-native";
import Routes from "./src/routes/routes";
import styles from "./src/styles/styles";

export default function App() {
  return (
    
      <SafeAreaView style={styles.tela}>
        <StatusBar />
        <Routes/>
      </SafeAreaView>
    
  );
}

