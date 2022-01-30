import React, {Fragment, useState} from "react";
import { TestingList } from "./components/TestingList";
import { TestingFilter } from "./components/TestingFilter";

export function App(){
    const list = [
        {
            num_rol: 123,
            number: 1
        },
        {
            num_rol: 123,
            number: 1
        },
        {
            num_rol: 123,
            number: 1
        }
    ]

    const [testings, setTesting] = useState(list)

    return(
        <Fragment>
            <TestingFilter/>
            <TestingList testings={testings}/>
        </Fragment>
    )


}
