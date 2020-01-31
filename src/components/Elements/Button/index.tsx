import * as React from "react";
import '../../../styles/elements/button/index.scss';
import { Button as AntDButton } from "antd";
import { ButtonProps as AntDButtonProps } from "antd/lib/button";

interface ButtonProps extends AntDButtonProps {

}

export default class Button extends React.PureComponent<ButtonProps, {}>
{
	render()
	{

		return React.cloneElement(<AntDButton />, {...AntDButton.defaultProps, ...this.props});
	}
}