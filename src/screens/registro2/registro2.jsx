import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registro2.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button";

function Registro2() {
  return(
    <View style={styles.container}>
      <Header texto="Informe seu endereço." />

      <View style={styles.formGroup}>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBox label="Endereço" />
          </View>
          <View style={styles.form30}>
            <TextBox label="Compl." />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="Bairrro" />
        </View>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBox label="Cidade" />
          </View>
          <View style={styles.form30}>
            <TextBox label="UF" />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP"/>
        </View>

        <View style={styles.form}>
          <Button texto="Criar Minha Conta" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Registro2;
