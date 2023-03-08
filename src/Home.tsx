import GameProvider from "./store/reducer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import {useState} from 'react'
function Home({ className }: { className?: string }) {
    return (
    <div className={className}>
        <GameProvider>
          <Outlet></Outlet>
        </GameProvider>
    </div>
  );
}

export default styled(Home)`
//   background-color: #ffc700;
//   width: 100%;
//   overflow: hidden;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
`;
