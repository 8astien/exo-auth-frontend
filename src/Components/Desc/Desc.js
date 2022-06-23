import React from 'react'
import './Desc.css'
import bottle from '../../assets/bottle.svg'

function Desc() {
  return (
    <section className='desc'>
        <div className='text--container'>
            <h3>Natural Juice - Un pur jus de fruits !</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit nesciunt rerum alias quis cumque dignissimos nostrum, suscipit laborum veritatis excepturi laboriosam fugit soluta perferendis in tenetur? 
            Voluptatibus, culpa sed ab hic dolores obcaecati assumenda ex omnis nesciunt illo reprehenderit voluptas possimus enim sit molestiae! </p>
            <p>Nunc nec ipsum ullamcorper, finibus libero vitae, consectetur felis. Mauris commodo risus a posuere rutrum. Pellentesque vel ex hendrerit, commodo lectus quis, feugiat enim. Maecenas tincidunt pretium risus sit amet gravida.</p>
            <p>Ut lacus purus, bibendum vitae tellus ut, semper vulputate lorem. Nunc eu libero aliquam ipsum pellentesque volutpat at vel tortor.</p>
        </div>
        <img src={bottle} alt="Illustration de votre produit" />
    </section>
  )
}

export default Desc