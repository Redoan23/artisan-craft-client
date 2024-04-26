import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllArt = () => {
    const data = useLoaderData()
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra p-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=' hidden lg:block'></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Item Added</th>
                            <th className=' hidden lg:block'>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data.map(details => <tr key={details._id}>
                            <th className=' hidden lg:block'>1</th>
                            <td>{details.name}</td>
                            <td>{details.email}</td>
                            <td>{details.itemName}</td>
                            <td className=' hidden lg:block'>{details.rating}</td>
                            <td><button className=' px-1 lg:px-3 py-2 bg-red-400 text-white' >View Details</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArt;