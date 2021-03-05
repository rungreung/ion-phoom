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
  IonImg,
  IonButton,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonAvatar,
  IonThumbnail,
} from "@ionic/react";
import React from "react";

interface bank {
  name: string;
  value: string;
  imag: string;
}
const banks: bank[] = [
  {
    name: "ธนาคารกสิกรไทย",
    value: "กสิกรไทย",
    imag: "./images/banks/kbank.jpg",
  },
  {
    name: "ธนาคารทหารไทย",
    value: "ทหารไทย",
    imag: "./images/banks/TMB.jpg",
  },
  {
    name: "ธนาคารกรุงไทย",
    value: "กรุงไทย",
    imag: "./images/banks/ktbank.jpg",
  },
];
const Payment: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Payment (ชำระเงิน)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonThumbnail>
          <IonImg src="./images/QRCode.jpg" />
        </IonThumbnail>
        <IonList>
          <IonRadioGroup>
            {banks.map((item, index) => (
              <IonItem key={index}>
                <IonRadio slot="start" value={item.value} />
                <IonLabel>{item.name}</IonLabel>
                <IonAvatar>
                  <IonImg src={item.imag} />
                </IonAvatar>
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonButton expand="block" color="success">
          ดำเนินการต่อ
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
