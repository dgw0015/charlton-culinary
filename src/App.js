import React, {useState} from 'react';
import './App.css';
import bananaBread from "./images/banana bread long view.JPG";
import chocStrawberryCake from "./images/choco & strawberries side view.JPG";
import faccacioBread from "./images/foccacio bread.JPG";
import gelato from "./images/gelato.JPG";
import portaBella from "./images/stuffed portobello side view.JPG";
import porkLionPlate from "./images/pork loin plate.JPG";
import lasagna from "./images/top view lasagna.JPG";
import porkLoinLong from "./images/pork loin long view.JPG";
import {BsBoxArrowInUpLeft} from "react-icons/bs";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {RiPinterestFill} from "react-icons/ri";
import {Button, Card, CardBody, Collapse, Table, Row, Col, Label} from 'reactstrap';
import boilingWater from "./images/Week_1/BoilingWater.jpg";
import iceBath from "./images/Week_1/IceBath.jpg";
import peelSkinBack from "./images/Week_1/peelSkinBack.jpg";
import seedRemoval from "./images/Week_1/SeedRemoval.jpg";
import skinSeparation from "./images/Week_1/SkinSeparation.jpg";
import beefStockRecipe from './images/Week_2/BeefStickRecipe.PNG';
import chickenStock from './images/Week_2/Recipe.PNG';
import creameOfTomatoSoupRecipe from './images/Week_2/CreamOfTomatoSoup.PNG';
import beefStickPrepList from './images/Week_2/brown stock prep list.png';
import chickenStockPrepList from './images/Week_2/chicken stock prep list.png';
import tomatoSoupPrepList from './images/Week_2/cream of tomato soup prep list.png';
import brownStockNoFat from './images/Week_2/brown stock NO fat.JPG';
import brownStockWithFat from './images/Week_2/brown stock with fat.JPG';
import chickenStockNoFat from './images/Week_2/chicken stock NO fat.JPG';
import chickenStockWithFat from './images/Week_2/chicken_stock with fat.jpg';
import creamOfTomatoSoup from './images/Week_2/cream_of_tomato_soup.jpg';
import foodCostBrownStock from './images/Week_2/food cost - brown stock.xlsx';
import foodCostChickenStock from './images/Week_2/food cost - chicken stock.xlsx';
import foodCostCreameOfTomato from './images/Week_2/food cost - cream of tomato.xlsx';
import wk5ConsommePrepList from './images/Week_5/PrepList/consomme.png';
import wk5LeekAndPotatoSoupPrepList from './images/Week_5/PrepList/LeekAndPotatoSoup.png';
import wk5ConsommeRecipe from './images/Week_5/Recipe/ConsommeRecipe.PNG';
import wk5LeekPotatoSoupRecipe from './images/Week_5/Recipe/LeekAndPotatoSoupRecipe.PNG';
import wk5BeefConsommeExcel from './images/Week_5/FoodCost_beef.xlsx';
import wk5LeekPotatoSoupExcel from './images/Week_5/FoodCost_LP.xlsx';
import wk5ReflectBeefWithGar from './images/Week_5/Reflect/beef_with_garnish.jpg';
import wk5ReflectClearConsomme from './images/Week_5/Reflect/clear consomme.jpg';
import wk5ReflectRaft from './images/Week_5/Reflect/consomme with raft.jpg';
import wk5ReflectLpSoup from './images/Week_5/Reflect/leek_&_potato_soup.jpg';
import wk5ReflectLpSoupBeforeBlend from './images/Week_5/Reflect/LP_soupBeforeBlend.jpg';
import wk6PrepListMashedPotatoes from './images/Week_6/PrepList/garlicMashedPotatoes.png';
import wk6PrepListRoastedChicken from './images/Week_6/PrepList/roastedChicken.png';
import wk6PrepListVeloute from './images/Week_6/PrepList/Veloute.png';
import wk6RecipePotatoes from './images/Week_6/Recipe/MashedPotatoesRecipe.PNG';
import wk6RoastedChickenRecipe from './images/Week_6/Recipe/RoastedChickenRecipe.PNG';
import wk6SauceRecipe from './images/Week_6/Recipe/SauceRecipe.PNG';
import wk6ReflectBlondeRoux from './images/Week_6/Reflection/blondeRoux.jpg';
import wk6ReflectFinalPlate from'./images/Week_6/Reflection/final_plate.jpg';
import wk6ReflectMashedPotatoes from './images/Week_6/Reflection/mashedPotatoes.JPG';
import wk6ReflectRoastedChickec from './images/Week_6/Reflection/roasted_chicken.jpg';
import wk6ReflectSupremeSauce from './images/Week_6/Reflection/supreme_sauce.jpg';
import wk6FoodCostPotatoes from './images/Week_6/FoodCost1.xlsx';
import wk6FoodCostChicken from './images/Week_6/FoodCost2.xlsx';
import wk6FoodCostSauce from './images/Week_6/FoodCost3.xlsx';
import wk7PanFriedChickenPrepList from './images/Week_7/PrepList/panFriedChickenPrepList.png';
import wk7PotatoPrepList from './images/Week_7/PrepList/potatoPrepList.png';
import wk7RatatouillePrepList from './images/Week_7/PrepList/ratatouillePrepList.png';
import wk7PanFriedChickenRecipe from './images/Week_7/Recipe/panFriedChicken.PNG';
import wk7PotatoDauph from './images/Week_7/Recipe/potatoDauph.PNG';
import wk7Rata from './images/Week_7/Recipe/ratatouille.PNG';
import wk7FoodCostDauphin from './images/Week_7/FoodCost_dauphinoise.xlsx';
import wk7FoodCostFriedChicken from './images/Week_7/FoodCost_friedChicken.xlsx';
import wk7FoodCostRata from './images/Week_7/FoodCost_rata.xlsx';
import wk7ReflectDauphPotato from './images/Week_7/Reflection/dauphinoise potatoes.jpg';
import wk7ReflectDicedVegetables from './images/Week_7/Reflection/medium diced vegetables.jpg';
import wk7ReflectPotatoesInGarlicCream from './images/Week_7/Reflection/potatoes in garlic infused cream.jpg';
import wk7ReflectRata from './images/Week_7/Reflection/ratatouille.jpg';
import wk7ReflectFinalPlate from './images/Week_7/Reflection/finalPlate.jpg';
import wk8GreenBeanPrepList from './images/Week_8/PrepList/GreenBeanPrepList.png';
import wk8LyonPotatoesPrepList from './images/Week_8/PrepList/LyonPotatoesPrepList.png';
import wk8PorkEscalopePrepList from './images/Week_8/PrepList/PorkEscalopePrepList.png';
import wk8RecipeGreenBeans from './images/Week_8/Recipe/GreenBeans.PNG';
import wk8RecipeLyonPotatoes from './images/Week_8/Recipe/LyonPotatoes.PNG';
import wk8RecipePork from './images/Week_8/Recipe/Pork.PNG';
import wk8FoodCostLyns from './images/Week_8/foodCost-lynsPotatoes.xlsx';
import wk8FoodCostPork from './images/Week_8/foodCost-pork.xlsx';
import wk8FoodCostGreenBeans from './images/Week_8/foodCost-greenBeans.xlsx';
import wk8FinalPlate from './images/Week_8/Reflection/finalPlate.jpg';
import wk8LyonsPotatoes from './images/Week_8/Reflection/Lyonnaise potatoes.jpg';
import wk8PotatoesBrowning from './images/Week_8/Reflection/potatoes browning.jpg';
import wk8SauceReducing from './images/Week_8/Reflection/sauce reducing in pan.jpg';
import wk9CarrotsPrepList from './images/Week_9/PrepList/glazedCarrotsPrepList.png';
import wk9RisottoPrepList from './images/Week_9/PrepList/risottoPrepList.png';
import wk9SeaBassAndSaucePrepList from './images/Week_9/PrepList/seaBassAndSaucePrepList.png';
import wk9CarrotsRecipe from './images/Week_9/Recipe/glazedCarrots.PNG';
import wk9SauceRecipe from './images/Week_9/Recipe/hollandaiseSauceRecipe.PNG';
import wk9SeaBassRecipe from './images/Week_9/Recipe/seaBassRecipe.PNG';
import wk9RisottoRecipe from './images/Week_9/Recipe/risottoRecipe.PNG';
import wk9FoodCostCarrots from './images/Week_9/FoodCost/FoodCost-Carrots.xlsx';
import wk9FoodCostFish from './images/Week_9/FoodCost/FoodCost-Fish.xlsx';
import wk9FoodCostRisotto from './images/Week_9/FoodCost/FoodCost-Risotto.xlsx';
import wk9FoodCostSauce from './images/Week_9/FoodCost/FoodCost-sauce.xlsx';
import wk9ReflectFinalPlate from './images/Week_9/Reflect/final plate.jpg';
import wk9ReflectRisotto from './images/Week_9/Reflect/risotto after absorbing stock.jpg';
import wk9ReflectRisottoCooking from './images/Week_9/Reflect/risotto cooking.jpg';
import wk9ReflectCarrots from './images/Week_9/Reflect/sauteeing carrots.jpg';
import wk10RecipeRice from './images/Week_10/Recipe/rice.PNG';
import wk10RecipeCauliflower from './images/Week_10/Recipe/Cauliflower.PNG';
import wk10RecipeSauce from './images/Week_10/Recipe/tomatoSauce.PNG';
import wk10RecipeFish from './images/Week_10/Recipe/wk10Fish.PNG';
import wk10PrepListCauliflower from './images/Week_10//PrepList/cauliflowerPrepList.png';
import wk10PrepListFishAndSauce from './images/Week_10/PrepList/fishAndTomatoSaucePrepList.png';
import wk10PrepListRice from './images/Week_10/PrepList/ricePilafPrepList.png';
import wk10FoodCost1 from './images/Week_10/FoodCost/FoodCost-CauliflowerMornay.xlsx';
import wk10FoodCost2 from './images/Week_10/FoodCost/FoodCost-FishFilet.xlsx';
import wk10FoodCost3 from './images/Week_10/FoodCost/FoodCost-RicePilaf.xlsx';
import wk10ReflectCauliflower from './images/Week_10/Reflect/CauliflowerMornayBeforeOven.jpg';
import wk10ReflectFishAfterPoach from './images/Week_10/Reflect/FishAfterPoaching.jpg';
import wk10ReflectMornaySauce from './images/Week_10/Reflect/MornaySauce.jpg';
import wk10ReflectRicePilafBeforeStock from './images/Week_10/Reflect/RicePilafBeforeStock.jpg';
import wk10ReflectSeasonedTilapia from './images/Week_10/Reflect/SeasonedTilapiaBeforePoaching.jpg';
import wk11BroccoliPrepList from './images/Week_11/PrepList/broccoliPrepList.png';
import wk11ChickenFricasseePrepList from './images/Week_11/PrepList/chickenFricasseePrepList.png';
import wk11FettuccineCarbonaraPrepList from './images/Week_11/PrepList/fettuccineCarbonaraPrepList.png';
import wk11BroccoliRecipe from './images/Week_11/Recipe/wk11BroccoliRecipe.PNG';
import wk11CarbonaraRecipe from './images/Week_11/Recipe/wk11CarbonaraRecipe.PNG';
import wk11ChickenRecipe from './images/Week_11/Recipe/wk11Chicken.PNG';
import wk11FoodCostBroccoliAmandine from './images/Week_11/FoodCost/FoodCost-BroccoliAmandine.xlsx';
import wk11FoodCostChicken from './images/Week_11/FoodCost/FoodCost-ChickenFricassee.xlsx';
import wk11FoodCostFettuccine from './images/Week_11/FoodCost/FoodCost-FettuccineCarbonara.xlsx';
import wk11ReflectCarbonara from './images/Week_11/Reflect/fettuccineCarbonara.jpg';
import wk11ReflectWhiteRoux from './images/Week_11/Reflect/makingTheWhiteRoux.jpg';
import wk11RelfectToastedAlmonds from './images/Week_11/Reflect/toastedAlmonds.jpg';
import wk11ReflectChickenAndBroccoli from './images/Week_11/Reflect/braisedChickenAndBroccoliAmandine.jpg';
import wk11ReflectCheeseInFettuccine from './images/Week_11/Reflect/mixingCheeseInFettuccine.jpg';
import wk12RecipeSquash from './images/Week_12/Recipe/ButternutSquash.PNG';
import wk12RecipeLambCurry from './images/Week_12/Recipe/LambCurry.PNG';
import wk12RecipeVegetable from './images/Week_12/Recipe/VegetableBiryani.PNG';
import wk12ButternutSquashPrepList from './images/Week_12/PrepList/butternutSquashPrepList.png';
import wk12LambCurryPrepList from './images/Week_12/PrepList/lambCurryPrepList.png';
import wk12VegetableBiryaniPrepList from './images/Week_12/PrepList/vegetableBiryaniPrepList.png';
import wk12FoodCostSquash from  './images/Week_12/FoodCost/FoodCost-ButternutSquash.xlsx';
import wk12FoodCostLamb from './images/Week_12/FoodCost/FoodCost-Lamb Curry.xlsx';
import wk12FoodCostVegetable from './images/Week_12/FoodCost/FoodCost-VegetableBiryani.xlsx';
import wk12ReflectSquash from './images/Week_12/Reflect/butternutSquash.jpg';
import wk12ReflectVegetablesBeforeAddingRice from './images/Week_12/Reflect/cookingVegetablesBeforeAddingToRice.jpg';
import wk12ReflectLamb from './images/Week_12/Reflect/lambCurryWithNaan.jpg';
import wk12ReflectCoconutMilk from './images/Week_12/Reflect/spicesCookingBeforeCoconutMilk.jpg';
import wk12ReflectVegetables from './images/Week_12/Reflect/vegetableBiryani.jpg';
import wk12ReflectVegetablesBeforeStir from './images/Week_12/Reflect/vegetableBiryaniBeforeStirring.jpg';
import wk13ChipsPrepList from './images/Week_13/PrepList/chipsPrepList.png'
import wk13OnionRingPrepList from './images/Week_13/PrepList/onionRingPrepList.png';
import wk13SousVidePrepList from './images/Week_13/PrepList/sousVidePrepList.png';
import wk13ChipsRecipe from './images/Week_13/Recipe/chipsRecipe.PNG';
import wk13OnionRingsRecipe from './images/Week_13/Recipe/onionRingsRecipe.PNG';
import wk13SteakRecipe from './images/Week_13/Recipe/steakRecipe.PNG';


