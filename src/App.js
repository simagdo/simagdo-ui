import React from 'react';
import './App.css';
import Tabs from "./components/output/Tabs/Tabs";
import Tab from "./components/output/Tabs/Tab/Tab";
import useParam from "./components/utils/useParam";

function App() {

    const [selectedTab, setSelectedTab] = useParam('tab', 'tab1');

    return (
        <div className="app">
            <Tabs selected={selectedTab} onSelect={setSelectedTab}>
                <Tab id="tab1" label="One">
                    <p>This is tab ONE</p>
                </Tab>
                <Tab id="tab2" label="Two">
                    <p>This is tab TWO</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default App;