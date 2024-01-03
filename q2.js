const capitalizarTitulos = (titulos) => {
    return titulos.map((titulo) => {
      const palavras = titulo.split(' ');
      const palavrasCapitalizadas = palavras.map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
      });
      return palavrasCapitalizadas.join(' ');
    });
  };
  
  const titulosLivros = ["o pequeno príncipe", "dom casmurro", "a metamorfose"];
  const titulosCapitalizados = capitalizarTitulos(titulosLivros);
  console.log(titulosCapitalizados);