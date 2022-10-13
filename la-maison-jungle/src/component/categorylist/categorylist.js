import "./categorylist.css";
import { plantList } from "../../data/listitem.js";




function CategoryList({ plantcategory , setplantcategory}) {

  let manyPlantCategory = [];

  for (let plant of plantList) {
    manyPlantCategory.push(plant.category);
  }
  
  let objectPlantCategory = new Set(manyPlantCategory);
  let plantCategoryUnique = [...objectPlantCategory];
 

  function selectCategory(category) {
    plantcategory = category;
    setplantcategory(plantcategory);
    
  }

  return (
    <div className="container-list-category">
      <div>Filtre par categorie de plante:</div>

      <ul className="list-category">
        <li className="li-category" onClick={() => setplantcategory("all")}>
          Afficher toutes les plantes
        </li>
        {plantCategoryUnique.map((plantCat) => {
          return (
            <li
              className="li-category"
              key={plantCat.id}
              onClick={() => selectCategory(plantCat)}
            >
              {plantCat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export {CategoryList}