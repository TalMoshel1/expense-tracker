import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {QuestionInterface, scoreInterface} from './interfaces/api'
import Quiz from './pages/Quiz'
import {GameContext} from './store/gameContext'
import { useContext } from 'react'
import Board from './pages/Board'
import GameProvider from './store/gameContext'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import "@fontsource/poppins";
import Button from './elements/Button'

function App({className}: {className?: string}) {

  return <div className={className}>
            expense tracker!
        </div>
}

export default styled(App)`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

.startGame {
    width: 80%;
    height: 30%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


.startGame > button {
        padding: 15px;
        background-color: #C6B9FF;
        border: 2px solid black;
        max-width: 200px;
        width: 100%;

}

label {
    // background-color: #ffc700;

}

input { 
    border: 2px solid black;
    padding: 15px;
    max-width: 200px;
    width: 100%;
}

`
