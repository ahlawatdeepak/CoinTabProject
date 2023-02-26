import { Box, Button, Card, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { FetchUsers } from "../../Store/store.action"
import { Pagination } from "../Pagination/Pagination"
import { ShowAllUser } from "./ShowAllUsers"
import { Link } from 'react-router-dom'


export const UserDetails=()=>{
    const {UserData,totalPage}=useSelector(store=>store.users)
    const [filter,setFilter]=useState({firstname:"",gender:"",country:""})
    const dispatch=useDispatch()
    const [page,setPage]=useState(1)
    const [sort,setSort]=useState("")
    

//  ONload the data will fetch and show the Dom
       useEffect(()=>{
               dispatch(FetchUsers({...filter,page:page,sort:sort})) 
       },[page,sort])
        
      
       

      
   
        // FILTER BY NAME , GENDER AND COUNTRY NAME  ------------------------------

        const handleFilter=(e)=>{
                const {name,value}=e.target
                setFilter({
                    ...filter,
                    [name]:value
                })
        }

        // Apply all the filters=-----------------------------------------------------
        const SubmitFilterQuery=()=>{
            dispatch(FetchUsers(filter))
            // console.log(filter)
        }
 

 //  Handle Pagination -------------------------------------
    const handlePage=(e)=>{
        if(e=="a"){
            
            setPage(page=>page+1) 
        }
        else if(e=="s"){
            setPage(page=>page-1)
            
        }
        else{
            setPage(e)
        }     
    }
  
    return(
        <>  
               <Link to="/"> <Button mt="30px" colorScheme="purple">Go to Home Page</Button></Link>

          <Box  alignItems="center"  textAlign="center"  h="100px" mt={["20px","30px","30px"]} m="auto"  w={{ base: '80%', sm: '80%', md: '80%' }} display={{ base:"flex",md:"flex",sm:"block"}} justifyContent="space-evenly">
                 
              
                <Heading size="lg">Apply Filters</Heading>
                
                <Stack   m="auto" mr={{base:"0%",md:"0%",sm:"auto"}} mt="3%" w={{ base: '20%', sm: '40%', md: '30%' }}  >
                    <Select name="sort" onChange={(e)=>setSort(e.target.value)} placeholder='Sort by age' variant='outline'>
                        <option value='asc'>Low to High</option>
                        <option value='desc'>High to Low</option>
                    </Select>
                </Stack>
            </Box>



            {/* Filter Boxes ------------------------------------------------ */}

       <HStack m="auto" spacing='0px' w={{sm: '90%',md: '90%',lg: '80%',xl: '80%',}} borderRadius="6px" mt="30px" h="130px" display={{base:"flex" , md:"flex"}} >
               
                <Card borderRadius="0px" h="100%"  w="20%">
                    <FormControl m="auto" >
                        <FormLabel ml="8%" >Name</FormLabel>
                        <Input name="firstname" onChange={handleFilter}   w="80%" ml="5%" type='text' />
                    </FormControl>
                </Card>

                <Card  borderRadius="0px" h="100%"  w="20%">
                    <FormControl m="auto" >
                        <FormLabel  ml="8%">Gender</FormLabel>
                        <Select name="gender" onChange={handleFilter}   w="80%" ml="5%" placeholder='Select Gender'>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                    </Select>
                    </FormControl>
                   
                </Card>

                <Card  borderRadius="0px" h="100%"  w="20%">
                     
                <FormControl m="auto"  >
                <FormControl m="auto" >
                        <FormLabel ml="8%" >Country Name</FormLabel>
                        <Input name="country" onChange={handleFilter}   w="80%" ml="5%" type='text' />
                    </FormControl>
                </FormControl>
                    
                </Card>



               

                <Card  borderRadius="0px" h="100%" w="20%">
                     
                     <Button onClick={SubmitFilterQuery}  m="auto" size='lg' colorScheme="messenger">Search</Button>
                   
                </Card>
       </HStack>
  
    

        
        {/* Table--------------------------------------------------- */}

             <TableContainer w="95%" m="auto"  mt="40px">
                <Table variant='striped' colorScheme='teal'> 
                  <TableCaption> User Details </TableCaption>  
                  <Thead>
                    <Tr>
                        <Th> Name</Th>
                        <Th>Username</Th>
                        <Th>Email</Th>
                        <Th>Gender</Th>
                        <Th>Age</Th>
                        <Th>City</Th>
                        <Th>State</Th>
                        <Th>Country</Th>
                        <Th>Phone</Th>

                    </Tr>
                </Thead>
                 
                 <Tbody>
                    {UserData && UserData.map((el,i)=> <ShowAllUser key={i}  {...el}/> ) }
                 </Tbody>

                </Table>
             </TableContainer>



         {/* Pagination ------------------------------------------------------- */}
           <Pagination page={page} totalPage={totalPage} handlePage={handlePage}/>
         
        </>
    )
}