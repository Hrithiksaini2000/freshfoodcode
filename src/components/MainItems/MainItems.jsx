import '../MainItems/MainItems.css'

import mainitem from "../../assets/img/project-1.png"
import mainitem2 from "../../assets/img/project-2.png"
import mainitem3 from "../../assets/img/project-3.png"
function Mainitems() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='main-item-heading'>Enjoy our expertly crafted sushi combinations, made just for you.</h1>
                            <div>
                                <p className='paragraph-main-item'>Our sushi is crafted from the freshest ingredients, delivering a perfect blend of flavor, quality and visual appeal.</p>
                            </div>
                        </div>
                        <div className='items-grid'>
                            <div className='img-div'>
                                <img src={mainitem} className='img-width' />
                                <div className='itemainname'>
                                    <div>
                                        <h3 className='main-item-font'>Salmon Platter</h3>
                                    </div>
                                    <div>
                                        <h5>Mixed Platter Roll</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='img-div'>
                                <img src={mainitem2} className='img-width' />
                                <div className='itemainname'>
                                    <div>
                                        <h3 className='main-item-font'>Mixed Platter Roll</h3>
                                    </div>
                                    <div>
                                        <h5>Mixed Platter Roll</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='img-div'>
                                <img src={mainitem3} className='img-width' />
                                <div className='itemainname'>
                                    <div>
                                        <h3 className='main-item-font'>ALa Carte Menu</h3>
                                    </div>
                                    <div>
                                        <h5>Mixed Platter Roll</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainitems