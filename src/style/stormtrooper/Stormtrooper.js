import './stormtrooper.scss';

const Stormtrooper = () => {
  return (
    <div className="stormtrooper-container h-full w-full z-0 relative">
      <div className="stormtrooper-head h-48 md:h-64 w-48 md:w-64 absolute z-2 mx-auto left-0 md:left-12 right-0">
        <div className="stormtrooper-tophead inherit">
          <div className="stormtrooper-topLeftHead bg-white inherit top-0 left-4 w-20 h-20 rounded-tl-full"></div>
          <div className="stormtrooper-topRightHead bg-stormtrooperHeadGray inherit top-0 left-24 w-20 h-20 rounded-tr-full"></div>
        </div>
        <div className="stormtrooper-line bg-black inherit w-44 h-4 top-20 left-2"></div>
        <div className="stormtrooper-eyeContainer inherit z-2">
          <div className="stormtrooper-eyeContainerLeft bg-white inherit w-24 h-6 top-24 left-1">
            <div className="stormtrooper-eyeLidLeft bg-stormtrooperHeadGray w-20 h-2 ml-4 rounded-bl-full"></div>
            <div className="stormtrooper-leftEye inherit bg-stormtrooperHeadGray w-16 h-16 left-6 top-1"></div>
          </div>
          <div className="stormtrooper-eyeContainerRight inherit bg-stormtrooperHeadGray w24 h-6 top-24 left-24">
            <div className="stormtrooper-eyeLidRight bg-stormtrooperHeadShadowGray w-20 h-2 mr-4 rounded-br-full"></div>
            <div className="stormtrooper-rightEye bg-stormtrooperHeadShadowGray w-16 h-16 inherit right-6 top-1"></div>
          </div>
        </div>
        <div className="stormtrooper-lowerFace inherit z-1">
          <div className="stormtrooper-leftCheek bg-white w-24 h-24 top-24 inherit rounded-50%"></div>
          <div className="stormtrooper-rightCheek bg-stormtrooperHeadGray w-24 h-24 inherit top-24 left-24"></div>
        </div>
        <div className="stormtrooper-mouth z-3 inherit">
          <div className="stormtrooper-mouthLeft inherit">
            <div className="stormtrooper-triangleLeft bg-stormtrooperHeadGray w-16 h-8 inherit top-36 left-8"></div>
            <div className="stormtrooper-squareLeft bg-stormtrooperHeadGray h-10 w-10 inherit top-40 left-16 rounded-50%"></div>
            <div className="stormtrooper-circleLeft bg-stormtrooperHeadGray w-20 h-16 inherit top-40 left-5 inherit rounded-50%"></div>
          </div>
          <div className="stormtrooper-mouthRight inherit">
            <div className="stormtrooper-triangleRight bg-stormtrooperHeadShadowGray w-16 h-8 inherit top-36 left-24"></div>
            <div className="stormtrooper-squareRight bg-stormtrooperHeadShadowGray inherit w-20 h-16 top-40 left-24 rounded-50%"></div>
            <div className="stormtrooper-circleRight bg-stormtrooperHeadShadowGray inherit w-20 h-16 top-40 left-24 rounded-50%"></div>
          </div>
        </div>
        <div
          className="stormtrooper-circleCenter bg-black w-10 h-10 inherit top-44 rounded-50% z-3"
          style={{ left: '4.75rem', top: '11.trem' }}
        >
          <div className="stormtrooper-leftLine bg-white inherit h-5 w-1 top-3 left-2"></div>
          <div
            className="stormtrooper-centerLine bg-white inherit h-6 w-1 top-2.5"
            style={{ right: '1.15rem' }}
          ></div>
          <div className="stormtrooper-rightLine bg-white inherit w-1 h-5 top-3 right-2"></div>
        </div>
        <div className="stormtrooper-leftCircle bg-black h-5 w-5 inherit top-48 left-10 rounded-50% z-3"></div>
        <div className="stormtrooper-rightCircle bg-black h-5 w-5 inherit top-48 left-32 z-5 rounded-50%"></div>
      </div>
      <div className="stormtrooper-castShadow bg-gradient-to-r from-black to-transparent h-48 w-48 absolute mx-auto right-0 left-20 z-1 rotate-45 top-16"></div>
    </div>
  );
};

export default Stormtrooper;
