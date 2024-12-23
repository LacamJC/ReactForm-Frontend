function ShowPassword(){
    function showPassword(){
        // console.log("Click")
        const passwordInput = document.getElementById('password')

        passwordInput.type == 'password' ? passwordInput.type='text' : passwordInput.type='password'
    }
    return(
        <>
                    <div className='mb-3 mt-3 form-check'>
                        <input 
                            type='checkbox'
                            id='showPassword'
                            className='form-check-input'
                            onClick={showPassword}
                        ></input>
                        <label htmlFor="showPassword" className='form-check-label'>Mostrar senha</label>
                    </div>
        </>
    )
}

export default ShowPassword