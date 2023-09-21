const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps/place/Irvine,+CA/@33.6864158,-118.0852492,11z/data=!3m1!4b1!4m6!3m5!1s0x80dcdd0e689140e3:0xa77ab575604a9a39!8m2!3d33.6845673!4d-117.8265049!16zL20vMGQ3azF6?hl=en&entry=ttu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
