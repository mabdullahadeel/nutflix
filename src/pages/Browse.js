import { useState, useEffect } from 'react';
import ProfileSlectionPage from './SelectProfile';
import BrowseContainer from '../containers/BrowseContainer';
import { getSeries } from '../utils/selection-filter';

export default function Browse() {
    return (
        <>
            <BrowseContainer />
            {/*
            <ProfileSlectionPage /> 
            */}
        </>
    )
}
