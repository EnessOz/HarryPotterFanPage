import { useDispatch, useSelector } from 'react-redux';
import { getWizards } from '../slice';
import { useEffect } from 'react';
import { GiFamilyHouse, GiCrownedSkull, GiHouse } from "react-icons/gi"
import { BsGenderAmbiguous } from "react-icons/bs"
import { ImMagicWand } from "react-icons/im"
import { FaHatWizard } from "react-icons/fa"
import { NavLink } from 'react-router-dom';





export const Header = () => {
    const dataRedux = useSelector((state) => state.potter)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getWizards())

    }, [dispatch]);


    const uniqueWizards = [...new Set(dataRedux.wizardsList.map((item) => item.name))]
    const limitedWizards = uniqueWizards.slice(0, 25)
    const uniqueHouses = [...new Set(dataRedux.wizardsList.map((item) => item.house))];
    const uniqueGenders = [...new Set(dataRedux.wizardsList.map((item) => item.gender))]
    const uniqueWands = [...new Set(dataRedux.wizardsList.map((item) => item.wand.core))]


    return (
        <header className='header'>
            <img src="/images/White-Font.png" alt='PotterLogo'></img>
            <div className="dropContainer">
                <div class="dropdown">
                    <h3 class="dropbtn">Wizards <FaHatWizard /></h3>
                    <div class="dropdown-content">
                        {limitedWizards.map((name) => (
                            <NavLink to={`detail/${name}`} key={name}>{name}</NavLink>
                        ))}
                    </div>
                </div>
                <div class="dropdown">
                    <h3 class="dropbtn">Houses <GiFamilyHouse /></h3>
                    <div class="dropdown-content">
                        {uniqueHouses.map((house) => (
                            <NavLink to={`detail/${house}`} key={house}>{house}</NavLink>
                        ))}
                    </div>
                </div>
                <div class="dropdown">
                    <h3 class="dropbtn">Genders <BsGenderAmbiguous /></h3>
                    <div class="dropdown-content">
                        {uniqueGenders.map((gender) => (
                            <NavLink to={`detail/${gender}`} style={{ textTransform: "capitalize" }}>{gender}</NavLink>
                        ))}
                    </div>
                </div>
                <div class="dropdown">
                    <h3 class="dropbtn">Wands <ImMagicWand /></h3>
                    <div class="dropdown-content">
                        {uniqueWands.map((wand) => (
                            <NavLink to={`detail/${wand}`} style={{ textTransform: "capitalize" }}>{wand}</NavLink>
                        ))}
                    </div>
                </div>
                <div className='navLinks'>
                    <NavLink to="bestWizard" className="dropBest">Best Wizard <GiCrownedSkull /></NavLink>
                    <NavLink to="/" className="dropHome">Home <GiHouse /></NavLink>
                </div>
            </div>
        </header>

    )
}
