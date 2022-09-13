# FAIMS3 Bluetooth

Project to explore Bluetooth capabilities scanning in Capacitor testing on Android.

This project is based on the create-react-app typescript template. It uses the
[@capacitor-community/barcode-scanner](https://github.com/capacitor-community/barcode-scanner)
plugin which implements Bluetooth scanning on Android (but not on the web).

## Permissions

Need permission for Bluetooth access and for location data to connect to devices
around the same area

## Android

Create Android project:

```terminal
yarn add @capacitor/android
npx cap add android
```

Build the project + Open Android:

```terminal
yarn build
npx cap copy
npx cap copy android
npx cap open android
```
