import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {runt} from "./a2/main";

class App extends Component {
 constructor(props){
      super(props);
      this.state={ 
            // Create an Array  which will hold components to be displayed
           // proListing:ebeNeed.map(product=>{return(<p>{product}</p>)})
              isLoaded:false,
                    items:[ "rdhtdfrh","you"],
          }
      }

      componentDidMount(){
/*
         var twitter = new Twitter();

   twitter.getSearch({'q':'kizomba','count': 5}, error, success);
    this.setState({
                            isLoaded:true,
                            items:ebeNeed,
                          });*/
//T.get('search/tweets', param, gotData)

//'https://api.twitter.com/1.1/search/tweets.json?q=kizomba&count=5'
//'https://jsonplaceholder.typicode.com/users'
//'https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html'
//{items.map(item=>(
                      //<li key={item.id}>
                      //  Name:{item.name}| Email: {item.email}
                      //</li>
                      //))};
                     // console.log("Expecting Out");
                     fetch('https://api.twitter.com/1.1/search/tweets.json?q=kizomba&count=5')
                      .then(res=>res.json())
                      .then(json=>{
                        console.log("Expecting In ");
                        console.log(json);
                        this.setState({
                            isLoaded:true,
                            items:json,
                          });
                      });

                    /*  let json=ebeNeed.map(product=>{return(<p>{product}</p>)});

                      this.setState({
                            items:json,
                          });
*/

      }
  render() {
    return (
      <div className="App">
        Just me again shanna

        {this.state.items.map(item=>(
                      <li key={item.id}>
                       Name:{item}
                      </li>
                      ))}
      </div>
    );
  }
}

export default App;
