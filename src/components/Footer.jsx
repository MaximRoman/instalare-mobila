export default function Footer() {
    return (
        <div className="footer"> 
            <div className="footer-content">
                <div className="footer-form">
                    <form className="form-content" id="mail">
                        <h1 className="form-text">SOLICITĂ O OFERTĂ</h1>
                        <input type="text" className="form-input" placeholder="Nume:"/>
                        <input type="text" className="form-input" placeholder="Prenume:"/>
                        <input type="text" className="form-input" placeholder="Telefon:"/>
                        <input type="text" className="form-input" placeholder="Adresa de montare:"/>
                        <textarea className="form-textarea" cols="30" rows="10" placeholder="Mesaj:"></textarea>
                        <button className="btn form-btn">Trimite Solicitarea</button>
                    </form>
                </div>
                <div className="footer-links">
                    <div className="link">
                        <span class="icon-phone-square icon"></span>
                        <h2 className="link-title">Telefon</h2>
                        <h2 className="link-description">+373 67626697</h2>
                    </div>
                    <div className="link">
                        <span class="icon-mail-bulk icon"></span>
                        <h2 className="link-title">Email</h2>
                        <h2 className="link-description">email@mail.ru</h2>
                    </div>
                    <div className="link">
                        <span class="icon-location-arrow icon"></span>
                        <h2 className="link-title">Locație</h2>
                        <h2 className="link-description">Orașul Chișinău</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}