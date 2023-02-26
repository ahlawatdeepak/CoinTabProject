import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons"
import { Button, HStack,Icon } from "@chakra-ui/react"
import { useState } from "react"

export const Pagination=(props)=>{
   
   const {page,totalPage,handlePage}=props
    
    
    
    // console.log(props)
    return(
        <>
            
            <HStack   w={[300, 400, 500]} m="auto" mt="20px" h="70px" alignItems="center">
                  
                    <Button isDisabled={page==1} onClick={()=>handlePage("s")}><Icon as={ArrowLeftIcon} /></Button>
                      
                    {[...Array(totalPage)].map((el,i)=>{
                        
                        return (
                                <Button key={i} colorScheme={page==i+1 ? "blue" : "gray"} onClick={()=>handlePage(i+1)}>{i+1}</Button>
                        )
                    })}

                    <Button isDisabled={page==(totalPage)} onClick={()=>handlePage("a")}><Icon  as={ArrowRightIcon} /></Button>
            
            </HStack>
        </>
    )
}