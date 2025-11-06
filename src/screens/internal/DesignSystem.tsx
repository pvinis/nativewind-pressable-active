import { View, Text, ScrollView } from "react-native"
import { Button } from "@/components/index.ts"

export function DesignSystem() {
	return (
		<ScrollView contentContainerClassName="gap-4 pt-24 pr-4">
			<Text className="ml-4 text-2xl text-red-500">Buttons</Text>

			<View className="flex-row justify-around">
				<View className="flex-1" />
				<Text className="flex-1">Default</Text>
				<Text className="flex-1">Pressed</Text>
				<Text className="flex-1">Loading</Text>
				<Text className="flex-1">Disabled</Text>
			</View>

			<View className="flex-1 flex-row">
				<View className="w-8 bg-yellow-100">
					<View className="h-2" />
					<Text
						className="w-16 -translate-x-2 translate-y-3 rotate-270 text-blue-500"
						numberOfLines={1}
					>
						Default
					</Text>
				</View>

				<View className="flex-1 gap-2">
					<View className="flex-1 flex-row">
						<View className="w-8 gap-4 bg-blue-100">
							<View className="h-12 items-center justify-center">
								<Text>dflt</Text>
							</View>
							<View className="h-12 items-center justify-center">
								<Text>icon</Text>
							</View>
							<View className="h-12 items-center justify-center">
								<Text>sm</Text>
							</View>
							<View className="h-12 items-center justify-center">
								<Text>xs</Text>
							</View>
							<View className="h-12 items-center justify-center">
								<Text>lg</Text>
							</View>
						</View>

						<View className="flex-1 items-stretch gap-4">
							<View className="h-12 flex-row items-center justify-around">
								<Button>Button</Button>
								<Button testOnly_pressed>Button</Button>
								<Button loading>Button</Button>
								<Button disabled>Button</Button>
							</View>
						</View>
					</View>
					<View className="-mx-8 h-px w-[500px] bg-black" />
				</View>
			</View>
		</ScrollView>
	)
}
