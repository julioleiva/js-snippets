async function* fetchProducts() {
  while (true) {
    const productUrl = "https://fakestoreapi.com/products?limit=2";
    const res = await fetch(productUrl);
    const data = await res.json();
    yield data;
    // Aquí se puede **Manipular** la interfaz de usuario
    // O **Almacenar** el resultado de la llamada en una base de datos/API                  datos, y después utilizarlo como efecto secundario
    // O *Abortar* el proceso aunque se cumplan ciertas condiciones
  }
}

async function main() {
  const itr = fetchProducts();
  // Esta llamada está basada en la interacción del usuario
  // Aunque también puedes evitar la carga infinita con 'next()'
  console.log(await itr.next());
}

main();
