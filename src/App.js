import React from 'react';
import './App.sass';
import TableExample from "./components/examples/TableExample";
import CollapseExample from "./components/examples/output/CollapseExample/CollapseExample";
import EditableLabel from "./components/input/EditableLabel/EditableLabel";

function App() {

    return (
        <div className="app">
            <EditableLabel initialValue={'Hello'} save={value => console.log(`Saving ${value}`)} label="Test"/>
            <CollapseExample/>
            <TableExample/>
        </div>
    );
}

export default App;