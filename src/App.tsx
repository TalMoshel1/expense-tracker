import { useEffect, useRef, useState } from 'react'
import {Graph} from './components/Graph.js'
import {Form} from './components/Form'
import reactLogo from './assets/react.svg'
import './App.css'
import {QuestionInterface, scoreInterface} from './interfaces/api'
import {GameContext} from './store/reducer'
import { useContext } from 'react'
import GameProvider from './store/reducer'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import "@fontsource/poppins";

function App({className}: {className?: string}) {

  return <div className="App">
            <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-grey-800'>
                <h1 className=' text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Expense Treacker</h1>
                {/* grid columns */}
                <div className='grid md:grid-cols-2 gap-4'>
                    {/* Chart */}
                    <Graph />

                    <Form/>
                </div>
            </div>
        </div>
}

export default App
