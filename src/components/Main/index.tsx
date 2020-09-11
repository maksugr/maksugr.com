import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

import bladeJpg from './assets/blade.jpg';

interface ISlyledMain {
    readonly height: number;
}

const StyledMain = styled.div<ISlyledMain>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${({ height }) => `
        height: ${height}px;
        max-height: ${height}px;
    `}
    background: #0e1111;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledLink = styled.a`
    font-weight: 700;
    color: #ebd100;
    text-decoration: none;
    margin-top: 10px;
`;

const StyledMenu = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0e1111;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledMenuContent = styled.div`
    width: 300px;
`;

const StyledMenuContentItem = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: #ebd100;

    &:last-child {
        margin-bottom: 0;
    }
`;

const StyledMenuContentItemLink = styled.a`
    color: #ebd100;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;

const StyledMenuToggle = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 100px;
    line-height: 0;
    color: #ebd100;
    cursor: pointer;
    transition: opacity 0.3s;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.7;
    }
`;

const Main: FunctionComponent = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const { height } = useWindowSize();

    return (
        <StyledMain height={height}>
            <StyledContent>
                <StyledImage src={bladeJpg} alt='Blade runner poster' />
                <StyledLink href='https://twitter.com/maksugr' target='_blank'>
                    @maksugr
                </StyledLink>
            </StyledContent>
            {isMenuOpened && (
                <StyledMenu>
                    <StyledMenuContent>
                        <StyledMenuContentItem>
                            <StyledMenuContentItemLink href='/presentations/ar-the-next-big-thing'>
                                AR: the next big thing
                            </StyledMenuContentItemLink>
                        </StyledMenuContentItem>
                    </StyledMenuContent>
                </StyledMenu>
            )}
            <StyledMenuToggle
                onClick={() => {
                    if (isMenuOpened) {
                        setIsMenuOpened(false);
                    } else setIsMenuOpened(true);
                }}
            >
                {isMenuOpened ? '-' : '+'}
            </StyledMenuToggle>
        </StyledMain>
    );
};

export default Main;
