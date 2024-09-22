import React, { useState } from 'react'
import Align from '../../assets/images/Align1.png'
import Plus from '../../assets/images/Plus1.png'
import Sort from '../../assets/images/Order1.png';
import Female from '../../assets/images/Female15.png';
import Male from '../../assets/images/Male08.png';
import Calendar from '../../assets/images/Calendar.png';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Pagination, Stack } from '@mui/material';
import CheckIcon from '../../assets/images/Checkbox.svg'
import Search from '../../assets/images/Search.png'
import Main from './Main';
const Orderlist = ({ width }) => {
    const [page, setPage] = useState(1);
    const [index,setIndex] = useState(0)
    const handleChange = (event, value) => {
        setPage(value);
    };
    const colors = {
        'pending': 'rgba(89, 168, 212, 1)',
        'approved': 'rgba(255, 197, 85, 1)',
        'complete': 'rgba(74, 167, 133, 1)',
        'rejected': 'var(--color-grey)',
        'other': 'rgba(138, 140, 217, 1)'
    }
    const data = [[
        {
            orderId: "#CM9801",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Just Now",
            status: "In Progress"
        },
        {
            orderId: "#CM9802",
            image: "Male",
            name: "Drew Canon",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "Yesterday",
            status: "Pending"
        },
        {
            orderId: "#CM9803",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "A hour ago",
            status: "Approved"
        },
        {
            orderId: "#CM9804",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9805",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Feb 2, 2024",
            status: "Rejected"
        },
        {
            orderId: "#CM9806",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "In Progress"
        },
        {
            orderId: "#CM9807",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9808",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Pending"
        },
        {
            orderId: "#CM9809",
            image: "Male",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9810",
            image: "Male",
            name: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Nest Lane Olibette",
            date: "Date",
            status: "Rejected"
        }
    ],
    [
        {
            orderId: "#CM9811",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Just Now",
            status: "In Progress"
        },
        {
            orderId: "#CM9822",
            image: "Male",
            name: "Drew Canon",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "Yesterday",
            status: "Pending"
        },
        {
            orderId: "#CM9813",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9814",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9815",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Rejected"
        },
        {
            orderId: "#CM9816",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "In Progress"
        },
        {
            orderId: "#CM9817",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9818",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Pending"
        },
        {
            orderId: "#CM9819",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9820",
            image: "Male",
            name: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Nest Lane Olibette",
            date: "Date",
            status: "Rejected"
        }
    ],
    [
        {
            orderId: "#CM9821",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Just Now",
            status: "In Progress"
        },
        {
            orderId: "#CM9822",
            image: "Male",
            name: "Drew Canon",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "Yesterday",
            status: "Pending"
        },
        {
            orderId: "#CM9823",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9824",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9825",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Rejected"
        },
        {
            orderId: "#CM9826",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "In Progress"
        },
        {
            orderId: "#CM9827",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9828",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Pending"
        },
        {
            orderId: "#CM9829",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9830",
            image: "Male",
            name: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Nest Lane Olibette",
            date: "Date",
            status: "Rejected"
        }
    ],
    [
        {
            orderId: "#CM9831",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Just Now",
            status: "In Progress"
        },
        {
            orderId: "#CM9832",
            image: "Male",
            name: "Drew Canon",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "Yesterday",
            status: "Pending"
        },
        {
            orderId: "#CM9833",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9834",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9835",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Rejected"
        },
        {
            orderId: "#CM9836",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "In Progress"
        },
        {
            orderId: "#CM9837",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9838",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Pending"
        },
        {
            orderId: "#CM9839",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9840",
            image: "Male",
            name: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Nest Lane Olibette",
            date: "Date",
            status: "Rejected"
        }
    ],
    [
        {
            orderId: "#CM9801",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Just Now",
            status: "In Progress"
        },
        {
            orderId: "#CM9802",
            image: "Male",
            name: "Drew Canon",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "Yesterday",
            status: "Pending"
        },
        {
            orderId: "#CM9803",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9804",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9805",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Rejected"
        },
        {
            orderId: "#CM9806",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "In Progress"
        },
        {
            orderId: "#CM9807",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Complete"
        },
        {
            orderId: "#CM9808",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Pending"
        },
        {
            orderId: "#CM98009",
            image: "Female",
            name: "Natali Craig",
            project: "Landing Page",
            address: "Address",
            date: "Date",
            status: "Approved"
        },
        {
            orderId: "#CM9810",
            image: "Male",
            name: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Nest Lane Olibette",
            date: "Date",
            status: "Rejected"
        }
    ]]
    return (
        <Main width={width}>
            {/* <h6>eCommerce</h6> */}
            <h6>Order list</h6>

            <div className='orderList'>
                <div className='header d-flex justify-content-between'>
                    <div className=''>
                        <span className='icon-20 me-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.625 4.375C10.625 4.02982 10.3452 3.75 10 3.75C9.65482 3.75 9.375 4.02982 9.375 4.375V9.375H4.375C4.02982 9.375 3.75 9.65482 3.75 10C3.75 10.3452 4.02982 10.625 4.375 10.625H9.375V15.625C9.375 15.9702 9.65482 16.25 10 16.25C10.3452 16.25 10.625 15.9702 10.625 15.625V10.625H15.625C15.9702 10.625 16.25 10.3452 16.25 10C16.25 9.65482 15.9702 9.375 15.625 9.375H10.625V4.375Z" fill="var(--color-black)" />
                            </svg>

                        </span>
                        <span className='icon-20 me-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.625 10C15.625 10.1658 15.5592 10.3247 15.4419 10.4419C15.3247 10.5592 15.1658 10.625 15 10.625H5C4.83424 10.625 4.67527 10.5592 4.55806 10.4419C4.44085 10.3247 4.375 10.1658 4.375 10C4.375 9.83424 4.44085 9.67527 4.55806 9.55806C4.67527 9.44085 4.83424 9.375 5 9.375H15C15.1658 9.375 15.3247 9.44085 15.4419 9.55806C15.5592 9.67527 15.625 9.83424 15.625 10ZM18.125 5.625H1.875C1.70924 5.625 1.55027 5.69085 1.43306 5.80806C1.31585 5.92527 1.25 6.08424 1.25 6.25C1.25 6.41576 1.31585 6.57473 1.43306 6.69194C1.55027 6.80915 1.70924 6.875 1.875 6.875H18.125C18.2908 6.875 18.4497 6.80915 18.5669 6.69194C18.6842 6.57473 18.75 6.41576 18.75 6.25C18.75 6.08424 18.6842 5.92527 18.5669 5.80806C18.4497 5.69085 18.2908 5.625 18.125 5.625ZM11.875 13.125H8.125C7.95924 13.125 7.80027 13.1908 7.68306 13.3081C7.56585 13.4253 7.5 13.5842 7.5 13.75C7.5 13.9158 7.56585 14.0747 7.68306 14.1919C7.80027 14.3092 7.95924 14.375 8.125 14.375H11.875C12.0408 14.375 12.1997 14.3092 12.3169 14.1919C12.4342 14.0747 12.5 13.9158 12.5 13.75C12.5 13.5842 12.4342 13.4253 12.3169 13.3081C12.1997 13.1908 12.0408 13.125 11.875 13.125Z" fill="var(--color-black)" />
                            </svg>

                        </span>
                        <span className='icon-20 me-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.19194 13.3081C4.07473 13.1908 3.91576 13.125 3.75 13.125C3.58424 13.125 3.42527 13.1908 3.30806 13.3081C3.19085 13.4253 3.125 13.5842 3.125 13.75C3.125 13.9158 3.19085 14.0747 3.30806 14.1919L5.80806 16.6919C5.92527 16.8092 6.08424 16.875 6.25 16.875C6.41576 16.875 6.57473 16.8092 6.69194 16.6919L9.19171 14.1922C9.30892 14.075 9.375 13.9158 9.375 13.75C9.375 13.5842 9.30915 13.4253 9.19194 13.3081C9.07473 13.1908 8.91576 13.125 8.75 13.125C8.58424 13.125 8.42527 13.1908 8.30806 13.3081L6.25 15.3661L4.19194 13.3081Z" fill="var(--color-black)" />
                                <path d="M5.625 3.75V16.25C5.625 16.5952 5.90482 16.875 6.25 16.875C6.59518 16.875 6.875 16.5952 6.875 16.25V3.75C6.875 3.40482 6.59518 3.125 6.25 3.125C5.90482 3.125 5.625 3.40482 5.625 3.75Z" fill="var(--color-black)" />
                                <path d="M15.8077 6.69162C15.9249 6.80883 16.0842 6.875 16.25 6.875C16.4158 6.875 16.5747 6.80915 16.6919 6.69194C16.8092 6.57473 16.875 6.41576 16.875 6.25C16.875 6.08424 16.8092 5.92527 16.6919 5.80806L14.1919 3.30806C14.0747 3.19085 13.9158 3.125 13.75 3.125C13.5842 3.125 13.4253 3.19085 13.3081 3.30806L10.8081 5.80806C10.6908 5.92527 10.625 6.08424 10.625 6.25C10.625 6.26001 10.6252 6.27002 10.6257 6.28002C10.6332 6.43522 10.6982 6.58207 10.8081 6.69194C10.9253 6.80915 11.0842 6.875 11.25 6.875C11.4158 6.875 11.5747 6.80915 11.6919 6.69194L13.75 4.63388L15.8077 6.69162Z" fill="var(--color-black)" />
                                <path d="M14.375 16.25V3.75C14.375 3.40482 14.0952 3.125 13.75 3.125C13.4048 3.125 13.125 3.40482 13.125 3.75V16.25C13.125 16.5952 13.4048 16.875 13.75 16.875C14.0952 16.875 14.375 16.5952 14.375 16.25Z" fill="var(--color-black)" />
                            </svg>

                        </span>
                    </div>
                    <div className='search'>
                        <input className='f-12' type="search" name="search" id="" placeholder='Search' />
                        {/* <img className='icon-16' src={Search} /> */}
                        <span className='icon-16'>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3501 14.3562C14.2568 14.4481 14.1311 14.4998 14.0001 14.5C13.8673 14.4994 13.7398 14.448 13.6438 14.3562L10.9438 11.65C9.80671 12.6051 8.34474 13.0844 6.86285 12.9878C5.38095 12.8912 3.99355 12.2263 2.99 11.1316C1.98645 10.037 1.44424 8.59717 1.47645 7.11248C1.50867 5.62779 2.11282 4.21286 3.1629 3.16277C4.21298 2.11269 5.62791 1.50855 7.1126 1.47633C8.59729 1.44412 10.0371 1.98633 11.1317 2.98988C12.2264 3.99343 12.8913 5.38083 12.9879 6.86273C13.0845 8.34462 12.6052 9.80659 11.6501 10.9437L14.3501 13.6437C14.3973 13.6903 14.4349 13.7457 14.4605 13.8069C14.4861 13.868 14.4993 13.9337 14.4993 14C14.4993 14.0663 14.4861 14.1319 14.4605 14.1931C14.4349 14.2542 14.3973 14.3097 14.3501 14.3562ZM7.2501 12C8.18956 12 9.10792 11.7214 9.88906 11.1995C10.6702 10.6775 11.279 9.93567 11.6385 9.06772C11.998 8.19977 12.0921 7.24471 11.9088 6.3233C11.7255 5.40189 11.2732 4.55552 10.6089 3.89122C9.94455 3.22692 9.09819 2.77452 8.17678 2.59124C7.25537 2.40797 6.3003 2.50203 5.43235 2.86155C4.5644 3.22106 3.82255 3.82988 3.30062 4.61102C2.77868 5.39215 2.5001 6.31051 2.5001 7.24998C2.50175 8.50925 3.00273 9.71647 3.89317 10.6069C4.78361 11.4973 5.99083 11.9983 7.2501 12Z" fill="var(--color-black)" fill-opacity="0.2" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div>
                    <div className='order-row d-flex f-12 align-items-center'>
                        {/* <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="#989839e" />
            </FormGroup> */}

                        <div className=' col-2 first d-flex'>
                            {/* <Checkbox
                            className='check'
                        // icon={<CheckIcon />}
                        // checkedIcon={<CheckIcon />}
                        /> */}
                            {/* <input type="checkbox" class="checkbox-square" />
                        <span>OrderID</span>  */}
                            <div class="round">
                                <input type="checkbox"  id="checkbox" checked />
                                <label for="checkbox"></label>
                            </div>
                            <span className='ms-3'>Order Id</span>
                        </div>
                        <div className=' col-2 second'>User</div>
                        <div className=' col-2 third'>Project</div>
                        <div className=' col-2 fourth'>Address</div>
                        <div className=' col-2 fifth'>Date</div>
                        <div className=' col-2 sixth'>Status</div>
                    </div>
                    {
                        data[page - 1]?.map((ele,ind) => {
                            return (
                                <div className='order-row d-flex f-12 align-items-center order-details'>
                                    {/* <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="#989839e" />
                    </FormGroup> */}

                                    <div className=' col-2 first d-flex' onClick={()=> setIndex(ind)}> 
                                     {/* <Checkbox
                                        className='check'
                                    // icon={<CheckIcon />}
                                    // checkedIcon={<CheckIcon />}
                                    /> */}
                                    <div class="round">
                                <input 
                                type="checkbox"  
                                id={`checkbox${ind+1}`}
                                checked={ind == index}
                                 />
                                <label for={`checkbox${ind+1}`}></label>
                            </div>
                                        <span className='ms-3'>{ele?.orderId}</span> 
                                        </div>
                                    <div className=' col-2 second d-flex '>
                                        {console.log(ele?.image)}
                                        <img className='icon-20 me-1' src={ele?.image == "Male" ? Male : Female} />
                                        <span>{ele?.name}</span>
                                    </div>
                                    <div className=' col-2 third'>{ele?.project}</div>
                                    <div className=' col-2 fourth'>{ele?.address}</div>
                                    <div className=' col-2 fifth d-flex'>
                                        <img className='icon-12' src={Calendar} />
                                        <span>{ele?.date}</span>
                                    </div>
                                    <div className=' col-2 sixth'>
                                        {console.log(ele?.status.toLowerCase(), ele?.status.toLowerCase() == 'in progress', colors[ele?.status.toLowerCase() == 'in progress' ? 'other' : ele?.status.toLowerCase()])}
                                        <ul className='p-0 mb-0 sale-list' ><li style={{ "--bullet-color": colors[ele?.status.toLowerCase() == 'in progress' ? 'other' : ele?.status.toLowerCase()], color: colors[ele?.status.toLowerCase() == 'in progress' ? 'other' : ele?.status.toLowerCase()] }}>{ele?.status}</li></ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='d-flex justify-content-end f-12'>
                        <Stack spacing={2}>
                            <Pagination count={5} shape="rounded" page={page} onChange={handleChange} />
                        </Stack>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Orderlist
