import React from "react";
import { IonSlides, IonSlide, IonContent, IonImg } from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
type Item = {
  src: string;
  text: string;
};

const items: Item[] = [
  { src: "./images/cat1.jpg", text: "a picture of a cat1" },
  { src: "./images/cat1.jpg", text: "a picture of a cat2" },
  { src: "./images/cat1.jpg", text: "a picture of a cat3" },
];

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

export const Slides: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      {items.map((image, i) => (
        <IonSlide>
          <IonImg src={image.src} />
          <h1>{image.text}</h1>
        </IonSlide>
      ))}
    </IonSlides>
  </IonContent>
);
