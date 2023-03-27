import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions =  {
  pos : "absolute",
  left : "50%",
  top : "50%",
  transform : "translate(-50%)",
  textTransform : "uppercase",
  p : "6",
  size : "4xl"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.lg"} minH={"100vh"}  p = "16">
          <Heading 
            textTransform={"uppercase"} 
            py = "2"  
            w = {"fit-content"} 
            borderBottom = {"2px solid"} 
            m = {"auto"}
          >
            Services
          </Heading>

        <Stack 
            h = "full" 
            p = "4" 
            alignItems={"center"} 
            direction = {["column","row"]}
        >

            <Image src = {img5} h = {["40","400"]} filter = {"hue-rotate(-130deg)"} />
          
            <Text 
              letterSpacing={"widest"} 
              lineHeight = {"190%"} 
              p = {["4","16"]} 
              textAlign = {"center"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo 
              reprehenderit eaque voluptatum tempore blanditiis. Dolorum assumenda doloremque 
              illo eaque dolor illum officia alias earum sequi, eum tempore necessitatibus, 
              quaerat maiores ratione libero at, voluptatum perferendis consequatur. Cupiditate 
              quisquam debitis consequatur. Aspernatur harum vitae ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore, quo voluptatum iusto aliquam molestiae assumenda 
              quia ratione omnis neque. 
            </Text>
          
          </Stack>
      </Container>

    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >


    <Box w = "full" h = {"100vh"}>
      <Image src = {img1} h = "full" w={"full"} objectFit = "cover"/>
      <Heading bgColor={"blackAlpha.600"} color = {"white"} {... headingOptions}>Watch The Future </Heading>
    </Box>

    <Box w = "full" h = {"100vh"}>
      <Image src = {img2} h = "full" w={"full"} objectFit = "cover"/>
      <Heading bgColor={"whiteAlpha.600"} color = {"black"}  {... headingOptions} >Future Is Gaming</Heading>
    </Box>


    <Box w = "full" h = {"100vh"}>
      <Image src = {img3} h = "full" w={"full"} objectFit = "cover"/>
      <Heading bgColor={"whiteAlpha.600"} color = {"black"}  {... headingOptions} >Game On Fire</Heading>
    </Box>

    <Box w = "full" h = {"100vh"}>
      <Image src = {img4}h = "full" w={"full"} objectFit = "cover"/>
      <Heading bgColor={"whiteAlpha.600"} color = {"black"}  {... headingOptions} >Night Life Is Cool</Heading>
    </Box>

  </Carousel>
);

export default Home;