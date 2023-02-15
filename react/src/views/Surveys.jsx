import React, {useContext, useEffect} from 'react';
import PageComponent from "../components/PageComponent.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import Survey from "../components/Survey.jsx";
import TButton from "../components/core/TButton.jsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline/index.js";

const Surveys = () => {

  const {surveys} = useStateContext()
  console.log(surveys);

  const onDeleteClick = ()=>{
    console.log('on Delete Click')
  }

  return (
    <PageComponent title='Surveys' buttons={
      (
        <TButton color='green' to='/surveys/create'>
          <PlusCircleIcon className='h-6 w-6 mr-2'/>
          Create new
        </TButton>
      )
    }>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {
          surveys.map(survey => (
            <Survey key={survey.id} survey={survey} onDeleteClick={onDeleteClick}/>
          ))
        }
      </div>
    </PageComponent>
  );
};

export default Surveys;
