import "./form-input.styles.scss"

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                /* if length === 0 .length returns false */
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput;