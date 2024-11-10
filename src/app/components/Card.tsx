import React from 'react'
import Image from 'next/image';


const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
      <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizza</h2>
      <p className='text-white mb-4'>Experience the juiciest pizza in town, made with fresh ingredients and grilled to perfection</p>
      <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transite duration-200'>
        Order Now
      </button>
      <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-white'>
        {" "}
         Coming Soon: Our New Pizza Launches</h3>

      <ul>
     <li> <strong> Cheesy BBQ Pizza</strong>
     Introducing the Cheesy BBQ Pizza! This mouthwatering creation features a tangy barbecue sauce base, 
     topped with melty mozzarella, smoky cheddar.
     </li>
     <br/>
     <li> <strong> Spicy Pizza </strong>
     Get ready for the Spicy Pizza! This fiery delight features a zesty tomato sauce,
      pepper jack cheese, and a medley of spicy toppings like jalapeños.
     </li>
     <br/>

     <li> <strong> Mushroom Swiss Pizza </strong>
      This gourmet delight features a rich garlic cream sauce, 
     topped with sautéed mushrooms, melty Swiss cheese, and fresh herbs.
     </li>
     <br/>

     <li> <strong> Mushroom Swiss Pizza </strong>
     Introducing the Mushroom Swiss Pizza! This gourmet delight features a rich garlic cream sauce, 
     topped with sautéed mushrooms, melty Swiss cheese, and fresh herbs. 
     </li>
     <br/>
      </ul>
      </div>
      

   
      <div className="md:w-1/2 mt-6 md:mt-0">
      <Image src="https://as1.ftcdn.net/v2/jpg/02/36/85/52/1000_F_236855277_w9n3jvD8n4ZguTEZd9vqqeBdMU77BtJy.jpg"
      alt="delicious pizza"
      className="-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" />

      </div>
      



    </section>
  );
};
export default FloatingImageContentBlock;
      


