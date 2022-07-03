/*
 * Copyright 2021 Macquarie University
 *
 * Licensed under the Apache License Version 2.0 (the, "License");
 * you may not use, this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND either express or implied.
 * See, the License, for the specific language governing permissions and
 * limitations under the License.
 *
 * Filename: MapFormField.tsx
 * Description:
 *   Implement MapFormField for entry of data via maps in FAIMS
 */

import React, { useState } from 'react'
import styles from './QRCodeFormField.module.css'
import Button from '@mui/material/Button'

import { BarcodeScanner } from '@capacitor-community/barcode-scanner'

import { FieldProps } from 'formik'
import ReactDOM from 'react-dom'


export interface QRCodeFieldProps extends FieldProps {
  label?: string
}

export function QRCodeFormField({
  field,
  form,
  ...props
}: QRCodeFieldProps): JSX.Element {
  // get previous form state if available
  let initialValue = {}
  if (form.values[field.name]) {
    initialValue = form.values[field.name]
  }
  const [state, setState] = useState(initialValue)
  const [scanning, setScanning] = useState(false)

  const pluginCallback = (value: any) => {
    setState(value)
    form.setFieldValue(field.name, value)
  }

  const startScan = async () => {
    console.log('Starting scan right now...')

    setScanning(true)
    const formcontainer = document.getElementById('demoformcontainer')
    if (formcontainer) {
      formcontainer.classList.add('hidden')
    }

    console.log('Checking for permissions')
    // check that we have camera permission
    const permissions = await BarcodeScanner.checkPermission({ force: true })
    console.log('Permissions result', JSON.stringify(permissions))

    if (permissions.granted) {
      // make background of WebView transparent
      BarcodeScanner.hideBackground()
      // and everything else too
      document.getElementsByTagName('body')[0].classList.add('transparent')

      const result = await BarcodeScanner.startScan({})

      // if the result has content
      if (result.hasContent) {
        console.log('Barcode content:', result.content) // log the raw scanned content
        pluginCallback(result.content)
      }
    } else {
      console.log('No permission for QR')
    }
    stopScan()
  }

  const stopScan = () => {
    BarcodeScanner.showBackground()
    const formcontainer = document.getElementById('demoformcontainer')
    if (formcontainer) {
      formcontainer.classList.remove('hidden')
    }
    BarcodeScanner.stopScan()
    setScanning(false)
  }

  // a string version of the value
  // to display below the form field
  const valueText = JSON.stringify(state)

  console.log("Render...", scanning)

  if (scanning) {
    const target = document.getElementById('qrscanner')
    if (target) {
    return ReactDOM.createPortal(
    (
          <div className={styles.container}>
            <div className={styles.barcodeContainer}>
              <div className={styles.relative}>
                <p>Aim your camera at a barcode</p>
                <Button variant='outlined'  onClick={stopScan}>Stop Scan</Button>
              </div>
              <div className={styles.square}>
                <div className={styles.outer}>
                  <div className={styles.inner}></div>
                </div>
              </div>
            </div>
          </div>
    ), 
     target )
    } else {
      // how did we get here? 
      return (<div>Something went wrong</div>)
    }
  } else {
    return (
      <div>
        <p>{props.label}</p>
        <Button variant='outlined' onClick={startScan}>Scan QR Code</Button>
        <div>{valueText}</div>
      </div>
    )
  }
}
