function Return(){

    function pageBack(){
        window.history.back()
    }
    return(
        <>
            <div className="btn btn-warning m-3" onClick={pageBack}>Voltar</div>
        </>
    )
}
export default Return