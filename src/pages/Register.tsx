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
  IonItemDivider,
  IonButton,
  IonList,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  async function register() {
    if (passsword !== cpassword) {
      console.log("password do not match");
    }
    if (email.trim() === "" || passsword.trim() === "") {
      console.log("Email and Password are required");
    }
    const res = await registerUser(email, passsword);
    if (res) {
      console.log("You have register succssfully!");
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput
              onIonChange={(e: any) => setFullname(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              onIonChange={(e: any) => setEmail(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e: any) => setCpassword(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={register}>
            Register
          </IonButton>
        </IonList>
        <Link to="/login">หน้าเข้าสู่ระบบ</Link>
      </IonContent>
    </IonPage>
  );
};

export default Register;
