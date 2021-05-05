import React from 'react';
import {Text,View,TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { Picker} from '@react-native-community/picker';


const Formulario  = () => {
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                       style={styles.input}
                       placeholder="Ciudad"
                       placeholderTextColor= "#666"
                    />
                </View>
                 <View>
                     <Picker
                        itemStyle={{ height: 120, backgroundColor: '#FFF'}}
                     >
                        <Picker.Item label="--Seleccione un país --" value="" />
                        <Picker.Item label="Estados Unidos " value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Perú" value="PE" />
                     </Picker>
                 </View>

                    <TouchableWithoutFeedback>
                        <View
                            style={styles.btnBuscar}
                        >
                           <Text style={styles.textoBuscar}>Buscar Clima</Text> 
                        </View>
                    </TouchableWithoutFeedback>
            </View>
       
        </>
 );
}


const styles = StyleSheet.create({
   input:{
       padding: 10,
       height: 50,
       backgroundColor: '#FFF',
       fontSize: 20,
       marginBottom: 20,
       textAlign: 'center',
   },
   btnBuscar:{

   },
   textoBuscar:{
       
   } 

})
 
export default Formulario ; 