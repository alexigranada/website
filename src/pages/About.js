import React from 'react'

const About = () => {
  return (
    <>
      <div className='header_body'>
        <div className='container_about'>
            <div className='about_img'>
              <img src='/2.jpg' alt='img' className='thumbnail'></img>
            </div>
            <div>
                <div>
                    <p>Hola mi nombres es,</p>
                    <h1 className='title_about'>A. Alexis Granada G.</h1>
                    <p>Actual estudiante del grado de Ingeniería Topográfica, con conocimientos en procesos de captura, manejo, análisis y
                procesamiento de información espacial. Soy un apasionado por el mundo de la tecnología. Me divierto investigando
                y desarrollando aplicaciones y visores SIG en la web, para comprender y representar datos espaciales de forma
                visual. Estoy interesado en aplicar conocimientos para el desarrollo de herramientas y procesos en la nube para la
                gestión de datos espaciales, bien sea para la modelación, captura en tiempo real, plataformas de seguimiento,
                bases de datos en la nube y servicios en la web, para diferentes ciencias, en especial la agricultura de precisíon.
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
    </>
  )
}

export default About