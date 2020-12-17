import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  legend {
    font-size: 3.2rem;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    margin-bottom: 2rem;

    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  fieldset {
    border: 0;

    button {
      display: block;
      margin: 2rem auto 0;
      background-color: #3282b8;
      width: 15rem;
      height: 5rem;
      color: #ffffff;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-family: "Poppins", sans-serif;
      transition: 0.5s;

      :hover {
        background-color: #4aadf0;
      }
    }
  }
`;

const animationForm = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animationArrowToBack = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-0.5rem);
  }
`;

export const Form = styled.form`
  border: 0.1rem solid #d3e2e5;
  border-radius: 2rem;
  box-shadow: 0px 3px 27px -13px rgba(255, 250, 255, 1);
  width: 100%;
  max-width: 40rem;
  flex-direction: column;

  padding: 2rem;

  animation: ${animationForm} 1s;

  > svg {
    cursor: pointer;
    display: block;
    margin-left: auto;

    :hover {
      animation: ${animationArrowToBack} 1s infinite;
    }
  }
`;