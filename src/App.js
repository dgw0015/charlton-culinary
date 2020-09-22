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
                <br/>
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
                            Content
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
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <br/>
        </div>

        <div className="jumbotron" id="week-7">
            <h1 className="display-4">Pan Fried Chicken, Collard Greens, Gratin Dauphinois</h1>
            <p className="h3">Week 7</p>
            <hr className="my-4"/>
            <div className="recipeCard" id="researchWeek7">
                <Button color="secondary" onClick={toggle21} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen7}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="prepListWeek7">
                <Button color="info" onClick={toggle22} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen7}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="recipeWeek7">
                <Button color="danger" onClick={toggle23} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen7}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="foodCostWeek7">
                <Button color="success" onClick={toggle24} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={foodCostIsOpen7}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="reflectionWeek7">
                <Button color="primary" onClick={toggle25} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={reflectionIsOpen7}>
                    <Card>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Collapse>
            </div>
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
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="prepListWeek8">
                <Button color="info" onClick={toggle27} style={{ marginBottom: '1rem' }}>Prep List</Button>
                <Collapse isOpen={prepListIsOpen8}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="recipeCard" id="recipeWeek8">
                <Button color="danger" onClick={toggle28} style={{ marginBottom: '1rem' }}>Recipe</Button>
                <Collapse isOpen={recipeIsOpen8}>
                    <Card>
                        <CardBody>
                            Content
                        </CardBody>
                    </Card>
                </Collapse>
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
            </div>
        </div>

    </div>
  );
}

export default App;
