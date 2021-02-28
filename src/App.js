import "./styles.css";
// import MetaComponent from "./MetaComponent"
import MetaComponent from "./MetaComponent2"

export default function App() {
  const data = {
    "@context": "http://schema.org/",
    "@type": "Review",
    itemReviewed: {
      "@type": "Thing",
      name: "Name"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "3",
      bestRating: "5"
    },
    publisher: {
      "@type": "Organization",
      name: "1234"
    }
  };
  return (
    <div className="App">
      <h1>Lê Văn Mong</h1>
      <MetaComponent jsonLd={data} title={"abcd"} description={"xyza"} />
    </div>
  );
}
