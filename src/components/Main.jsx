export default function Main() {
    return (
        <div className="main"> 
            <div className="main-container">
                <div className="main-content-img">
                    <img className="main-img" src="https://b-online.ru/wp-content/uploads/2021/01/223.jpg" alt="" />
                </div>
                <div className="main-content-text">
                    <div className="content-text">
                        <h1 className="content-text-title">SUNT AICI SĂ TE AJUT</h1>
                        <p className="content-text-content1">
                            Numele meu este Victor Josanu. 
                            Am o echipă de montatori cu experientă în montarea oricărui tip de mobilier.
                            Suntem gata de a veni în orice parte a orașului Chișinău pentru a îndeplini cerințele dumneavoastră. 
                        </p>
                        <p className="content-text-content2">Dacă aveîi nevoie de orice montaj de mobilă sunt aici să vă ajut!</p>
                    </div>
                    <div className="content-btn">
                        <button className="btn">VEZI CUM TE POT AJUTA! <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="services-container" id="services">
                <h1 className="services-title">MONTEZ ORICE TIP DE MOBILĂ ȘI CORP DE ILUMINAT:</h1>
                <div className="services">
                    <div className="service">
                        <span className="icon-bed icon"></span>
                        <h2 className="service-title">Mobilă de dormitor</h2>
                        <p className="service-enum">șifoniere, paturi matrimoniale, canapele, paturi single, birou, scaune de masă sau birou, dressing-uri, montare TV suspendat, noptiere</p>
                    </div>
                    <div className="service">
                        <span className="icon-dining-room-furniture icon"></span>
                        <h2 className="service-title">Mobilă de sufragerie</h2>
                        <p className="service-enum">canapele, mese, scaune, dulapuri suspendate, fotolii de orice tip, candelabre, TV suspendat, noptiere</p>
                    </div>
                    <div className="service">
                        <span className="icon-kitchen-cabinets icon"></span>
                        <h2 className="service-title">Mobilă de bucătărie</h2>
                        <p className="service-enum">blat de bucatarie, dulapuri suspendate, instalare chiuvetă, montare cuptor și aragaz, poziționare frigider, mese de bucătărie, colțar, scaune</p>
                    </div>
                    <div className="service">
                        <span className="icon-hanger icon"></span>
                        <h2 className="service-title">Mobilă de hol</h2>
                        <p className="service-enum">cuiere de orice tip, dulap pentru pantofi, etc.</p>
                    </div>
                    <div className="service">
                        <span className="icon-sink-bathroom icon"></span>
                        <h2 className="service-title">Mobilă de baie</h2>
                        <p className="service-enum">dulapuri, toaletă, chiuvetă, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}