import React, {Fragment, useState, useEffect} from "react";
import { TestingList } from "./components/TestingList";
import { TestingFilter } from "./components/TestingFilter";


export function App(){
    const URL_API = '';
    const URL_TOKEN = '';
    const [testings, setTestings] = useState(null);

    var obj = {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': URL_TOKEN
        }
      }

    useEffect(() => {
        fetchTestingData();
      }, []);
    
      if (!testings) {
        return "loading...";
    }


    async function fetchTestingData(filter=null) {
        var url = URL_API
        if(filter!=null){
            var params = "?num_rol=" + filter.rol
            url = url + params
        }
        const response = await fetch(url, obj);
        setTestings(await response.json());
    }


    return(
        <Fragment>
            <TestingFilter fetchTestingData={fetchTestingData}/>
            <TestingList testings={testings} />
        </Fragment>
    )
}
