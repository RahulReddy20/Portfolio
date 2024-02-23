import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SkillsContent = styled.div`
  width: 12rem;
  height: 10rem;

  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.border};

  h4 {
    z-index: 1;
    text-align: center;
  }

  img {
    z-index: 1;
    object-fit: contain;
  }

  .border {
    &::before {
      content: "";
      position: absolute;
      width: 5rem;
      height: 17rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: barra 6s linear 0s infinite normal none running;
      border-radius: 10px;

      @keyframes barra {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }

    ::after {
      content: "";
      position: absolute;
      inset: 5px;
      background: ${(props) => props.theme.backgroundAlt};
      border-radius: 20px;
    }
  }
`;

export const Vector = styled.div`
  position: relative;
  z-index: -10;
  width: 90vw;
  top: -20vw;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (min-width: 468px) {
    top: 1vw;
  }

  .js {
    position: absolute;
    right: 0vw;
  }

  .python {
    position: absolute;
    left: 0vw;
  }
`;

export const Cubo = styled.div`
  position: relative;
  padding-bottom: 5rem;

  -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
  animation: icon-move-people 5s ease 2s infinite alternate;

  @keyframes icon-move-people {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(-100%, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(60px, 0, 0);
      transform: translate3d(-70px, 0, 0);
    }
  }

  .stage-cube-cont {
    position: absolute;

    @media (min-width: 768px) {
      left: 3rem;
    }
  }

  .cubespinner {
    animation: spincube 13s ease-in-out infinite;
    transform-style: preserve-3d;
    transform-origin: 50px 50px 0;
    margin-left: calc(50% - 50px);

    &:hover {
      animation-play-state: paused;
    }

    img {
      width: 4rem;
    }

    div {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 2px solid #1e1e25;
      background: rgba(1, 1, 1, 0.9);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .face1 {
      transform: translateZ(50px);
    }

    .face2 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    }

    .face3 {
      transform: rotateY(90deg) translateZ(50px);
      img {
        transform: rotate(-90deg);
      }
    }

    .face4 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    }

    .face5 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    }

    .face6 {
      transform: rotateX(-90deg) translateZ(50px);
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateX(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`;
