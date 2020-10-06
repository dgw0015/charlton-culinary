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



    return (
    <div className="App-container">
       <a href="https://charlton-website.vercel.app/">
          <h1 className="display-menu">
             <BsBoxArrowInUpLeft /> Back to Website
          </h1>
       </a>
        <div className="socialMediaLinks">
            <a className="facebook" href="https://www.facebook.com/charlton.kam" ><FaFacebook /></a>
            <a className="linkedIn" href="https://www.linkedin.com/in/charlton-kam-ba81b5176/"><FaLinkedin /></a>
            <a className="pinterest" href="https://www.pinterest.com/auburnthunder17/"><RiPinterestFill /></a>
            <a className="instagram" href="https://www.instagram.com/c.kam_design/"><FiInstagram /></a>
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
                                <a href="https://www.thespruceeats.com/how-to-make-tomato-concasse-996208">
                                    <i>https://www.thespruceeats.com/how-to-make-tomato-concasse-996208</i>
                                </a>
                                <br/>
                                <br/>
                                Devteam (2019, September 30). <i>The History of Minestrone Soup: What is it and How is it Made?</i> Authentic Italian De Nicola’s Restaurant.
                                <br/>
                                <a href="https://www.denicolasitaliandining.com/blog/the-history-of-minestrone-soup-what-is-it-and-how-is-it-made">
                                    <i>https://www.denicolasitaliandining.com/blog/the-history-of-minestrone-soup-what-is-it-and-how-is-it-made</i>
                                </a>
                                <br/><br/>
                                Jawad, Y. (2019, February 25). 10 Recipes with Vegetable Stock. Feel Good Foodie.
                                <br/>
                                <a href="https://feelgoodfoodie.net/blog/vegetable-broth/"><i>https://feelgoodfoodie.net/blog/vegetable-broth/</i></a>
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
                            <a href="https://www.thespruceeats.com/bouquet-garni-recipe-1805692">
                                <i>https://www.thespruceeats.com/bouquet-garni-recipe-1805692</i>
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
                                <a href="https://www.thespruceeats.com/german-fresh-cream-of-tomato-soup-1447351">
                                    <i>https://www.thespruceeats.com/german-fresh-cream-of-tomato-soup-1447351</i>
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
                            <a href="https://nourishedkitchen.com/bone-broth-doesnt-gel/">
                                <i>https://nourishedkitchen.com/bone-broth-doesnt-gel/</i>
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
                                <a href="https://www.thespruceeats.com/leek-and-potato-soup-recipe-435299">
                                    <i>https://www.thespruceeats.com/leek-and-potato-soup-recipe-435299</i>
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
                            <a href="https://www.healthline.com/nutrition/foods/potatoes">
                                <i>https://www.healthline.com/nutrition/foods/potatoes</i>
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
                                <a href="https://forknplate.com/2015/02/04/veloute-sauce-the-versatile-stranger/">
                                    <i>https://forknplate.com/2015/02/04/veloute-sauce-the-versatile-stranger/</i>
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
                            <a href="https://www.culinaryhill.com/how-to-truss-a-chicken/">
                                <i>https://www.culinaryhill.com/how-to-truss-a-chicken/.</i>
                            </a>
                            <br/>
                            <br/>
                            Mattison, L. and Woodward, P. (2019, October 31). How to Carve a Chicken. Taste of Home.
                            <br/>
                            <a href="https://www.tasteofhome.com/article/how-to-carve-a-chicken/">
                                <i>https://www.tasteofhome.com/article/how-to-carve-a-chicken/</i>
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
                            <a href="https://www.thespruceeats.com/potatoes-dauphine-vs-dauphinoise-995642">
                                <b>https://www.thespruceeats.com/potatoes-dauphine-vs-dauphinoise-995642</b>
                            </a>
                            <br/>
                            <br/>
                            Grilli, S. (2017, April 12). <i>The Surprising History of Fried Chicken.</i> Groupon Guide.                            <br/>
                            <a href="https://www.groupon.com/articles/who-invented-fried-chicken">
                                <b>https://www.groupon.com/articles/who-invented-fried-chicken</b>
                            </a>
                            <br/>
                            <br/>
                            Nudi, E. (2014, April 25). <i>Food History: Ratatouille.</i> ErinNudi.com.  
                            <br/>
                            <a href="https://www.erinnudi.com/2014/04/25/food-history-ratatouille/">
                                <b>https://www.erinnudi.com/2014/04/25/food-history-ratatouille/</b>
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
                            <a href="https://www.thespruceeats.com/the-standard-breading-procedure-995453">
                                <i>https://www.thespruceeats.com/the-standard-breading-procedure-995453</i>
                            </a>
                            <br/>
                            <br/>
                            Franke, S. (2014, February 12). <i>The 6 Biggest Mistakes You Make Chopping Vegetables</i>. GH.
                            <br/>
                            <a href="https://www.goodhousekeeping.com/food-recipes/cooking/tips/a18999/chopping-vegetables-mistakes/#:~:text=By%20cutting%20veggies%20into%20pieces,are%20meltingly%20soft%20and%20tender">
                                <i>https://www.goodhousekeeping.com/food-recipes/cooking/tips/a18999/chopping-vegetables-mistakes/#:~:text=By%20cutting%20veggies%20into%20pieces,are%20meltingly%20soft%20and%20tender</i>
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
                                <a href="https://www.farmersweekly.co.za/farm-basics/how-to-crop/history-of-the-green-bean-crop/">
                                    <i>https://www.farmersweekly.co.za/farm-basics/how-to-crop/history-of-the-green-bean-crop/</i>
                                </a>
                                <br/>
                                <br/>
                                Labensky, S. R., Hause, A.M., Martel P. A. (2018). <i>On Cooking: A Textbook of Culinary Fundamentals</i>. Pearson.
                                <br/>
                                <br/>
                                Ozimek, S. (2020, September 21). <i>Traditional German Pork Schnitzel</i>. Curious Cuisiniere.
                                <br/>
                                <a href="https://www.curiouscuisiniere.com/german-schnitzel/">
                                    <i>https://www.curiouscuisiniere.com/german-schnitzel/</i>
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
                            Content
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
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
                <br/>
            </div>
        </div>

    </div>
  );
}

export default App;
