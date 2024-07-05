import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import sydney from "../src/assets/images/sydney.png"
import japan from "../src/assets/images/japan.png"
export default function App() {
  let items = ['Manas', 'Siddharth', 'Rahul', 'Manav'];
  // items = [];
  // Conditional Rendering
  if(items.length==0) return <p>No Items To Render</p>;
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Cards */}
      <div className="cards flex flex-col">
        <Card image={japan} location="Japan" link="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/" title="Mount Fuji" date="12 Jan, 2021 - 24 Jan, 2021" content="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." />
        <Card image={sydney} location="Australia" link="https://maps.app.goo.gl/RoijSxSbK7iepUya6" title="Sydney Opera House" date="27 May, 2021 - 8 Jun, 2021" content="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings." />
        {/* <Card location="Norway" link="https://maps.app.goo.gl/WUZgBYagk5VPkyPY6" title="Geirangerfjord" date="01 Oct, 2021 - 18 Nov, 2021" content="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."/> */}
      </div>
      <div className="m-4">List Rendering</div>
      <ul className="m-4">
        {items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  )
}