import React from "react";

import Footer from "./Footer";
import Header from "./Header";


// Using props, this is how you inject props into thing
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome Home"};
  }
  render() {
    setTimeout(() => {
      this.setState({title: "Welcome Default"})
    }, 2000 );

    const title = "Welcome Will!";
    return (
      <div>
        <Header title={this.state.title} />
        <Header name = {"Some thing"} title = {title} />
        <Header title = {"Other Title"} />
        <Footer />
      </div>
    )
  }
}


// Using state
/*
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Will"};
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Bob"});
    },1000)

    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    )
  }
}
*/

/*
export default class Layout extends React.Component {
  render() {
    var list = [
        <Header />,
        <Header />,
        <Header />
    ];
    return (
      <div>
        {list}
      </div>
    );
  }
}
*/

/*
export default class Layout extends React.Component
{
  constructor() {
    super();
    this.name = "Hung";
  }
  getVal(val) {
    return "Will " + val;
  }
  render() {
    const name = "Tuyet Vo";
    return (
      <div>
        <h1>It's Working! {name}</h1>
        <h1>It's Working! {3+2}</h1>
        <h1>It's Working {this.getVal(3)}</h1>
        <h1>It's Working {this.name}</h1>
      </div>
    )
  }
}
*/

/*
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome Hung Quach",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
*/
