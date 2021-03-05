import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonImg,
  IonAvatar,
} from "@ionic/react";
import React from "react";
import "./Page.css";

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
    imge: "../images/cat1.jpg",
    description: "หน่วยประมาลผล",
  },
  {
    title: "RAM",
    price: 200,
    stock: 3000,
    imge: "../images/cat1.jpg",
    description: "หน่วยประมาลผล",
  },
];

const Cart: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>รูป</IonLabel>
            <IonLabel>ชื่อสินค้า</IonLabel>
            <IonLabel>จำนวน</IonLabel>
            <IonLabel>ราคา</IonLabel>
          </IonItem>
          {porsducts.map((item, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <IonImg src={item.imge} />
              </IonAvatar>

              <IonLabel>{item.title}</IonLabel>
              <IonLabel>{item.stock}</IonLabel>
              <IonLabel>{item.price}</IonLabel>
              <IonButton color="danger">del</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
