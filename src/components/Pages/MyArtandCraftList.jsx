import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtandCraftList = () => {
    const loadedData = useLoaderData()
    const [data, setData] = useState(loadedData)
    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/artisan/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(latestData => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        console.log(latestData)
                        const filteredData = data.filter(uData => uData._id !== _id)
                        setData(filteredData)
                    })

            }
        });




        // const filteredData = data.filter(uData => uData._id !== _id)
        // setData(filteredData)
    }
    return (
        <div className=' grid grid-cols-2'>
            {
                data.map(art => <div key={art._id} className="hero bg-base-200">
                    <div className="hero-content border flex-col lg:flex-row">
                        <img src={art.photo} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">{art.itemName}</h1>
                            <div className=' flex gap-12'>
                                <div>
                                    <p className="py-6"><span>Price : </span>{art.price}</p>
                                    <p className="py-6"><span>Rating : </span>{art.rating}</p>
                                </div>
                                <div>
                                    <p className="py-6"><span>Customization : </span>{art.customization}</p>
                                    <p className="py-6"><span>Stock : </span>{art.status}</p>
                                </div>
                            </div>
                            <div className=' flex gap-3'>
                                <Link to={`/itemdetails/${art._id}`}><button className="px-3 py-1 bg-red-500 text-white">Show Details</button></Link>
                                <Link to={`/update/${art._id}`}><button className="px-3 py-1 bg-red-500 text-white">Update</button></Link>
                                <button title='delete' onClick={() => handleDelete(art._id)} className="px-3 py-1 bg-red-500 text-white">X</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyArtandCraftList; 