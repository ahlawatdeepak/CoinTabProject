import { Button, Card, CardBody,} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteFetchUsers, FetchUsers, PostAllUsers } from '../../Store/store.action'
import { useToast } from '@chakra-ui/react'


export const Home=()=>{
    const {loading,errorhandle,deletedAll}=useSelector(store=>store.users)
  const dispatch=useDispatch()
  const toast = useToast()

     const handleFetchUser=()=>{
          if(loading){
            toast({
                title: 'Previous Data is Fetching ',
                description:"Wait and try again",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            
            return
          }
          dispatch(PostAllUsers())
     }


     const handleDeleteUsers=()=>{

        if(deletedAll==true ){
            toast({
                title: 'Data is Deleted ',
                description:"Wait and try again",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            
            return
          }
        dispatch(DeleteFetchUsers())
     }


     console.log(loading,errorhandle,deletedAll)

    return(
        <> 
           <Card w="80%" m="auto" >
                <CardBody >
                      <Button onClick={handleFetchUser} mt="30px"  colorScheme="purple">Fetch User</Button>
                      <Button onClick={handleDeleteUsers} m="auto" mt="30px"  display="block"  colorScheme="purple">Delete Users</Button>
                     <Link to="/details"> <Button mt="30px" mb="30px"  colorScheme="purple">User Details</Button></Link>
                </CardBody>
            </Card>
          
        </>
    )
}