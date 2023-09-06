import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import eTicket from "./assets/eTicket.pdf";
import { Asset } from "expo-asset";

export default function SettingsScreen() {
  const [uri, setUri] = useState(null);

  async function downloadAssets() {
    const { localUri: wtr } = await Asset.fromModule(eTicket).downloadAsync();
    setUri(wtr);
  }

  useEffect(() => {
    downloadAssets();
  }, []);

  return (
    uri && (
      <WebView originWhitelist={["*"]} style={{ flex: 1 }} source={{ uri }} />
    )
  );
}
