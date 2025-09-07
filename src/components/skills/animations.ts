import { keyframes } from "@mui/system";

export const wrongDropFlash = keyframes`
  0% {
    transform: scale(1);
    border-color: rgba(255, 255, 255, 0.2);
  }
  25% {
    transform: scale(1.1);
    border-color: #ef4444;
  }
  50% {
    transform: scale(1.05);
    border-color: #ef4444;
  }
  75% {
    transform: scale(1.1);
    border-color: #ef4444;
  }
  100% {
    transform: scale(1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const celebrate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;