import "./categorylist.css";
import { plantList } from "../../data/listitem.js";




function CategoryList(){

    let manyPlantCategory = [];

    for (let plant of plantList) {
    manyPlantCategory.push(plant.category);
    }
    console.log(manyPlantCategory);
    let objectPlantCategory = new Set(manyPlantCategory);
    let plantCategoryUnique = [...objectPlantCategory];
    console.log(plantCategoryUnique);

    function clickCat(category) {
    console.log(" tu as clicke sur la categorie " + category);
    }

    return(

        <ul className="list-category">
        {plantCategoryUnique.map((plantCat) => {
            return (
            <li
                className="li-category"
                key={plantCat.id}
                onClick={() => clickCat(plantCat)}
            >
                {plantCat}
            </li>
            );
        })}
        </ul>
    )
}

export {CategoryList}