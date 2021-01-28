import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import "./Page.css";

const Login: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Username or Email"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={text}
              type="password"
              placeholder="Password"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton color="primary">ลงชื่อเข้าใช่</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
