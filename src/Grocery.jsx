 import './App.css';
 import GroceryInput from './components/GroceryInput';
 import GroceryList from './components/GroceryList';

function Grocery() {
  return (
     <div>
       <GroceryInput/>
       <GroceryList/>
     </div>
  );
}

export default Grocery;
