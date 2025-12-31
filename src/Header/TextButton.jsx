
function TextButton({href , textButtonText , textButtonClassName}){

    return(
        <a className={textButtonClassName} href={href}>{textButtonText}</a>
    )
}

export default TextButton;