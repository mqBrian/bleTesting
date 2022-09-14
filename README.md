# FAIMS3 Bluetooth

Project to explore Bluetooth capabilities scanning in Capacitor testing on Android.

This project is based on the create-react-app typescript template. It uses the
[@capacitor-community/barcode-scanner](https://github.com/capacitor-community/barcode-scanner)
plugin which implements Bluetooth scanning on Android (but not on the web).

## Permissions

Need permission for Bluetooth access and for location data to connect to devices
around the same area

## Android

### Create Android project:

```terminal
yarn add @capacitor/android
npx cap add android
```

### Build the project + Open Android:

- If project is to be used for other devices apart from android then changes to `package.json` are needed.

```terminal
yarn build - (runs react-scripts-build + npx cap copy + npx cap android)
npx cap open android
```

## App capabilities

30/08 (v1.1) - The application has 1 button that alerts when clicked
14/09 (v1.2) - Added 2 more buttons that can activae and deactivate BT on the device + Added a button that can be used to accces the bluetooth settings of the phone
