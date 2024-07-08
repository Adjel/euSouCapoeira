"use client";

const Page = ({ params }) => {
  /*
  if (!slug) {
    // Si le slug n'est pas encore défini (ex: lors du chargement initial), tu peux retourner un état de chargement
    return <div>Loading...</div>;
  }
    */

  //const slugString = Array.isArray(slug) ? slug.join("/") : slug;

  /*
    // Logique pour déterminer quel type de page afficher
  if (slugString.startsWith('productCategory')) {
    return <ProductCategoryPage slug={slugString} />;
  } else if (slugString.startsWith('category')) {
    return <CategoryPage slug={slugString} />;
  } else {
    return <NotFoundPage />;
  }
  
  OU 
  
  if (slug.includes("productCategory")) {
    // Logique pour les produits
    return <div>Page de catégorie de produit: {slug}</div>;
  } else {
    // Logique pour les catégories
  return <h1>{slug}</h1>;
}
*/

  /**
 * 
const bears = useStore((state) => state.bears);
const increasePopulation = useStore((state) => state.increasePopulation);
const removeAllBears = useStore((state) => state.removeAllBears);
*/

  return <div>{params.slug}</div>;
};

export default Page;
