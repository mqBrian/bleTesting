import { BleClient, numberToUUID } from "@capacitor-community/bluetooth-le";

export async function scan(): Promise<void> {
  try {
    await BleClient.initialize();

    await BleClient.requestLEScan(
      {
        // services: [HEART_RATE_SERVICE],
      },
      (result) => {
        console.log("received new scan result", JSON.stringify(result));
      }
    );

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
