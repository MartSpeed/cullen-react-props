// do I need to import the GuestList Component to this DinnerSupplies Component?
// This does not work
//import GuestList from '../GuestList/GuestList';

// guestList.length is undefined
// which means it cant find what it is defined to
// I am grabbing the guestList destructure to grab the guestList
// but that doesnt seem to be working since the array should be present in the guestList


function DinnerSupplies({guestList}) {
  
  return (
    
    <>
  <h2>Dinner Supplies</h2>
      <div>
        Spoons: {guestList.length * 2}
      </div>

      <div>
        Forks: {guestList.length * 2}
      </div>

      <div>
        Knives: {guestList.length * 2}
      </div>
</>
  )
}
export default DinnerSupplies;