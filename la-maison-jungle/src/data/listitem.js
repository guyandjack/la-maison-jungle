import aloe_vera_cover from "../../src/asset/cover_plant/aloe_vera.jpg"
import basilic_cover from "../../src/asset/cover_plant/basilic.jpg"
import ficus_lyrata_cover from "../../src/asset/cover_plant/ficus_lyrata.jpg"
import geranium_cover from "../../src/asset/cover_plant/geranium.jpg"
import monstera_cover from "../../src/asset/cover_plant/monstera.jpg"
import olivier_cover from "../../src/asset/cover_plant/olivier.jpg"
import pothos_argente_cover from "../../src/asset/cover_plant/pothos_argente.webp"
import succulente_cover from "../../src/asset/cover_plant/succulente.png"
import yucca_cover from "../../src/asset/cover_plant/yucca.webp"
 
 const plantList = [
   {
     name: "monstera",
     cover: monstera_cover,
     category: "classique",
     id: "1ed",
     isSpecialOffer: false,
     water: 1,
     light: 2,
   },
   {
     name: "ficus-lyrata",
     cover: ficus_lyrata_cover,
     category: "classique",
     id: "2ab",
     isSpecialOffer: false,
     water: 2,
     light: 3,
   },
   {
     name: "pothos-argenté",
     cover: pothos_argente_cover,
     category: "classique",
     id: "3sd",
     isSpecialOffer: true,
     water: 3,
     light: 4,
   },
   {
     name: "yucca",
     cover: yucca_cover,
     category: "classique",
     id: "4kk",
     isSpecialOffer: true,
     water: 4,
     light: 5,
   },
   {
     name: "olivier",
     cover: olivier_cover,
     category: "extérieur",
     id: "5pl",
     isSpecialOffer: true,
     water: 5,
     light: 1,
   },
   {
     name: "géranium",
     cover: geranium_cover,
     category: "extérieur",
     id: "6uo",
     isSpecialOffer: true,
     water: 1,
     light: 2,
   },
   {
     name: "basilique",
     cover: basilic_cover,
     category: "extérieur",
     id: "7ie",
     isSpecialOffer: false,
     water: 2,
     light: 3,
   },
   {
     name: "aloe",
     cover: aloe_vera_cover,
     category: "plante grasse",
     id: "8fp",
     isSpecialOffer: true,
     water: 3,
     light: 4,
   },
   {
     name: "succulente",
     cover: succulente_cover,
     category: "plante grasse",
     id: "9vn",
     isSpecialOffer: false,
     water: 4,
     light: 5,
   },
 ];

export {plantList}
