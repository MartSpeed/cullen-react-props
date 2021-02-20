/**NAME: GuestList component function
 * DESCRIPTION: all data in the App.jsx for the GuestList function will be
 * added here and using the prop in the return to show the information to the DOM
 */
let spiderMan = true;
// passing the information to the app comes from the arguments inside of the
// GuestList component function using the {} to destructure item you need when using
// the .map() function from useStates -- this was a huge missing piece that was giving me
// a roadblock
 function GuestList({guestList}) {
  console.log('GuestList function Test', spiderMan);



   // nothing will happen without the return
   return (<>
    <h2>Guest List</h2>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kid's Meal</th>
        </tr>
      </thead>
      <tbody>
        {guestList.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </>)
 }

 export default GuestList;