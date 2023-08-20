import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWizards } from '../slice';
import { FaWandSparkles } from 'react-icons/fa6';
import { TfiFaceSad } from 'react-icons/tfi';
import { DetailAnimation } from "../components/DetailAnimation"


const DetailPage = () => {
    const params = useParams();
    const userId = params.userId;
    const dataRedux = useSelector((state) => state.potter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWizards());
    }, [dispatch]);

    const matchedWizard = dataRedux.wizardsList.find((wizard) => wizard.name === userId);
    const filteredHouse = dataRedux.wizardsList.filter((wizard) => wizard.house === userId);
    const filteredGender = dataRedux.wizardsList.filter((wizard) => wizard.gender === userId);
    const filteredWand = dataRedux.wizardsList.filter((wizard) => wizard.wand.core === userId)



    return (
        <div className='detailContainer'>
            <DetailAnimation />
            <h2 className='userIdTitle'>{userId}</h2>
            {matchedWizard ? (
                <div className='wizardInformations'>
                    <h4>{matchedWizard.house}</h4>
                    <img src={matchedWizard.image} alt={matchedWizard.name}></img>
                    <h5>
                        {matchedWizard.wand.core} {matchedWizard.wand.core && <FaWandSparkles />}
                    </h5>
                    {matchedWizard.wand.core ? null : <h5>Wand details are unknown <TfiFaceSad /></h5>}
                </div>
            ) : (
                <div></div>
            )}
            <div className='housesInformations'>
                {filteredHouse.map((item) => (
                    <div>{item.name}</div>
                ))}
            </div>
            <div className='genderInformations'>
                {filteredGender.map((item) => (
                    <div>{item.name}</div>
                ))}
            </div>
            <div className='wandInformation'>
                {filteredWand.map((item) => (
                    <div>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default DetailPage;
