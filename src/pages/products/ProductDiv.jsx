import React from 'react';
import Button from '../../components/Button/Button';

const ProductDiv = ({data}) => {
  
  return (
    <div>
          <div className=' flex flex-col sm:flex-row w-[80%] mx-auto'>
            <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
                <div className=' border-l-4 border-black my-4'>
                  <h1 className=' py-3 px-2'>{data?.heading}</h1>
                </div>
                <ul className='mx-5'>
                  <li className=' list-disc'>{data?.list1}</li>
                  <li className=' list-disc'>{data?.list2}</li>
                  <li className={`${data?.list3?'list-dist':'list-none'} `}>{data?.list3}</li>
                </ul>
            </div>
            <div className=' md:w-[50%] w-[100%]'>
              <img src={data?.img} />
            </div>
          </div>
        </div>
  );
}


const ProductNotBlue=()=>{
  return(
    <>
    
          <div className=' flex w-[80%] kw:flex-col  mx-auto my-6 '>
            <div className=' w-[50%] kw:w-[80%] flex flex-col justify-center'>
                <div className=' border-l-4 border-black my-4'>
                  <h1 className=' py-3 px-2'>Appointments Management</h1>
                </div>
                <ul className='mx-5'>
                  <li className=' list-disc'>Schedule appointments quickly</li>
                  <li className=' list-disc'>Schedule appointments quickly</li>
                  <li className=' list-disc'>Schedule appointments quickly</li>
                </ul>
            </div>
            <div className=' w-[50%] kw:w-[100%] h-full flex flex-col justify-center '>
              <div className=' border-l-4 border-black my-4'>
                <h1 className=' py-3 px-2'>Manage Staff</h1>
              </div>
              <ul className='mx-5'>
                <li className=' list-disc'>Maintain Staff records digitally.</li>
                <li className=' list-disc'>Get Privilege protected features to allow staff use right features.</li>
              </ul>
            </div>
          </div>
    </>
  )
}
export {ProductNotBlue}
export default ProductDiv;
