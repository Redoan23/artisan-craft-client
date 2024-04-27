import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Update = () => {
    const { id } = useParams()

    const handleUpdateForm = e => {
        e.preventDefault()
        const form = e.target
        const photo = form.image.value
        const itemName = form.item_name.value
        const subcategoryName = form.subcategory_Name.value
        const description = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const status = form.stockStatus.value

        const updateData = { photo, itemName, subcategoryName, description, price, rating, customization, status }


        fetch(`http://localhost:5000/artisan/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(latest => {
                if (latest.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Modification Successful!',
                        text: 'Continue Browsing',
                        icon: 'success',
                        confirmButtonText: 'okay'
                    })
                }
                console.log(latest)
            })

    }
    return (
        <div>
            <form onSubmit={handleUpdateForm} className=' bg-orange-100 p-3 lg:p-14 flex flex-col justify-center gap-4'>
                <div className=' flex gap-2'>
                    <div className=' w-1/2'>
                        <label for="image">Image URL:</label>
                        <input placeholder='image url' className='p-2 w-full' type="text" id="image" name="image" />
                    </div>

                    <div className=' w-1/2'>
                        <label for="item_name">Item Name:</label>
                        <input placeholder=' item name' className='p-2 w-full' type="text" id="item_name" name="item_name" />
                    </div>
                </div>

                <div className=' flex gap-2'>
                    <div className=' w-1/2' >
                        <label for="subcategory_Name">Subcategory Name:</label>
                        <input placeholder='subcategory name' className='p-2 w-full' type="text" id="subcategory_Name" name="subcategory_Name" />
                    </div>

                    <div className=' w-1/2'>
                        <label for="short_description">Short Description:</label>
                        <input placeholder='short description' className='p-2 w-full' type="text" id="short_description" name="short_description" />
                    </div>
                </div>

                <div className=' flex gap-2'>
                    <div className=' w-1/2'>
                        <label for="price">Price:</label>
                        <input placeholder='price' className='p-2 w-full' type="number" id="price" name="price" />
                    </div>

                    <div className=' w-1/2'>
                        <label for="rating">Rating:</label>
                        <input placeholder='rating' className='p-2 w-full' type="number" id="rating" name="rating" min="0" max="5" step="0.1" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className=' w-1/2'>
                        <label for="customization">Customization:</label>
                        <select className='p-2 w-full' id="customization" name="customization" >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div >

                    <div className=' w-1/2'>
                        <label for="stockStatus">Stock Status:</label>
                        <select className='p-2 w-full' id="stockStatus" name="stockStatus" >
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>

                </div>

                <button className=' w-full text-white bg-red-400 p-2 my-2' type="submit">Update Item</button>
            </form >
        </div>
    );
};

export default Update;