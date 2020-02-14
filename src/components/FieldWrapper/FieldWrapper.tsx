import React from "react";
import { Field, WrappedFieldProps } from "redux-form";

interface IProps {
	children: React.FunctionComponent<any>;
	name: string;
}

interface IRenderProps extends WrappedFieldProps {}

const FieldWrapper = (props: IProps) => {
	const { name, children: RenderProps } = props;

	return (
		<Field
			name={name}
			component={({ input, meta: { error, touched } }: IRenderProps) => (
				<RenderProps
					name={name}
					{...input}
					error={error && touched}
					helperText={touched && error}
				/>
			)}
		/>
	);
};

export default FieldWrapper;
