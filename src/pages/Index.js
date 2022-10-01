import React from 'react'

const Index = () => {
  return (
    <>
        <div className='header_body'>
          <div className='container'>
              <div className='slider'>
                  <div>
                      <h1 className='slider_count'>/01</h1>
                      <div className='progress'>
                          <div></div>
                      </div>
                      <p className='slider_cntrl active'>GIS</p>
                      <p className='slider_cntrl'>ANN</p>
                      <p className='slider_cntrl'>GNS</p>
                      <p className='slider_cntrl'>MDE</p>
                  </div>
              </div>
              <div>
                  <div>
                      <h1 className='title'>GEOMÁTICA GIS</h1>
                      <p> Área de interes:
                          <span className='sub_title'> Geographical Information System</span>, representando datos geográficos de forma visual. \ 
                          <u>
                              consultar
                          </u>
                      </p>
                      <ul className='pagination_mobile'>
                          <li className='pag_active'></li>
                          <li></li>
                          <li></li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        <div className='header_bottom'>
            <div className='container'>
                <div>
                    <div className='item'>
                        <h4>Universidad del Valle</h4>
                        <small>GISMODEL</small>
                        <small>Área de Geomática</small>
                        <a href='#'>Leer más</a>
                    </div>
                    <div className='item item_centered'>
                        <small>A. Alexis Granada G.</small>
                        <small>Investigador Junior</small>
                        
                    </div>
                    
                </div>
                <div>
                    <img src='/2.jpg' alt='img' className='thumbnail'></img>
                    <div>
                        <h4>GIS</h4>
                        <small>
                            {/*<span className='sub_title'> Work Collection</span>,*/} 
                            La aplicabilidad de las herramientas de los Sistemas de Información Geográfica (SIG) se da en múltiples campos y ayudan a dar solución a problemas en diversas disciplinas tanto en el sector público como privado o también si se quiere en el sector productivo como administrativo. <br></br>
                        </small>
                        <a href='#'> Read more</a>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Index;