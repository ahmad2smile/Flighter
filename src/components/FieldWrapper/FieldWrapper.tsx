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
			component={({ input, ...rest }: IRenderProps) => (
				<RenderProps name={name} {...input} inputProps={rest} />
			)}
		/>
	);
};

export default FieldWrapper;
