// rect element(object)=> browser(html elemet)
const heading = React.createElement('h1',
{id:"heading"},
 "HEllo World from React!");
 console.log(heading);
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);