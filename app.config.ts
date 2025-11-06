import { ExpoConfig } from "@expo/config-types"
import packageJson from "./package.json" with { type: "json" }

export default (): ExpoConfig => {
	return {
		name: "nw-press-act",
		slug: "nw-press-act",
		version: packageJson.version,
		scheme: "nw-press-act",
		plugins: [
			"expo-router",
			["expo-dev-client", { launchMode: "most-recent" }],
		],
		experiments: {
			reactCanary: true,
			reactCompiler: true,
			tsconfigPaths: true,
			typedRoutes: true,
		},
		orientation: "portrait",
		userInterfaceStyle: "automatic",
		assetBundlePatterns: ["**/*"],
		ios: {
			bundleIdentifier: "com.example.nw-press-act",
			icon: "./assets/app-icon.png",
			supportsTablet: true,
			infoPlist: {
				ITSAppUsesNonExemptEncryption: false,
			},
		},
		android: {
			package: "com.example.nw-press-act",
			adaptiveIcon: {
				foregroundImage: "./assets/app-icon.png",
				backgroundColor: "#ffffff",
			},
			predictiveBackGestureEnabled: true,
		},
	}
}
