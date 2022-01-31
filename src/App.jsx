import React, {Fragment, useState} from "react";
import { TestingList } from "./components/TestingList";
import { TestingFilter } from "./components/TestingFilter";


export function App(){

    return(
        <Fragment>
            <TestingFilter/>
            <TestingList />
        </Fragment>
    )


}
