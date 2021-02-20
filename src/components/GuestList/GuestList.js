/**NAME: GuestList component function
 * DESCRIPTION: all data in the App.jsx for the GuestList function will be
 * added here and using the prop in the return to show the information to the DOM
 */
let spiderMan = true;
 function GuestList() {
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