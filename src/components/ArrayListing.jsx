import React from 'react'
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';

const ArrayListing = () => {
    // const employees = ["farhan","ALi","Ayub","Abdullah"]
    //     employees.map((emp)=>{
    //         console.log('my name is ',emp);
        // })
    // key value pairs
    const employees = [
        { name: "Farhan", email: "farhan@gmail.com", contact: "12345" },
        { name: "Ayub", email: "ayub@gmail.com", contact: "12346" },
        { name: "Abdullah", email: "abdullah@gmail.com", contact: "12347" },
        { name: "Ali", email: "ali@gmail.com", contact: "12348" },
        { name: "Sara", email: "sara@gmail.com", contact: "12349" },
        { name: "Zara", email: "zara@gmail.com", contact: "12350" },
        { name: "Ahmad", email: "ahmad@gmail.com", contact: "12351" },
        { name: "Ayesha", email: "ayesha@gmail.com", contact: "12352" },
        { name: "Bilal", email: "bilal@gmail.com", contact: "12353" },
        { name: "Hina", email: "hina@gmail.com", contact: "12354" },
        { name: "Usman", email: "usman@gmail.com", contact: "12355" },
        { name: "Nadia", email: "nadia@gmail.com", contact: "12356" },
        { name: "Saad", email: "saad@gmail.com", contact: "12357" },
        { name: "Rabia", email: "rabia@gmail.com", contact: "12358" },
        { name: "Imran", email: "imran@gmail.com", contact: "12359" },
        { name: "Fahad", email: "fahad@gmail.com", contact: "12360" },
        { name: "Anum", email: "anum@gmail.com", contact: "12361" },
        { name: "Kamran", email: "kamran@gmail.com", contact: "12362" },
        { name: "Kiran", email: "kiran@gmail.com", contact: "12363" },
        { name: "Junaid", email: "junaid@gmail.com", contact: "12364" },
        { name: "Farhan", email: "farhan@gmail.com", contact: "12345" },
        { name: "Ayub", email: "ayub@gmail.com", contact: "12346" },
        { name: "Abdullah", email: "abdullah@gmail.com", contact: "12347" },
        { name: "Ali", email: "ali@gmail.com", contact: "12348" },
        { name: "Sara", email: "sara@gmail.com", contact: "12349" },
        { name: "Zara", email: "zara@gmail.com", contact: "12350" },
        { name: "Ahmad", email: "ahmad@gmail.com", contact: "12351" },
        { name: "Ayesha", email: "ayesha@gmail.com", contact: "12352" },
        { name: "Bilal", email: "bilal@gmail.com", contact: "12353" },
        { name: "Hina", email: "hina@gmail.com", contact: "12354" },
        { name: "Usman", email: "usman@gmail.com", contact: "12355" },
        { name: "Nadia", email: "nadia@gmail.com", contact: "12356" },
        { name: "Saad", email: "saad@gmail.com", contact: "12357" },
        { name: "Rabia", email: "rabia@gmail.com", contact: "12358" },
        { name: "Imran", email: "imran@gmail.com", contact: "12359" },
        { name: "Fahad", email: "fahad@gmail.com", contact: "12360" },
        { name: "Anum", email: "anum@gmail.com", contact: "12361" },
        { name: "Kamran", email: "kamran@gmail.com", contact: "12362" },
        { name: "Kiran", email: "kiran@gmail.com", contact: "12363" },
        { name: "Farhan", email: "farhan@gmail.com", contact: "12345" },
        { name: "Ayub", email: "ayub@gmail.com", contact: "12346" },
        { name: "Abdullah", email: "abdullah@gmail.com", contact: "12347" },
        { name: "Ali", email: "ali@gmail.com", contact: "12348" },
        { name: "Sara", email: "sara@gmail.com", contact: "12349" },
        { name: "Zara", email: "zara@gmail.com", contact: "12350" },
        { name: "Ahmad", email: "ahmad@gmail.com", contact: "12351" },
        { name: "Ayesha", email: "ayesha@gmail.com", contact: "12352" },
        { name: "Bilal", email: "bilal@gmail.com", contact: "12353" },
        { name: "Hina", email: "hina@gmail.com", contact: "12354" },
        { name: "Usman", email: "usman@gmail.com", contact: "12355" },
        { name: "Nadia", email: "nadia@gmail.com", contact: "12356" },
        { name: "Saad", email: "saad@gmail.com", contact: "12357" },
        { name: "Rabia", email: "rabia@gmail.com", contact: "12358" },
        { name: "Imran", email: "imran@gmail.com", contact: "12359" },
        { name: "Fahad", email: "fahad@gmail.com", contact: "12360" },
        { name: "Anum", email: "anum@gmail.com", contact: "12361" },
        { name: "Kamran", email: "kamran@gmail.com", contact: "12362" },
        { name: "Kiran", email: "kiran@gmail.com", contact: "12363" }
    ];
    
    return (
    <>
        <h1>Array Listing............!</h1>
                {/* <Button variant="primary">Open Table</Button> */}
        <Table striped hover bordered> 
            <tbody >
                {
                    employees.map((emp,index)=>{
                        return(
                        <tr key={index}>
                            <td >{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contact}</td>
                        </tr>
                );
                    })
                }
            </tbody>
        </Table>
    </>
  )
}

export default ArrayListing
