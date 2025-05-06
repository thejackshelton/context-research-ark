import { createSignal } from "solid-js";
import "./app.css";

export default function App() {
	const [count, setCount] = createSignal(0);

	return <Input />;
}

import { Field } from "@ark-ui/solid/field";

export const Input = () => {
	return (
		<Field.Root>
			<Field.Label>Label</Field.Label>
			<Field.Input />
			<Field.ErrorText>Error Info</Field.ErrorText>
			<ComposedHelperText />
		</Field.Root>
	);
};

function ComposedHelperText() {
	return <Field.HelperText>Some additional Info</Field.HelperText>;
}
