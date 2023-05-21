import { Children, useState } from "react";
import "./App.css";
import ControlledForm from "./ControlledForm";
import UncontrolledModal from "./UncontrolledModal";
import UncontrolledForms from "./UncontrolledForms";
import ControlledModal from "./ControlledModal";
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./ControlledOnboardingFlow";
import { OnBoardingDataProps } from "./type";

export type PartialOnBoardingDataProps = Partial<OnBoardingDataProps>;

const StepOne = ({
  goToNext,
}: {
  goToNext?: (data: PartialOnBoardingDataProps) => void;
}) => (
  <>
    <h1>Step One</h1>
    <button
      onClick={() =>
        goToNext &&
        goToNext({
          name: "John Doe",
        })
      }
    >
      Next
    </button>
  </>
);
const StepTwo = ({
  goToNext,
}: {
  goToNext?: (data: PartialOnBoardingDataProps) => void;
}) => (
  <>
    <h1>Step Two</h1>
    <button
      onClick={() =>
        goToNext &&
        goToNext({
          age: 73,
        })
      }
    >
      Next
    </button>
  </>
);
const StepThree = ({
  goToNext,
}: {
  goToNext?: (data: PartialOnBoardingDataProps) => void;
}) => (
  <>
    <h1>Step Three</h1>
    <p>Congratulations! You qualify for our senior discounts</p>
    <button
      onClick={() =>
        goToNext &&
        goToNext({
          hairColor: "brown",
        })
      }
    >
      Next
    </button>
  </>
);

const StepFour = ({ goToNext }: { goToNext?: (data: Object) => void }) => (
  <>
    <h1>Step Four</h1>
    <button
      onClick={() =>
        goToNext &&
        goToNext({
          hairColor: "brown",
        })
      }
    >
      Next
    </button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState<OnBoardingDataProps>();
  const [currenctIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData: OnBoardingDataProps) => {
    console.log("step data", stepData);
    setOnboardingData((prevState) => ({
      ...prevState,
      ...stepData,
    }));

    setCurrentIndex((prevState) => prevState + 1);
  };

  // const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <div>
      {/* <UncontrolledForms />
      <ControlledForm /> */}

      {/*
  Since the modal is uncontrolled components, the parent component cannot control the modal
  */}
      {/* <UncontrolledModal> </UncontrolledModal>

      <ControlledModal
        shouldShow={shouldShowModal}
        onClose={() => setShouldShowModal(false)}
      >
        <h1>Hello</h1>
      </ControlledModal>

      <button onClick={() => setShouldShowModal(true)}>
        {shouldShowModal ? "Hide Controlled Modal" : "Show Controlled Modal"}
      </button> */}

      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Finished!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}

      {/*
        the benefit of using the controlled  onboarding flow is more flexibility over what the onboarding flow looks like and any changes that we want to make to it 
        */}

      <ControlledOnboardingFlow
        currentIndex={currenctIndex}
        onNext={onNext}
        onFinish={() => {
          console.log(onboardingData);
          alert("Finished!");
        }}
      >
        <StepOne />
        <StepTwo />
        {onboardingData && onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </div>
  );
}

export default App;
