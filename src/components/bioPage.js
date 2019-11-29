import React from 'react';
import '../App.css';


class BioPage extends React.Component {
  // rendering components into DOM
  render() {
    return (
      <div className="App">
        <h1>Stephen King</h1>
        <img src='https://images.successstory.com/adminimg/image_uploads/content_images/Stephen%20Edwin%20King%201.jpg'></img>

        <p>Stephen King was born on September 21, 1947, in Portland, Maine.<br></br>
          He graduated from the University of Maine and later worked as a <br></br>
          teacher while establishing himself as a writer.<br></br>
          Having also published work under the pseudonym Richard Bachman, <br></br>
          King's first horror novel, Carrie, was a huge success and has been<br></br>
          made into two different movies.</p>

        {/* Two links set up for stephens webpage and his WIKIPAGE...opens in new tab */}
        <a href="https://www.stephenking.com/" target="_blank">Click here Stephen King WEBSITE</a><br></br>

        <a href="https://en.wikipedia.org/wiki/Stephen_King" target="_blank">Click here Stephen King WIKIPAGE</a><br></br><br></br>

        {/* some info on stephen king */}
        <h2>Press Bio</h2>
        <p>Stephen lives in Maine and Florida with his wife, novelist Tabitha King.<br></br>
          They are regular contributors to a number of charities including many<br></br>
          libraries and have been honored locally for their philanthropic activities.</p>

        <p>Stephen Edwin King is an American author of horror, supernatural fiction,<br></br>
          suspense and fantasy novels. His books have sold more than 350 million copies, <br></br>
          many of which have been adapted into feature films, miniseries, television series, <br></br>
          and comic books. King has published 61 novels and six non-fiction books and seven <br></br>
          under the pseudonym of Richard Bachman.</p>
        <h6>Writes three drafts for every book.</h6><br></br>

        {/* some info on Richard Bachman */}
        <h2>A list of Richard Bachman novels</h2>
        Rage (1977)<br></br>
        The Long Walk (1979)<br></br>
        Roadwork (1981)<br></br>
        The Running Man (1982)<br></br>
        Thinner (1984)<br></br>
        The Bachman Books (1985, collection)<br></br>
        The Regulators (1996)<br></br>
        Blaze (2007)<br></br>
        <br></br>

        <img src='https://vignette.wikia.nocookie.net/stephenking/images/0/09/Kingx.jpg/revision/latest?cb=20170419104529'></img>

        {/* some info on Joe Hill */}
        <h2>Joseph Hillstrom King</h2>
        <p>Joseph Hillstrom King (b. June 1972 in Hermon, Maine) is the son of Tabitha and Stephen King.<br></br>
          He is a novelist as well, writing under the pseudonym of Joe Hill.<br></br>
          He would later co-write the stories Throttle and In the Tall Grass with his father,<br></br>
          as well as suggesting a different ending for 11/22/63.</p><br></br>
      </div>
    );
  }
}

export default BioPage;