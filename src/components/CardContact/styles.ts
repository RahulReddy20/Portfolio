import styled from "styled-components";

export const CardContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .ellipse {
    @media (max-width: 1200px) {
      display: none;
    }

    position: absolute;
    left: 2%;
    top: 5%;
    width: 10rem;

    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export const CardContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

  @media(min-width: 1200px) {
    flex-direction: row;
  }

  .description {
    max-width: 40rem;
    text-align: start;

    h2 {
      color: ${(props) => props.theme.secondColor};
      font-size: 1.5rem;
      margin-bottom: 1rem;

      @media(min-width: 768px) {
        font-size: 2rem;  
      }

      @media(min-width: 994px) {
        font-size: 2.5rem;  
      }
    }

    p {
      color: ${(props) => props.theme.gray};
      max-width: 35rem;
    }
  }

  .contact {
    img {
      width: 100%;
      }
    }
  }

  

`;
