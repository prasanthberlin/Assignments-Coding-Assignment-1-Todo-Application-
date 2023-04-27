const Notification = (props) => {
  //  Write your code here.
  const {className, iconUrl, message} = props;
  return(
        <div className =`d-flex ${className}`>
            <img src ={iconUrl} />
            <p>{message}</p>
        </div>)
};

const element = (
  //  Write your code here.
  <div>
    <div className="sub-container">
      <h1>Notifications</h1>
      <div>
          <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger Message"
      />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
