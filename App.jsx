import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components (ensure casing matches your files!)
import Header from './components/Header'; // This replaces Headbanner for P4
import Profile from './components/profile';
import Card from './components/card';
import Footer from './components/footer';
import Login from './components/Login';
import Headbanner from './components/Headbanner';
import SignUp from './components/SignUp';
import './App.css';

// Data Arrays for the Map function
const articles = [
  { id: 1, image: 'https://picsum.photos/300/200?random=1', name: 'React Hooks', description: 'Understanding state and effects', rating: 5, author: 'Arnav' },
  { id: 2, image: 'https://picsum.photos/300/200?random=2', name: 'NodeJS Basics', description: 'Server-side JavaScript', rating: 4.8, author: 'Jane Doe' },
  { id: 3, image: 'https://picsum.photos/300/200?random=3', name: 'Vue vs React', description: 'Comparing frontend frameworks', rating: 4.5, author: 'John Smith' }
];

const tutorials = [
  { id: 1, image: 'https://picsum.photos/300/200?random=4', name: 'ES6 Features', description: 'Modern JavaScript syntax', rating: 5, username: 'code_ninja' },
  { id: 2, image: 'https://picsum.photos/300/200?random=5', name: 'React Router', description: 'Navigation in React', rating: 4.9, username: 'react_dev' },
  { id: 3, image: 'https://picsum.photos/300/200?random=6', name: 'Express APIs', description: 'Building RESTful services', rating: 4.7, username: 'backend_guru' }
];

// Extract the main page content into a Home component wrapper
const Home = () => (
  <>
  <Headbanner/>
    <Profile />

    {/* Featured Articles Section */}
    <section className="content-section">
      <h2>Featured Articles</h2>
      <div className="card-grid">
        {articles.map(article => (
          <Card 
            key={article.id}
            image={article.image}
            name={article.name}
            description={article.description}
            rating={article.rating}
            author={article.author}
          />
        ))}
      </div>
      <button className="see-all-btn">See all articles</button>
    </section>

    {/* Featured Tutorials Section */}
    <section className="content-section">
      <h2>Featured Tutorials</h2>
      <div className="card-grid">
        {tutorials.map(tutorial => (
          <Card 
            key={tutorial.id}
            image={tutorial.image}
            name={tutorial.name}
            description={tutorial.description}
            rating={tutorial.rating}
            author={tutorial.username}
          />
        ))}
      </div>
      <button className="see-all-btn">See all tutorials</button>
    </section>

    {/* Subscribe Banner (Migrated from P2) */}
    <section className="subscribe-banner">
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Header stays outside Routes so it appears on all pages */}
        <Header />

        {/* Routes dictate what content loads in the middle of the screen */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>

        {/* Footer stays outside Routes so it appears on all pages */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;