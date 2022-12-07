import React from 'react'

import { FirstGoal } from './FirstGoal';
import { Header } from './Header';
import { SecondGoal } from './SecondGoal';
import { ThirdGoal } from './ThirdGoal';


export const GoalList = () => {
  return (
    <div className="GoalList" >

      <Header></Header>

    <FirstGoal></FirstGoal>
    <SecondGoal></SecondGoal>
    <ThirdGoal></ThirdGoal>
    </div>

    
  )
}
