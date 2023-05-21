import React, {
  ReactNode,
  Children,
  isValidElement,
  ReactElement,
} from "react";
import { OnBoardingDataProps } from "./type";

export interface ControlledOnboardingFlowProps {
  children: ReactNode;
  onFinish: () => void;
  currentIndex: number;
  onNext: (data: OnBoardingDataProps) => void;
}

export default function ControlledOnboardingFlow({
  children,
  onFinish,
  currentIndex,
  onNext,
}: ControlledOnboardingFlowProps) {
  /*
      to array is used to cover us from the case when children is not an array
    */

  const childrenArray = Children.toArray(children);

  const currentChild = childrenArray[currentIndex];

  const goToNext = (stepData: OnBoardingDataProps) => {
    onNext(stepData);

    if (currentIndex + 1 === childrenArray.length) {
      onFinish();
    }
  };

  /*
  
    we using the as "ReactElement<any>" to tell typescript the typeof the props that we are passing to the cloneElement
    */

  if (isValidElement(currentChild)) {
    return React.cloneElement(currentChild as ReactElement<any>, { goToNext });
  }

  return <>{currentChild}</>;
}
