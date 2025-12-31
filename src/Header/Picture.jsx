
function Picture({logoClassName , logoHref , picture}){

    return(
        <a href={logoHref}> <img className={logoClassName} src={picture} alt="Logo" /> </a>
    )
}

export default Picture;