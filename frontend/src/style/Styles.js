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

export const TransparentButton = styled.button`
    border: none;
    background-color: transparent;
`

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 60%;
  height: 80%;
  padding: 35px 15px 15px 15px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: whitesmoke;
  border: none;
  border-radius: 8px;
`

