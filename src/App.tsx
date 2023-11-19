import React from 'react';
import './App.css';
import {CardStyled, CardBox, CardTextWrap} from "./components/Card.styled";
import {StyleBtn} from "./components/Button.styled";

function App() {
	return (
			<CardBox>
				<CardStyled>
					<img src="/img/Rectangle_1.png" alt=""/>
					<CardTextWrap>
						<h1>Headline</h1>
						<p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                        <StyleBtn btnType={"primary"}>See more</StyleBtn><StyleBtn btnType={"outlined"}>Save</StyleBtn>
					</CardTextWrap>
				</CardStyled>
			</CardBox>
	);
}

export default App;