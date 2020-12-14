import React , { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import AddNewMovie from "./components/AddNewMovie";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardDetail from "./components/CardDetail" ;


const movies =[
  {
    title : "GreenLand",
    posterUrl : "https://m.media-amazon.com/images/I/71rloZpV8KL._SS500_.jpg",
    description : " is a 2020 American disaster film directed by Ric Roman Waugh and written by Chris Sparling. The film follows a family who must fight for survival as a planet-destroying comet races to Earth.",
    rate : 5 ,
    trailer:'vz-gdEL_ae8' ,
  },
  {
    title : "lion king",
    posterUrl: "https://images-na.ssl-images-amazon.com/images/I/91kXw97IUBL._AC_SY550_.jpg",
    description : "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father.",
    rate : 5,
    trailer:'7TavVZMewpY' ,
  },
  
​  { 
    title :  "fast and furious 9",
    posterUrl : "https://images-na.ssl-images-amazon.com/images/I/61ASz9Wmo5L._AC_SY879_.jpg",
    description : " Dominic Toretto and his family must face Dominic's younger brother Jakob, a deadly assassin.",
    rate : 4,
    trailer:"_qyw6LC5pnE" ,
  },
  
  { 
    title : "Quiet place" ,
    posterUrl : "https://focus.levif.be/medias/12352/6324245.jpg" ,
    description : "Written by Bryan Woods, Scott Beck and Krasinski, the plot revolves around a father (Krasinski) and a mother (Emily Blunt) who struggle to survive and raise their children in a post-apocalyptic world inhabited by blind extraterrestrial monsters with an acute sense of hearing.",
    rate : 3 ,
    trailer:"WR7cc5t7tv8",
   },
   
]
​
​
​
​
function App() {
  const [rate , setRate] = useState(0);
  const [searchTitle , setSearchTitle]= useState("");
​
 const searchHandler = (searchedTitle) => setSearchTitle(searchedTitle);
  const changeRate = (newRate )=>setRate(newRate);
​
  const [movieList , setMovieList] =useState(movies);
  const addMovie = newMovie => setMovieList([...movieList , newMovie]);
​
  return (
    <Router>
    <Switch>
      <Route exact path="/listofmovies">
    <div className="App">
      
      <Search 
      rate={rate} 
      changeRate={changeRate} 
      searchHandler={searchHandler} />
     <MovieList movies ={
       searchTitle ? movieList.filter((el) => el.title.toLowerCase().includes(searchTitle.toLowerCase()))
       : rate > 0 
       ? movieList.filter((el) => el.rate === rate)
       : movieList
    } 
    />
     <AddNewMovie addMovie={addMovie} />
    </div>
    </Route>
          <Route
            path="/listofmovies/:Title/:Description/:Trailer"
            component={CardDetail}
          />
        </Switch>
     
      </Router>
  );
}
​
export default App