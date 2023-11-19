import {styled} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

export const CardBox = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CardStyled = styled.article`
	display: flex;
	flex-direction: column;
	padding: 10px 10px 22px;
	max-width: 300px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
	box-shadow: 0px 4px 20px 5px #0000001A;
	
	img{
		width: 100%;
		height: auto;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px
		;border-radius: 10px;
	}
`

export const CardTextWrap = styled.div`
	margin-top: 20px;
	padding: 0 10px;
		
	h1{
		margin-bottom: 24px;
		font-size: 16px;
		font-weight: 700;
		line-height: 1;
		color: ${myTheme.colors.cardHcolor};
	}
	
	p{
		margin-bottom: 19px;
		font-size: 12px;
		line-height: 20px;
		font-weight: 500;
		color: ${myTheme.colors.cardPcolor};
	}
`