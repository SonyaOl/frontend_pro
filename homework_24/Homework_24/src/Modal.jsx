function Modal(){
    return(
        <>
        <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="taskModalLabel">Ваше завдання</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрити"></button>
                </div>
                <div className="modal-body js--modal-text"></div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                </div>
            </div>
        </div>
    </div>
        </>

    )
}

export default Modal