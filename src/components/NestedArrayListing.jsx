import React from 'react'
import { Table } from 'react-bootstrap'

const NestedArrayListing = () => {
    const CompanyEmp = [
        { name: 'Ali', email: 'Ali@gmail.com', Address: [
            { houseNo: '123', city: 'Karachi', country: 'Pakistan' },
            { houseNo: '121', city: 'Delhi', country: 'India' },
            { houseNo: '122', city: 'Toronto', country: 'Canada' }
        ]},
        { name: 'Ayub', email: 'Ayub@gmail.com', Address: [
            { houseNo: '124', city: 'Lahore', country: 'Pakistan' },
            { houseNo: '122', city: 'Mumbai', country: 'India' },
            { houseNo: '121', city: 'Vancouver', country: 'Canada' }
        ]},
        { name: 'Abdullah', email: 'Abdullah@gmail.com', Address: [
            { houseNo: '125', city: 'Islamabad', country: 'Pakistan' },
            { houseNo: '123', city: 'Chennai', country: 'India' },
            { houseNo: '120', city: 'Calgary', country: 'Canada' }
        ]},
        { name: 'Ahmed', email: 'Ahmed@gmail.com', Address: [
            { houseNo: '126', city: 'Quetta', country: 'Pakistan' },
            { houseNo: '120', city: 'Bangalore', country: 'India' },
            { houseNo: '119', city: 'Montreal', country: 'Canada' }
        ]},
        { name: 'Sarah', email: 'Sarah@gmail.com', Address: [
            { houseNo: '127', city: 'Peshawar', country: 'Pakistan' },
            { houseNo: '118', city: 'Hyderabad', country: 'India' },
            { houseNo: '118', city: 'Ottawa', country: 'Canada' }
        ]},
        { name: 'Usman', email: 'Usman@gmail.com', Address: [
            { houseNo: '128', city: 'Faisalabad', country: 'Pakistan' },
            { houseNo: '117', city: 'Ahmedabad', country: 'India' },
            { houseNo: '117', city: 'Winnipeg', country: 'Canada' }
        ]},
        { name: 'Aliya', email: 'Aliya@gmail.com', Address: [
            { houseNo: '129', city: 'Multan', country: 'Pakistan' },
            { houseNo: '116', city: 'Lucknow', country: 'India' },
            { houseNo: '116', city: 'Halifax', country: 'Canada' }
        ]},
        { name: 'Zara', email: 'Zara@gmail.com', Address: [
            { houseNo: '130', city: 'Rawalpindi', country: 'Pakistan' },
            { houseNo: '115', city: 'Jaipur', country: 'India' },
            { houseNo: '115', city: 'Edmonton', country: 'Canada' }
        ]},
        { name: 'Hassan', email: 'Hassan@gmail.com', Address: [
            { houseNo: '131', city: 'Sialkot', country: 'Pakistan' },
            { houseNo: '114', city: 'Kolkata', country: 'India' },
            { houseNo: '114', city: 'Victoria', country: 'Canada' }
        ]},
        { name: 'Tariq', email: 'Tariq@gmail.com', Address: [
            { houseNo: '132', city: 'Gujranwala', country: 'Pakistan' },
            { houseNo: '113', city: 'Patna', country: 'India' },
            { houseNo: '113', city: 'Regina', country: 'Canada' }
        ]},
        { name: 'Kiran', email: 'Kiran@gmail.com', Address: [
            { houseNo: '133', city: 'Hyderabad', country: 'Pakistan' },
            { houseNo: '112', city: 'Surat', country: 'India' },
            { houseNo: '112', city: 'Saskatoon', country: 'Canada' }
        ]},
        { name: 'Nida', email: 'Nida@gmail.com', Address: [
            { houseNo: '134', city: 'Abbottabad', country: 'Pakistan' },
            { houseNo: '111', city: 'Pune', country: 'India' },
            { houseNo: '111', city: 'London', country: 'Canada' }
        ]},
        { name: 'Saad', email: 'Saad@gmail.com', Address: [
            { houseNo: '135', city: 'Mardan', country: 'Pakistan' },
            { houseNo: '110', city: 'Coimbatore', country: 'India' },
            { houseNo: '110', city: 'Quebec City', country: 'Canada' }
        ]},
        { name: 'Bilal', email: 'Bilal@gmail.com', Address: [
            { houseNo: '136', city: 'Swat', country: 'Pakistan' },
            { houseNo: '109', city: 'Nagpur', country: 'India' },
            { houseNo: '109', city: 'Kingston', country: 'Canada' }
        ]},
        { name: 'Ayesha', email: 'Ayesha@gmail.com', Address: [
            { houseNo: '137', city: 'Gilgit', country: 'Pakistan' },
            { houseNo: '108', city: 'Kanpur', country: 'India' },
            { houseNo: '108', city: 'Charlottetown', country: 'Canada' }
        ]},
        { name: 'Hina', email: 'Hina@gmail.com', Address: [
            { houseNo: '138', city: 'Muzaffarabad', country: 'Pakistan' },
            { houseNo: '107', city: 'Indore', country: 'India' },
            { houseNo: '107', city: 'Fredericton', country: 'Canada' }
        ]},
        { name: 'Fahad', email: 'Fahad@gmail.com', Address: [
            { houseNo: '139', city: 'Skardu', country: 'Pakistan' },
            { houseNo: '106', city: 'Thiruvananthapuram', country: 'India' },
            { houseNo: '106', city: 'Yellowknife', country: 'Canada' }
        ]},
        { name: 'Raza', email: 'Raza@gmail.com', Address: [
            { houseNo: '140', city: 'Chitral', country: 'Pakistan' },
            { houseNo: '105', city: 'Visakhapatnam', country: 'India' },
            { houseNo: '105', city: 'Iqaluit', country: 'Canada' }
        ]},
        { name: 'Mehwish', email: 'Mehwish@gmail.com', Address: [
            { houseNo: '141', city: 'Sukkur', country: 'Pakistan' },
            { houseNo: '104', city: 'Vijayawada', country: 'India' },
            { houseNo: '104', city: 'Whitehorse', country: 'Canada' }
        ]},
        { name: 'Shahzad', email: 'Shahzad@gmail.com', Address: [
            { houseNo: '142', city: 'Nawabshah', country: 'Pakistan' },
            { houseNo: '103', city: 'Vadodara', country: 'India' },
            { houseNo: '103', city: 'Gatineau', country: 'Canada' }
        ]}
    ];
  return (
    <>
        <h1>Nestes Array Listing.....!!!!</h1>
        <Table variant='dark' striped bordered hover>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {
                    CompanyEmp.map((emp,index)=>{
                        return(
                        <tr key={index}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>
                                <Table variant='dark' striped bordered hover>
                                    <tbody>
                                        <tr>
                                        <td>House No</td>
                                        <td>City Name</td>
                                        <td>Address</td>
                                        </tr>
                                {
                                emp.Address.map((data,adressIndex)=>(
                                    <tr key={adressIndex}>
                                        <td>{data.houseNo}</td>
                                        <td>{data.city}</td>
                                        <td>{data.country}</td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                        </Table>
                        </td>
                        </tr>
                        );
                    })
                }
            </tbody>
        </Table>

    </>
  )
}

export default NestedArrayListing
