import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"

function Login(props) {

  const [email, SetEmail] = useState('');
  const [senha, setSenha] = useState('');

  function ProcessarLogin(){
    console.log(email, senha);
  }

  return (
    <View style={styles.container}>
      <Header texto="Acesse sua conta." />

      <View style={styles.formGroup}>

        <View style={styles.form}>
          <TextBox label="E-mail" onChangeText={(texto) => {SetEmail(texto)}} value={email}/>
        </View>

        <View style={styles.form}>
          <TextBox label="Senha" isPassword={true} onChangeText={(texto) => {setSenha(texto)}} value={senha}/>
        </View>

        <View style={styles.form}>
          <Button texto= 'Acessar' onPress={ProcessarLogin}/>
        </View>

      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Registro')}>
            <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
