import React from 'react'
import styled from "styled-components";
import color from 'constants/Colors';

const DefaultLayout: React.FC = ({ children }) => {
    return (
        <Root>
            {children}
        </Root>
    );
}

export default DefaultLayout

const Root = styled.div`
    background-color: ${color.background};
    margin: 50px;
`