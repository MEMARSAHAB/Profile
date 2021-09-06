import './App.css';

import Header from './componets/Header';
import WebLink from './componets/WebLink';

function App() {
  return (
    <div className='profile_page'>
      <Header />
      <div className='web_links'>
        <WebLink />
        <WebLink />
        <WebLink />
        <WebLink />
        <WebLink />
        <WebLink />
        <WebLink />
      </div>
    </div>
  );
}

export default App;
