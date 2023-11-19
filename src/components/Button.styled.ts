import styled, { css } from 'styled-components'
import {myTheme} from "../styles/Theme.styled";

type StyleBtnPropsType = {
	btnType?: "primary" | "outlined",
}

export const StyleBtn = styled.button<StyleBtnPropsType>`
	border: 2px solid ${myTheme.colors.cardBtnColor};
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	line-height: 24px;
	min-width: 86px;
	font-size: 10px;
	font-weight: 700;
	margin-right: 12px;
	
	&:hover{
		cursor: pointer;
	}
	
	${props => props.btnType === "primary" && css<StyleBtnPropsType>`
		background-color: ${myTheme.colors.cardBtnColor};
		color: ${myTheme.colors.white};
	`}
	
	${props => props.btnType === "outlined" && css<StyleBtnPropsType>`
		background-color: transparent;
		color: ${myTheme.colors.cardBtnColor};
	`}
`