import React from 'react';
import '../App.css';

class Content extends React.Component {
  // rendering components into DOM
  render() {
    return (
      <div className="App">
        <h1>Stephen King</h1>
        <p>This server has been set up to compare some
        of my favorite Stephen King books</p><br></br>
        {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUWdqCAsvgWN0Bj1PWgw9dBneaxanggt3CIx-RfZOIuHPm2dT&s'></img><br></br>

        <br></br><h3>Stephen King is an American horror Author</h3>
        <p>Many of Kings works have been made into movies and TV shows where he has
          cameo<br></br> in many of his wroks and has also starred in Sons of Anarchy where his
          characters name was <br></br>Richard Bachman this was his pseudonym name that he wrote under.</p><br></br>
        <h3>Maine, Bangor is where many of his books are set.</h3><br></br>

        <img src='https://www.mainebiz.biz/sites/default/files/styles/article_small_cover_image/public/saxotech/Mainebiz/201610_NEWS0101_161039995_AR_-1_0.jpg?itok=4ajXbStT'></img><br></br>

        <br></br><h4>Stephen King has been building his universe for years</h4>
        <h4>much like the Marvel Universe but King have been doing it for decades</h4><br></br>
        <img src='https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/04/king-flowchart.jpg'></img><br></br>
        <br></br>
      </div>
    );
  }
}

export default Content;