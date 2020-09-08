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
import creameTomatoSoup from './images/Week_2/CreamOfTomatoSoup.PNG';
import beefStickPrepList from './images/Week_2/brown stock prep list.png';
import chickenStockPrepList from './images/Week_2/chicken stock prep list.png';
import tomatoSoupPrepList from './images/Week_2/cream of tomato soup prep list.png';


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
                                <img src={creameTomatoSoup} alt="Cream of tomato soup recipe" className="recipeImg"/>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard">
                <Button color="success" onClick={toggle9} style={{ marginBottom: '1rem' }}>Food Cost</Button>
                <Collapse isOpen={weekFourFoodCost}>
                    <Card>
                        <CardBody>
                            NA.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard">
                <Button color="primary" onClick={toggle10} style={{ marginBottom: '1rem' }}>Report & Reflection</Button>
                <Collapse isOpen={weekFourReflection}>
                    <Card>
                        <CardBody>
                            NA.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

        </div>
    </div>
  );
}

export default App;
