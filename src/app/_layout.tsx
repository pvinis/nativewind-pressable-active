import "@@/global.css"

import { Stack } from "expo-router"
import { Providers } from "src/utils/Providers/index.tsx"

function ProtectedLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
		</Stack>
	)
}

export default function RootLayout() {
	return (
		<Providers>
			<ProtectedLayout />
		</Providers>
	)
}
