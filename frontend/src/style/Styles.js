import styled from 'styled-components';

export const MainBgContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  //margin-bottom: 10px;
`
export const AnimatedImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out; /* Transition for the animation effect */

  &:hover {
    transform: scale(1.1);
    cursor: pointer /* Scale up the image on hover */
  }
`;

export const Button = styled.button`
  border: none;
  width: 80%;
  border-radius: 25px;
  color: darkgray;
`