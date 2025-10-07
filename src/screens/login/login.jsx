import { View } from "react-native";
import {styles} from "./login.style";
import Header from "../../components/header/header";

function Login(){
    return(
        <View style={styles.container}>
            <Header texto='Acesse sua conta.'/>
        </View>
    )
}

export default Login;