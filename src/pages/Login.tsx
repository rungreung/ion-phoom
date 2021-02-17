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
  IonList,
  IonButton,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../firebaseConfig";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(email, password);
    if (res) {
      console.log("Loging Success");
    }
  }
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
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={(e: any) => setEmail(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput 
            type="password" 
            onIonChange={(e: any) => setPassword(e.target.value)} />
          </IonItem>
        </IonList>
        <IonButton expand="block" color="primary" onClick={login}>
          ลงชื่อเข้าใช่
        </IonButton>
        หากคุณยังไม่ได้เป็นสมาชิก> <Link to={"/register"}>สมัคเป็นสมาชิก</Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;
