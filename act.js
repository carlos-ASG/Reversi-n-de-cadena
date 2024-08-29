function invertirPalabras(frase) {
    const palabras = frase.split(' ');
  
    palabras.reverse();
  
    const fraseInvertida = palabras.join(' ');
  
    return fraseInvertida;
  }
  
  const miFrase = "Hola mundo";
  const fraseInvertida = invertirPalabras(miFrase);
  console.log(miFrase);
  console.log(fraseInvertida);