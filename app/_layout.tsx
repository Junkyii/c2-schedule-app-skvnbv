
import "react-native-reanimated";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SystemBars } from "react-native-edge-to-edge";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme, Alert } from "react-native";
import { useNetworkState } from "expo-network";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/button";
import { WidgetProvider } from "@/contexts/WidgetContext";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

function RootLayoutContent() {
  const { isDark } = useTheme();
  const networkState = useNetworkState();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (
      !networkState.isConnected &&
      networkState.isInternetReachable === false
    ) {
      Alert.alert(
        "🔌 You are offline",
        "You can keep using the app! Your changes will be saved locally and synced when you are back online."
      );
    }
  }, [networkState.isConnected, networkState.isInternetReachable]);

  if (!loaded) {
    return null;
  }

  const CustomDefaultTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: "rgb(37, 99, 235)", // Blue-600
      background: "rgb(240, 244, 247)", // Light mode background
      card: "rgb(255, 255, 255)", // White cards/surfaces
      text: "rgb(30, 41, 59)", // Slate-800 text for light mode
      border: "rgb(209, 213, 219)", // Gray-300 for separators/borders
      notification: "rgb(239, 68, 68)", // Red-500
    },
  };

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      primary: "rgb(59, 130, 246)", // Blue-500
      background: "rgb(15, 23, 42)", // Slate-900 background for dark mode
      card: "rgb(30, 41, 59)", // Slate-800 card/surface color
      text: "rgb(241, 245, 249)", // Slate-100 text for dark mode
      border: "rgb(71, 85, 105)", // Slate-600 for separators/borders
      notification: "rgb(220, 38, 38)", // Red-600
    },
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} animated />
      <NavigationThemeProvider
        value={isDark ? CustomDarkTheme : CustomDefaultTheme}
      >
        <WidgetProvider>
          <GestureHandlerRootView>
            <Stack>
              {/* Main app with tabs */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

              {/* Modal Demo Screens */}
              <Stack.Screen
                name="modal"
                options={{
                  presentation: "modal",
                  title: "Standard Modal",
                }}
              />
              <Stack.Screen
                name="formsheet"
                options={{
                  presentation: "formSheet",
                  title: "Form Sheet Modal",
                  sheetGrabberVisible: true,
                  sheetAllowedDetents: [0.5, 0.8, 1.0],
                  sheetCornerRadius: 20,
                }}
              />
              <Stack.Screen
                name="transparent-modal"
                options={{
                  presentation: "transparentModal",
                  headerShown: false,
                }}
              />
            </Stack>
            <SystemBars style={isDark ? "light" : "dark"} />
          </GestureHandlerRootView>
        </WidgetProvider>
      </NavigationThemeProvider>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