function App() {

    const [researchIsOpen, setResearchIsOpen] = useState(false);
    const [recipeIsOpen, setRecipeIsOpen] = useState(false);
    const [foodCostOpen, setFoodCostIsOpen] = useState(false);
    const [reflectionIsOpen, setReflectionIsOpen] = useState(false);
    const [prepListIsOpen, setPrepListIsOpen] = useState(false);

    const [weekFourResearch, setWeekFourResearch] = useState(false);
    const [weekFourPrepList, setWeekFourPrepList] = useState(false);
    const [weekFourRecipe, setWeekFourRecipe] = useState(false);
    const [weekFourFoodCost, setWeekFourFoodCost] = useState(false);
    const [weekFourReflection, setWeekFourReflection] = useState(false);

    const [fiveResearchIsOpen, setFiveResearchIsOpen] = useState(false);
    const [fivePrepListIsOpen, setFivePrepListIsOpen] = useState(false);
    const [fiveRecipeIsOpen, setFiveRecipeIsOpen] = useState(false);
    const [fiveFoodCostIsOpen, setFiveFoodCostIsOpen] = useState(false);
    const [fiveReflectionIsOpen, setFiveReflectionIsOpen] = useState(false);

    const [researchIsOpen6, setResearchIsOpen6] = useState(false);
    const [recipeIsOpen6, setRecipeIsOpen6] = useState(false);
    const [foodCostIsOpen6, setFoodCostIsOpen6] = useState(false);
    const [reflectionIsOpen6, setReflectionIsOpen6] = useState(false);
    const [prepListIsOpen6, setPrepListIsOpen6] = useState(false);
    
    const [researchIsOpen7, setResearchIsOpen7] = useState(false);
    const [recipeIsOpen7, setRecipeIsOpen7] = useState(false);
    const [foodCostIsOpen7, setFoodCostIsOpen7] = useState(false);
    const [reflectionIsOpen7, setReflectionIsOpen7] = useState(false);
    const [prepListIsOpen7, setPrepListIsOpen7] = useState(false);
    
    const [researchIsOpen8, setResearchIsOpen8] = useState(false);
    const [recipeIsOpen8, setRecipeIsOpen8] = useState(false);
    const [foodCostIsOpen8, setFoodCostIsOpen8] = useState(false);
    const [reflectionIsOpen8, setReflectionIsOpen8] = useState(false);
    const [prepListIsOpen8, setPrepListIsOpen8] = useState(false);

     const [researchIsOpen9, setResearchIsOpen9] = useState(false);
     const [recipeIsOpen9, setRecipeIsOpen9] = useState(false);
     const [foodCostIsOpen9, setFoodCostIsOpen9] = useState(false);
     const [reflectionIsOpen9, setReflectionIsOpen9] = useState(false);
     const [prepListIsOpen9, setPrepListIsOpen9] = useState(false);
    
     const [researchIsOpen10, setResearchIsOpen10] = useState(false);
     const [recipeIsOpen10, setRecipeIsOpen10] = useState(false);
     const [foodCostIsOpen10, setFoodCostIsOpen10] = useState(false);
     const [reflectionIsOpen10, setReflectionIsOpen10] = useState(false);
     const [prepListIsOpen10, setPrepListIsOpen10] = useState(false);
    
     const [researchIsOpen11, setResearchIsOpen11] = useState(false);
     const [recipeIsOpen11, setRecipeIsOpen11] = useState(false);
     const [foodCostIsOpen11, setFoodCostIsOpen11] = useState(false);
     const [reflectionIsOpen11, setReflectionIsOpen11] = useState(false);
     const [prepListIsOpen11, setPrepListIsOpen11] = useState(false);
    
     const [researchIsOpen12, setResearchIsOpen12] = useState(false);
     const [recipeIsOpen12, setRecipeIsOpen12] = useState(false);
     const [foodCostIsOpen12, setFoodCostIsOpen12] = useState(false);
     const [reflectionIsOpen12, setReflectionIsOpen12] = useState(false);
     const [prepListIsOpen12, setPrepListIsOpen12] = useState(false);
    
     const [researchIsOpen13, setResearchIsOpen13] = useState(false);
     const [recipeIsOpen13, setRecipeIsOpen13] = useState(false);
     const [foodCostIsOpen13, setFoodCostIsOpen13] = useState(false);
     const [reflectionIsOpen13, setReflectionIsOpen13] = useState(false);
     const [prepListIsOpen13, setPrepListIsOpen13] = useState(false);
    
     const [researchIsOpen14, setResearchIsOpen14] = useState(false);
     const [recipeIsOpen14, setRecipeIsOpen14] = useState(false);
     const [foodCostIsOpen14, setFoodCostIsOpen14] = useState(false);
     const [reflectionIsOpen14, setReflectionIsOpen14] = useState(false);
     const [prepListIsOpen14, setPrepListIsOpen14] = useState(false);


    const toggle = () => setResearchIsOpen(!researchIsOpen);
    const toggle2 = () => setPrepListIsOpen(!prepListIsOpen);
    const toggle3 = () => setRecipeIsOpen(!recipeIsOpen);
    const toggle4 = () => setFoodCostIsOpen(!foodCostOpen);
    const toggle5 = () => setReflectionIsOpen(!reflectionIsOpen);

    const toggle6 = () => setWeekFourResearch(!weekFourResearch);
    const toggle7 = () => setWeekFourPrepList(!weekFourPrepList);
    const toggle8 = () => setWeekFourRecipe(!weekFourRecipe);
    const toggle9 = () => setWeekFourFoodCost(!weekFourFoodCost);
    const toggle10 = () => setWeekFourReflection(!weekFourReflection);

    const toggle11 = () => setFiveResearchIsOpen(!fiveResearchIsOpen);
    const toggle12 = () => setFivePrepListIsOpen(!fivePrepListIsOpen);
    const toggle13 = () => setFiveRecipeIsOpen(!fiveRecipeIsOpen);
    const toggle14 = () => setFiveFoodCostIsOpen(!fiveFoodCostIsOpen);
    const toggle15= () => setFiveReflectionIsOpen(!fiveReflectionIsOpen);

    const toggle16 = () => setResearchIsOpen6(!researchIsOpen6);
    const toggle17 = () => setPrepListIsOpen6(!prepListIsOpen6);
    const toggle18 = () => setRecipeIsOpen6(!recipeIsOpen6);
    const toggle19 = () => setFoodCostIsOpen6(!foodCostIsOpen6);
    const toggle20 = () => setReflectionIsOpen6(!reflectionIsOpen6);
    
    const toggle21 = () => setResearchIsOpen7(!researchIsOpen7);
    const toggle22 = () => setPrepListIsOpen7(!prepListIsOpen7);
    const toggle23 = () => setRecipeIsOpen7(!recipeIsOpen7);
    const toggle24 = () => setFoodCostIsOpen7(!foodCostIsOpen7);
    const toggle25 = () => setReflectionIsOpen7(!reflectionIsOpen7);
    
    const toggle26 = () => setResearchIsOpen8(!researchIsOpen8);
    const toggle27 = () => setPrepListIsOpen8(!prepListIsOpen8);
    const toggle28 = () => setRecipeIsOpen8(!recipeIsOpen8);
    const toggle29 = () => setFoodCostIsOpen8(!foodCostIsOpen8);
    const toggle30 = () => setReflectionIsOpen8(!reflectionIsOpen8);

     const toggle32 = () => setResearchIsOpen9(!researchIsOpen9);
     const toggle33 = () => setPrepListIsOpen9(!prepListIsOpen9);
     const toggle34 = () => setRecipeIsOpen9(!recipeIsOpen9);
     const toggle35 = () => setFoodCostIsOpen9(!foodCostIsOpen9);
     const toggle36 = () => setReflectionIsOpen9(!reflectionIsOpen9);
    
     const toggle37 = () => setResearchIsOpen10(!researchIsOpen10);
     const toggle38 = () => setPrepListIsOpen10(!prepListIsOpen10);
     const toggle39 = () => setRecipeIsOpen10(!recipeIsOpen10);
     const toggle40 = () => setFoodCostIsOpen10(!foodCostIsOpen10);
     const toggle41 = () => setReflectionIsOpen10(!reflectionIsOpen10);
    
     const toggle42 = () => setResearchIsOpen11(!researchIsOpen11);
     const toggle43 = () => setPrepListIsOpen11(!prepListIsOpen11);
     const toggle44 = () => setRecipeIsOpen11(!recipeIsOpen11);
     const toggle45 = () => setFoodCostIsOpen11(!foodCostIsOpen11);
     const toggle46 = () => setReflectionIsOpen11(!reflectionIsOpen11);
    
     const toggle47 = () => setResearchIsOpen12(!researchIsOpen12);
     const toggle48 = () => setPrepListIsOpen12(!prepListIsOpen12);
     const toggle49 = () => setRecipeIsOpen12(!recipeIsOpen12);
     const toggle50 = () => setFoodCostIsOpen12(!foodCostIsOpen12);
     const toggle51 = () => setReflectionIsOpen12(!reflectionIsOpen12);
    
     const toggle52 = () => setResearchIsOpen13(!researchIsOpen13);
     const toggle53 = () => setPrepListIsOpen13(!prepListIsOpen13);
     const toggle54 = () => setRecipeIsOpen13(!recipeIsOpen13);
     const toggle55 = () => setFoodCostIsOpen13(!foodCostIsOpen13);
     const toggle56 = () => setReflectionIsOpen13(!reflectionIsOpen13);
    
     const toggle57 = () => setResearchIsOpen14(!researchIsOpen14);
     const toggle58 = () => setPrepListIsOpen14(!prepListIsOpen14);
     const toggle59 = () => setRecipeIsOpen14(!recipeIsOpen14);
     const toggle60 = () => setFoodCostIsOpen14(!foodCostIsOpen14);
     const toggle61 = () => setReflectionIsOpen14(!reflectionIsOpen14);



    return (
    <div className="App-container">
       <a href="https:charlton-website.vercel.app/">
          <h1 className="display-menu">
             <BsBoxArrowInUpLeft /> Back to Website
          </h1>
       </a>
        <div className="socialMediaLinks">
            <a className="facebook" href="https:www.facebook.com/charlton.kam" ><FaFacebook /></a>
            <a className="linkedIn" href="https:www.linkedin.com/in/charlton-kam-ba81b5176/"><FaLinkedin /></a>
            <a className="pinterest" href="https:www.pinterest.com/auburnthunder17/"><RiPinterestFill /></a>
            <a className="instagram" href="https:www.instagram.com/c.kam_design/"><FiInstagram /></a>
        </div>
        <div className="titleBox">
            <h1 className="display"><mark>Welcome to My Culinary Page</mark></h1>
        </div>
       <div className="row">
          <div className="column">
              <img src={bananaBread} alt="bananaBread" className="img" />
              <p className="lead">Banana Bread</p>
          </div>
          <div className="column">
              <img src={faccacioBread} alt="faccacio Bread" className="img" />
              <p className="lead">Focaccia Bread</p>
          </div>
           <div className="column">
               <img src={portaBella} alt="portobello mushroom dish" className="img" />
               <p className="lead">Portobello Mushroom</p>
           </div>
           <div className="column">
               <img src={lasagna} alt="lasagna that charlton made" className="img" />
               <p className="lead">Lasagna</p>
           </div>
       </div>

        <div className="row">
            <div className="column">
                <img src={porkLoinLong} alt="serving dish full of pork loin" className="img" />
                <p className="lead">Pork Loin</p>
             </div>
            <div className="column">
                <img src={porkLionPlate} alt="pork loin plate with vegetables" className="img" />
                <p className="lead">Plated Pork Loin</p>
            </div>
            <div className="column">
                <img src={chocStrawberryCake} alt="chocolate and strawberry cake with white frosting" className="img" />
                <p className="lead">Chocolate Strawberry Cake</p>
            </div>
            <div className="column">
                <img src={gelato} alt="gelato ice cream Charlton made from scratch" className="img" />
                <p className="lead">Gelato</p>
            </div>
        </div>
        <br/>
        <br/>
        <hr className="hr-4" />
        <br/>
        <br/>
        <h1 className="display-2"><mark>Recipes</mark></h1>
        <div className="jumbotron">
            <h1 className="display-4">Minestrone Soup & Vegetable Stock</h1>
            <p className="h3">Week 3</p>
            <hr className="my-4"/>

            <div className="recipeCard" id="research">
                <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen}>
                    <Card>
                        <CardBody className="researchCardBody">
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <u><b>Method of cookery:</b></u> Broth Soups and Stocks
                                <br/>
                                <u><b>List of objectives:</b></u> I would like increase my knife skills and learn how to pack large amounts of flavor in a soup using just
                                the right amounts of seasoning.
                                <br/>
                                <u><b>Method of cooking:</b></u> The simmering method helps to bring out the natural flavors of the herbs and vegetables. It also helps
                                to infuse the flavors into the soup because it is a gentler process of cooking as opposed to boiling. Simmering also allows for you to
                                remove the impurities from the soup as it’s being cooked. All stocks are made from 3 basic ingredients that involve simmering them
                                together: mirepoix (onions, carrots, and celery), bones, and seasonings. A key thing to remember is to not let the liquid boil for an
                                extended period of time because it can cause impurities to blend in with the liquid making the stock cloudy (Labensky et al., 2018).
                                <br/>
                                <u><b>Prior knowledge:</b></u>
                                This will be my first time making a vegetable stock. However, I have made minestrone soup before and enjoy eating it at restaurants.
                                The story of the first time I made minestrone soup was actually not a good one. It came out more watery than expected hence, the flavors were
                                not as concentrated when compared to the restaurant experience.
                            </p>

                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <u><b>Origin and history:</b></u> Minestrone soup was originally created by peasants from Northern Italy who used leftover food in order to
                                reduce food waste and provide meals for their families (Devteam, 2019, para. 5).
                                <br/>
                                <u><b>Methods used:</b></u> For this minestrone soup, we will also be using a tomato concasse. This is a method used to peel, seed, and chop tomatoes.
                                To start this process, you make an “X” at the bottom of the tomato just deep enough to penetrate the skin, then you place it in boiling water
                                for about 30 seconds, remove it and place it in an ice bath. This ice bath will halt the cooking process making it easier for you to remove
                                the tomato skin. Lastly, cut the tomato in half and scoop out the seeds and chop it. This is a useful process because the skin and seeds
                                can sometimes cause an unwanted bitterness and texture to your finished product (Alfaro, D. 2020).
                                <br/>
                                <u><b>Variations:</b></u> Minestrone Soup is an Italian soup that is typically made with vegetable stock or beef stock as well as adding pasta or rice
                                accompanied with an array of vegetables and beans and herbs. A lot of people have their own ways of making this soup because of how many
                                different types of vegetables, pastas, herbs, and rice you can add to make it unique. There are also many uses for vegetable stock other than
                                for soup; for example, you can use it to make gravy or dressings, to cook casseroles, to cook/flavor grains like rice or quinoa, and in different
                                pasta recipes (Jawad, Y. 2019). Different types of bones give off different flavors and richness to your stock.
                                <br/>
                                <br/>
                                Alfaro, D. (2020, March 25). Tomato Concasseée. The Spruce Eats
                                <br/>
                                <a href="https:www.thespruceeats.com/how-to-make-tomato-concasse-996208">
                                    <i>https:www.thespruceeats.com/how-to-make-tomato-concasse-996208</i>
                                </a>
                                <br/>
                                <br/>
                                Devteam (2019, September 30). <i>The History of Minestrone Soup: What is it and How is it Made?</i> Authentic Italian De Nicola’s Restaurant.
                                <br/>
                                <a href="https:www.denicolasitaliandining.com/blog/the-history-of-minestrone-soup-what-is-it-and-how-is-it-made">
                                    <i>https:www.denicolasitaliandining.com/blog/the-history-of-minestrone-soup-what-is-it-and-how-is-it-made</i>
                                </a>
                                <br/><br/>
                                Jawad, Y. (2019, February 25). 10 Recipes with Vegetable Stock. Feel Good Foodie.
                                <br/>
                                <a href="https:feelgoodfoodie.net/blog/vegetable-broth/"><i>https:feelgoodfoodie.net/blog/vegetable-broth/</i></a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="PrepList">
                <Button color="info" onClick={toggle2} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen}>
                    <Card>
                        <CardBody className="prepCardBody">
                            <Table dark>
                                <thead>
                                    <tr>
                                        <th><u>Date:</u> August 29, 2020</th>
                                        <th><u>Topic Of the Day:</u>   Soups</th>
                                        <th><u>Dishes:</u>   Minestrone Soup</th>
                                    </tr>
                                </thead>
                            </Table>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th><h4><b>Ingredients</b></h4></th>
                                    </tr>
                                </thead>
                                <br/>
                                <tbody>
                                    <tr>
                                        <td>Olive Oil</td>
                                    </tr>
                                    <tr>
                                        <td>Carrots</td>
                                    </tr>
                                    <tr>
                                        <td>Zucchini</td>
                                    </tr>
                                    <tr>
                                        <td>Garlic</td>
                                    </tr>
                                    <tr>
                                        <td>Celery</td>
                                    </tr>
                                    <tr>
                                        <td>Tomato paste</td>
                                    </tr>
                                    <tr>
                                        <td>Tomato concassee</td>
                                    </tr>
                                    <tr>
                                        <td>Dry white beans</td>
                                    </tr>
                                    <tr>
                                        <td>Dry spaghetti</td>
                                    </tr>
                                    <tr>
                                        <td>Green cabbage</td>
                                    </tr>
                                    <tr>
                                        <td>Bouquet garni</td>
                                    </tr>
                                    <tr>
                                        <td>Fresh basil</td>
                                    </tr>
                                    <tr>
                                        <td>Fresh parsley</td>
                                    </tr>
                                    <tr>
                                        <td>Salt & pepper</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <br/>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th><h4><b>Equipment Needs</b></h4></th>
                                        <th><h4><b>Amount</b></h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cutting boards</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Pot</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Knife</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Bowl</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Colander</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <br/>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th><h4><b>Method of Production (list key steps)</b></h4></th>
                                        <th><h4><b>Time taken to complete</b></h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>Key Steps</i></td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Soak beans overnight</td>
                                        <td>~12 hrs.</td>
                                    </tr>
                                    <tr>
                                        <td>Dice the onion, carrots, celery, amd zucchini</td>
                                        <td>10 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Simmer beans in pot</td>
                                        <td>3 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Sautee onions, carrots, celery, and zucchini</td>
                                        <td>3 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add garlic</td>
                                        <td>1 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add tomato paste and cook</td>
                                        <td>3 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add tomato concassee and stock</td>
                                        <td>15 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add and cook pasta</td>
                                        <td>10 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add cooked beans and cabbage</td>
                                        <td>2 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Add herbs and seasoning</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <br/>
                            <hr className="my-2"/>
                            <br/>
                            <Table dark>
                                <thead>
                                    <tr>
                                        <th><u>Date:</u> August 30th, 2020</th>
                                        <th><u>Topic of the Day:</u> Stocks</th>
                                        <th><u>Dishes:</u> Vegetable Stock</th>
                                    </tr>
                                </thead>
                            </Table>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th><h4><b>Ingredients</b></h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Onion</td>
                                </tr>
                                <tr>
                                    <td>Carrot</td>
                                </tr>
                                <tr>
                                    <td>Celery</td>
                                </tr>
                                <tr>
                                    <td>Leek</td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                </tr>
                                <tr>
                                    <td>Parsley stalks</td>
                                </tr>
                                <tr>
                                    <td>Peppercorns</td>
                                </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <br/>

                            <Table striped>
                                <thead>
                                <tr>
                                    <th><h4><b>Equipment Needs</b></h4></th>
                                    <th><h4><b>Amount</b></h4></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cutting board</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Knife</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Colander</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Pot</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <br/>

                            <Table striped>
                                <thead>
                                <tr>
                                    <th><h4><b>Method of Production (list key steps)</b></h4></th>
                                    <th><h4><b>Time taken to complete</b></h4></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><i>Key Steps</i></td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td>Boil water</td>
                                    <td>10 min.</td>
                                </tr>
                                <tr>
                                    <td>Cut vegetables</td>
                                    <td>5 min.</td>
                                </tr>
                                <tr>
                                    <td>Place ingredients in pot and gently simmer</td>
                                    <td>1 hour</td>
                                </tr>
                                <tr>
                                    <td>Skim and strain</td>
                                    <td>--</td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="recipe">
                <Button color="danger" onClick={toggle3} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen}>
                    <Card>
                        <CardBody className="recipeCardBody">
                            <h2 className="inCardTitle"><mark>Vegetable Stock</mark></h2>
                            <h4 className="servingSize">Serving Size: 4</h4>
                            <br/>
                            <Table dark>
                                <thead>
                                    <tr>
                                        <th>Ingredients</th>
                                        <th>Weight</th>
                                        <th>Volume</th>
                                        <th>Directions: <i>Include step by step instructions</i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Onion</td>
                                        <td>4 oz</td>
                                        <td>--</td>
                                        <td>1. Cut all vegetables into macedoine.</td>
                                    </tr>
                                    <tr>
                                        <td>Carrot</td>
                                        <td>4 oz</td>
                                        <td>--</td>
                                        <td>2. Place all ingredients into a pot & bring to a boil.</td>
                                    </tr>
                                    <tr>
                                        <td>Celery</td>
                                        <td>4 oz</td>
                                        <td>--</td>
                                        <td>3. Gently simmer for approximately 1 hour.</td>
                                    </tr>
                                    <tr>
                                        <td>Leek</td>
                                        <td>4 oz</td>
                                        <td>--</td>
                                        <td>4. Skim as needed.</td>
                                    </tr>
                                    <tr>
                                        <td>Water</td>
                                        <td>--</td>
                                        <td>50 fl oz</td>
                                        <td>5. Strain & use.</td>
                                    </tr>
                                    <tr>
                                        <td>Parsley stalks</td>
                                        <td>4 ea</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Peppercorns</td>
                                        <td>6 ea</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br/>
                            <h2 className="inCardTitle"><mark>Minestrone Soup</mark></h2>
                            <h4 className="servingSize">Serving Size: 2</h4>
                            <br/>
                            <Table dark>
                                <thead>
                                <tr>
                                    <th>Ingredients</th>
                                    <th>Weight</th>
                                    <th>Volume</th>
                                    <th>Directions: <i>Include step by step instructions</i></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Olive oil</td>
                                        <td>--</td>
                                        <td>1/4 oz</td>
                                        <td>1. Soak beans overnight in cold water (in a fridge), drain and rinse before use .</td>
                                    </tr>
                                    <tr>
                                        <td>Carrots, peeled, medium dice</td>
                                        <td>1 ea</td>
                                        <td>--</td>
                                        <td>2. Simmer the beans in a pot until tender.</td>
                                    </tr>
                                    <tr>
                                        <td>Celery, medium dice</td>
                                        <td>1.5 ea</td>
                                        <td>--</td>
                                        <td>3. Sautee the onions, celery, zucchini, and carrots in oil in a saucepan over medium heat (3 mins).</td>
                                    </tr>
                                    <tr>
                                        <td>Zucchini, medium dice</td>
                                        <td>1.5 oz</td>
                                        <td>--</td>
                                        <td>4. Add garlic and cook for a further minute.</td>
                                    </tr>
                                    <tr>
                                        <td>Garlic cloves, finely chopped</td>
                                        <td>1 ea</td>
                                        <td>--</td>
                                        <td>5. Add tomato paste and cook for a further 3 minutes.</td>
                                    </tr>
                                    <tr>
                                        <td>Tomato paste</td>
                                        <td>0.5 oz</td>
                                        <td>--</td>
                                        <td>6. Add tomato concassee & stock. Reduce the heat to a gentle simmer, cover with lid & cook for 15 minutes.</td>
                                    </tr>
                                    <tr>
                                        <td>Tomato concassee</td>
                                        <td>2 oz</td>
                                        <td>--</td>
                                        <td>7. Add the paste and cook for 10 minutes.</td>
                                    </tr>
                                    <tr>
                                        <td>Vegetable stock</td>
                                        <td>--</td>
                                        <td>1.25 pints</td>
                                        <td>8. Add cooked beans & cabbage, cook for a further 2 minutes.</td>
                                    </tr>
                                    <tr>
                                        <td>Dry white beans</td>
                                        <td>1 oz</td>
                                        <td>--</td>
                                        <td>9. The volume of liquid may need to be adjusted, if so add more stock.</td>
                                    </tr>
                                    <tr>
                                        <td>Dry spaghetti, broken into short lengths</td>
                                        <td>1.5 oz</td>
                                        <td>--</td>
                                        <td>10. Add herbs and season with salt and pepper to taste.</td>
                                    </tr>
                                    <tr>
                                        <td>Green cabbage, finely shredded</td>
                                        <td>2 oz</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Bouquet garni</td>
                                        <td>0.5 ea</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Fresh basil, chiffonade</td>
                                        <td>--</td>
                                        <td>1/2 Tbsp</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Fresh parsley, chopped</td>
                                        <td>TT</td>
                                        <td>1/2 Tbsp</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Salt</td>
                                        <td>TT</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Black pepper</td>
                                        <td>TT</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="Food Cost">
                <Button color="success" onClick={toggle4} style={{ marginBottom: '1rem' }}>Food Costs</Button>
                <Collapse isOpen={foodCostOpen}>
                    <Card>
                        <CardBody>
                            NA.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="reflection">
                <Button color="primary" onClick={toggle5} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, the minestrone soup and the vegetable stock turned out very well. The vegetable stock had good flavors and aromas from the mirepoix and 
                            the bouquet garni. The minestrone soup was also very tasty with the variety of vegetables and different textures from the spaghetti and beans. 
                            Together with that, the soup was colorful since we had the shades of reds and oranges from the tomato paste, tomato concasse, and carrots. 
                            In addition, the zucchini added a nice green to the dish from the vibrant outer skin. The tomato concasee technique worked very well seeing 
                            that it was easy to peel, chop, and remove the seeds without it falling apart
                            </p>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            The tomato concasee technique worked because of the “X” cut that we made, the length of time that it was submerged in the boiling water, and 
                            the ice bath (Labensky et al., 2018).  If we hadn’t made a cut prior to submerging the tomato in boiling water, it would’ve been more difficult to peel 
                            off the skin afterwards. When the skin starts to peel it serves as an indicator for when the tomato is ready to be pulled out. The water has to be boiling 
                            so that it quickly separates the skin from the rest of the tomato without cooking the whole tomato. Lastly, the ice bath halts the cooking process of the 
                            tomato and makes it easier to handle when you are chopping it. The bouquet garni imparts a lot of flavor into what you’re making and since it’s tied together 
                            it allows for easy removal of each ingredient (Filippone, P. T., 2019). 
                            </p>
                            <Row>
                                <Col>
                                    <img src={boilingWater} alt="Tomcato skin being peeled" name="boilingwater" className="cardImg"></img>
                                <Label for="bolingwater">Boil tomato for 30 seconds</Label>
                                </Col>
                                <Col><img src={iceBath} alt="A tomato going into an ice bath after boiling" name="iceBath" className="cardImg"></img>
                                <Label for="iceBath">Place in ice bath</Label>
                                </Col>
                                <Col><img src={skinSeparation} alt="Skin starts to separate from tomato in the ice bath" name="skinSeparation" className="cardImg"></img>
                                <Label for="skinSeparation">Skin starts to separate from tomato</Label>
                                </Col>
                                <Col><img src={peelSkinBack} alt="Peeling the skin from the tomato after it separates" name="peelBack" className="cardImg"></img>
                                <Label for="peelBack">Remove skin from tomato</Label>
                                </Col>
                                <Col><img src={seedRemoval} alt="Tomato having it seeds removed after skin peeled off" name="seedsOut" className="cardImg"></img>
                                <Label for="seedsOut">Scoop out seeds and chop</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            My learning objectives were to improve my knife skills for chopping and dicing vegetables and herbs. After watching the demonstrations, I gained a better 
                            understanding of how to correctly cut an onion, celery, and carrots. Since these are such widely used vegetables to cook with, these new techniques will 
                            come in handy to be more efficient and have more even cuts in the kitchen.I had never heard of a bouquet garni so it was interesting to learn what it was 
                            and how easy it was to assemble. The tomato concasse technique also worked very well with peaches. I made a peach cobbler and needed to peel the skin off so 
                            I decided to use this technique and it worked out very well. I also recently made short ribs in which case I needed to make a bouquet garni for the sauce. 
                            I think I still need to practice my knife skills so that I can get faster and make more precise cuts.
                            <br/>
                            <br/>
                            Filippone, Peggy T. (2019, November 16). Bouquet Garni. The Spruce Eats.<br/>
                            <a href="https:www.thespruceeats.com/bouquet-garni-recipe-1805692">
                                <i>https:www.thespruceeats.com/bouquet-garni-recipe-1805692</i>
                            </a>
                            <br/>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018). On Cooking: A Textbook of Culinary Fundamentals. Pearson.
                            </p>
                            
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="Week-4">
            <h1 className="display-4">Chicken Stock, Beef Stock, Cream of Tomato Soup</h1>
            <p className="h3">Week 4</p>
            <hr className="my-4"/>

            <div className="recipeCard">
                <Button color="secondary" onClick={toggle6} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={weekFourResearch}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <u><b>Method of cookery:</b></u> Soups and Stocks.
                                <br/>
                                <u><b>List of objectives:</b></u>
                                The objectives that we’re trying to learn from this is how to deglaze a pan as well as preparing the bones in the correct way in order
                                to impart the correct flavors into the stock.
                                <br/>
                                <u><b>Method of cooking:</b></u>
                                Caramelizing adds color and extra flavor into the stock. Caramelizing is the process of browning the sugars of the food which brings
                                out the natural flavors of the ingredient Labensky et al., 2018).  Deglazing is the process of stirring liquid in a pan in order to loosen any food bits that might’ve
                                been stuck to the pan while it was being caramelized (Labensky et al., 2018). Deglazing helps to get every last bit of food off of the pan so that it can be used to add
                                more flavor or to become the base of a sauce.
                                <br/>
                                <u><b>Prior Knowledge:</b></u> I’ve never made chicken stock, beef stock, or cream of tomato soup before.
                                <br/>
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <u><b>Origin and history:</b></u> Cream of Tomato soup is seen as a comfort food for Americans and Europeans. The soup is creamy and thick and is often accompanied with fresh bread or even a sandwich.
                                <br/>
                                <u><b>Methods used:</b></u> The main difference between a white stock and a brown stock is that the brown stock involves caramelizing of the mirepoix and the
                                bones before adding it into the stock. “The caramelization adds rich dark color and a more intense flavor” (Labensky et al., 2018). Cream of tomato soup is
                                often cooked at a lower temperature as opposed to other tomato soups because too high of a cooking temperature could cause the cream to curdle.
                                <br/>
                                <u><b>Variations:</b></u> Cream of Tomato soup can be made vegetarian or vegan with just a few substitutions. Instead of using chicken or beef stock, an easy alternative is to use vegetable stock. To make it vegan,
                                substitute the heavy cream for almond milk or silken tofu (Mcgavin, J., 2019).
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals.</i> Pearson.
                                <br/>
                                <br/>
                                McGavin, Jennifer. (2019, November 1). <i>German Fresh Cream of Tomato Soup.</i> The Spruce Eats.
                                <br/>
                                <a href="https:www.thespruceeats.com/german-fresh-cream-of-tomato-soup-1447351">
                                    <i>https:www.thespruceeats.com/german-fresh-cream-of-tomato-soup-1447351</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="info" onClick={toggle7} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={weekFourPrepList}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={chickenStockPrepList} alt="chicken stock prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={beefStickPrepList} alt="Beef stock prep list items" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={tomatoSoupPrepList} alt="creame of tomato soup pre list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="danger" onClick={toggle8} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={weekFourRecipe}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={chickenStock} alt="Chicken stock recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={beefStockRecipe} alt="Beef stock recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={creameOfTomatoSoupRecipe} alt="Cream of tomato soup recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="success" onClick={toggle9} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={weekFourFoodCost}>
                    <Card>
                        <CardBody>
                            <a href={foodCostBrownStock}>
                                <b>Brown_Stock.xlsx</b>
                            </a>
                            <br/>
                            <a href={foodCostChickenStock}>
                                <b>Chicken_Stock.xlsx</b>
                            </a>
                            <br/>
                            <a href={foodCostCreameOfTomato}>
                                <b>Cream_of_Tomato_Soup.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard" id="reflection2">
                <Button color="primary" onClick={toggle10} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={weekFourReflection}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, the cream of tomato soup turned out very well. I don’t usually like eating tomatoes, but I really enjoyed the soup that we made. 
                            It had a really good flavor and texture that made it easy to eat. The croutons that we made had lots of flavor and added a nice crunchy texture 
                            to the soup. Garnishing the soup with the basil and the red peppers added different complimenting flavors for the tomato. I used the blender 
                            as opposed to the immersion blender, so my soup came out nice and thin with minimal clumps. The soup was a light orange color because of the 
                            cream that we added. Together with that, the fresh chiffonade green basil gave a nice ribbon of green and the julienne red peppers gave dots of 
                            red spread throughout. Our technique of delgazing, sweating, and blending the soup worked well. In addition, the brown stock and chicken stock 
                            turned out well and had good color from the bones that we roasted and the chicken wings that we cooked. 
                            </p>
                            <Row>
                                <Col>
                                    <img src={brownStockNoFat} alt="brown stock in pot with no fat" name="brownStockWithNoFat" className="cardImg" id="wk4-img1"></img>
                                    <Label for="brownStockWithNoFat">Beef stock with NO fat.</Label>
                                </Col>
                                <Col>
                                    <img src={chickenStockNoFat} alt="chicken stock in bowl with no fat" name="chickenStockWithNoFat" className="cardImg" id="wk4-img2"></img>
                                    <Label for="chickenStockWithNoFat">Chicken stock with NO fat.</Label>
                                </Col>
                                <Col>
                                    <img src={creamOfTomatoSoup} alt="creame of tomato soup" name="creamOfTomatoSoup" className="cardImg" id="wk4-img3"></img>
                                    <Label for="creamOfTomatoSoup">Cream of tomato soup.</Label>
                                </Col>
                            </Row>
                            <br/>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            The brown stock had good color because we were able to get good browning from the roasted bones (Labensky et. al., 2018). We also added tomato 
                            paste which helped with the color and flavor of the stock. We also caramelized the mirepoix before adding it to the stock which helped with 
                            the flavor as opposed to if we had burned it. Burned mirepoix would’ve imparted bitter flavors into the stock. While the chicken wings added 
                            extra depth of flavor from the meat, skin, and fat, it caused a lot of impurities to come through the stock which resulted in us having to 
                            constantly skim the top. If we were able to use larger chicken bones, we still would’ve had to skim the top, but we wouldn’t have had to do 
                            it so often; together with that the larger bones come with more cartilage and collagen which help to make it more gelatin like (Jenny, 2018). 
                            The cream of tomato soup had extra tomato flavor because we added tomato paste to the mirepoix while it was sweating. Since we were able to 
                            sweat the mirepoix the right amount, we were able to get good flavor from them as opposed to if we had caramelized or burned them.
                            </p>
                            <Row>
                                <Col>
                                    <img src={brownStockWithFat} alt="brown stock in bowl with no fat" name="brownStockWithFat" className="cardImg" id="wk4-img4"></img>
                                    <Label for="brownStockWithFat">Brown stock with fat.</Label>
                                </Col>
                                <Col>
                                    <img src={chickenStockWithFat} alt="chicken stock in bowl with no fat" name="chickenStockWithFat" className="cardImg" id="wk4-img5"></img>
                                    <Label for="chickenStockWithFat">Chicken stock with fat.</Label>
                                </Col>
                            </Row>
                            <br/>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            The objectives that I set out to learn from this week is how to correctly deglaze and roast bones the correct amount. I think I did well with 
                            these tasks because I was able to get all of the flavor from the mirepoix out of the pot and into the stock pot. Even though I didn’t roast 
                            the bones myself, I learned how much time it takes to roast the bones and what they should look like when they're done and how to correctly 
                            prepare them to go into the stock pot (removing the oil and fat from the top). Additional skills that I learned was how to skim the top of the 
                            broth without removing too much stock. This clarification process can also be used to clarify butter. I need to practice my knife skills so that 
                            I can get faster and make more precise cuts.
                            <br/>
                            <br/>
                            Jenny. (2018, January, 11). <i>Why Your Broth Doesn’t Gel.</i> Nourished Kitchen.
                            <br/>
                            <a href="https:nourishedkitchen.com/bone-broth-doesnt-gel/">
                                <i>https:nourishedkitchen.com/bone-broth-doesnt-gel/</i>
                            </a>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals.</i> Pearson.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
        <div className="jumbotron" id="week5">
            <h1 className="display-4">Consomme and Leek & Potato Soup</h1>
            <p className="h3">Week 5</p>
            <hr className="my-4"/>

            <div className="recipeCard">
                <Button color="secondary" onClick={toggle11} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={fiveResearchIsOpen}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <u><b>Method of Cooking:</b></u> Clear stocks and broths
                                <br/>
                                <u><b>List of Objectives:</b></u> This week I would like to practice clarifying stocks properly.
                                <br/>
                                <u><b>Method of Cookery:</b></u> Clarifying the broth/stock is essential to creating the perfect consommé. 
                                Even if you were to remove all of the fat, if the flavor isn’t quite what you expected, it’s because the 
                                quality of the stock you used didn’t have the quality it needed to begin with. The consomme should be very 
                                flavorful and have a high gelatin content but with almost no fat (Labensky et al., 2018). The leek and potato 
                                soup is a pretty easy soup to make as long as you don’t overcook the vegetables. The onions, leeks, and 
                                potatoes are sweated in a pan before adding the stock so that they are cooked properly and can impart the 
                                correct flavor.
                                <br/>
                                <u><b>Prior Knowledge:</b></u> I’ve never made either of these dishes before; although I have heard of them. I 
                                haven’t had much experience with leeks either until this class.
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <u><b>Origin and history:</b></u> Leek and potato soup originated from Britain. It was mainly eaten during the winter 
                                time because it was served warm and could be quite filling from all of the potatoes that are added. Leek and potato soup 
                                is also known as vichyssoie which comes from France <i>(Lemm, E., 2019)</i>.
                                <br/>
                                <u><b>Methods used:</b></u> Consomme is different from other stocks because it has almost no fat in the finished product. 
                                The stock goes through multiple cheesecloths in order to remove all impurities that may have ended up in the soup. Consomme 
                                is also combined with a clearmeat which is a mixture of egg whites, ground meat, mirepoix, herbs and spices, and tomatoes 
                                or lemon juice. The clearmeat mixture is added to the stock and helps trap impurities to make it easier to remove. A raft 
                                forms from the clearmeat and other ingredients interacting with each other, the raft imparts extra flavor into the soup. 
                                An onion brule is also added to the stock which would be similar to a bouquet garni because of the extra flavor and color 
                                that it adds.
                                <br/>
                                <u><b>Variations:</b></u> Instead of making a leek and potato soup, you can substitute the leek for an onion to make an 
                                onion and potato soup. You can also use watercress because of it’s crisp light flavor to make watercress and potato soup. 
                                The soup can also be served hot or cold depending on the season and preference.
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals. Pearson</i>
                                <br/>
                                <br/>
                                Lemm, E. (2019, August 12). <i>Classic Leek and Potato Soup</i>. The Spruce Eats. 
                                <a href="https:www.thespruceeats.com/leek-and-potato-soup-recipe-435299">
                                    <i>https:www.thespruceeats.com/leek-and-potato-soup-recipe-435299</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="info" onClick={toggle12} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={fivePrepListIsOpen}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk5ConsommePrepList} alt="table for prep-list for consomme" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk5LeekAndPotatoSoupPrepList} alt="table for leek and potato soup" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="danger" onClick={toggle13} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={fiveRecipeIsOpen}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk5ConsommeRecipe} alt="Recipe list for consomme" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk5LeekPotatoSoupRecipe} alt="Recipe list for leek and potato soup" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
            <div className="recipeCard">
                <Button color="success" onClick={toggle14} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={fiveFoodCostIsOpen}>
                    <Card>
                        <CardBody>
                            <a href={wk5BeefConsommeExcel}>
                                <b>Beef_Consomme_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk5LeekPotatoSoupExcel}>
                                <b>Leek_Potato_Soup_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="reflection5">
                <Button color="primary" onClick={toggle15} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={fiveReflectionIsOpen}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, the beef consomme and the leek and potato soup turned out well. The clarifying technique of creating 
                            a raft and straining the stock through a cheesecloth worked very well. Since we prepared a good quality brown 
                            stock in the past weeks, we were able to create a tasty, flavorful consomme. The consomme was golden brown 
                            with pops of green, orange, and beige from the mushrooms, carrots, and green beans we garnished it with. 
                            It had flavors from the clearmeat mixture that we prepared prior to adding the stock. The garnishes also 
                            added more texture into the soup because the carrots and green beans were slightly hard and were balanced 
                            by soft mushrooms. The leek and potato soup was thick and hearty and had subtle flavors from the leek, 
                            potato skins, and onions. Since I used the blender to puree my soup, it was very smooth with minimal chunks 
                            of potato. The parsley and croutons added extra texture and flavor to the soup with its crunchy, salty, bitter 
                            profile.
                            </p>
                            <br/>
                            <Row>
                                <Col>
                                <img src={wk5ReflectBeefWithGar} alt="beef consomme with a garnish" name="beefWithGarnish" className="cardImg"></img>
                                <Label for="beefWithGarnish">Beef Consomme with Garnish</Label>
                                </Col>
                                <Col>
                                <img src={wk5ReflectLpSoup} alt="leek and potato soup" name="LPSoup" className="cardImg"></img>
                                <br/>
                                <Label for="LPSoup">Leek and Potato Soup</Label>
                                </Col>
                            </Row>
                            <br/>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            The main reason that we were able to have a flavorful, golden colored consomme with no trace of fat is because we had a 
                            good quality stock to start with (Labensky et. al., 2018). We were also able to create a sturdy raft to hold the 
                            impurities at the top of the soup. If we were to use a larger pot, with this small quantity of consomme, the raft 
                            would’ve had trouble forming because of the large surface area it would’ve had to cover. We also kept an eye on the 
                            temperature of the stock to make sure it didn’t boil and potentially destroy the raft. For the leek and potato soup, 
                            we decided to keep the skins on the potato to impart more flavor and a slight texture into the soup. Not only was 
                            this soup filling and tasty, there are also a lot of nutrients in the skin like potassium and vitamin C along with 
                            other vitamins and minerals (Arnarson, A. 2019). If I were to make the leek and potato soup again, I would use the 
                            hand blender so that the soup is more coarse. 
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk5ReflectRaft} alt="Consomme with raft" name="consommeRaft" className="cardImgWk5"></img>
                                    <Label for="consommeRaft">Consomme with Raft</Label>
                                </Col>
                                <Col>
                                    <img src={wk5ReflectClearConsomme} alt="clear consomme in bowl" name="clearConsomme" className="cardImgWk5"></img>
                                    <Label for="cleaConsomme">Clear Consomme</Label>
                                </Col>
                                <Col>
                                    <img src={wk5ReflectLpSoupBeforeBlend} alt="Leak and potato soup before being blended" name="LPSoupBeforeBlend" className="cardImgWk5Unique"></img>
                                    <Label for="LPSoupBeforeBlend">Leek & Potato Soup Before Blender</Label>
                                </Col>
                            </Row>
                            <br/>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            The objective that I had for this week was to practice clarifying stocks without removing too much of the liquid. 
                            I think I did well at this because my consomme came out very clear with almost no fat. After I strained it through a 
                            cheesecloth and a strainer, I also used a paper towel to remove the fat from the top of the soup. I learned what a 
                            cartouche is which is really helpful when you don’t have a lid for a pot. There have been many circumstances that I’ll 
                            be cooking and I can’t find the correct size lid for my pot so now that I know this technique I’ll be able to use it 
                            in the future.
                            <br/>
                            <br/>
                            Arnarson, A. (2019, March 7). <i>Potatoes 101: Nutrition Facts and Health Effects.</i> Healthline.
                            <br/>
                            <a href="https:www.healthline.com/nutrition/foods/potatoes">
                                <i>https:www.healthline.com/nutrition/foods/potatoes</i>
                            </a>
                            <br/>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018).<i>On Cooking: A Textbook of Culinary Fundamentals.</i> Pearson.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week6">
            <h1 className="display-4">Roast Chicken, Garlic Mashed Potatoes & Supreme Sauce</h1>
            <p className="h3">Week 6</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek6">
                <Button color="secondary" onClick={toggle16} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen6}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <u><b>Method of cooking:</b></u> Roasting and Baking
                                <br/>
                                <u><b>List of Objectives:</b></u> I would like to practice carving and trussing a chicken. 
                                <br/>
                                <u><b>Method of cookery:</b></u> Roasting provides a nice brown color to a slightly crunchy skin while holding in all of 
                                the juices, making it tender and juicy on the inside (Labensky et al., 2018). Trussing the meat also helps to cook the 
                                poultry evenly. Since the poultry is tied together and is more compact, the juices can’t escape as easily. 
                                For the veloute, it should be rich and smooth from the roux that was added. The sauce should take on the flavor 
                                of the type of stock used. The potatoes should be smooth, light, and airy from being whipped in the stand mixer.
                                <br/>
                                <u><b>Prior knowledge:</b></u> I’ve roasted a chicken before but I’ve never had to tie it. I’ve also had some experience 
                                butchering/carving meat but I could still use some practice. I’ve made mashed potatoes multiple times in many different 
                                ways but I’ve never made a supreme sauce.
                                <br/>
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <u><b>Origin and history:</b></u> Veloute is a traditional French mother sauce. A mother sauce means that it acts as a 
                                base for many different types of sauces (Waggoner, S. 2015).
                                <br/>
                                <u><b>Methods used:</b></u>  Roasting is different from baking because roasting is a term used for poultry, meat, and 
                                vegetables, whereas baking is used for desserts and pastries, fruits, fish, starches, etc. When seasoning the poultry 
                                it’s important to remember not to season it with a lot of herbs on the outside if it’s going to be cooking at high 
                                temperatures because the herbs will burn. Another option to season the poultry is to brine it for a few hours before 
                                cooking. This adds extra flavor to the meat and helps it retain its moisture. There are a few different dry heat cooking 
                                methods, but the main component of roasting is that the “heat is transferred by convection to the food’s surface and 
                                then penetrates the food by conduction” (Labensky et al., 2018).The veloute is a mixture of clarified butter, stock, 
                                and roux. The roux acts as a thickening agent and gives the sauce more stability.
                                <br/>
                                <u><b>Variations:</b></u> You can roast any type of poultry, however the time and temperature will vary based on the 
                                fat content of the meat. You can also use any type of seasoning for your poultry which allows you to pair it with many 
                                different side dishes. The mashed potatoes can also have some variation like adding different seasonings and cheeses. 
                                For the veloute, you can use chicken, fish, veal, beef, or vegetable stock. This allows the sauce to be paired with 
                                many different dishes.
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals.</i> Pearson.
                                <br/>
                                <br/>
                                Waggoner, S. (2015, February 4th). <i>Veloute Sauce: The Versatile Stranger.</i> Fork and Plate.
                                <br/>
                                <a href="https:forknplate.com/2015/02/04/veloute-sauce-the-versatile-stranger/">
                                    <i>https:forknplate.com/2015/02/04/veloute-sauce-the-versatile-stranger/</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="prepListWeek6">
                <Button color="info" onClick={toggle17} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen6}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk6PrepListMashedPotatoes} alt="Mashed potatoes prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk6PrepListRoastedChicken} alt="Roasted chicken prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk6PrepListVeloute} alt="a veloute sauce prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek6">
                <Button color="danger" onClick={toggle18} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen6}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk6RecipePotatoes} alt="Mashed potatoes recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk6RoastedChickenRecipe} alt="Roasted chicken recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk6SauceRecipe} alt="a veloute sauce recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek6">
                <Button color="success" onClick={toggle19} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen6}>
                    <Card>
                        <CardBody>
                            <a href={wk6FoodCostPotatoes}>
                                <b>MashedPotatoes_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk6FoodCostChicken}>
                                <b>RoastedChicken_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk6FoodCostSauce}>
                                <b>SupremeSauce_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek6">
                <Button color="primary" onClick={toggle20} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen6}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, the roasted chicken, mashed potatoes, and supreme sauce came out very well. The chicken had a nice golden brown color around the 
                            whole chicken and developed a crispy skin. It had lots of flavor and was very moist even though we seasoned it with simple ingredients 
                            like salt, olive oil, onions, thyme, and a lemon. The mashed potatoes had a fluffy, smooth texture with subtle flavors from the garlic. 
                            The mashed potatoes had a bland color because we used the white pepper so that it would blend in with the potatoes. The potatoes weren’t 
                            too salty or peppery since we were constantly trying it and adjusting it. The supreme sauce had a thick creamy texture to it from the 
                            roux and heavy cream that was added. The sauce took on the flavor from the mushrooms which were added at the very end of the cooking process. 
                            The sauce started out brown/tan because of the blonde roux and chicken stock that were added, but the heavy cream that we added to make 
                            it a supreme sauce caused it to lighten up to a light brown. 
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk6ReflectSupremeSauce} alt="supreme sauce that charlton made" name="wk6SupremeSauce" className="cardImg" />
                                    <Label for="wk6SupremeSauce">Supreme Sauce</Label>
                                </Col>
                                <Col>
                                    <img src={wk6ReflectRoastedChickec} alt="Roasted chicken" name="wk6Chicken" className="cardImg" />
                                    <Label for="wk6Chicken">Roasted Chicken</Label>
                                </Col>
                                <Col>
                                    <img src={wk6ReflectFinalPlate} alt="final plate" name="finalPlate" className="cardImg" />
                                    <Label for="finalPlate">Final Plate</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            The roasted chicken came out as expected because they were placed on a rack so that the juices could drip to the bottom which prevented the 
                            bottom of the chicken from becoming very soggy. Together with that, the chickens were removed every 20 minutes and were basted in order to keep 
                            it moist and develop a crispy skin from the natural oils and fats that were being released from the chicken. The mashed potatoes had a good 
                            consistency because we cooked the potatoes just enough that they weren’t mushy. We also slowly added the heavy cream so that the potatoes had 
                            time to absorb the cream. The first time I made the veloute, it ended up separating towards the end of the process, so I had to start over. I might’ve 
                            added the chicken stock too quickly which caused the roux to start separating. I noticed small clumps of flour rising to the top and a small layer of 
                            oil that formed at the top of the sauce. However, the second time I made it, it came out very well because I added more flour than butter so that 
                            the roux had a thicker consistency and was able to absorb the chicken stock better. Another important aspect of creating the sauce is to use 
                            clarified butter. Clarifying the butter allows you to cook the butter to a higher temperature without it burning. When creating the roux, you 
                            had to make sure to slowly add the stock and whisk it constantly so that all of the stock was incorporated well and was free of clumps. 
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk6ReflectBlondeRoux} alt="Blonde roux" name="blondeRoux" className="cardImgWeek6" />
                                    <br/>
                                    <Label for="blondeRoux">Blonde Roux</Label>
                                </Col>
                                <Col>
                                    <img src={wk6ReflectMashedPotatoes} alt="mashed potatoes" name="wk6MashedPotatoes" className="cardImgWeek6" />
                                    <br/>
                                    <Label for="wk6MashedPotatoes">Mashed Potatoes</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            The objectives that I set out for this class was to learn how to truss and carve a chicken. I did well at trussing the chicken even though it took a 
                            few tries. There are a few different ways to truss a chicken so that each area is exposed to the heat in order for the skin to cook properly. Most people 
                            say that trussing a chicken helps cook it evenly and helps with appearance (Hill, 2018). I also practiced carving a chicken properly. One thing to look/feel 
                            for are the joints of where you’re going to cut so that you cut between them and not end up with pieces of bone embedded in the meat. Together with that, the 
                            chicken needs to rest for a few minutes before carving so that the juices can redistribute throughout the chicken (Mattison, L. and Woodward, P., 2019). I 
                            also learned how to save a sauce from breaking. After I found out why my sauce separated, I was able to pay closer attention to the signs the second time 
                            around and more flour and heat accordingly. This technique can be applied to other sauces as well. For example, when you make a hollandaise sauce, you have 
                            to be careful not to have the heat on too high or else you’ll end up with scrambled eggs. So when you start to notice a slight curdling in the eggs you have 
                            to whisk it rapidly and remove it from the heat immediately to save it. I need to practice carving meat better because there were a few times that I was 
                            unsure of exactly where I was supposed to cut.
                            <br/>
                            <br/>
                            Hill, Meggan. (2018, November 11). <i>How to Truss a Chicken.</i> Culinary Hill.
                            <br/>
                            <a href="https:www.culinaryhill.com/how-to-truss-a-chicken/">
                                <i>https:www.culinaryhill.com/how-to-truss-a-chicken/.</i>
                            </a>
                            <br/>
                            <br/>
                            Mattison, L. and Woodward, P. (2019, October 31). How to Carve a Chicken. Taste of Home.
                            <br/>
                            <a href="https:www.tasteofhome.com/article/how-to-carve-a-chicken/">
                                <i>https:www.tasteofhome.com/article/how-to-carve-a-chicken/</i>
                            </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-7">
            <h1 className="display-4">Pan Fried Chicken, Ratatouille, Gratin Dauphinoise</h1>
            <p className="h3">Week 7</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek7">
                <Button color="secondary" onClick={toggle21} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen7}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                            <u><b>Method of cooking:</b></u> Pan frying and roasting
                            <br/>
                            <u><b>List of Objectives:</b></u> This week I would like to learn how to bread chicken correctly so that it’s flavorful and moist.
                            <br/>
                            <u><b>Method of cookery:</b></u> Breading your poultry before frying is not only important for its flavor 
                            and appearance, but it also helps to keep the meat juicy and less oily. The ratatouille is simply a stewed 
                            or sauteed vegetable dish. Its simplicity allows for the natural flavors of the vegetables to come through, 
                            making it a great vegetarian dish. The potatoes are cooked in the garlic cream sauce and then baked rather 
                            than being boiled first and then added to the mixture. This allows the potatoes to soak in some of the 
                            seasonings prior to being baked. Prior knowledge: I’ve never pan fried chicken before, but I have 
                            seen my family members make it. When I made the gratin potatoes they came out very creamy and tasty, 
                            but I think I could’ve used less cream because it was overwhelming at times. 
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                            <u><b>Origin and history:</b></u> Surprisingly, pan fried chicken wasn’t originally created in America; rather 
                            it is a dish created by the Scottish (Grilli, S., 2017). As people immigrated to America from Europe, the 
                            recipe has had slight changes like adding seasoning to the breading. Ratatouille is originally a French dish 
                            usually associated with the Nice region of France. It was commonly eaten by the peasants because they had 
                            access to the summer vegetables that are used in it (Nudi, E., 2014). Dauphinoise potatoes are also from the 
                            Southern region of France. Traditionally, this dish doesn’t contain cheese or eggs because the potatoes are 
                            starchy enough to hold the dish together (Alfaro, D., 2019).  
                            <br/>
                            <u><b>Method used:</b></u> There are many different types of dry heat cooking methods like grilling, baking, 
                            and broiling. The main difference between frying and these other methods is that the poultry is immersed in 
                            oil during its cooking process. The pan/oil needs to be hot before adding the chicken so that the outside 
                            can immediately start browning and sealing in the juices. The temperature of the pan depends on how long 
                            the poultry is going to cook for and how thick the meat is (Labensky et al., 2018). Since you dice the 
                            vegetables, sauteeing is the best option of cooking it because of how quickly the vegetables will cook. 
                            You can still keep the structure and natural flavors of the vegetables with a gentler cooking process.
                            <br/>
                            <u><b>Variations:</b></u> Pan fried chicken is a pretty basic recipe so the only variations you might see 
                            are seasoning variations or maybe the order at which you batter the chicken. Because ratatouille is mainly 
                            vegetables, you can substitute a lot of different vegetables for this recipe. Typically eggplant, tomatoes, 
                            zucchini, and onions are used but you could also use squash and bell peppers. Some variations for the 
                            dauphinoise potatoes include using sweet potatoes, adding onions and meat like ham or chicken, or using 
                            chicken/vegetable stock instead of cream. You can also add mushrooms or other vegetables.
                            <br/>
                            <br/>
                            Alafaro, D. (2019, October 2). <i>Potatoes Dauphinoise vs. Potatoes Dauphine.</i> The Spruce Eats. 
                            <br/>
                            <a href="https:www.thespruceeats.com/potatoes-dauphine-vs-dauphinoise-995642">
                                <b>https:www.thespruceeats.com/potatoes-dauphine-vs-dauphinoise-995642</b>
                            </a>
                            <br/>
                            <br/>
                            Grilli, S. (2017, April 12). <i>The Surprising History of Fried Chicken.</i> Groupon Guide.                            <br/>
                            <a href="https:www.groupon.com/articles/who-invented-fried-chicken">
                                <b>https:www.groupon.com/articles/who-invented-fried-chicken</b>
                            </a>
                            <br/>
                            <br/>
                            Nudi, E. (2014, April 25). <i>Food History: Ratatouille.</i> ErinNudi.com.  
                            <br/>
                            <a href="https:www.erinnudi.com/2014/04/25/food-history-ratatouille/">
                                <b>https:www.erinnudi.com/2014/04/25/food-history-ratatouille/</b>
                            </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek7">
                <Button color="info" onClick={toggle22} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen7}>
                    <Card>
                        <CardBody>
                        <div>
                                <img src={wk7PanFriedChickenPrepList} alt="Pan Fried Chicken prep list" className="prepListImg" id="wk7PrepL1"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk7PotatoPrepList} alt="Potato dauph prep list" className="prepListImg" id="wk7PrepL2"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk7RatatouillePrepList} alt="Ratatouille prep list" className="prepListImg" id="wk7PrepL3"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek7">
                <Button color="danger" onClick={toggle23} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen7}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk7PanFriedChickenRecipe} alt="Pan fried recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk7PotatoDauph} alt="Potato Dauph recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk7Rata} alt="Ratatouille recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek7">
                <Button color="success" onClick={toggle24} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen7}>
                    <Card>
                        <CardBody>
                            <a href={wk7FoodCostDauphin}>
                                <b>Dauphinoise_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk7FoodCostFriedChicken}>
                                <b>FriedChicken_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk7FoodCostRata}>
                                <b>Ratatouille_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek7">
                <Button color="primary" onClick={toggle25} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen7}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, every dish that we made turned out very well. The fried chicken had great flavor from 
                            the flour mixture and was very juicy on the inside. The crispy skin achieved a nice brown 
                            color with both the deep fryer and the pan frying method. The dauphinoise potatoes, even 
                            though they were so simple to make, you were able to distinctly pick out the flavors of the 
                            garlic infused heavy cream, the gruyere cheese, and the fresh thyme. The overall dish didn’t 
                            have a lot of colors, just some brown and gold from the gruyere cheese browning on the tops. 
                            The texture was pretty plain because it was just the potatoes and cream, but the potatoes 
                            held a harder consistency since we didn’t cook them very long in the pot to where it would’ve 
                            turned to mush. However, when you eat the potatoes with the fried chicken, the textures 
                            balanced out. The ratatouille had a lot of different flavors in the dish because of the 
                            quality of products that we used and the variety of vegetables that we used. The taste 
                            from the sweet peppers overpowered the other ingredients like the zucchini and eggplant, 
                            but the sweet peppers were very refreshing and crisp and went well with the chiffonade basil. 
                            Since ratatouille is a stew of vegetables, the texture was soft and mushy because of the size 
                            dice that we did and because of how long it was cooked in the pot. The dish had colors of 
                            yellow, red, orange, green, and white from all of the ingredients that we used. 
                            I was pleasantly surprised by this dish because I don’t usually like eggplant or tomatoes.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk7ReflectFinalPlate} alt="Final plate with pan fried chicken, potatoes and ratatouille" name="wk7FinalPlate" className="cardImgWk7"></img>
                                    <Label for="wk7FinalPlate">Final Plate</Label>
                                </Col>
                                <Col>
                                    <img src={wk7ReflectDauphPotato} alt="dauphPotatoes" name="dauphPotatoes" className="cardImgWk7"></img>
                                    <Label for="dauphPotatoes">Dauphinoise Potatoes</Label>
                                </Col>
                                <Col>
                                    <img src={wk7ReflectRata} alt="Ratatouille in a stainless steal pot" name="wk7Rata" className="cardImgWk7"></img>
                                    <Label for="wk7Rata">Ratatouille</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            There were some parts of the chicken that had more batter than other places. This probably happened 
                            because we were low on buttermilk so the chicken didn’t have enough moisture to keep the flour stuck to it. 
                            Another reason could’ve been if you didn’t pay attention to which hand you were using to pick up 
                            the chicken. Switching between a wet hand and a dry hand prevents a large mess and prevents the dry 
                            hand from being coated in the flour (Alfaro, D., 2020). For the potatoes, we covered them with foil to 
                            prevent the cheese from burning while everything else cooked. We then removed the foil halfway through so 
                            that we could achieve the “Au Gratin” which gave the dish it’s color and some added texture. 
                            The potatoes cooked for a few minutes in a pan of garlic infused cream to help cook out the raw 
                            flavor and impart the garlic flavor into the potato slices. The ratatouille turned out well because 
                            we diced the vegetables to similar sizes so that each vegetable would cook at the same rate (Franke, 2014). 
                            The basil was added at the very end because it was used as a garnish and doesn’t require a long cooking time.
                            <br/>
                            <br/>
                            <Row>
                                <Col>
                                    <img src={wk7ReflectPotatoesInGarlicCream} alt="Potatoes in garlic cream" name="potatoesInGarlicCream" className="cardImgWk7TwoPics"></img>
                                    <Label for="potatoesInGarlicCream">Potatoes in Garlic Infused Cream</Label>
                                </Col>
                                <Col>
                                    <img src={wk7ReflectDicedVegetables} alt="Diced vegetables" name="dicedVegetable" className="cardImgWk7TwoPics"></img>
                                    <Label for="dicedVegetables">Diced Vegetables</Label>
                                </Col>
                            </Row>
                            Alafaro, D. (2020, March 25). <i>The Standard Breading Process.</i> The Spruce Eats.
                            <br/>
                            <a href="https:www.thespruceeats.com/the-standard-breading-procedure-995453">
                                <i>https:www.thespruceeats.com/the-standard-breading-procedure-995453</i>
                            </a>
                            <br/>
                            <br/>
                            Franke, S. (2014, February 12). <i>The 6 Biggest Mistakes You Make Chopping Vegetables</i>. GH.
                            <br/>
                            <a href="https:www.goodhousekeeping.com/food-recipes/cooking/tips/a18999/chopping-vegetables-mistakes/#:~:text=By%20cutting%20veggies%20into%20pieces,are%20meltingly%20soft%20and%20tender">
                                <i>https:www.goodhousekeeping.com/food-recipes/cooking/tips/a18999/chopping-vegetables-mistakes/#:~:text=By%20cutting%20veggies%20into%20pieces,are%20meltingly%20soft%20and%20tender</i>
                            </a>
                            </p>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            The objectives that I set for this week was to learn how to properly bread chicken so that the chicken is 
                            flavorful and moist. I think I did well at achieving this goal because the flour had a lot of dried herbs 
                            and other seasonings in it that gave the chicken all of its flavor. Also since we were constantly checking 
                            the temperature of the chicken during its cooking process, the chicken wasn’t overcooked and therefore was 
                            still juicy. This week we also butchered a chicken so that we could fry each individual piece like the 
                            tenderloin, wings, drumstick, thighs, etc. This technique can be used on other cuts of meat like a turkey. 
                            Even though there is a different procedure for butchering beef, you could still use the same principles like 
                            using a sharp knife, cutting out the connective tissue and ligaments, cutting off the extra fat, etc. I still 
                            need to practice seasoning my food correctly, because I noticed my chicken could’ve used more salt or black pepper 
                            the ratatouille needed more black pepper. 
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <br/>
        </div>

        <div className="jumbotron" id="week-8">
            <h1 className="display-4">Pork Escalope with Apples, Lyonnaise Potato, Green Beans</h1>
            <p className="h3">Week 8</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek8">
                <Button color="secondary" onClick={toggle26} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen8}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <b><u>Method of Cooking:</u></b> Saute
                                <br/>
                                <b><u>List of Objectives:</u></b> This week I would like to practice cooking pork so that it remains juicy and flavorful. I would also like to practice slicing potatoes evenly.
                                <br/>
                                <b><u>Method of cookery:</u></b> The pork scallops are coated in a light layer of flour so that it can 
                                achieve a nice brown color on the outside and keep some of the juices locked in. Similar to how we pan 
                                fried the chicken last week, the pork should be constantly turned so that it can be cooked evenly on both 
                                sides and then removed from the heat so that it doesn’t overcook while you’re making the sauce and softening 
                                the apples. The apples act as a good garnish that balances out and compliments the natural flavors of pork. 
                                The lyonnaise potatoes are first baked or boiling in order to start the cooking process and it’s also a good 
                                way to use out any leftover potatoes (Labensky et al., 2018). The initial cooking process helps to cook out 
                                the raw flavor from the potatoes, similar to what we did when we cooked the potatoes in garlic cream cream 
                                last week. The green beans don’t require much prep other than maybe cutting off the ends since they can be 
                                hard to chew sometimes and washing them before boiling them. It’s important to remember not to overcrowd the 
                                pot when cooking the green beans because it can cause the cooking process to take longer and can cause them 
                                to become discolored (labensky, et al., 2018).
                                <br/>
                                <b><u>Prior Knowledge:</u></b> I have cooked pork before in a pan, sous vide and in the oven. It took a few tries 
                                to get the temperature and the consistency correct, but I understand now what seasonings compliment each cooking 
                                method. I also topped my pork with peaches as opposed to apples, so I think any tree fruit might pair will with 
                                pork. I haven’t made lyonnaise potatoes before, but I have cooked green beans by boiling them and I’ve cooked it 
                                in the pan before. Luckily green beans don’t require a lot of seasoning and they’re easy to make, so just some 
                                garlic, salt, and pepper goes a long way.
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <b><u>Origin and history:</u></b> The pork dish originated in Germany. They call it a schnitzel but the 
                                process is the same in that a thin meat cutlet is breaded and cooked in a pan (Ozimek, 2020). The dish is 
                                usually cooked around Oktoberfest since it’s such an easy, but tasty dish to make for everyone. Lyonnaise 
                                potatoes originated from France near the city of Lyon because potatoes and onions were easy to come by during 
                                the time they were created. Green beans originally come from the Peru and Mexico region of South America because 
                                the crop is able to tolerate a lot of heat (Kerr, 2011). 
                                <br/>
                                <b><u>Methods used:</u></b> The pork is cooked in the pan rather than roasting or grilling it because the scallops 
                                are very small and thin so it doesn’t take long for them to cook. By using the pan we are able to control the 
                                cooking process better because we can constantly flip it and control the heat better. The juices from the pork 
                                can also be used to make a delicious sauce. The temperature and the browning process for the potatoes is easier 
                                to control when it’s cooked in the pan and when they’re sliced thinly. Lastly, the green beans are boiled and 
                                then immediately placed in an ice bath. Placing it in an ice bath halts the cooking process and when pulled 
                                out at the right time, the green beans become bright green indicating that they’re done cooking. Salting the 
                                water is also important because it seasons the green beans while they’re cooking. Variations: The pork can be 
                                seasoned with a variety of different herbs depending on what else you’re paring it with. For example, you could 
                                season your pork with citrus flavors and herbs that are consistent with the tropical regions if you’re looking 
                                to do a caribbean style pork dish. You can also cook the pork in a few different ways like grilling it, roasting 
                                it, or sous vide depending on the cut of meat that you have. You can also vary what kind of fruit you place on top. 
                                For example, you can use peaches or pears or a different tree fruit that might go well with the flavors of your 
                                side dishes and the pork. The green beans can be cooked in a sauce or have different seasonings or you could fry 
                                it with tempura batter if you want a crunchier texture. The potatoes can also have different seasonings or it 
                                could be baked.
                                <br/>
                                <br/>
                                Kerr, Bill. (2011, May 19). <i>History of the Green Bean Crop</i>. Farmer’s Weekly. 
                                <br/>
                                <a href="https:www.farmersweekly.co.za/farm-basics/how-to-crop/history-of-the-green-bean-crop/">
                                    <i>https:www.farmersweekly.co.za/farm-basics/how-to-crop/history-of-the-green-bean-crop/</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                Ozimek, S. (2020, September 21). <i>Traditional German Pork Schnitzel</i>. Curious Cuisiniere.
                                <br/>
                                <a href="https:www.curiouscuisiniere.com/german-schnitzel/">
                                    <i>https:www.curiouscuisiniere.com/german-schnitzel/</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek8">
                <Button color="info" onClick={toggle27} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen8}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk8LyonPotatoesPrepList} alt="Lyon's potatoes" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk8PorkEscalopePrepList} alt="pork escalope" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk8GreenBeanPrepList} alt="Green beans." className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek8">
                <Button color="danger" onClick={toggle28} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen8}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk8RecipePork} alt="Pork Escalope recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk8RecipeLyonPotatoes} alt="Lyonnaise potatoes recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk8RecipeGreenBeans} alt="Green bean recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek8">
                <Button color="success" onClick={toggle29} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen8}>
                    <Card>
                        <CardBody>
                            <a href={wk8FoodCostPork}>
                                <b>PorkEscalope_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk8FoodCostLyns}>
                                <b>LyonnaisePotatoes_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk8FoodCostGreenBeans}>
                                <b>GreenBeans_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek8">
                <Button color="primary" onClick={toggle30} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen8}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, all of the dishes were very tasty, had good color, and were cooked properly. The pork 
                            that I used was part of the pork filet, so my pieces were much smaller than everyones, but 
                            they were still tender, carried good flavor, and had a nice brown skin from the flour and 
                            butter. I added thyme to the pan towards the end of the cooking process to add flavor to the 
                            pork and to the juices in the pan that we were going to use for the sauce later. The sauce was 
                            thick, creamy, and slightly sweet and salty. The apples and the sauce paired really well with 
                            the pork because the sweetness from the apples and the cinnamon balanced out the herbs that 
                            were added to the pan when we cooked the pork. The potatoes also came out well, but personally I like 
                            the dauphinoise potatoes better than these. The onions were cooked perfectly and had minimal color and 
                            still had a bite to it rather than being soggy. This added some texture to the potatoes and balanced 
                            it out because they were somewhat soft compared to the crispy, hard potatoes. The potatoes had good 
                            varying color to it because some parts were more brown than others depending on the size and the 
                            position of where it was in the pot. They were still firm on the inside rather than falling apart 
                            when you went to eat it. The green beans were bright green and still slightly crunchy and kept its 
                            natural, fresh flavor. The vinaigrette was refreshing on the green beans and had a nice yellow color 
                            to it from combining the olive oil, apple cider vinegar, and dijon mustard. The dish itself was pretty 
                            neutral in color because the sauce was light brown along with the apples and outside of the pork and 
                            the potatoes were different shades of brown. The only color that was added to the dish was the green 
                            beans and some of the vinaigrette.
                            <br/>
                            <br/>
                            <Row>
                                <Col>
                                    <img src={wk8FinalPlate} alt="Final plate with pork, potatoes, and green beans" name="week8FinalPlate" className="cardImg"></img>
                                    <Label for="wk8FinalPlate">Final Plate</Label>
                                </Col>
                                <Col>
                                    <img src={wk8LyonsPotatoes} alt="Lyonnaise potatoes" name="LyonPotatoes" className="cardImg"></img>
                                    <Label for="LyonPotatoes">Lyonnaise Potatoes</Label>
                                </Col>
                            </Row>
                            </p>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                                The pork cooked well and had a good brown color because we made sure it was thin so that it would 
                                cook quickly, we checked the temperature while it was cooking to pull it out at the right time, and once 
                                we placed the pork in the pan, we didn’t move it which let the crust form. Pounding the meat helps to 
                                tenderize the meat, create an even thickness, and decrease the cooking time (Glatz, 2008). Since I used 
                                the pork filet instead of the pork chops, some of my pieces were tougher than others because of how 
                                small they were. In the future, I will either cook it for a shorter amount of time or purchase a larger 
                                cut of meat. The sauce had really good flavor because we used quality stock and added back in the juices 
                                from the pork as well as strained it so that we had a clean, lump-free sauce. We also removed the apple 
                                slices right before adding the heavy cream so that the apples wouldn’t become overcooked and mushy. 
                                Some of my potatoes were hard which means I should’ve cooked them longer in the parboiling process or 
                                cut them thinner. When I cook this again in the future, I will make sure to take into account the size 
                                of the potato for the parboiling process. Parboiling the potatoes in salted water helps to season the 
                                potatoes, cook out the enzymes and raw flavor, and shortens the cooking time before cooking it in the pan. 
                                The green beans had a bright green color to it because they were blanched and then added to an ice bath. 
                                Blanching helps to cook out any bitter flavors from the vegetables. It’s also important to remember to blanch 
                                it in salted water so that the vegetables retain their color and flavor (Labensky et al., 2018). Refreshing or 
                                placing it in an ice bath is also important because it stops the cooking process and sets their color 
                                (Labensky, et al., 2018).
                                <br/>
                                <br/>
                                Glatz, J., (2008, September 18). <i>Pounding Pork to Perfection</i>. Illinois Times.
                                <br/>
                                <a href="https://www.illinoistimes.com/springfield/pounding-pork-to-perfection/Content?oid=11452010">
                                    <i>https://www.illinoistimes.com/springfield/pounding-pork-to-perfection/Content?oid=11452010</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                <Row>
                                    <Col>
                                        <img src={wk8PotatoesBrowning} alt="Lyonnaise potatoes browning" name="potatoesBrowning" className="cardImg"/>
                                        <Label for="potatoesBrowning">Potatoes Browning</Label>
                                    </Col>
                                    <Col>
                                        <img src={wk8SauceReducing} alt="Sauce reducing in pan" name="sauceReducing" className="cardImg"/>
                                        <Label for="sauceReducing">Sauce Reducing in Pan</Label>
                                    </Col>
                                </Row>
                            </p>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            This week I wanted to work on cooking pork evenly and slicing potatoes evenly. 
                            I was able to slice the potatoes pretty evenly but there were a few that varied in thickness which 
                            caused them to be cooked unevenly. Since my potatoes were so large, when I parboiled them they didn’t 
                            even come close to cooking halfway through so when I tried to slice them it was hard to get through the middle 
                            which caused my knife to cut unevenly. Some additional skills that I learned was how to mount a sauce. 
                            This is when you add cold cubes of butter to your sauce at the very end of the cooking process and mix it in 
                            quickly. The butter adds a shine to the sauce which is just for appearance when you go to serve it. 
                            I can use this technique for any sauce that I make in the future so that it looks better on the plate. 
                            I still need to practice cooking things evenly and I can do that by getting more familiar with my pots and 
                            pans and the cooking environment since every stove and pan takes on heat differently.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
        </div>

         <div className="jumbotron" id="week-9">
            <h1 className="display-4">Broiled Sea Bass, Hollandaise Sauce, Glazed Carrots, Risotto</h1>
            <p className="h3">Week 9</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek9">
                <Button color="secondary" onClick={toggle32} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen9}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <u><b>Cooking Method: </b></u> Broiling and seafood
                                <br/>
                                <u><b>List of Objectives: </b></u> This week I would like to practice cooking fish properly without it 
                                drying out. I would also like to practice chopping carrots evenly.
                                <br/>
                                <u><b>Methods of Cookery: </b></u> For most fish when you use a dry cooking method, you keep the skin on 
                                and score it “to prevent the fish from curling during cooking, promote even cooking, and to create a more 
                                attractive product” (Labensky et al., 2018). You also have to remember to dry the skin before placing it 
                                on the grill or under a broiler that way it achieves the correct brown color. Fish is already really 
                                tender so you have to be careful and attentive to make sure it doesn’t overcook. Fish especially 
                                benefits from over carry cooking which is when the residual heat continues to cook to product after 
                                being removed. The carrots, similar to potatoes, should be parboiled prior to sauteing in order to 
                                speed up the cooking process and cook out the raw flavors. The risotto requires a specific type of 
                                rice grain because its starchy qualities are what helps provide the correct consistency.  
                                The arborio grain doesn’t require any rinsing before cooking like other grains because that will 
                                remove the starches and won’t let it absorb liquids quite as well (Labensky et al., 2018). Lastly, 
                                the hollandaise sauce requires some skill and help since you have to constantly whisk the egg mixture 
                                and butter over boiling water without causing the eggs to scramble in the bowl.
                                <br/>
                                <u><b>Prior Knowledge: </b></u> I’ve cooked fish before, but it’s usually on the pan rather than 
                                broiling it. I don’t cook fish that often because I usually overcook it. I cook carrots all the time 
                                in many different methods and I have made hollandaise sauce a few times before. I’ve also made risotto 
                                but it’s been a long time so I can’t remember the exact steps. 
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <u><b>Origin and history: </b></u>Everyone has their own recipe for preparing sea bass, but the fish itself originates from South America. Areas of Chile have become 
                                famous for how they prepare sea bass since it’s so plentiful in the area. Risotto is a common grain in Italy. It was first introduced in the Sicily area and slowly 
                                spread up the country of Italy. When it reached the northern part of Italy, the climate and growing areas were perfect for it, so now the Po Valley is one of the 
                                largest producers of the rice grain (Donati, 2016). It wasn’t until many years later that people experimented with it and cooked the grain with butter and stock 
                                rather than simply boiling it in water. Hollandaise sauce comes from France and also used to be known as Sauce Isigny (Waggoner, 2015). It wasn’t until the 20th 
                                century that Hollandaise sauce became one of the Mother sauces (Waggoner, 2015). 
                                <br/>
                                <u><b>Methods Used: </b></u>Fish can be cooked in a variety of different methods like steaming, poaching, frying, baking, grilling etc. Broiling is commonly 
                                used because it is a shorter cooking time and you can get good color on the skin from the high heat. Broiling is also useful for vegetables and to finish a 
                                product off to obtain a good color like broiling potatoes. Risotto is pretty easy to make, but it does require constant attention to make sure that the stock 
                                is being incorporated correctly and that the grain isn’t burning to the bottom of the pot. The stock is added 4 oz at a time to let the grain soak and cook 
                                properly (Labensky et al., 2018). The rice is held at a simmer and is stirred constantly so that every grain is cooked evenly. Lastly, for the hollandaise sauce, 
                                the clarified butter has to be added slowly but in a constant stream while you are whisking it over boiling water. The steam from the water allows you to incorporate 
                                your ingredients correctly and cook the egg yolks just enough that they don't become solid in the bowl. 
                                <br/>
                                <u><b>Variations: </b></u>There are a few different ways to prepare sea bass whether it’s the cooking method in or with different seasonings. 
                                However, you don’t want to use overpowering seasonings because it’ll mask the natural flavor of the fish. For the carrots, you can also prepare 
                                them with different cooking methods like roasting, boiling, sauteing, etc. For the risotto, you can use different types of stock or add different 
                                seasoning to it. Lastly, for the hollandaise sauce, the only variations are in the seasonings.
                                <br/>
                                <br/>
                                Donati, S., (2016, November 9). <i>The History of Risotto alla Milanese</i>. Italy Magazine.
                                <br/>
                                <a href="https://www.italymagazine.com/news/history-risotto-alla-milanese">
                                    <i>https://www.italymagazine.com/news/history-risotto-alla-milanese</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <a href="https://forknplate.com/2015/02/18/hollandaise-sauce/">
                                    <i>https://forknplate.com/2015/02/18/hollandaise-sauce/</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek9">
                <Button color="info" onClick={toggle33} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen9}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk9SeaBassAndSaucePrepList} alt="sea bass prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk9CarrotsPrepList} alt="Glazed carrots prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk9RisottoPrepList} alt="Risotto prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek9">
                <Button color="danger" onClick={toggle34} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen9}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk9SeaBassRecipe} alt="Sea bass recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk9SauceRecipe} alt="Hollandaise sauce recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk9RisottoRecipe} alt="Risotto recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <div>
                                <img src={wk9CarrotsRecipe} alt="Glazed carrots recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek9">
                <Button color="success" onClick={toggle35} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen9}>
                    <Card>
                        <CardBody>
                            <a href={wk9FoodCostFish}>
                                <b>Fish_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk9FoodCostRisotto}>
                                <b>Risotto_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk9FoodCostCarrots}>
                                <b>GlazedCarrots_FoodCost.xlsx</b>
                            </a>
                            <a href={wk9FoodCostSauce}>
                                <b>HollandaiseSauce_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek9">
                <Button color="primary" onClick={toggle36} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen9}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                                Overall the fish, carrots, risotto, and sauce turned out very tasty and were all cooked perfectly. The fish had good flavor from the herb butter 
                                that melted on top of it and from the lemon juice that was used to season it. Since the fish was broiled, it obtained a nice golden color on the 
                                top and was crispy around the edges. Instead of leeks, I used green beans to place the fish on top of for the presentation. The juices from the 
                                fish ran onto the green beans which helped flavor them. I steamed the green beans so that they would still have a slight crunch to them and kept 
                                their bright green color which contrasted well with everything else on the plate. The carrots had a slight sweet and salty flavor to it from the 
                                honey and the chicken stock that combined to form the glaze. Since the carrots were parboiled and sauteed, they kept a harder texture as opposed 
                                to boiling it. They had a bright orange glossy to it from the glaze and from the sauteeing which contrasted well with everything else on the plate. 
                                The hollandaise sauce had a perfect balance of saltiness and acidity from the lemon juice, egg yolk, and clarified butter. The risotto was creamy, 
                                salty, and slightly crunchy and had a light brown color. The chicken stock and white wine added a lot of flavor to the rice since it was able to 
                                soak it all up as opposed to cooking it in water. The parmesan cheese, when melted, added creaminess to the rice and helped keep the grains 
                                together for service. Since the rice was par cooked, there were some brown bits from the rice that also added saltiness to the whole dish. 
                                Overall, each dish had their own color and varying textures that went well together to add depth and complexity.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk9ReflectFinalPlate} alt="Final plate with broiled tilapia, glazed carrots, and risotto" name="wk9FinalPlate" className="cardImg"/>
                                    <Label for="wk9FinalPlate">Final Plate</Label>
                                </Col>
                                <Col>
                                    <img src={wk9ReflectRisotto} alt="Risotto after absorbing stock" name="risottoAfterAbsorb" className="cardImg"/>
                                    <Label for="risottoAfterAbsorb">Risotto After Absorbing Stock</Label>
                                </Col>
                            </Row>
                                <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                                The broiling technique worked and cooked the fish perfectly and gave it a nice brown color on the top. This 
                                worked because the fish, along with many other types of fish and shellfish, are thin and tender so they cooked quickly under high heat (Labensky et al., 2018). 
                                The glazed carrots cooked relatively quickly in the pan since we parboiled them first to speed up the cooking process. The chicken stock and the honey emulsified 
                                and reduced down to create a nice glaze for the carrots. The hollandaise sauce turned out well because the mixture was constantly being whisked and bounced back 
                                and forth between a cold surface and the steaming water which helped regulate the temperature to make sure that the eggs didn’t cook. The clarified butter was 
                                slowly added to make sure that it was fully incorporated. Lastly, the risotto was creamy and still slightly crunchy from the natural starches that were released 
                                during the cooking process. The important thing to remember for this dish was to only add the stock a little bit at a time until it was absorbed before adding 
                                more. This process is to ensure that the rice is taking in all of the flavor and releasing the starches that give it that creamy, velvety texture (Alfaro, 2020). 
                                Another important thing to do is to deglaze the pan with white wine. This adds flavor to the rice since it absorbs the wine and also helps remove any brown bits 
                                from the bottom of the pan from the rice and the onions that were cooking. By doing so, you are left with a clean pan at the end.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk9ReflectCarrots} alt="Glazed carrots" name="carrots" className="cardImg"/>
                                    <Label for="carrots">Glazed Carrots</Label>
                                </Col>
                                <Col>
                                    <img src={wk9ReflectRisottoCooking} alt="Risotto while it was cooking" name="risottoCooking" className="cardImg"/>
                                    <Label for="risottoeCooking">Risotto Cooking</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                                For this week, I wanted to practice cooking fish to the right temperature and cutting my carrots evenly. I think I did well with both objectives because the fish 
                                flaked just enough and the carrots were cut to the same width and were able to cook evenly. I can still practice cooking fish to the correct temperature because 
                                the outsides of the fish were very crispy and were very dark brown from the broiler. In the future, I will move the fish farther down from the heating coils that 
                                way it does not get too much color when it's cooking. Some additional knowledge that I learned this week were variations of the risotto recipe. I learned that I 
                                could use different stock to make it a fully vegetarian dish. Also I could’ve added different vegetables as garnishes like mushrooms or asparagus. Lastly, I could’ve 
                                used a wide variety and different combinations of cheese at the end. I can use this knowledge for other dishes that I’m going to cook in the future since so many 
                                ingredients are so versatile.
                                <br/>
                                <br/>
                                Alfaro, D. (2020, July 5). <i>Risotto Recipe for Beginners</i>. The Spruce Eats.
                                <br/>
                                <a href="https://www.thespruceeats.com/risotto-recipe-for-beginners-996008">
                                    <i>https://www.thespruceeats.com/risotto-recipe-for-beginners-996008</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-10">
            <h1 className="display-4">Poached Fish, Cauliflower Mornay, Rice Pilaf</h1>
            <p className="h3">Week 10</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek10">
                <Button color="secondary" onClick={toggle37} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen10}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <b><u>Cooking method: </u></b> Boiling
                                <br/>
                                <b><u>List of objectives: </u></b> This week I would like to practice cutting cauliflower and my knife skills.
                                <br/>
                                <b><u>Methods of cookery: </u></b> It’s important to remember to cover the fish before placing it in the oven because it helps to flavor the fish and with 
                                speeding up the cooking process. Next, the rice is par cooked slightly before adding the stock so that each of the grains can be coated in the seasoning from 
                                the onions. Cauliflower is also par cooked to help speed up the cooking process so that it doesn’t have to spend extra time in the oven. Par cooking it also 
                                helps the cauliflower absorb some of the cheese that is being poured over it. Lastly, it’s important to remember to use quality flavored meat for the tomato 
                                sauce because the rendering fat imparts a lot of flavor to the overall sauce. You also have to puree it or place in a blender or pass it through a fine strainer 
                                in order to get a nice clean, smooth tomato sauce.
                                <br/>
                                <b><u>Prior knowledge: </u></b> I’ve never poached fish before in the oven, but I have steamed it in a pot. I’ve also never made rice pilaf before, but I have 
                                cooked many different types of rice plenty of times. In addition, I haven’t made cauliflower mornay with a sauce, I’ve only roasted it in the oven with other 
                                vegetables or steamed it. Lastly, I’ve never made a tomato sauce either. 
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <b><u>Origin and history: </u></b> The filet of fish Duglere is a classic French dish created by Adolphe Duglere. The basics of the dish include using a fresh fillet fish and 
                                poaching it in a fish stock made from the fish bones and served with a white sauce (Stephane, 2018). The tomato sauce is also a classic French recipe as it is one of the 
                                5 mother sauces. Rice pilaf originated from Persia and the middle east because of the influence with the Silk Road (Ahmed, 2017). Since the middle eastern countries had 
                                access to the silk road, they had access to many different spices and vegetables to allow them to create rice pilaf. Lastly, cauliflower mornay originated from Great Britain; 
                                however, the mornay sauce is from France since it’s a derivative of a Bechamel sauce.
                                <br/>
                                <b><u>Methods used: </u></b> There are few different types of moist heat cooking methods that are used to cook fish and shellfish. The 3 common ones are boiling, steaming, 
                                and poaching. Boiling involves food that is fully submerged in rapid movement of bubbles when water reaches 212 deg F (Labensky et al., 2018). Next, steaming involves 
                                cooking fish and shellfish without adding fats (Labensky et al., 2018). Lastly, poaching is when food is partially or fully submerged in liquid that is 160-180 
                                deg F (Labensky et al., 2018). For the rice, it’s important to cover it while it’s cooking to keep the moisture locked in while the liquid is evaporating. 
                                This will keep the rice from drying out and will help to cook the grains evenly. The sauces for the fish and the cauliflower require a roux to be 
                                added in order to get it to the correct thickness and creaminess for a quality final product.
                                <br/>
                                <b><u>Variations: </u></b>For the fish, you can add different vegetables and herbs to the stock to add more flavor like celery, carrots, thyme, or rosemary. 
                                Since the fish is covered while it’s cooking in the oven, all of the aromas become infused in the fish and give it really good flavor. For the tomato sauce, you can use 
                                a few different types of meat in order to impart different flavors to the sauce like smoked meat or salted meat. For the cauliflower mornay, you can use a few different 
                                types of cheeses that will give it different flavors to pair with certain foods. The rice pilaf can be cooked on the stove or in the oven and can be made vegetarian by 
                                using vegetable stock instead of chicken stock. You can also season the rice with different herbs and spices.
                                <br/>
                                <br/>
                                Ahmed, Yusuf. (2017, April 8). <i>Understanding History With Rice Pilaf</i>. Yusuf Ahmed.
                                <br/>
                                <a href="https://medium.com/@Yusuf_Ahmed/understanding-history-with-rice-pilaf-27d64e46902f">
                                    <i>https://medium.com/@Yusuf_Ahmed/understanding-history-with-rice-pilaf-27d64e46902f</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                Stephane. (2018, October 19). <i>Fish Filet With Duglere Sauce</i>. The French Cooking Academy. 
                                <br/>
                                <a href="https://www.thefrenchcookingacademy.com/fish-filet-with-duglere-sauce/">
                                    <i>https://www.thefrenchcookingacademy.com/fish-filet-with-duglere-sauce/</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek10">
                <Button color="info" onClick={toggle38} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen10}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk10PrepListFishAndSauce} alt="Fish and sauce prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk10PrepListRice} alt="Rice pilaf prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk10PrepListCauliflower} alt="Cauliflower prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek10">
                <Button color="danger" onClick={toggle39} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen10}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk10RecipeFish} alt="Fish recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk10RecipeRice} alt="Rice pilaf recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk10RecipeCauliflower} alt="Cauliflower recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <div>
                                <img src={wk10RecipeSauce} alt="Sauce recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek10">
                <Button color="success" onClick={toggle40} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen10}>
                    <Card>
                        <CardBody>
                            <a href={wk10FoodCost1}>
                                <b>CauliflowerMornay_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk10FoodCost2}>
                                <b>FishFilet_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk10FoodCost3}>
                                <b>RicePilaf_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek10">
                <Button color="primary" onClick={toggle41} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen10}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                                Every dish was very tasty and all went really well together. However, I didn’t add enough milk to the mornay sauce so it was very thick and didn’t pour out 
                                like a sauce. I didn’t par boil the cauliflower because I like it to still have a bite to it when you eat it. Cauliflower already cooks pretty quickly so I 
                                didn’t see the need to boil it beforehand. For the sauce, I made too much roux compared to the amount of milk that I added and together with that, when I 
                                added the cheese at the end, it made the sauce very thick. The cauliflower dish got a good brown color to it on top from adding the shredded cheese. The 
                                sauce had good flavors from the smoked gouda cheese that I used and I didn't need to add any salt or pepper since the cheese had so much flavor already. 
                                For the fish, I used chicken stock instead of fish stock which gave it more flavor and less of a fishy taste to the overall dish. I poached the fish in a 
                                pan on the stove rather than putting it in the oven and it still came out really well and was perfectly cooked. The fish cooked on a low heat so it was 
                                able to absorb all of the flavors from the shallots, tomatoes, white wine, and the stock. The fish was very soft and flaky which helped to balance out 
                                the chewy texture from the cauliflower. The rice pilaf had good flavors from the spices I used to season the onions. I used cinnamon, paprika, nutmeg, 
                                coriander, and a bay leaf so the rice was slightly sweet from the cinnamon and nutmeg but balanced out well with the coriander, paprika, and bay leaf. 
                                I may have added a little too much stock to cook the rice because the grains at the bottom of the pan were mushy and some of the other grains were a 
                                little gummy. However, I really like this dish as a whole because of how well each dish paired well with each other.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk10ReflectFishAfterPoach} alt="Tilapia after poaching" name="TilapiaAfterPoaching" className="cardImg" />
                                    <Label for="TilapiaAfterPoaching">Tilapia After Poaching</Label>
                                </Col>
                                <Col>
                                    <img src={wk10ReflectMornaySauce} alt="Mornay sauce" name="mornaySauce" className="cardImg"/>
                                    <Label for="mornaySauce">Mornay Sauce</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                                The 2 moist cooking techniques worked because we added enough liquid for the ingredients to cook in without drying out and the fish and rice both had lids 
                                on them which helped retain moisture. For the poaching method, the ingredients can either be fully or partially submerged in liquid that is about 160-180 
                                deg F in temperature (Labensky, et al., 2018). The method is especially useful for fish because of how delicate it can be. The rice pilaf turned out well 
                                and had good flavor because right after the onions were cooked, the rice was added and stirred around so that each grain was well seasoned. The stock also 
                                added more flavor which allowed me not to have to add any additional salt or pepper to the dish. The rice also required a lid in order to keep the cooking 
                                time down and to keep the steam and pressure inside of the pot to allow the rice to gradually soak up the liquid (Gavin, 2020). The cauliflower was cooked 
                                perfectly, but the sauce was too thick to pour on top. When I was making the roux, I added more butter because it seemed too thick. However, I ended up 
                                adding too much but I didn’t add enough milk to balance out the ratio. Together with that, I may have added too much cheese initially which made it even 
                                thicker. In the future, I will use more milk and less cheese so that it has the correct consistency.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk10ReflectCauliflower} alt="Cauliflower mornay" name="cauliflowerMornay" className="cardImg"/>
                                    <Label for="cauliflowerMornay">Cauliflower Mornay Before Oven</Label>
                                </Col>
                                <Col>
                                    <img src={wk10ReflectSeasonedTilapia} alt="Seasoned Tilapia before paoching" name="tilapiaBeforePoach" className="cardImg"/>
                                    <Label for="tilapiaBeforePoach">Seasoned Fish Before Poaching</Label>
                                </Col>
                                <Col>
                                    <img src={wk10ReflectRicePilafBeforeStock} alt="Rice pilaf before stock" name="ricePilaf" className="cardImg"/>
                                    <Label for="ricePilaf">Rice Pilaf Before Stock</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                                The objectives that I set for this week was to practice cutting cauliflower and my knife skills. They go hand in hand and I think I did well with it this 
                                week because my cauliflower was cut evenly and uniformly. I didn’t know there was a correct way to cut a cauliflower until I watched the video which made 
                                it a lot easier to prepare. Additional knowledge that I learned this week, was to not stir the rice while it’s in the middle of cooking. I made the mistake 
                                of lifting the lid and stirring the rice because I didn’t want the rice to burn at the bottom; however, it resulted in my rice being mushy. This knowledge 
                                can be applied to any type of rice that I’m cooking unless it’s risotto. I still need to practice my knife skills so that I can get faster at it.
                            <br/>
                            <br/>
                            Gavin, J. (2020, March 30). <i>How to Cook Rice Like a Pro</i>. Jessica Gavin Culinary Scientist.
                            <br/>
                            <a href="https://www.jessicagavin.com/how-to-cook-rice/">
                                <i>https://www.jessicagavin.com/how-to-cook-rice/</i>
                            </a>
                            <br/>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-11">
            <h1 className="display-4">Chicken Fricassee, Broccoli Amandine, Fettuccine Carbonara</h1>
            <p className="h3">Week 11</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek11">
                <Button color="secondary" onClick={toggle42} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen11}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <b><u>Method of Cooking: </u></b> Braising
                                <br/>
                                <b><u>List of Cookery: </u></b> This week I would like to practice cooking pasta to the correct doneness. 
                                <br/>
                                <b><u>Method of Cookery: </u></b>When cooking the chicken fricassee, it’s important to remember to deglaze the pan before adding the chicken stock. 
                                The roux also helps to thicken the cream and the stock as it’s slowly cooking. Fricassee is the process of sauteing and stewing meat in oil or fat at a 
                                low temperature (Alfaro, 2018). Since the meat is being cooked for a long period of time, typically the meat doesn’t brown which results in all of the meat 
                                being white along with the sauce (Alfaro, 2018). Steaming the broccoli helps to keep the integrity of the nutrients, color, and flavor while it’s cooking. 
                                Amadine refers to any dish that incorporates sliced nuts as the garnish. It can be placed on fish, vegetables, or desserts to add a crunchy texture to the dish. 
                                Lastly, for the fettuccine carbonara, it’s important to reserve some of the pasta liquid for the sauce because it helps to thin out the sauce/cheese if it 
                                becomes too thick and stringy.
                                <br/>
                                <b><u>Prior Knowledge: </u></b>I’ve never made these specific recipes before, but I have cooked each of these dishes with different ingredients. 
                                I’ve made stewed chicken which is also a form of moist heat cooking. Together with that, I steam broccoli frequently but I don’t add almonds and lemon 
                                juice to it afterwards. Lastly, I’ve cooked many different types of pasta before and I’ve made fettuccine alfredo so the fettuccine carbonara shouldn’t 
                                be much of a difference. 
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <b><u>Origin and history: </u></b>Chicken fricassee comes from France and is seen as a comfort food to be enjoyed during all seasons of the year, but particularly in the winter 
                                (Alfaro, 2018). The word “Amandine” originated in France but the technique is used around the world (Alfaro 2019). Lastly, fettuccine carbonara 
                                originated from Italy in the city of Bologna (Divino, 2017). The dish was created during World War 2 when the only ingredients left from rationing 
                                was bacon, dried processed cheese, dried egg yolk, and dried pasta (Divino, 2017).
                                <br/>
                                <b><u>Methods used: </u></b>For the chicken we will combine dry and moist cooking when we saute the chicken and then when we braise it in chicken stock for a 
                                long period of time. The other common method of combination cooking would be stewing.  The main difference between stewing and braising is that braising involves 
                                cooking large, whole cuts of meat that is only partially submerged; whereas stewing is for smaller cuts of meat and typically it is fully submerged in a cooking 
                                liquid. We will be doing a white braising meaning that the chicken won’t brown at all during the cooking process. On the other hand, you can do brown braising 
                                where the meat is browned before adding the cooking liquid. For the pasta, the correct doneness is referred to al dente which means that it should still be firm 
                                when bitten. This is a common characteristic when cooking any pasta. Lastly, you should only add the cheese towards the end of cooking process because it doesn’t 
                                take a lot of heat or time for the cheese to melt and you don’t want it to become rubbery and thick from overcooking.
                                <br/> 
                                <b><u>Variations: </u></b>For the chicken fricassee, you can add almost any type of vegetable that will hold up with the heat and length of 
                                cooking time. For example, you can use carrots, mushrooms, potatoes, broccoli, or green beans. You can also use different types of stock to 
                                flavor the sauce; in addition, you can use different types of meat like veal, lamb, rabbit, and some seafood. For the broccoli amandine, 
                                you can use different types of nuts like almonds, walnuts, pecans, or pistachios. Lastly, for the fettuccine you can add or substitute shrimp, 
                                chicken, bacon, or scallops into the dish.
                                <br/>
                                <br/>
                                Alfaro, D. (2019, October 1). <i>Amandine: A Garnish Featuring Almonds</i>. The Spruce Eats.
                                <br/>
                                <a href="https://www.thespruceeats.com/what-does-amandine-in-culinary-mean-995557">
                                    <i>https://www.thespruceeats.com/what-does-amandine-in-culinary-mean-995557</i>
                                </a>
                                <br/>
                                <br/>
                                Alfaro, D. (2018, December 12). <i>What Does Fricassee Mean?</i> The Spruce Eats.
                                <br/>
                                <a href="https://www.thespruceeats.com/all-about-fricassee-995685">
                                    <i>https://www.thespruceeats.com/all-about-fricassee-995685</i>
                                </a>
                                <br/>
                                <br/>
                                Divino, T. (2017, July 5). <i>Who Invented Carbonara?</i> Toscano Divino.
                                <br/>
                                <a href="https://www.toscanadivino.com/who-invented-carbonara/">
                                    <i>https://www.toscanadivino.com/who-invented-carbonara/</i>
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek11">
                <Button color="info" onClick={toggle43} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen11}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk11BroccoliPrepList} alt="Broccoli prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk11ChickenFricasseePrepList} alt="Chicken fricassee prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk11FettuccineCarbonaraPrepList} alt="Fettuccine carbonara prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek11">
                <Button color="danger" onClick={toggle44} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen11}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk11BroccoliRecipe} alt="Broccoli amadine recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk11ChickenRecipe} alt="Chicken Fricassee recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk11CarbonaraRecipe} alt="Fetteccine carbonara recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek11">
                <Button color="success" onClick={toggle45} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen11}>
                    <Card>
                        <CardBody>
                            <a href={wk11FoodCostFettuccine}>
                                <b>FettuccineCarbonara_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk11FoodCostChicken}>
                                <b>ChickenFricassee_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk11FoodCostBroccoliAmandine}>
                                <b>BroccoliAmandine_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek11">
                <Button color="primary" onClick={toggle46} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen11}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            Overall, each dish was cooked properly and had good flavor and color. I forgot to add the nutmeg to the sauce so the chicken fricassee 
                            tasted bland at first, but once I added it later on it elevated the flavor of the entire dish. The chicken was tender and juicy since it 
                            was braised for a long time. The heavy cream lightened the sauce to a beige color and added extra creaminess to the sauce. The dish 
                            didn’t really have a lot of color to it since we didn’t brown the chicken and we made a white roux as opposed to a blonde or brown roux. 
                            The broccoli amandine had a few different flavors from the toasted almonds, garlic, and the natural flavor of the broccoli. Since we 
                            boiled the broccoli for a few minutes, it still had a slight bite to it and had a nice bright green color. The toasted almonds added 
                            a nice contrast of brown to the green. It also added an extra crunch and gave the dish a good nutty, buttery flavor. The fettuccine 
                            carbonara didn’t have a lot of color to it and had simple flavors from the 2 different types of cheese and the pancetta. The fettuccine 
                            was cooked perfectly al dente since we continually tasted it throughout the cooking process. The bits of crispy pancetta added a crunch 
                            and saltiness to the dish so a lot of seasoning wasn’t required. The cheeses also had salt in it so all we had to add was pepper to give 
                            it some spice.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk11ReflectChickenAndBroccoli} alt="chicken and broccoli amandine" name="chickenBroccoliAmandine" className="cardImg" />
                                    <Label for="chickenBroccoliAmandine">Braised Chicken and Broccoli Amandine</Label>
                                </Col>
                                <Col>
                                    <img src={wk11ReflectCarbonara} alt= "Fettuccine Carbonara" name="fettuccineCarb" className="cardImg" />
                                    <Label for="fettuccineCarb">Fettuccine Carbonara</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                               The chicken fricassee turned out well because we used the braising process of combination cooking. This process is when you use both 
                               dry heat from sauteing the chicken and moist heat from adding stock in order to cook the meat on a low heat for a long period of time 
                               (Labensky et al., 2018). The juices from the chicken are incorporated into the sauce because we made a white roux in the pan while 
                               the chicken was cooking. After the chicken was fully cooked, we removed it from the pan in order to finish making the sauce. 
                               The roux and the heavy cream are important to add because they thicken up the sauce after the juices from the chicken are 
                               reduced down. In the future, I will do a better job of monitoring the heat of my pan because my chicken had a slight brown color to 
                               the skin while it was braising because the pan got a little too hot. For the broccoli amandine, the broccoli was cooked perfectly 
                               because it only sat in the boiling water for about 3 minutes and then I removed it from the water so that it wouldn’t continue to 
                               soak in it. The almonds were dark brown which means I cooked it too long. Together with that, the garlic started to burn so it added 
                               a little bit of bitterness to the dish. In the future, I will take the almonds and garlic off of the heat earlier so that it doesn’t 
                               take on so much color. Lastly, the fettuccine carbonara was executed correctly because we were able to achieve the correct doneness 
                               for the noodles and the pancetta. In addition, an egg was added to ½ of the parmesan cheese in order to create a good base for the 
                               sauce. The egg yolk added richness and creaminess, while the egg white combined with the starchy pasta water to create a velvety 
                               feel in your mouth (Martinez, 2016). The pecorino cheese and the remaining parmesan was added at the end of the process so 
                               that it could be melted just enough from the residual heat of the dish. If we were to add it to the pan, the cheese would 
                               become hard, rubbery, and sticky from too much heat and it would be very difficult to mix it with the pasta.  
                               <br/>
                               <br/>
                               <Row>
                                <Col>
                                    <img src={wk11ReflectWhiteRoux} alt="Making the roux sauce" name="rouxSauce" className="cardImg"/>
                                    <Label for="rouxSauce">Making the White Roux</Label>
                                </Col>
                                <Col>
                                    <img src={wk11ReflectCheeseInFettuccine} alt="Mixing the cheese into the fettuccine" name="mixingInCheese" className="cardImg"/>
                                    <Label for="mixingInCheese">Mixing The Cheese In Fettuccine</Label>
                                </Col>
                                <Col>
                                    <img src={wk11RelfectToastedAlmonds} alt="Toasted almonds" name="toastedAlmonds" className="cardImg"/>
                                    <Label for="toastedAlmonds">Toasted Almonds</Label>
                                </Col>
                                </Row>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                Martinez, A. (2016 February, 24). <i>Make Silky Carbonara - Not Scrambled Egg Pasta</i>. Bon Appetit. 
                                <br/>
                                <a href="https://www.bonappetit.com/test-kitchen/cooking-tips/article/how-to-make-pasta-carbonara">
                                    <i>https://www.bonappetit.com/test-kitchen/cooking-tips/article/how-to-make-pasta-carbonara</i>
                                </a>
                            </p>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                                This week I wanted to practice cooking pasta to the correct doneness. Pasta can be a tricky thing to cook if you don’t keep 
                                track of the time. Leave it a little too long and you end up with mushy pasta that’s stuck together from the starches or you 
                                pull from the stove too early and end up with half cooked, half raw pasta. I tried the pasta multiple times throughout the cooking 
                                process in order to monitor the texture accurately. This week I learned that you can use an egg yolk to add extra creaminess and 
                                richness to the sauce. We used this technique with the chicken fricassee in order to thicken it up and give it more creaminess with 
                                the heavy cream. This technique can be used when you make any sauce as long as you temper it correctly so that it doesn’t end up as 
                                scrambled eggs in your sauce. Lastly, I think I still need to practice cooking chicken because I have a habit of overcooking chicken 
                                with the fear of it being undercooked. In the future, I will monitor it closer so that it doesn't get over cooked. 
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-12">
            <h1 className="display-4">Lamb Curry, Baked Butternut Squash, Vegetable Biryani</h1>
            <p className="h3">Week 12</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek12">
                <Button color="secondary" onClick={toggle47} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen12}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <b><u>Method of cooking: </u></b>Stewing and baking
                                <br/>
                                <b><u>List of objectives: </u></b>This week I would like to practice my knife skills.
                                <br/>
                                <b><u>Method of cookery: </u></b>Lamb can be a tough cut of meat so it needs a lot of time to cook in order to break down the collagen so that 
                                it’s tender and juicy by the time you eat it. However, you have to be careful not to overcook it because then it can become very chewy and tough. 
                                Lamb has really nice natural flavors so you’re able to pair it with a lot of different dishes. Especially if you use bone-in lamb leg, the bone 
                                imparts a lot of flavor and texture from the marrow being incorporated into the rest of the dish. There are a few different ways to cook squash, 
                                but baking it is probably one of the easiest ways.
                                <br/>
                                <b><u>Prior knowledge: </u></b>I’ve made sous vide and roasted lamb before, but I’ve never curried it. I’ve also made curry before, but I used 
                                chicken, beef, and goat. In addition, I’ve also stewed quite a bit of meat, but have never used lamb. Overall, whenever I make these dishes they 
                                come out very tasty and are cooked well since it cooks for a long period of time. I’ve made baked butternut squash on many occasions since it’s 
                                pretty simple and doesn’t require a lot of ingredients. I like my squash to be a little mushy because then it almost melts in your mouth. I haven't 
                                made vegetable biryani before, but I’ve made a very similar saffron rice dish with kebabs. The recipe was a Persian family recipe and it turned out 
                                really well. I mainly just watched and took notes, so I haven’t made it on my own yet.
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                            <b><u>Origin and history: </u></b>Lamb curry is thought to have originated from Northern India or modern day Iran. The dish requires a lot of spices 
                            in order to make it so flavorful and with all of the importing of food and spices in the area, the people here had a lot of access to these ingredients. 
                            The dish is also usually accompanied by a type of flaky bread like naan or rice so that it can soak up all of the flavorful sauce left 
                            behind (Baveja, 2015). Butternut squash is mainly planted in Mexico and parts of South America because of their ability to grow in warm or cool 
                            climates (Sleuth, 2018). The native americans started cooking with it and due to a tendency to not waste anything, they found creative ways to bake, 
                            simmer, or fry the entire squash (Sleuth, 2018). Biryani originated in west Asia near Persia but has now become a classic dish all over India. 
                            This dish is thought to be eaten a lot during war because it was just thrown together with whatever spices and meats they had available (Pal, 2016). 
                            The combination of rice and meat can be quite heavy and nutritious so it ended up being enough fuel for the military during war. 
                            <br/>
                            <b><u>Methods used: </u></b>Stewing is another combination cooking method similar to braising; however, you typically use smaller cuts of meat when 
                            stewing (Labensky, et al., 2018). There are also two types of stew: brown stews and white stews; this week we will be doing a brown stew. For brown 
                            stews, the meat is browned in fat which adds more flavor and color to the overall dish (Labensky, et al., 2018). For brown stews, it’s important to 
                            remember to first cook the meat on high heat until it’s browned, then add the cooking liquid and lower the heat to a gentle simmer because the meat cooks 
                            best at low temperatures so that all of the flavors and ingredients are incorporated without burning. (Labensky, et al., 2018). Basmati rice is typically 
                            used in Indian culture because of their accessibility to the product and because of the natural nutty, flavorful tastes it imparts to a dish. For biryani 
                            and other Indian rice dishes, it’s common to use a damp cloth as a lid while it’s cooking because it soaks up the evaporated water and prevents it from 
                            falling back into the rice. 
                            <br/>
                            <b><u>Variations: </u></b>Curry is typically prepared with either lamb or goat, but the good things about curry is that you can use almost 
                            any type of meat. Things like tomato puree or tomato paste can be added or you can use different types of seasonings to alter the 
                            flavor and change the color of the sauce (Baveja, 2015). What you eat with it can also vary; for example, the curry can be placed on 
                            top of different types of rice or several different types of absorbent bread. Next, butternut squash can be prepared and used in a multitude of 
                            ways; for example, it can be baked, boiled, or fried and can be used to eat by itself, put into soups, pies, souffles, casseroles, and breads 
                            (Sleuth, 2018). The nice thing about squash is that the entire thing is edible. You can bake/roast the seeds and you can batter and fry the flowers 
                            (Sleuth, 2018). Biryani has a lot of different variations depending on the region you’re visiting. Biryani can include spiced meat, seafood, quail, 
                            deer saffron flavored rice, potatoes, lemon, yogurt, nuts, vegetables, ghee, and creamy milk (Pal, 2016).
                            <br/>
                            <br/>
                            Baveja, G. (2015 September, 9). <i>The Story Behind Rogan Josh, an Authentic Lamb Curry</i>. Los Alto Town Crier
                            <br/>
                            <a href="https://www.losaltosonline.com/special-sections2/sections/food-a-wine/51079  -the-story-behind-rogan-josh-an-authentic-indian-lamb-curry">
                                <i>https://www.losaltosonline.com/special-sections2/sections/food-a-wine/51079  -the-story-behind-rogan-josh-an-authentic-indian-lamb-curry</i>
                            </a>
                            <br/>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson
                            <br/>
                            <br/>
                            Pal, S. (2016 July 6). <i>Origin of Biryani in India</i>. The Better India.
                            <br/>
                            <a href="https://www.thebetterindia.com/60553/history-biryani-india/">
                                <i>https://www.thebetterindia.com/60553/history-biryani-india/</i>
                            </a>
                            <br/>
                            <br/>
                            Sleuth, G. (2018 December 5). <i>Butternut Squash</i>. Gourmet Sleuth.
                            <br/>
                            <a href="https://www.gourmetsleuth.com/articles/detail/butternut-squash">
                                <i>https://www.gourmetsleuth.com/articles/detail/butternut-squash</i>
                            </a>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek12">
                <Button color="info" onClick={toggle48} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen12}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk12LambCurryPrepList} alt="Lamb curry prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk12ButternutSquashPrepList} alt="Butternut squash prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk12VegetableBiryaniPrepList} alt="Vegetable biryani prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek12">
                <Button color="danger" onClick={toggle49} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen12}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk12RecipeLambCurry} alt="Lamb curry recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk12RecipeSquash} alt="Butternut squash recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk12RecipeVegetable} alt="Vegetable biryani recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek12">
                <Button color="success" onClick={toggle50} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen12}>
                    <Card>
                        <CardBody>
                        <a href={wk12FoodCostSquash}>
                                <b>ButternutSquash_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk12FoodCostLamb}>
                                <b>LambCurry_FoodCost.xlsx</b>
                            </a>
                            <br/>
                            <a href={wk12FoodCostVegetable}>
                                <b>VegetableBiryani_FoodCost.xlsx</b>
                            </a>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek12">
                <Button color="primary" onClick={toggle51} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen12}>
                    <Card>
                        <CardBody>
                            <h4 className="reflectionHeader">RESULTS</h4>
                            <p>
                            All three of the dishes were cooked perfectly, had great flavors, and had good color to them. Since the curry has so many different spices, it 
                            masked the natural gamey flavor of the lamb. If anyone hasn’t tried lamb before, this probably would be a good introductory dish because you 
                            taste a little bit of the lamb without being overpowered by its natural, bold flavors. Since we cooked the dish for a few hours, the lamb was 
                            very tender and juicy from soaking up the spices and liquid of the curry. All of the spices mixed together gave the overall dish a brown, yellow 
                            color. The curry had a tiny bit of heat to it and was very savory from all of the spices. The coconut milk helped to lighten the color of the 
                            dish, but didn’t impart any extra flavor. The vegetable biryani had lots of different flavors and textures from the fresh cilantro, toasted 
                            almonds, peas and carrots, and spices. This spice mixture was slightly different from the curry and had slightly sweeter flavors from the cinnamon, 
                            star anise, and cardamom. The dish had pops of green and orange from the peas, cilantro, and carrots which was a good contrast when placed next to 
                            monochromatic brown, yellow curry. There was a nice crunchy texture from the toasted almonds and the diced potatoes also added some variation to 
                            the dish because it wasn’t mushy and still held its structure in the rice. The butternut squash was very soft, mushy, and sweet. The squash was 
                            roasted in the oven so the outsides of some pieces were charred but didn’t impart any burnt flavors. We drizzled a little bit of honey at the end, 
                            but the squash has a slightly natural sweetness so it didn’t require a lot. 
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk12ReflectSquash} alt="Butternut squash" name="butterSquash" className="cardImg"/>
                                    <Label for="butterSquash">Butternut Squash</Label>
                                </Col>
                                <Col>
                                    <img src={wk12ReflectVegetables} alt="Vegetable Biryani" name="vegetableBir" className="cardImg"/>
                                    <Label for="vegetableBir">Vegetable Biryani</Label>
                                </Col>
                                <Col>
                                    <img src={wk12ReflectLamb} alt="Lamb curry" name="lambCurry" className="cardImg"/>
                                    <Label for="lambCurry">Lamb Curry</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">EVALUATION</h4>
                            <p>
                            The lamb curry was a brown stew rather than a white stew, meaning that the lamb was browned first in fat and then cooking liquid was added 
                            after (Labensky et al., 2018). We browned the meat in order to impart more flavor and color to the overall dish. Lamb leg is a very tough piece 
                            of meat because it does a lot of work during the animal’s lifetime, so these cuts of meat do well when they are cooked for a long period of time at 
                            a low temperature (Mattison, 2013). The garlic and ginger were pureed together and then added to the pan with the spices and then reduced down 
                            slightly before slowly incorporating the coconut milk. The garlic and ginger puree incorporated better into the sauce since it was pureed rather 
                            than being minced. While the coconut milk didn’t add too much extra flavor, it did add extra creaminess and acted as an emulsifier for the curry 
                            sauce. For the biryani we cooked the rice to 90% doneness because it would finish off cooking with the vegetables sandwiched between 2 layers of 
                            rice. The potatoes, carrots, onions, and yogurt had to cook separately before adding it to the rice because it takes longer to cook and needed 
                            extra water so that the potatoes could cook properly. Once the vegetables and rice were done cooking, we created a layer of ½ of the rice in a pot, 
                            then added the vegetables, and lastly added the remaining rice to the top and covered it to finish the cooking process. Covering it with a damp 
                            towel helped to keep all of the moisture and aromas from escaping. Once the rice was done cooking, we stirred everything together and made sure to 
                            fully coat the rice in all of the spices and liquid from the vegetables. Lastly, the squash was nice and soft because we cut them into small squares 
                            so they cooked faster and evenly. Butternut squash doesn’t require a lot of extra seasoning because it has nice natural flavors.
                            </p>
                            <Row>
                                <Col>
                                    <img src={wk12ReflectCoconutMilk} alt="Spices cooking before adding coconut milk" name="coconutMilk" className="cardImg"/>
                                    <Label for="coconutMilk">Spices Before Adding Coconut Milk</Label>
                                </Col>
                                <Col>
                                    <img src={wk12ReflectVegetablesBeforeAddingRice} alt="Vegetable Biryani before adding to rice" name="vegetableBeforeRice" className="cardImg"/>
                                    <Label for="vegetableBeforeRice">Cooking Vegetables Before Adding to Rice</Label>
                                </Col>
                                <Col>
                                    <img src={wk12ReflectVegetablesBeforeStir} alt="Vegetables before stiring" name="vegetablesBeforeStir" className="cardImg"/>
                                    <Label for="vegetablesBeforeStir">Vegetables Before Stirring</Label>
                                </Col>
                            </Row>
                            <h4 className="reflectionHeader">CONCLUSION</h4>
                            <p>
                            This week I wanted to practice my knife skills. I think I did well this week because my potato, carrots, and squash pieces were pretty even. 
                            I learned about the different cuts of lamb and how each cut has to be treated/prepared differently so that you get the best flavors out of 
                            them. This can be applied to any type of meat or even fish because some cuts of meat don’t require a lot of cooking or seasoning and others 
                            do. I still need to practice cooking rice to the correct doneness because every type of rice grain is different and requires a different 
                            cooking process.
                            <br/>
                            <br/>
                            Mattison, L. (2017, April 3). <i>Mistakes Everyone Makes When Cooking Lamb</i>. Mashed.
                            <br/>
                            <a href="https://www.mashed.com/54466/mistakes-everyone-makes-cooking-lamb/">
                                <i>https://www.mashed.com/54466/mistakes-everyone-makes-cooking-lamb/</i>
                            </a>
                            <br/>
                            <br/>
                            Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-13">
            <h1 className="display-4">Sous Vide Steak, Stir Fry Asparagus, Beer Battered Onion Rings, Steak Fries</h1>
            <p className="h3">Week 13</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek13">
                <Button color="secondary" onClick={toggle52} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen13}>
                    <Card>
                        <CardBody>
                            <h4 className="researchHeader">INTRO</h4>
                            <p>
                                <b><u>Method of Cooking: </u></b>Combination cooking, sous vide
                                <br/>
                                <b><u>List of objectives: </u></b>This week I would like to practice determining the doneness level for foods.
                                <br/>
                                <b><u>Method of Cookery: </u></b>Sous vide is a method of combination cooking where the food is placed in a bag and submerged in a water 
                                bath and held at a precise temperature for a certain period of time (Labensky et al., 2018). Sous vide is best used for tough cuts of 
                                meat because the constant, consistent temperature helps to break down the collagen and retain flavor, resulting in a very tender cut of
                                 meat (Labensky et al., 2018). The piece of meat is then browned after it has cooked in order to get a nice crust on the outside. 
                                 For the triple cooked chips, the cooking is done in stages in order to dry out the fries before fully cooking them so that they don’t 
                                 end up soggy in the middle (Blumenthal, 2019). Lastly, for the onion rings, all of the seasoning goes in the batter because it gives 
                                 your food extra flavor and texture. 
                                <br/>
                                <b><u>Prior knowledge: </u></b>I have sous vide a lot of different types of meat before like lamb, steak, and pork chops. They always 
                                come out really tasty since the sous vide holds them at the perfect cooking temp and is able to break down the collagen in the meats 
                                so that they are really tender. However, I’ve never eaten or tried to cook venison. I’ve also eaten onion rings and chips at restaurants 
                                before, but I’ve never made them myself. 
                            </p>
                            <h4 className="researchHeader">BACKGROUND</h4>
                            <p>
                                <b><u>Origin and history: </u></b>Sous vide cooking doesn’t have an exact place of origin, but the idea was thought of by 2 French chefs 
                                in the 1970s. The idea came up when one of the chefs wanted to improve the tenderness of roast beef (Popovici, 2018). The other chef 
                                wanted to prevent his food from shrinking during the cooking process so he wrapped foie gras in plastic wrap and then cooked it 
                                (Popovici, 2018). The two chefs then paired with a plastic manufacturer to refine their technique and ended up creating a vacuum sealing 
                                machine that could lock in all of the liquids while also being able to withstand the heat while cooking (Popovici, 2018). Around this 
                                time period, prepackaged food and tv dinners were on the rise, so this method offered better tasting food with less material waste and 
                                was easy to prepare. The triple fried chip was created by Heston Blumenthal in the 1990s. He took the French’s double cooked fry recipe 
                                and elevated it by cooking it one more time in order to keep a nice crispy fry that doesn’t get soggy when cooled (Blumenthal, 2019). 
                                One of the first recipes of onion rings can be found in a cookbook called “The Art of Cookery Made Easy and Refined” 
                                (Onion Business, 2019). 
                                <br/>
                                <b><u>Methods used: </u></b>Combination cooking is when you apply both moist and dry heat to your food. For the steaks we will be placing 
                                it in a water bath and then finishing it on a hot pan to sear the outside. The sous vide gives you a precise cooking temp all the way 
                                around so that you don’t have to worry about if you under or overcooked your meat. The other 2 combination method techniques are stewing 
                                and braising, but sous vide is different because the food is vacuum sealed which draws out air and locks in the flavors of your seasoning 
                                while it’s cooking. Using beer for the batter acts as a leavening agent due to the carbonation and adds flavor (Labensky et al., 2018). 
                                You can also add baking powder or you can place the batter in a soda stream container so that the batter comes out light and fluffy. 
                                <br/>
                                <b><u>Variations: </u></b>For the sous vide, you can use any type of meat or seafood along with any type of seasonings. 
                                The sous vide is great for obtaining the perfect internal temperature of your meat. There are also a few different ways to 
                                finish off the meat after you pull it out of the water bath. You can use the grill, a hot iron skillet, a pan, or you can broil it. 
                                All of these techniques can add extra flavor to the meat; for example, if you finished a steak on a wood fired grill you might get a 
                                charred steak with some of the smoky characteristics on the outside. For the chips, you can season it with different things and the 
                                cooking methods also vary: using a deep fryer, air fryer, or baking them. Lastly, the onion rings your batter can vary so you can use 
                                bread crumbs, milk, beer, chipotle seasoning, coconut flour, and cornmeal.
                                <br/>
                                <br/>
                                Bluementhal, H. (2019, August 19). <i>My Signature Dish: Heston Blumenthal’s Triple Cooked Chips</i>. Michelin Guide.
                                <br/>
                                <a href="https://guide.michelin.com/us/en/california/article/people/heston-blumenthal-triple-cooked-chips-french-fries">
                                    <i>https://guide.michelin.com/us/en/california/article/people/heston-blumenthal-triple-cooked-chips-french-fries</i>
                                </a>
                                <br/>
                                <br/>
                                (2019, June 27). O is For Onion Ring. Onion Business
                                <br/>
                                <a href="https://onionbusiness.com/o-is-for-onion-ring-as-in-national-onion-ring-day-june-22/">
                                    <i>https://onionbusiness.com/o-is-for-onion-ring-as-in-national-onion-ring-day-june-22/</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                Popovici, A. (2018, May 9). <i>The Colonel in The Kitchen: A Surprising History of Sous Vide.</i> NPR
                                <br/>
                                <a href="https://www.npr.org/sections/thesalt/2018/05/09/608308624/the-colonel-in-the-kitchen-a-surprising-history-of-sous-vide#:~:text=Most%20sources%20credit%20two%20French,the%20tenderness%20of%20roast%20beef">
                                    <i>https://www.npr.org/sections/thesalt/2018/05/09/608308624/the-colonel-in-the-kitchen-a-surprising-history-of-sous-vide#:~:text=Most%20sources%20credit%20two%20French,the%20tenderness%20of%20roast%20beef</i>
                                </a>
                                <br/>
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek13">
                <Button color="info" onClick={toggle53} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen13}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk13ChipsPrepList} alt="Chips prep list" className="prepListImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk13SousVidePrepList} alt="Sous vide steak prep list" className="prepListImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                            <img src={wk13OnionRingPrepList} alt="Onion rings prep list" className="prepListImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek13">
                <Button color="danger" onClick={toggle54} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen13}>
                    <Card>
                        <CardBody>
                            <div>
                                <img src={wk13ChipsRecipe} alt="Chips recipe" className="recipeImg"/>
                            </div>
                            <br/>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk13SteakRecipe} alt="steak recipe" className="recipeImg"/>
                            </div>
                            <hr className="my-3"/>
                            <br/>
                            <div>
                                <img src={wk13OnionRingsRecipe} alt="onion rings recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek13">
                <Button color="success" onClick={toggle55} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen13}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek13">
                <Button color="primary" onClick={toggle56} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen13}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

        <div className="jumbotron" id="week-14">
            <h1 className="display-4">Asparagus Frittata, Poached Eggs, Salad Nicoise</h1>
            <p className="h3">Week 14</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek14">
                <Button color="secondary" onClick={toggle57} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen14}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="prepListWeek14">
                <Button color="info" onClick={toggle58} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen14}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="recipeWeek14">
                <Button color="danger" onClick={toggle59} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen14}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="foodCostWeek14">
                <Button color="success" onClick={toggle60} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen14}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>

            <div className="recipeCard" id="reflectionWeek14">
                <Button color="primary" onClick={toggle61} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen14}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

    </div>
  );
}

export default App;
