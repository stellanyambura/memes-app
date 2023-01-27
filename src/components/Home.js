import React from 'react'
import { Button } from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css'



 function Home() {
  let heading="MEMESAPP"
  let subheading ="welcome on our  memepage"
  let body="VIEW MORE MEMES HERE"
  return (
    <div>
     <section className='hero'></section> 
     <div className='hero-body'></div>
     <div className='container'></div>
     <h1 className='title'>{heading}</h1>
     <div className='is-two-thirds column is paddingless'></div>
     <h2 className='subtitle is-4' >{subheading}</h2>
     <div className='is-two-thirds column is paddingless'></div>
     <body className='is-two-thirds column is paddingless'>{body}</body>
     <Button>GET STARTED</Button>
</div>
  )
}

export default Home;
