import React, {
  ReactNode,
  useState,
  Children,
  isValidElement,
  ReactElement,
} from "react";

export interface UncontrolledOnboardingFlowProps {
  children: ReactNode;
  onFinish: (data: Object) => void;
}

export default function UncontrolledOnboardingFlow({
  children,
  onFinish,
}: UncontrolledOnboardingFlowProps) {
  const [onboardingData, setOnboardingData] = useState({});
  const [currenctIndex, setCurrentIndex] = useState(0);

  /*
    to array is used to cover us from the case when children is not an array
  */
  const currentChild = Children.toArray(children)[currenctIndex];

  const goToNext = (stepData: Object) => {
    const nextIndex = currenctIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updatedData);

    if (nextIndex < Children.count(children)) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  /*

  we using the as "ReactElement<any>" to tell typescript the typeof the props that we are passing to the cloneElement
  */

  if (isValidElement(currentChild)) {
    return React.cloneElement(currentChild as ReactElement<any>, { goToNext });
  }

  return <>{currentChild}</>;
}
