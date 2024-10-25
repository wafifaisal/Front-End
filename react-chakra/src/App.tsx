import {  Flex } from "@chakra-ui/react"
import DemoDrawer from "./components/myComp/drawer"
import Avatar from "./components/myComp/avatar"
function App() {
  return(
    <div>
      <Flex bgColor={'teal'}
      h={"60px"}
      justifyContent={"space-between"} 
      alignItems={"center"}
      color={"white"}
      marginTop={"60px"}
      _hover={{bgColor:"pink"}}
      px={"20px"}
      ><DemoDrawer/>
      <Avatar/>
      </Flex>
    </div>
  )
}

export default App
