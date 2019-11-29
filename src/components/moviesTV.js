import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class MoviesTV extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Stephen King</h1>
        <h2>Movies and Tv series</h2>

        {/* I set the width and height in this container for the image where the book images are the size from the URL choosen */}
        <Container>
          <Row>
            <Col><img width='400px' height='250px' src='https://www.whats-on-netflix.com/wp-content/uploads/2019/02/Actor-Actress-Grpahic-Netflix.jpg'></img></Col>
          </Row>
        </Container>

        {/* Used a container for the text block */}
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h4>Title</h4><br></br>
              A Good Marriage<br></br>
              Apt Pupil<br></br>
              Carrie<br></br>
              Cat's Eye<br></br>
              Cell<br></br>
              Children of the Corn<br></br>
              Christine<br></br>
              Creepshow<br></br>
              Creepshow 2<br></br>
              Cujo<br></br>
              The Dark Half<br></br>
              The Dark Tower<br></br>
              The Dead Zone<br></br>
              Doctor Sleep<br></br>
              Dolan's Cadillac<br></br>
              Dolores Claiborne<br></br>
              Dreamcatcher<br></br>
              Firestarter<br></br>
              Gerald's Game<br></br>
              Graveyard Shift<br></br>
              The Green Mile<br></br>
              Hearts<br></br>
              Hearts in Atlantis<br></br>
              In the Tall Grass<br></br>
              IT-Part 1:The Losers'<br></br>
              IT: Chapter Two<br></br>
              The Mangler<br></br>
              Maximum Overdrive<br></br>
              Mercy<br></br>
              Misery<br></br>
              The Mist<br></br>
              My Pretty Pony<br></br>
              Needful Things<br></br>
              The Night Flier<br></br>
              Pet Sematary (1989)<br></br>
              Pet Sematary (2019)<br></br>
              Riding the Bullet<br></br>
              The Running Man<br></br>
              Secret Window<br></br>
              The Shawshank Redemption<br></br>
              The Shining<br></br>
              Silver Bullet<br></br>
              Sleepwalkers<br></br>
              Stand By Me<br></br>
              Suffer the Little Children<br></br>
              Tales from the Darkside<br></br>
              Thinner<br></br>
              1408<br></br>
              1922<br></br>
            </Col>

            <Col>
              <h4>Date</h4><br></br>

              October 3rd, 2014<br></br>
              October 23rd, 1998<br></br>
              November 3rd, 1976<br></br>
              April 12th, 1985<br></br>
              July 8th, 2016<br></br>
              March 9th, 1984<br></br>
              December 9th, 1983<br></br>
              November 10th, 1982<br></br>
              May 1st, 1987<br></br>
              August 12th, 1983<br></br>
              April 23rd, 1993<br></br>
              August 4th, 2017<br></br>
              October 21st, 1983<br></br>
              November 8th, 2019<br></br>
              July 1st, 2009<br></br>
              March 24th, 1995<br></br>
              March 6th, 2003<br></br>
              May 11th, 1984<br></br>
              September 29th, 2017<br></br>
              October 26th, 1990<br></br>
              December 6th, 1999<br></br>
              To Be Determined<br></br>
              September 28th, 2001<br></br>
              October 4th, 2019<br></br>
              September 8th, 2017<br></br>
              September 6th, 2019<br></br>
              March 3rd, 1995<br></br>
              July 25th, 1986<br></br>
              December 14th, 2012<br></br>
              November 30th, 1990<br></br>
              November 21st, 2007<br></br>
              April 6th, 2017<br></br>
              August 27th, 1993<br></br>
              November 15th, 1997<br></br>
              April 21st, 1989<br></br>
              April 5th, 2019<br></br>
              October 15th, 2004<br></br>
              November 13th, 1987<br></br>
              March 12th, 2004<br></br>
              September 23rd, 1994<br></br>
              May 23rd, 1980<br></br>
              October 11th, 1985<br></br>
              April 10th, 1992<br></br>
              August 8th, 1986<br></br>
              To Be Determined<br></br>
              May 4th, 1990<br></br>
              October 25th, 1996<br></br>
              June 12th, 2007<br></br>
              October 20th, 2017<br></br><br></br>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        {/* two hyperlinks that open in a new tab */}
        <a href="https://www.stephenking.com/" target="_blank">Click here Stephen King WEBSITE</a><br></br>

        <a href="https://en.wikipedia.org/wiki/Stephen_King" target="_blank">Click here Stephen King WIKIPAGE</a><br></br><br></br>

      </div>
    );
  }
}

export default MoviesTV;