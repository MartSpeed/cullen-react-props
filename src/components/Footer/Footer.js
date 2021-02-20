/**NAME: Footer function Component
 * DESCRIPTION: takes the information from the App client and sends it
 * through a prop instead of the raw data in the App files
 */
function Footer () {
  console.log('Footer function component is complete');
  return (
      <footer>
        <h3>Have fun!</h3>
        <p>Don't forget to mind your Ps and Qs!</p>
        <p>Dot your I's aandmd cross your Ts!</p>
      </footer>
  )
}
// export your component to the App destination and call it with the import
// and use the files path to call this component
export default Footer;