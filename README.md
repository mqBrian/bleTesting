# FAIMS3 QR Code scanning elaboration

Project to explore QR code scanning in Capacitor testing on iOS and Android.

This project is based on the create-react-app typescript template.  It uses the
[@capacitor-community/barcode-scanner](https://github.com/capacitor-community/barcode-scanner)
plugin which implements QR code scanning on iOS and Android (but not on the web).  

The QR code scanner is implemented as a Formik form field compatible with the
main FAIMS app.  It renders as a button which when clicked starts the QR code
scan.  While scanning we need to make the app transparent so that the camera
view is visible.  The approach I've taken is to use `ReactDOM.createPortal`
to insert a container `<div>` as a child of the body of the page. This allows
me to then set `visibility: hidden` on the rest of the page so that there is
nothing behind my new div.  The div is mostly transparent but shows a message,
a cancel button and a target square.  This need to hide the main app makes it
a bit hard for this to be a plugin.  

The position of the target square is not calibrated - it's where it seems to be
on my Android phone. I've not done much checking of this, it may be different on
e.g. a tablet device.  

## Permissions

We need to get permission to use the camera. In this example I've made the call 
to check permssions in the start scan action.  In the main app we'd most likely 
have done this already so the call would succeed.

## Android

No changes are needed to the Android project for this to work.

## iOS

Create iOS project:

```shell
yarn add @capacitor/ios
npx cap add ios
```

Need to add a description to the request for camera permissions. Edit 
`ios/App/App/Info.plist` and add:

```xml
 <key>NSCameraUsageDescription</key>
 <string>This app uses the camera to scan a QR Code.</string>
```
