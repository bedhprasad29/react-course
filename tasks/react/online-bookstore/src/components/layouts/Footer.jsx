
export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">OB © 2024 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted"><img src={require('../../assets/icons/fb.webp')} alt="" width="20px" height="20px" /></a></li>
                        <li className="ms-3"><a className="text-muted"><img src={require('../../assets/icons/twitter.webp')} alt="" width="20px" height="20px" /></a></li>
                        <li className="ms-3"><a className="text-muted"><img src={require('../../assets/icons/instagram.webp')} alt="" width="20px" height="20px" /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}