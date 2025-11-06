import { Pressable, PressableProps, Text } from "react-native"
import { cn } from "@/utils/twHelpers.ts"
import { PropsWithChildren } from "react"
import { ClassName } from "@/utils/types.ts"

export function Button({
	className,
	loading,
	disabled,
	children,
	...restProps
}: PropsWithChildren<
	PressableProps &
		ClassName & {
			loading?: boolean
		}
>) {
	return (
		<Pressable
			className={cn(
				(loading || disabled) && "opacity-50",
				"active:bg-goldenrod-400 rounded-3xl bg-blue-500 px-4 py-2",
				// with the one below, it works, but it duplicated the class and that makes it hard if i forget to change one.
				// restProps.testOnly_pressed && "bg-goldenrod-400",
				className,
			)}
			role="button"
			disabled={loading || disabled}
			{...restProps}
		>
			<Text className={cn("text-white")}>{children}</Text>
		</Pressable>
	)
}
