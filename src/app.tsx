import "./app.css";

export default function App() {
	return <Input />;
}

import { Field } from "@ark-ui/solid/field";

export const Input = () => {
	return (
		<Field.Root>
			<Field.Input />
			<ComposedHelperText />
		</Field.Root>
	);
};

function ComposedHelperText() {
	return <Field.HelperText>Some additional Info</Field.HelperText>;
}
