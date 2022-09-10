import React from 'react'
import classes from './HeroImage.module.css'

const HeroImage = ({IMAGE_URL, description, title}) => {

  return (
    <div className={classes.hero}
     style={{
      backgroundImage: `url(${IMAGE_URL})`,
      backgroundSize:'cover',
      backgroundPosition:'center'
     }}
    >
       {/* <img src={IMAGE_URL}/> */}
       <div className={classes.desc}>
        <h1>{title}</h1>
        <p>{description}</p>
       </div>

      
    </div>
  )
}

export default HeroImage