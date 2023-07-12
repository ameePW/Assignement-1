import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Test from './test';
import Header  from './Header';
const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
  
];
const HeaderValue = 
{
  alt:"Medal badge with a star",
  h1:"Key React Concepts",
  p:"Selected key React concepts you should know about",
  image: keyConceptsImage,

}


function App() {
  return (
    <div>
     
      <Header HeaderValueparameter={HeaderValue} />
       
      
      
      <ul id="concepts">        
      <Test parameter={concepts[0]} />
        <Test parameter={concepts[1]} />
        <Test parameter={concepts[2]} /> 
      </ul>
    </div>
  );
}

export default App;
