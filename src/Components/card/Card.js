import React from "react";
import { Button, Card as BootCard } from "react-bootstrap";
import { NewsService } from "../../newsapi/services/newsServices";

export const Card = ({ title, urlToImage, content, url }) => {
  const handleAddToReadLater = () => {
    const newsService = new NewsService();
    newsService
      .addToReadLater({ title, urlToImage, content, url })
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("error");
        } else {
          alert(`${data.title.slice(0, 30).concat("...")} added to read later`);
        }
      });
  };

  return (
    <BootCard
      style={{ minWidth: "18rem", maxWidth: "10rem", marginBottom: "1rem" }}
    >
      <BootCard.Img
        variant="top"
        src={urlToImage}
        style={{ minHeight: "10rem", maxHeight: "10rem" }}
      />
      <BootCard.Body>
        <BootCard.Title>{title}</BootCard.Title>
      </BootCard.Body>
      <BootCard.Footer>
        <Button variant="primary" onClick={handleAddToReadLater}>
          Read Later
        </Button>
      </BootCard.Footer>
    </BootCard>
  );
};
