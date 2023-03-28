import React from 'react'
import Checkbox from 'components/Checkbox'
import AgreementSubmitButton from 'components/AgreementSubmitButton'
import LicenseText from "../LicenseText/LicenseText";
import classes from "./LicenseAgreement.module.css";

const LicenseAgreement: React.FC = () => {
    return (
        <div className={classes.LicenseAgreement}>
            <LicenseText/>
            <Checkbox name="agree" label="Принимаю пользовательское соглашение" />
            <AgreementSubmitButton />
        </div>
    )
}

export default LicenseAgreement