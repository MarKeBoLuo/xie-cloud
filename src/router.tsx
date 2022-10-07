import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import ReadTxt from "./views/ReadTxt";

export default class Router extends React.Component {
    public render = (): JSX.Element => {
        return (
            <HashRouter>
                <Route path={'/'}>
                    <App></App>
                </Route>
                <Route path={'/readTxt'}>
                    <ReadTxt></ReadTxt>
                </Route>
            </HashRouter>
        )
    }
}
