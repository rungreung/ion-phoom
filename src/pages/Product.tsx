import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./Page.css";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

interface prodouct {
  title: string;
  price: number;
  stock: number;
  imge: string;
  description: string;
}

const porsducts: prodouct[] = [
  {
    title: "CPU",
    price: 300,
    stock: 300,
    imge: "./images/cat1.jpg",
    description: "หน่วยประมาลผล",
  },
  {
    title: "RAM",
    price: 200,
    stock: 3000,
    imge: "",
    description: "หน่วยประมาลผล",
  },
];

const Prodouct: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Prodouct</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {porsducts.map((prodouct, index) => {
          return (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{prodouct.title}</IonCardTitle>
                <IonCardSubtitle>ราคา {prodouct.price}</IonCardSubtitle>
                <IonCardSubtitle>จำนวนสินค้า {prodouct.stock}</IonCardSubtitle>
                <IonImg src={prodouct.imge} />
              </IonCardHeader>

              <IonCardContent>{prodouct.description}</IonCardContent>
            </IonCard>
          );
        })}
        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Prodouct;
