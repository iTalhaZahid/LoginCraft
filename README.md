# 🔐 LoginCraft – React Native UI Starter (Expo + TypeScript)

**LoginCraft** is a lightweight, front-end-only **React Native** starter app built with **Expo** and **TypeScript**, designed to showcase clean and customizable authentication and settings screens. It’s ideal for UI prototyping, developer onboarding flows, or as a base to plug in your own backend (Firebase, Supabase, etc.).
> ⚠️ This is a **frontend-only build** – no backend or real-time database integration is included yet.

---

## ✨ Features

### 🚀 Home Navigation
- Entry point to login via:
  - Email
  - Phone Number
  - Settings Screen

### 🔐 Auth UI (No backend)
- Phone number input with country code picker
- Email/password login screen
- Placeholder buttons for:
  - Google
  - Apple
  - Facebook
- Forgot Password & Remember Me (UI only)

### ⚙️ Settings UI
- Profile display
- Toggle controls for:
  - Dark Mode
  - Location Services
  - Email & Push Notifications
- Language selector (UI)
- Support buttons: Report Bug, Contact Us, Rate in App Store

### 🧱 Componentized Design
- Atomic architecture (`atoms`, `molecules`)
- Custom components:  
  - `CustomButton`
  - `CustomStatusBar`
- Centralized asset and constant management

---

## 📁 Folder Structure


```
LoginCraft/
├── src/
│   ├── app/                    # Navigation and screens
│   │   ├── \_layout.tsx
│   │   ├── index.tsx
│   │   ├── loginwithnumber.tsx
│   │   ├── simpleLogin.tsx
│   │   └── setting.tsx
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── custombutton.tsx
│   │   │   └── customStatusBar.tsx
│   │   └── molecules/
│   ├── constants/
│   │   └── imagePath.ts
├── app.json                   # Expo app config
├── eas.json                   # Expo Application Services config
├── tsconfig.json              # TypeScript config
├── eslint.config.js           # ESLint rules
├── expo-env.d.ts              # Expo env types
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```
---

## 📷 Screenshots

| Home Screen | Login with Email | 
|-------------|-------------------|
|  <img src="https://github.com/iTalhaZahid/LoginCraft/blob/da0730551870d0a6a1ccfad87b06bbdfcc5c7762/Screenshots/1.jpg" alt="Alt Text" style="width:250px; height:auto;">  | <img src="https://github.com/iTalhaZahid/LoginCraft/blob/da0730551870d0a6a1ccfad87b06bbdfcc5c7762/Screenshots/2.jpg" alt="Alt Text" style="width:250px; height:auto;"> |
| Login with Number & Country Picker | Settings Page |
|----------------|----------------|
|  <img src="https://github.com/iTalhaZahid/LoginCraft/blob/da0730551870d0a6a1ccfad87b06bbdfcc5c7762/Screenshots/3.jpg" alt="Alt Text" style="width:250px; height:auto;">  | <img src="https://github.com/iTalhaZahid/LoginCraft/blob/da0730551870d0a6a1ccfad87b06bbdfcc5c7762/Screenshots/4.jpg" alt="Alt Text" style="width:250px; height:auto;">  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Expo CLI:
  ```bash
  npm install -g expo-cli


### Install & Run

```bash
git clone https://github.com/iTalhaZahid/LoginCraft.git
cd LoginCraft
npm install
npx expo start
```

> Scan the QR with Expo Go or run it on an Android/iOS emulator.

---

## 📌 Notes

* This is a **UI-only** project — no actual login, backend calls, or state management.
* All buttons and forms are static for demonstration or prototyping purposes.

---

## 🧩 Ideas for Expansion

* Integrate Firebase or Supabase for real auth
* Add Redux or React Context for state handling
* Extend screen stack with onboarding, profile, etc.
* Connect settings toggles to persistent storage (e.g., AsyncStorage)

---

## 📬 Contact

* GitHub: [italhazahid](https://github.com/italhazahid)
* Email: [italhazahid@gmail.com](mailto:italhazahid@gmail.com)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with 💙 using React Native, Expo, and TypeScript — power your next mobile login flow with **LoginCraft**.

```
