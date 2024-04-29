import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdKeyboardArrowDown } from "react-icons/md";

const MyArtandCraftList = () => {
    const loadedData = useLoaderData()

    const [data, setData] = useState(loadedData)
    console.log(data)
    const [sortingData, setSortingData] = useState([])
    console.log(sortingData)

    useEffect(() => {
        setSortingData(loadedData)
    }, [])

    const handleFilter = (sort) => {
        if (sort === 'yes') {
            const filteredData = data.filter(data => data.customization === 'yes')
            setSortingData(filteredData)
        }
        if (sort === 'no') {
            const filteredData = data.filter(data => data.customization === 'no')
            setSortingData(filteredData)

        }
        if (sort === 'none') {
            setSortingData(loadedData)
        }
    }

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
                        setSortingData(filteredData)
                        setData(filteredData)
                    })

            }
        });
    }
    return (
        <div className=' mt-16'>
            <div>
                <div className="dropdown flex justify-center my-24">
                    <div>
                        <div tabIndex={0} role="button" className=" flex items-center gap-1 px-5 py-2 bg-red-500 text-white m-1 ">Sort by Customization <MdKeyboardArrowDown /></div>

                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('yes')}><a>Customization: Yes</a></li>
                            <li onClick={() => handleFilter('no')}><a>Customization: No</a></li>
                            <li onClick={() => handleFilter('none')}><a>None</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-2 gap-5'>
                {
                    sortingData.map(art => <div key={art._id} className="hero bg-base-200">
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
        </div>
    );
};

export default MyArtandCraftList; 