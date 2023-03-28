import React from 'react'
import { useSelector } from 'react-redux'
import { getCheckboxState } from 'selectors/selectors'
import classes from "./AgreementSubmitButton.module.css";

const AgreementSubmitButton: React.FC = () => {
    const checkboxName = 'agree'
    const agreed = useSelector(getCheckboxState(checkboxName))

    return <input className={classes.SubmitButton} type="button" value="Принять" disabled={!agreed} />
}

export default AgreementSubmitButton