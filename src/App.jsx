import React from 'react';
import './App.css';
import Projects from './Components/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { ThemeProvider } from 'styled-components';
import Home from './Container/Home';
import AnimatedCursor from 'react-animated-cursor';

const DarkTheme = {
    backgroundColor: '#15161b', //021f34//#1f2022
    fontColorHeader: '#ffd479', ///fff
    fontColorHeaderHover: '#25265e', //25265e
    fontColorPrimary: '#b3b9c5', //fff
    fontColorSecondary: '#b3b9c5', //98c0c6
    socialIconColor: '#e14eca', //e14eca
    cardColor: '#212129', //01162a
    // commonBorder: '#00aaf2', //00aaf2
};
const LightTheme = {
    backgroundColor: '#EEEEEE', //f9fafc/#fff
    fontColorHeader: '#343a40', ///25265e
    fontColorHeaderHover: '#fff', //fff
    fontColorPrimary: '#495057', //25265e
    fontColorSecondary: '#495057', //25265eb3
    cardColor: '#fbfbfd', //fff
    socialIconColor: 'rgba(37, 38, 94, 0.7)', //rgba(37, 38, 94, 0.7)
    commonBorder: '#15161b', //0556f3
};
const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

const App = () => {
    const [currentTheme, setCurrentTheme] = React.useState('dark');
    const themeToggler = () => {
        currentTheme === 'dark'
            ? setCurrentTheme('light')
            : setCurrentTheme('dark');
    };
    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <div className='app'>
                <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='255, 46, 99'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
                />

                <Router>
                    <Switch>
                        <Home
                            currentTheme={currentTheme}
                            themeToggler={themeToggler}
                        />
                        <Route exact path='/'>
                            <Home
                                currentTheme={currentTheme}
                                themeToggler={themeToggler}
                            />
                        </Route>
                        <Route path='/projects' component={Projects} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route exact path='*' component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
