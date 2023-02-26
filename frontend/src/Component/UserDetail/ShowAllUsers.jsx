import { Td, Tr } from "@chakra-ui/react"






export const ShowAllUser=(props)=>{
      
    const {name,email,gender,location,phone,dob,login}=props
    // console.log(props)
    return(
        <> 
             <Tr>
                <Td>{name.first}</Td>
                <Td>{login.username}</Td>
                <Td>{email}</Td>
                <Td>{gender}</Td>
                <Td>{dob.age}</Td>
                <Td>{location.city}</Td>
                <Td>{location.state}</Td>
                <Td>{location.country}</Td>
                <Td>{phone}</Td>
                
             </Tr>

           
        </>
    )
}