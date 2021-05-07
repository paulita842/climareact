import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Formulario from './componentes/Formulario';


const App = () => {

  const [ busqueda, guardarBusqueda ] = useState( {
    ciudad: '',
    pais:'',
  });


  const [consultar, guardarConsulta] = useState(false);


  useEffect(() => {
    if(consultar) {
    
    } 
},[consultar] );


  const ocultarTeclado = () => {
    Keyboard.dismiss();

  }
  return ( 
    <>
    <TouchableWithoutFeedback onPress={ () => ocultarTeclado()}>
      <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario 
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsulta={guardarConsulta}
            
            
            />
          </View>
      </View>
      </TouchableWithoutFeedback>
      
    </>
  );
}
 
const styles = StyleSheet.create ({
  app:{
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',

  },
  contenido:{
    marginHorizontal: '2.5%',
    

  }

});



export default App;
