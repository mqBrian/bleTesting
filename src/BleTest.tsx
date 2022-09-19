import { BleClient, numberToUUID } from "@capacitor-community/bluetooth-le";

const WATCH = "48d60a60-f000-11e3-b42d-0002a5d5c51b";

export async function scan(): Promise<void> {
  try {
    await BleClient.initialize();

    await BleClient.requestLEScan(
      {
        // services: [HEART_RATE_SERVICE],
      },
      (result) => {
        // console.log("received new scan result", JSON.stringify(result));
      }
    );

    const device = await BleClient.requestDevice({
      services: [WATCH],
    });

    // await BleClient.startNotifications(
    //   device.deviceId,
    //   WATCH,
    //   (value: any)=>{
    //     console.log('got device',value);
    //   }
    // );

    setTimeout(async () => {
      await BleClient.stopLEScan();
      console.log("stopped scanning");
    }, 5000);
  } catch (error) {
    console.error(error);
  }
}

export async function sett(): Promise<void> {
  await BleClient.initialize();
  await BleClient.openBluetoothSettings();
}

export async function alive(): Promise<void> {
  await BleClient.initialize();
  await BleClient.enable();
}

export async function dead(): Promise<void> {
  await BleClient.initialize();
  await BleClient.disable();
}
