import React from 'react';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleMemesClick = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/randommemes");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="home-page">
        <div className="text-container">
          <h5>
            Memes so fresh, you'll think they were just <br /> harvested from the internet farm.
            <br />
            <br />
            <Link to="/randommemes" onClick={handleMemesClick}>
              Memes
            </Link>
          </h5>
          <h5>
            A meme a day keeps the boredom away. <br /> <br />
            <Link to="/randommemes" onClick={handleMemesClick}>
              View Memes!
            </Link>
          </h5>

          <h5>
            The only thing better than a good meme, is a great meme.
            <br />
            <br />
            <Link to="/randommemes" onClick={handleMemesClick}>
              Funny Button
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}
export default HomePage;

