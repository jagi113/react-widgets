import React,{useState} from 'react';
import Accordion from './components/Accordion';
//import WikiSearch from './components/WikiSearch';
import WikiSearch from './components/WikiSearch_advanced';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import ListOfUsers from './components/ListOfUsers';
import Route from './components/Route';
import Header from './components/Header';

//ITEMS FOR ACCORDION
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
]

//ITEMS FOR DROPDOWN
const option = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "The Color Blue",
    value: "blue"
  },
]

function App() {
  //For DROPDOWN 
  const[selected, setSelected] = useState(option[0]);

  const showTranslate = () =>{
    if (window.location.pathname === "/translate"){
      return <Translate />
    }
  }

  const showListOfUsers = () =>{
    if (window.location.pathname === "/listofusers"){
      return <ListOfUsers />
    }
  }

  return (
    <div className='ui container'>
      <Header></Header>
      <Route path="/"> <Accordion items={items}/> </Route>
      <Route path="/wikisearch"> <WikiSearch /> </Route>
      <Route path="/dropdown"> <Dropdown label="Select a color" selected={selected} onSelectedChange={setSelected} option={option} /> </Route>
      <Route path="/translate"> <Translate /> </Route>
      <Route path="/listofusers"> <ListOfUsers /> </Route>
    </div>
   
  );
}

export default App;
