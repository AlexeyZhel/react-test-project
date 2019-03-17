export interface  IFloatingImageProps {
  className?: string
  float?: boolean
  src: any
  width: number
  height: number
}

export interface IFloatingImageState {
  offsetX: number;
  offsetY: number;
  isHovered: boolean;
}
