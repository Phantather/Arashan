import React from 'react';
import './home.css'
import FirstScreen from "./FirstScreen/FirstScreen";
import Begin from "./Begin/Begin";
import Day1 from "./Day1/Day1";
import Day2 from "./Day2/Day2";
import Day3 from "./Day3/Day3";
import Day5 from "./Day5/Day5";
import Day7 from "./Day7/Day7";
import Day8 from "./Day8/Day8";
import Sum from "./Sum/Sum";
import Online from "./Online/Online";
import Team from "./Team/Team";
import Day4 from "./Day4/Day4";

const Home = () => {
    return (
        <>
            <FirstScreen/>
            <Begin/>
            <Day1/>
            <Day2/>
            {/*<Road/>*/}

            <Day3/>
            {/*<Day4/>*/}
            <Day5/>
            <Day7/>
            <Day8/>
            <Sum/>
            <Online/>
            <Team/>
        </>
    );
};

export default Home;