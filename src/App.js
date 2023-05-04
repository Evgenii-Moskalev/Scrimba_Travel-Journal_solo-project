
import './App.css';

import Header from './components/Header.jsx'
import Article from './components/Article.jsx'

import MockDatabase from './Data.js'

function App() {
  const articleData = MockDatabase.map((elem, index) => {
    // {console.log(index)};
    return (
      <Article
        key={index}
        elem={elem}
      />
    )
  })


  return (
    <div className="container">
      <Header />
      <article>
        {articleData}
      </article>
    </div>
  );
}

export default App;
