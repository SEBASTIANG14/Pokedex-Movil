import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, View } from 'react-native';
import Buscador from './componentes/buscador'; // Ajusta la ruta según la estructura de tu proyecto

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Función de búsqueda que puedes implementar según tus necesidades
  const search = (searchTerm) => {
    // Aquí implementarías la lógica de búsqueda y actualizarías setSearchResults con los resultados
    console.log('Realizando búsqueda:', searchTerm);
    // Ejemplo de actualización de resultados de búsqueda (vacío en este caso)
    setSearchResults([]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <Image
          source={require('./images/pokemon logo.png')}
          style={styles.logo}
        />
        {/* Aquí colocamos el componente Buscador */}
        <View style={styles.searchContainer}>
          <Buscador search={search} />
        </View>
      </View>
      <View style={styles.content}>
        {/* Otro contenido de tu aplicación */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Para alinear a la derecha
    height: 60,
    backgroundColor: 'red',
    paddingHorizontal: 10, // Espacio horizontal
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  searchContainer: {
    flex: 1, // Para que el componente Buscador ocupe todo el espacio disponible
    alignItems: 'flex-end', // Para alinear a la derecha dentro del espacio disponible
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


