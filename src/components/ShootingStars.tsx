import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const twinkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: ${twinkle} 4s infinite ease-in-out;
  z-index: 0;
`;

export const ShootingStars = () => {
  return (
    <Wrapper>
      {Array(200)
        .fill(1)
        .map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 10;

          return (
            <Star
              key={i}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
    </Wrapper>
  );
};
