

const Services = () =>{
    return(
        <>
            <section className="services container">

                <div className="serv-head flex">
                    <h1>Services</h1>
                    <p>This is what we offer</p>
                    <span></span>
                </div>

                <div className="card-container flex">
                    <div className="card">
                        <img src="assets/architecture.jpg" alt="" />
                        <div className="card-info">
                            <h3>Architecture</h3>
                            <p>Discover Architectural Excellence with Us!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="assets/interior.jpg" alt="" />
                        <div className="card-info">
                            <h3>Interiors</h3>
                            <p>Experience the Art of Interior Design with IRA!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="assets/construction.jpg" alt="" />
                        <div className="card-info">
                            <h3>Construction</h3>
                            <p>Rediscover Spaces with Our Renovation Services at IRA!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="assets/renovation.jpg" alt="" />
                        <div className="card-info">
                            <h3>Renovation</h3>
                            <p>Integrating eco-friendly solutions for a greener future.</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Services