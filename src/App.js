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
import {Button, Card, CardBody, Collapse, Table} from 'reactstrap';


function App() {

    const [researchIsOpen, setResearchIsOpen] = useState(false);
    const [recipeIsOpen, setRecipeIsOpen] = useState(false);
    const [foodCostOpen, setFoodCostIsOpen] = useState(false);
    const [reflectionIsOpen, setReflectionIsOpen] = useState(false);
    const [prepListIsOpen, setPrepListIsOpen] = useState(false);

    const toggle = () => setResearchIsOpen(!researchIsOpen);
    const toggle2 = () => setRecipeIsOpen(!recipeIsOpen);
    const toggle3 = () => setFoodCostIsOpen(!foodCostOpen);
    const toggle4 = () => setReflectionIsOpen(!reflectionIsOpen);
    const toggle5 = () => setPrepListIsOpen(!prepListIsOpen);


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
            <p className="h4">Week 1</p>
            <hr className="my-4"/>

            <div className="recipeCard" id="research">
                <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Research</Button>
                <Collapse isOpen={researchIsOpen}>
                    <Card>
                        <CardBody className="researchCardBody">
                            <p>
                                Any soup can be great comfort food when it comes to a cold, winter day or something to enjoy after a long day at work.
                                Not only is Minestrone soup nutritious and delicious, it’s not very difficult to make. You can enjoy it as a side dish or even as a main course
                                with some fresh bread. Minestrone Soup is an Italian soup that is typically made with vegetable stock or beef stock as well as adding pasta or rice
                                accompanied with an array of vegetables and beans and herbs. Minestrone soup was originally created by peasants who used leftover food in order to reduce
                                food waste and provide meals for their families (Devteam, 2019, para. 5). A lot of people have their own ways of making this soup because of how many
                                different types of vegetables, pastas, herbs, and rice you can add to make it unique. The objectives that we’re trying to learn from this is how to
                                make a basic vegetable stock using a simmering moist-heat cooking method and practicing our knife skills for chopping vegetables and herbs.
                                The simmering method helps to bring out the natural flavors of the herbs and vegetables and also helps to infuse the flavors into the soup because it is a
                                gentler process of cooking as opposed to boiling everything. If you’re looking for a new soup recipe and love vegetables and herbs,
                                check out this delicious Minestrone soup recipe below!
                            </p>
                            <p>
                                Making a vegetable stock is a very quick and easy process. There are many uses for vegetable stock other than for soup; for example,
                                you can use it to make gravy or dressings, to cook casseroles, to cook/flavor grains like rice or quinoa, and in different pasta recipes (Jawad, Y. 2019).
                                All stocks are made from 3 basic ingredients that involve simmering them together: mirepoix (onions, carrots, and celery), bones, and seasonings.
                                You can add anything else or even take out the use of bones if you’d like depending on what you’re using it for,
                                but the key is to get the ratios correct for the mirepoix. Different types of bones give off different flavors and richness to your stock.
                                Stocks are an easy thing to start experimenting with whether you’re trying to make a soup or a casserole!
                                <br/><br/>
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
                <Button color="info" onClick={toggle5} style={{ marginBottom: '1rem' }}>Prep List</Button>
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
                <Button color="danger" onClick={toggle2} style={{ marginBottom: '1rem' }}>Recipe</Button>
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
                <Button color="success" onClick={toggle3} style={{ marginBottom: '1rem' }}>Food Costs</Button>
                <Collapse isOpen={foodCostOpen}>
                    <Card>
                        <CardBody>
                            Excel Doc can go here.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="recipeCard" id="reflection">
                <Button color="primary" onClick={toggle4} style={{ marginBottom: '1rem' }}>Reflection</Button>
                <Collapse isOpen={reflectionIsOpen}>
                    <Card>
                        <CardBody>


                        </CardBody>
                    </Card>
                </Collapse>
            </div>

        </div>
    </div>
  );
}

export default App;
